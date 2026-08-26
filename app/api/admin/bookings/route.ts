import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { createSupabaseServerClient } from '@/lib/supabase-ssr'

async function assertAdmin() {
  const supabase = await createSupabaseServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Unauthorized')
}

export async function GET(req: NextRequest) {
  try { await assertAdmin() } catch { return NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) }

  const filter = new URL(req.url).searchParams.get('filter') ?? 'upcoming'
  const today  = new Date().toISOString().split('T')[0]

  let query = supabaseAdmin
    .from('bookings')
    .select('*, tours(name, length_hours)')
    .order('booking_date', { ascending: true })
    .order('slot', { ascending: true })

  if (filter === 'upcoming') {
    query = query.gte('booking_date', today).eq('cancelled', false)
  }

  const { data, error } = await query
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function PATCH(req: NextRequest) {
  try { await assertAdmin() } catch { return NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) }

  const body = await req.json()
  const { id, ...updates } = body

  const { error } = await supabaseAdmin.from('bookings').update(updates).eq('id', id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
