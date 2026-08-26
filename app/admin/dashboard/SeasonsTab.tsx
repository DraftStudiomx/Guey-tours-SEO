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

interface Season {
  id: string
  name: string
  start_date: string
  end_date: string
  type: 'high' | 'low'
}

export default function SeasonsTab({ lang }: { lang: Lang }) {
  const [seasons, setSeasons]     = useState<Season[]>([])
  const [loading, setLoading]     = useState(true)
  const [name, setName]           = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate]     = useState('')
  const [type, setType]           = useState<'high' | 'low'>('high')
  const [saving, setSaving]       = useState(false)
  const [error, setError]         = useState<string | null>(null)

  async function load() {
    setLoading(true)
    const res = await fetch('/api/admin/seasons')
    const data = await res.json()
    setSeasons(data)
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  async function add() {
    if (!name || !startDate || !endDate) { setError(tx('allFieldsRequired', lang)); return }
    if (endDate < startDate) { setError(tx('endAfterStart', lang)); return }
    setSaving(true); setError(null)
    const res = await fetch('/api/admin/seasons', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, start_date: startDate, end_date: endDate, type }),
    })
    if (!res.ok) {
      const d = await res.json()
      setError(d.error ?? tx('failedSave', lang))
    } else {
      setName(''); setStartDate(''); setEndDate(''); load()
    }
    setSaving(false)
  }

  async function remove(id: string) {
    await fetch('/api/admin/seasons', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    load()
  }

  const input = {
    background: T.bgInput, border: T.border, borderRadius: 8,
    padding: '8px 12px', fontSize: 13, color: T.text, outline: 'none',
    width: '100%', boxSizing: 'border-box' as const,
  }

  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 600, color: T.text, marginBottom: 8 }}>{tx('seasons', lang)}</h2>
      <p style={{ fontSize: 13, color: T.textMuted, marginBottom: 20 }}>{tx('seasonsDesc', lang)}</p>

      <div style={{ background: T.bgPanel, border: T.border, borderRadius: T.radius, padding: '1.25rem', marginBottom: 24 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr auto', gap: 10, alignItems: 'end' }}>
          <div>
            <label style={{ fontSize: 11, color: T.textMuted, display: 'block', marginBottom: 4 }}>{tx('seasonName', lang)}</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder={tx('seasonNamePlaceholder', lang)} style={input} />
          </div>
          <div>
            <label style={{ fontSize: 11, color: T.textMuted, display: 'block', marginBottom: 4 }}>{tx('type', lang)}</label>
            <select value={type} onChange={(e) => setType(e.target.value as 'high' | 'low')} style={input}>
              <option value="high">{tx('highSeasonOption', lang)}</option>
              <option value="low">{tx('lowSeasonOption', lang)}</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: 11, color: T.textMuted, display: 'block', marginBottom: 4 }}>{tx('startDate', lang)}</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} style={input} />
          </div>
          <div>
            <label style={{ fontSize: 11, color: T.textMuted, display: 'block', marginBottom: 4 }}>{tx('endDate', lang)}</label>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} style={input} />
          </div>
          <button onClick={add} disabled={saving} style={{ padding: '8px 18px', background: T.orange, color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: saving ? 'not-allowed' : 'pointer', opacity: saving ? 0.6 : 1 }}>
            {saving ? '…' : tx('add', lang)}
          </button>
        </div>
        {error && <p style={{ fontSize: 12, color: T.red, marginTop: 10 }}>{error}</p>}
      </div>

      {loading ? (
        <p style={{ color: T.textMuted, fontSize: 13 }}>{tx('loading', lang)}</p>
      ) : seasons.length === 0 ? (
        <p style={{ color: T.textMuted, fontSize: 13 }}>{tx('noSeasons', lang)}</p>
      ) : (
        <div style={{ background: T.bgPanel, border: T.border, borderRadius: T.radius, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#161616' }}>
                {[tx('name',lang), tx('type',lang), tx('startDate',lang), tx('endDate',lang), ''].map((h, i) => (
                  <th key={i} style={{ padding: '10px 12px', fontSize: 11, color: T.textMuted, fontWeight: 600, textTransform: 'uppercase', textAlign: 'left' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {seasons.sort((a, b) => a.start_date.localeCompare(b.start_date)).map((s) => (
                <tr key={s.id}>
                  <td style={{ padding: '10px 12px', fontSize: 13, color: T.text, borderBottom: '1px solid #222' }}>{s.name}</td>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid #222' }}>
                    <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 999, background: s.type === 'high' ? 'rgba(255,107,0,0.15)' : 'rgba(255,255,255,0.08)', color: s.type === 'high' ? T.orange : T.textMuted }}>
                      {s.type === 'high' ? tx('high', lang) : tx('low', lang)}
                    </span>
                  </td>
                  <td style={{ padding: '10px 12px', fontSize: 13, color: T.textMuted, borderBottom: '1px solid #222' }}>{s.start_date}</td>
                  <td style={{ padding: '10px 12px', fontSize: 13, color: T.textMuted, borderBottom: '1px solid #222' }}>{s.end_date}</td>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid #222' }}>
                    <button onClick={() => remove(s.id)} style={{ fontSize: 12, padding: '4px 10px', borderRadius: 6, cursor: 'pointer', background: 'none', border: `1px solid ${T.red}`, color: T.red }}>
                      {tx('delete', lang)}
                    </button>
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
