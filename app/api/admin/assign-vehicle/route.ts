import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

// POST /api/admin/assign-vehicle
// Body: { booking_vehicle_id, vehicle_id }
// Assigns a specific unit to a booking_vehicle row.
// Validates:
//   - the unit belongs to the correct model
//   - the unit is marked available
//   - the unit hasn't been deleted
//   - the unit isn't already assigned to another booking on the same date/slot

export async function POST(req: NextRequest) {
  const { booking_vehicle_id, vehicle_id } = await req.json()

  if (!booking_vehicle_id || !vehicle_id) {
    return NextResponse.json({ error: 'booking_vehicle_id and vehicle_id required' }, { status: 400 })
  }

  // Fetch the booking_vehicle row with its booking details
  const { data: bv, error: bvErr } = await supabaseAdmin
    .from('booking_vehicles')
    .select('id, model_id, booking_id, bookings(booking_date, slot, cancelled, paid)')
    .eq('id', booking_vehicle_id)
    .single()

  if (bvErr || !bv) {
    return NextResponse.json({ error: 'Booking vehicle row not found' }, { status: 404 })
  }

  const booking = (bv as any).bookings

  if (!booking.paid) {
    return NextResponse.json({ error: 'Cannot assign vehicles to an unpaid booking' }, { status: 400 })
  }

  if (booking.cancelled) {
    return NextResponse.json({ error: 'Booking is cancelled' }, { status: 400 })
  }

  // Fetch the vehicle unit and check it belongs to the right model
  const { data: unit, error: uErr } = await supabaseAdmin
    .from('vehicles')
    .select('id, model_id, available, name, is_deleted')
    .eq('id', vehicle_id)
    .single()

  if (uErr || !unit) {
    return NextResponse.json({ error: 'Vehicle unit not found' }, { status: 404 })
  }

  if (unit.is_deleted) {
    return NextResponse.json({ error: `${unit.name} has been retired and can no longer be assigned` }, { status: 400 })
  }

  if (unit.model_id !== bv.model_id) {
    return NextResponse.json({ error: 'Vehicle unit does not match the booked model type' }, { status: 400 })
  }

  if (!unit.available) {
    return NextResponse.json({ error: `${unit.name} is currently unavailable (check service status)` }, { status: 400 })
  }

  // Check unit isn't already assigned to a different booking on the same date + slot
  const { data: conflict } = await supabaseAdmin
    .from('booking_vehicles')
    .select('id, bookings!inner(booking_date, slot, cancelled, paid)')
    .eq('assigned_vehicle_id', vehicle_id)
    .eq('bookings.booking_date', booking.booking_date)
    .eq('bookings.slot', booking.slot)
    .eq('bookings.cancelled', false)
    .neq('id', booking_vehicle_id) // exclude the current row
    .maybeSingle()

  if (conflict) {
    return NextResponse.json({
      error: `${unit.name} is already assigned to another booking on this date and slot`,
    }, { status: 409 })
  }

  // All clear — assign the unit
  const { error: updateErr } = await supabaseAdmin
    .from('booking_vehicles')
    .update({ assigned_vehicle_id: vehicle_id })
    .eq('id', booking_vehicle_id)

  if (updateErr) {
    return NextResponse.json({ error: updateErr.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, assigned: unit.name })
}
