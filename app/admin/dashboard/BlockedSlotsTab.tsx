'use client'

import { useEffect, useState } from 'react'
import { type Lang, tx } from '@/lib/translations'

const T = {
  bgPanel: '#1c1c1c', bgInput: '#242424',
  border: '1px solid rgba(255,107,0,0.3)',
  orange: '#ff6b00', text: '#ffffff',
  textMuted: 'rgba(255,255,255,0.55)',
  red: '#ff4444', radius: 10,
}

const ALL_SLOTS = ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00']

function formatSlot(slot: string) {
  const [h] = slot.split(':').map(Number)
  const ampm = h < 12 ? 'AM' : 'PM'
  const hour = h % 12 === 0 ? 12 : h % 12
  return `${hour}:00 ${ampm}`
}

interface BlockedSlot {
  id: string
  date: string
  slot: string
  reason: string | null
}

export default function BlockedSlotsTab({ lang }: { lang: Lang }) {
  const [blocked, setBlocked] = useState<BlockedSlot[]>([])
  const [loading, setLoading] = useState(true)
  const [date, setDate]       = useState('')
  const [slot, setSlot]       = useState('09:00')
  const [reason, setReason]   = useState('')
  const [saving, setSaving]   = useState(false)
  const [error, setError]     = useState<string | null>(null)

  async function load() {
    setLoading(true)
    const res = await fetch('/api/admin/blocked-slots')
    const data = await res.json()
    setBlocked(data)
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  async function addBlock() {
    if (!date || !slot) { setError(tx('dateSlotRequired', lang)); return }
    setSaving(true); setError(null)
    const res = await fetch('/api/admin/blocked-slots', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date, slot, reason: reason || null }),
    })
    if (!res.ok) {
      const d = await res.json()
      setError(d.error ?? tx('failedSave', lang))
    } else {
      setDate(''); setReason(''); load()
    }
    setSaving(false)
  }

  async function remove(id: string) {
    await fetch('/api/admin/blocked-slots', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    load()
  }

  const input = {
    background: T.bgInput, border: T.border, borderRadius: 8,
    padding: '8px 12px', fontSize: 13, color: T.text, outline: 'none',
  }

  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 600, color: T.text, marginBottom: 20 }}>{tx('blockSlots', lang)}</h2>

      <div style={{ background: T.bgPanel, border: T.border, borderRadius: T.radius, padding: '1.25rem', marginBottom: 24 }}>
        <p style={{ fontSize: 13, color: T.textMuted, marginBottom: 14 }}>{tx('blockSlotsDesc', lang)}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr auto', gap: 10, alignItems: 'end' }}>
          <div>
            <label style={{ fontSize: 11, color: T.textMuted, display: 'block', marginBottom: 4 }}>{tx('dateLabel', lang)}</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ ...input, width: '100%', boxSizing: 'border-box' as const }} />
          </div>
          <div>
            <label style={{ fontSize: 11, color: T.textMuted, display: 'block', marginBottom: 4 }}>{tx('timeSlot', lang)}</label>
            <select value={slot} onChange={(e) => setSlot(e.target.value)} style={{ ...input, width: '100%', boxSizing: 'border-box' as const }}>
              {ALL_SLOTS.map((s) => <option key={s} value={s}>{formatSlot(s)}</option>)}
            </select>
          </div>
          <div>
            <label style={{ fontSize: 11, color: T.textMuted, display: 'block', marginBottom: 4 }}>{tx('reason', lang)}</label>
            <input type="text" value={reason} onChange={(e) => setReason(e.target.value)}
              placeholder={tx('reasonPlaceholder', lang)}
              style={{ ...input, width: '100%', boxSizing: 'border-box' as const }} />
          </div>
          <button onClick={addBlock} disabled={saving} style={{
            padding: '8px 18px', background: T.orange, color: '#fff', border: 'none',
            borderRadius: 8, fontSize: 13, fontWeight: 500,
            cursor: saving ? 'not-allowed' : 'pointer', opacity: saving ? 0.6 : 1,
          }}>
            {saving ? '…' : tx('block', lang)}
          </button>
        </div>
        {error && <p style={{ fontSize: 12, color: T.red, marginTop: 10 }}>{error}</p>}
      </div>

      {loading ? (
        <p style={{ color: T.textMuted, fontSize: 13 }}>{tx('loading', lang)}</p>
      ) : blocked.length === 0 ? (
        <p style={{ color: T.textMuted, fontSize: 13 }}>{tx('noBlockedSlots', lang)}</p>
      ) : (
        <div style={{ background: T.bgPanel, border: T.border, borderRadius: T.radius, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#161616' }}>
                {[tx('dateLabel',lang), tx('timeSlot',lang), tx('reason',lang), ''].map((h, i) => (
                  <th key={i} style={{ padding: '10px 12px', fontSize: 11, color: T.textMuted, fontWeight: 600, textTransform: 'uppercase', textAlign: 'left' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {blocked.sort((a, b) => a.date.localeCompare(b.date) || a.slot.localeCompare(b.slot)).map((b) => (
                <tr key={b.id}>
                  <td style={{ padding: '10px 12px', fontSize: 13, color: T.text, borderBottom: '1px solid #222' }}>{b.date}</td>
                  <td style={{ padding: '10px 12px', fontSize: 13, color: T.text, borderBottom: '1px solid #222' }}>{formatSlot(b.slot)}</td>
                  <td style={{ padding: '10px 12px', fontSize: 13, color: T.textMuted, borderBottom: '1px solid #222' }}>{b.reason ?? '—'}</td>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid #222' }}>
                    <button onClick={() => remove(b.id)} style={{
                      fontSize: 12, padding: '4px 10px', borderRadius: 6, cursor: 'pointer',
                      background: 'none', border: `1px solid ${T.red}`, color: T.red,
                    }}>{tx('unblock', lang)}</button>
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
