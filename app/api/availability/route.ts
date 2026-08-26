import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

// Slot times per tour duration
const SLOTS_BY_HOURS: Record<number, string[]> = {
  1: ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'],
  2: ['09:00','12:00','14:00','17:00'],
  3: ['09:00','12:00','15:00'],
}

// GET /api/availability?year=2026&month=4&tour_id=xxx
// Returns available unit count per model per date per slot
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const year    = parseInt(searchParams.get('year') ?? '')
  const month   = parseInt(searchParams.get('month') ?? '') // 1-based
  const tour_id = searchParams.get('tour_id')

  if (!year || !month || !tour_id) {
    return NextResponse.json({ error: 'year, month and tour_id required' }, { status: 400 })
  }

  const pad = (n: number) => String(n).padStart(2, '0')
  const startDate   = `${year}-${pad(month)}-01`
  const daysInMonth = new Date(year, month, 0).getDate()
  const endDate     = `${year}-${pad(month)}-${pad(daysInMonth)}`

  // Fetch the tour to get length_hours
  const { data: tour, error: tErr } = await supabaseAdmin
    .from('tours')
    .select('length_hours')
    .eq('id', tour_id)
    .single()

  if (tErr || !tour) return NextResponse.json({ error: 'Tour not found' }, { status: 404 })

  const slots = SLOTS_BY_HOURS[tour.length_hours] ?? SLOTS_BY_HOURS[1]

  // All vehicle models
  const { data: models, error: mErr } = await supabaseAdmin
    .from('vehicle_models')
    .select('id')

  if (mErr) return NextResponse.json({ error: mErr.message }, { status: 500 })

  // Fleet count per model (available units only, excluding deleted)
  const { data: units, error: uErr } = await supabaseAdmin
    .from('vehicles')
    .select('id, model_id')
    .eq('available', true)
    .eq('is_deleted', false)

  if (uErr) return NextResponse.json({ error: uErr.message }, { status: 500 })

  const fleetCount: Record<string, number> = {}
  for (const u of units ?? []) {
    fleetCount[u.model_id] = (fleetCount[u.model_id] ?? 0) + 1
  }

  // All booking_vehicles in this month across ALL tours (not cancelled)
  // Vehicles are a shared resource — a booking on any tour blocks those vehicles
  const { data: bookingVehicles, error: bErr } = await supabaseAdmin
    .from('booking_vehicles')
    .select('model_id, quantity, bookings!inner(booking_date, slot, cancelled)')
    .gte('bookings.booking_date', startDate)
    .lte('bookings.booking_date', endDate)
    .eq('bookings.cancelled', false)

  if (bErr) return NextResponse.json({ error: bErr.message }, { status: 500 })

  // bookedMap[date][slot][modelId] = total units booked across all tours
  const bookedMap: Record<string, Record<string, Record<string, number>>> = {}
  for (const bv of bookingVehicles ?? []) {
    const booking = (bv as any).bookings
    const date: string = booking.booking_date
    const slot: string = booking.slot
    if (!bookedMap[date]) bookedMap[date] = {}
    if (!bookedMap[date][slot]) bookedMap[date][slot] = {}
    const mid: string = bv.model_id
    bookedMap[date][slot][mid] = (bookedMap[date][slot][mid] ?? 0) + bv.quantity
  }

  // Blocked slots in this month — any blocked slot zeroes out all models
  const { data: blocked, error: blErr } = await supabaseAdmin
    .from('blocked_slots')
    .select('date, slot')
    .gte('date', startDate)
    .lte('date', endDate)

  if (blErr) return NextResponse.json({ error: blErr.message }, { status: 500 })

  // blockedSet — fast lookup: "2026-04-20|09:00"
  const blockedSet = new Set((blocked ?? []).map((b) => `${b.date}|${b.slot}`))

  // Build result: date -> slot -> modelId -> available count
  const result: Record<string, Record<string, Record<string, number>>> = {}
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${pad(month)}-${pad(d)}`
    result[dateStr] = {}
    for (const slot of slots) {
      result[dateStr][slot] = {}
      const isBlocked = blockedSet.has(`${dateStr}|${slot}`)
      for (const model of models ?? []) {
        if (isBlocked) {
          result[dateStr][slot][model.id] = 0
        } else {
          const fleet  = fleetCount[model.id] ?? 0
          const booked = bookedMap[dateStr]?.[slot]?.[model.id] ?? 0
          result[dateStr][slot][model.id] = Math.max(0, fleet - booked)
        }
      }
    }
  }

  return NextResponse.json(result)
}
