import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { stripe } from '@/lib/stripe'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { customerEmail, operatorEmail, type BookingEmailData } from '@/lib/emails/booking-confirmation'
import type { Lang } from '@/types/booking'

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM_EMAIL = 'Guey Tours <bookings@gueytours.com>'
const OPERATOR_EMAIL = 'gueycuatritours@gmail.com'

export async function POST(req: NextRequest) {
  const rawBody = await req.text()
  const sig = req.headers.get('stripe-signature')

  if (!sig) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 })
  }

  let event
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err: any) {
    console.error('[webhook] signature verification failed:', err.message)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type !== 'checkout.session.completed') {
    return NextResponse.json({ received: true })
  }

  const session = event.data.object as any
  const bookingId = session.metadata?.booking_id

  if (!bookingId) {
    console.error('[webhook] no booking_id in Stripe session metadata')
    return NextResponse.json({ error: 'No booking_id in metadata' }, { status: 400 })
  }

  // 1. Mark booking as paid
  const { error: updateErr } = await supabaseAdmin
    .from('bookings')
    .update({ paid: true, stripe_session_id: session.id })
    .eq('id', bookingId)

  if (updateErr) {
    console.error('[webhook] failed to mark booking as paid:', updateErr.message)
    return NextResponse.json({ error: 'DB update failed' }, { status: 500 })
  }

  console.log(`[webhook] booking ${bookingId} marked as paid`)

  // 2. Fetch full booking details for the email
  const { data: booking, error: fetchErr } = await supabaseAdmin
    .from('bookings')
    .select(`
      id, booking_date, slot, num_people, principal_name, email, phone, total_price, lang,
      tours ( name, length_hours ),
      booking_vehicles (
        quantity,
        vehicle_models ( name )
      )
    `)
    .eq('id', bookingId)
    .single()

  if (fetchErr || !booking) {
    console.error('[webhook] failed to fetch booking for email:', fetchErr)
    // Don't fail the webhook — payment already succeeded. Just log.
    return NextResponse.json({ received: true, warning: 'email-fetch-failed' })
  }

  // The Supabase join returns tours/vehicle_models as objects (not arrays) on .single()
  const tour: any = booking.tours
  const vehicles = (booking.booking_vehicles ?? []).map((bv: any) => ({
    name: bv.vehicle_models?.name ?? 'Vehicle',
    quantity: bv.quantity,
  }))

  const emailData: BookingEmailData = {
    booking_id: booking.id,
    tour_name: tour?.name ?? 'Tour',
    tour_duration_hours: tour?.length_hours ?? 1,
    date: booking.booking_date,
    slot: booking.slot,
    num_people: booking.num_people,
    vehicles,
    principal_name: booking.principal_name,
    email: booking.email,
    phone: booking.phone,
    total_price: Number(booking.total_price),
    lang: (booking.lang as Lang) ?? 'en',
  }

  // 3. Send customer confirmation
  try {
    const { subject, html } = customerEmail(emailData)
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: booking.email,
      subject,
      html,
    })
    if (result.error) {
      console.error('[webhook] customer email error:', result.error)
    } else {
      console.log(`[webhook] customer email sent to ${booking.email}`)
    }
  } catch (err) {
    console.error('[webhook] customer email threw:', err)
  }

  // 4. Send operator notification
  try {
    const { subject, html } = operatorEmail(emailData)
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: OPERATOR_EMAIL,
      subject,
      html,
      replyTo: booking.email,
    })
    if (result.error) {
      console.error('[webhook] operator email error:', result.error)
    } else {
      console.log(`[webhook] operator email sent to ${OPERATOR_EMAIL}`)
    }
  } catch (err) {
    console.error('[webhook] operator email threw:', err)
  }

  return NextResponse.json({ received: true })
}
