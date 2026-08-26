'use client'

import { useEffect, useState } from 'react'
import { type Lang, tx } from '@/lib/translations'

const T = {
  bgPanel: '#1c1c1c', bgInput: '#242424',
  border: '1px solid rgba(255,107,0,0.3)',
  orange: '#ff6b00', text: '#ffffff',
  textMuted: 'rgba(255,255,255,0.55)',
  red: '#ff4444', green: '#22c55e', radius: 10,
}

interface Booking {
  id: string
  booking_date: string
  slot: string
  num_people: number
  principal_name: string
  email: string
  phone: string
  total_price: number
  paid: boolean
  cancelled: boolean
  tours: { name: string; length_hours: number }
}

export default function BookingsTab({ lang }: { lang: Lang }) {
  const [bookings, setBookings]     = useState<Booking[]>([])
  const [loading, setLoading]       = useState(true)
  const [filter, setFilter]         = useState<'upcoming' | 'all'>('upcoming')
  const [cancelling, setCancelling] = useState<string | null>(null)

  async function load() {
    setLoading(true)
    const res = await fetch(`/api/admin/bookings?filter=${filter}`)
    const data = await res.json()
    setBookings(data)
    setLoading(false)
  }

  useEffect(() => { load() }, [filter])

  async function cancel(id: string) {
    if (!confirm(tx('confirmCancel', lang))) return
    setCancelling(id)
    await fetch('/api/admin/bookings', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, cancelled: true }),
    })
    setCancelling(null)
    load()
  }

  const cell = { padding: '10px 12px', fontSize: 13, color: T.text, borderBottom: '1px solid #222' }
  const hdr  = { ...cell, fontSize: 11, color: T.textMuted, fontWeight: 600, textTransform: 'uppercase' as const }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: T.text, margin: 0 }}>{tx('bookings', lang)}</h2>
        <div style={{ display: 'flex', gap: 8 }}>
          {(['upcoming', 'all'] as const).map((f) => (
            <button key={f} onClick={() => setFilter(f)} style={{
              fontSize: 12, padding: '5px 14px', borderRadius: 6, cursor: 'pointer',
              background: filter === f ? T.orange : 'none',
              color: filter === f ? '#fff' : T.textMuted,
              border: T.border,
            }}>{f === 'upcoming' ? tx('upcoming', lang) : tx('all', lang)}</button>
          ))}
        </div>
      </div>

      {loading ? (
        <p style={{ color: T.textMuted, fontSize: 13 }}>{tx('loading', lang)}</p>
      ) : bookings.length === 0 ? (
        <p style={{ color: T.textMuted, fontSize: 13 }}>{tx('noBookings', lang)}</p>
      ) : (
        <div style={{ background: T.bgPanel, border: T.border, borderRadius: T.radius, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#161616' }}>
                {[tx('date',lang), tx('time',lang), tx('tour',lang), tx('guest',lang), tx('people',lang), tx('total',lang), tx('status',lang), ''].map((h, i) => (
                  <th key={i} style={hdr}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id}>
                  <td style={cell}>{b.booking_date}</td>
                  <td style={cell}>{b.slot}</td>
                  <td style={cell}>{b.tours?.name ?? '—'}</td>
                  <td style={cell}>
                    <div>{b.principal_name}</div>
                    <div style={{ fontSize: 11, color: T.textMuted }}>{b.email}</div>
                  </td>
                  <td style={{ ...cell, textAlign: 'center' }}>{b.num_people}</td>
                  <td style={cell}>${b.total_price.toLocaleString()}</td>
                  <td style={cell}>
                    {b.cancelled ? (
                      <span style={{ color: T.red, fontSize: 12 }}>{tx('cancelled', lang)}</span>
                    ) : b.paid ? (
                      <span style={{ color: T.green, fontSize: 12 }}>{tx('paid', lang)}</span>
                    ) : (
                      <span style={{ color: T.textMuted, fontSize: 12 }}>{tx('pending', lang)}</span>
                    )}
                  </td>
                  <td style={cell}>
                    {!b.cancelled && (
                      <button onClick={() => cancel(b.id)} disabled={cancelling === b.id} style={{
                        fontSize: 12, padding: '4px 10px', borderRadius: 6, cursor: 'pointer',
                        background: 'none', border: `1px solid ${T.red}`, color: T.red,
                      }}>
                        {cancelling === b.id ? '…' : tx('cancel', lang)}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
