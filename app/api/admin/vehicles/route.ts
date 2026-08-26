import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { createSupabaseServerClient } from '@/lib/supabase-ssr'

async function assertAdmin() {
  const supabase = await createSupabaseServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Unauthorized')
}

export async function GET() {
  try { await assertAdmin() } catch { return NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) }

  const [{ data: models, error: mErr }, { data: units, error: uErr }] = await Promise.all([
    supabaseAdmin.from('vehicle_models').select('*').order('name'),
    supabaseAdmin
      .from('vehicles')
      .select('*, vehicle_models(name)')
      .eq('is_deleted', false)
      .order('name'),
  ])

  if (mErr) return NextResponse.json({ error: mErr.message }, { status: 500 })
  if (uErr) return NextResponse.json({ error: uErr.message }, { status: 500 })

  return NextResponse.json({ models, units })
}

export async function POST(req: NextRequest) {
  try { await assertAdmin() } catch { return NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) }

  const { name, model_id } = await req.json()
  const { error } = await supabaseAdmin.from('vehicles').insert({ name, model_id, available: true })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}

export async function PATCH(req: NextRequest) {
  try { await assertAdmin() } catch { return NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) }

  const body = await req.json()
  const { type, id, ...updates } = body

  if (type === 'model') {
    const { error } = await supabaseAdmin.from('vehicle_models').update(updates).eq('id', id)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  } else if (type === 'unit') {
    const { error } = await supabaseAdmin.from('vehicles').update(updates).eq('id', id)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  } else {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
  }

  return NextResponse.json({ ok: true })
}

export async function DELETE(req: NextRequest) {
  try { await assertAdmin() } catch { return NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) }

  const { id } = await req.json()
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })

  // Check if this unit has ever been assigned to a booking
  const { count, error: countErr } = await supabaseAdmin
    .from('booking_vehicles')
    .select('*', { count: 'exact', head: true })
    .eq('assigned_vehicle_id', id)

  if (countErr) return NextResponse.json({ error: countErr.message }, { status: 500 })

  if ((count ?? 0) > 0) {
    // Soft delete — preserve booking history
    const { error } = await supabaseAdmin
      .from('vehicles')
      .update({ is_deleted: true, deleted_at: new Date().toISOString() })
      .eq('id', id)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ ok: true, mode: 'soft', bookings: count })
  }

  // Hard delete — no bookings reference this unit, safe to remove
  const { error } = await supabaseAdmin.from('vehicles').delete().eq('id', id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true, mode: 'hard' })
}
