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

  const { data, error } = await supabaseAdmin
    .from('blocked_slots')
    .select('*')
    .order('date', { ascending: true })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function POST(req: NextRequest) {
  try { await assertAdmin() } catch { return NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) }

  const body = await req.json()
  const { date, slot, reason } = body

  const { error } = await supabaseAdmin.from('blocked_slots').insert({ date, slot, reason })
  if (error) {
    // Unique constraint violation — already blocked
    if (error.code === '23505') return NextResponse.json({ error: 'That slot is already blocked.' }, { status: 409 })
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ ok: true })
}

export async function DELETE(req: NextRequest) {
  try { await assertAdmin() } catch { return NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) }

  const { id } = await req.json()
  const { error } = await supabaseAdmin.from('blocked_slots').delete().eq('id', id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
