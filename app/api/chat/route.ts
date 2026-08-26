import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { client } from '@/lib/sanity'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

// GROQ — pull rentable vehicles with their public-facing rates and key info
const rentalVehiclesQuery = `
  *[_type == "vehicleRentalDetail" && defined(slug.current)] {
    "name_en": vehicle->name_en,
    "name_es": vehicle->name_es,
    "slug": slug.current,
    tagline_en,
    tagline_es,
    rental_rates_en,
    rental_rates_es,
    whats_included_en,
    requirements_en,
  }
`

export async function POST(req: NextRequest) {
  const { messages } = await req.json()

  // Fetch live data — Supabase for tour booking system, Sanity for rental marketing
  const [{ data: tours }, { data: models }, rentals] = await Promise.all([
    supabaseAdmin.from('tours').select('name, description, length_hours').eq('active', true).order('name'),
    supabaseAdmin.from('vehicle_models').select('name, capacity, rate_1hr, rate_2hr, rate_3hr').order('name'),
    client.fetch(rentalVehiclesQuery),
  ])

  // Build tour list
  const toursText = (tours ?? []).map((t) =>
    `- ${t.name} (${t.length_hours} hr${t.length_hours > 1 ? 's' : ''}${t.description ? ` — ${t.description}` : ''})`
  ).join('\n')

  // Build tour-vehicle pricing
  const vehiclesText = (models ?? []).map((v) =>
    `- ${v.name}: seats ${v.capacity} | 1hr $${v.rate_1hr.toLocaleString()} | 2hrs $${v.rate_2hr.toLocaleString()} | 3hrs $${v.rate_3hr.toLocaleString()} MXN`
  ).join('\n')

  // Build rentals section
  const rentalsText = (rentals ?? []).length === 0
    ? '(No rental vehicles currently published.)'
    : (rentals as any[]).map((r) => {
        const rates = (r.rental_rates_en ?? []).map((line: string) => `    • ${line}`).join('\n')
        const included = (r.whats_included_en ?? []).map((line: string) => `    • ${line}`).join('\n')
        const reqs = (r.requirements_en ?? []).map((line: string) => `    • ${line}`).join('\n')
        return [
          `- ${r.name_en}${r.tagline_en ? ` — ${r.tagline_en}` : ''}`,
          rates ? `  Rates:\n${rates}` : '',
          included ? `  What's included:\n${included}` : '',
          reqs ? `  Requirements:\n${reqs}` : '',
        ].filter(Boolean).join('\n')
      }).join('\n\n')

  const systemPrompt = `You are the friendly booking assistant for Guey Tours, an ATV tour company based in San Miguel de Allende, Mexico. You help visitors learn about the tours, answer questions, and guide them to make a booking.

## Tours available
${toursText}

## Tour vehicles & pricing (per vehicle, not per person)
${vehiclesText}

Pricing notes:
- Prices are per vehicle, not per person. Each ATV seats 2 people, the Defender seats 6.
- A group of 4 would need 2 ATVs. A group of 6 could take 1 Defender or 3 ATVs.
- Tours run in AM (morning) and PM (afternoon) slots.
- Bookings require at least one vehicle with enough capacity for the group.

## Vehicle Rentals (separate from tours)
We also offer some vehicles for self-drive rental, separate from the guided tour business. Rentals are reserved via WhatsApp, NOT through the online booking flow. The online booking widget is for tours only.

Available rental vehicles:
${rentalsText}

Important rental notes:
- Not every tour vehicle is rentable. The RZR is tour-only — it cannot be rented.
- Rentals are reserved by clicking the green "Reserve" button on a vehicle's rental detail page, which opens a WhatsApp chat with the team. The number is +52 1 415 109 0021.
- If asked "can I rent X" and X is in the list above, point them to the rental page (homepage → Our Vehicles → click the vehicle).
- If asked "can I rent the RZR" or any non-rentable tour vehicle, explain that it's only available as part of a guided tour.

## General information
- Location: Calle Refugio Sur #52, Colonia San Antonio, San Miguel de Allende, Guanajuato, Mexico
- All tours depart from the Guey Tours base — exact meeting point is confirmed on booking
- Minimum age: 18 to drive, children can ride as passengers with an adult
- No prior ATV experience needed — a safety briefing is given before every tour
- Closed-toe shoes are required. Long trousers recommended. Helmets provided.
- Tours run rain or shine unless conditions are unsafe — the team will contact you if there is a cancellation
- Tour payment is made online at time of booking via card (Stripe)
- Rental payment is arranged via WhatsApp when reserving
- Cancellation policy: please contact us as soon as possible if you need to cancel

## How to book a TOUR
Click the "Book Now" button on the tour card on the homepage. Choose date, time slot, group size and vehicle, then pay online. Takes about 2 minutes.

## How to RESERVE A RENTAL
Click "Our Vehicles" on the homepage, click the vehicle, then click the green "Reserve" button — this opens a WhatsApp conversation with our team to arrange dates and payment.

## Language
Detect the language the user is writing in and respond in the same language. If they write in Spanish, respond in Spanish. If they write in English, respond in English. You can switch mid-conversation if they switch.

Note: rental rates above are listed in English in this prompt. If a Spanish-speaking customer asks about rates, translate the relevant lines into natural Spanish — don't just paste the English version.

## Tone
Friendly, enthusiastic but not over the top. Keep answers concise — 2-4 sentences unless more detail is needed. If you don't know something specific (e.g. exact meeting coordinates), say you'll confirm on booking. Never make up information. If asked about something not in this prompt, say you'll need the team to confirm and suggest WhatsApp.`

  // Stream the response
  const stream = await anthropic.messages.stream({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    system: systemPrompt,
    messages,
  })

  const encoder = new TextEncoder()

  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
          controller.enqueue(encoder.encode(chunk.delta.text))
        }
      }
      controller.close()
    },
  })

  return new NextResponse(readable, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
    },
  })
}
