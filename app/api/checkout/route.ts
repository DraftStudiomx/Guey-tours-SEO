import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabaseAdmin } from '@/lib/supabase-admin'
import type { BookingPayload } from '@/types/booking'

export async function POST(req: NextRequest) {
  try {
    const body: BookingPayload = await req.json()
    console.log('[checkout] incoming body:', JSON.stringify(body, null, 2))

    const {
      tour_id, date, slot, num_people, vehicles,
      principal_name, email, phone, total_price, lang,
      accommodation, referral_source,
    } = body

    // Fetch tour
    const { data: tour, error: tErr } = await supabaseAdmin
      .from('tours')
      .select('name, length_hours')
      .eq('id', tour_id)
      .single()

    if (tErr || !tour) {
      console.error('[checkout] tour lookup failed:', tErr)
      return NextResponse.json({ error: 'Tour not found', detail: tErr?.message }, { status: 404 })
    }

    const modelIds = vehicles.map((v) => v.model_id)
    const { data: modelRows, error: mErr } = await supabaseAdmin
      .from('vehicle_models')
      .select('id, name')
      .in('id', modelIds)

    if (mErr) {
      console.error('[checkout] vehicle_models lookup failed:', mErr)
      return NextResponse.json({ error: 'Vehicle lookup failed', detail: mErr.message }, { status: 500 })
    }

    const vehicleDesc = vehicles
      .map((v) => {
        const name = modelRows?.find((r) => r.id === v.model_id)?.name ?? v.model_id
        return `${v.quantity}× ${name}`
      })
      .join(', ')

    const [y, mo, d] = date.split('-')
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const dateFormatted = `${parseInt(d)} ${months[parseInt(mo) - 1]} ${y}`
    const description = `${tour.name} — ${dateFormatted} ${slot} | ${num_people} guests | ${vehicleDesc}`

    // Create pending booking
    const { data: booking, error: bErr } = await supabaseAdmin
      .from('bookings')
      .insert({
        tour_id,
        booking_date: date,
        slot,
        num_people,
        principal_name,
        email,
        phone,
        total_price,
        lang: lang ?? 'en',
        paid: false,
        cancelled: false,
        refunded: false,
        accommodation: accommodation || null,
        referral_source: referral_source || null,
      })
      .select()
      .single()

    if (bErr || !booking) {
      console.error('[checkout] booking insert failed:', bErr)
      return NextResponse.json({ error: 'Failed to create booking', detail: bErr?.message }, { status: 500 })
    }

    const bvRows = vehicles.map((v) => ({
      booking_id: booking.id,
      model_id: v.model_id,
      quantity: v.quantity,
      assigned_vehicle_id: null,
    }))

    const { error: bvErr } = await supabaseAdmin.from('booking_vehicles').insert(bvRows)
    if (bvErr) {
      console.error('[checkout] booking_vehicles insert failed:', bvErr)
      await supabaseAdmin.from('bookings').delete().eq('id', booking.id)
      return NextResponse.json({ error: 'Failed to attach vehicles', detail: bvErr.message }, { status: 500 })
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('[checkout] STRIPE_SECRET_KEY is missing from env')
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 })
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [{
        price_data: {
          currency: 'mxn',
          unit_amount: Math.round(total_price * 100),
          product_data: { name: `Guey Tours — ${tour.name}`, description },
        },
        quantity: 1,
      }],
      mode: 'payment',
      metadata: { booking_id: booking.id },
      success_url: `${baseUrl}/book/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/book?cancelled=1`,
    })

    console.log('[checkout] stripe session created:', session.id)
    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    console.error('[checkout] UNCAUGHT ERROR:', err)
    console.error('[checkout] error message:', err?.message)
    console.error('[checkout] error stack:', err?.stack)
    return NextResponse.json(
      { error: 'Checkout failed', detail: err?.message ?? 'unknown' },
      { status: 500 }
    )
  }
}
