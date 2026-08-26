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

interface Tour {
  id: string
  name: string
  description: string | null
  length_hours: number
  active: boolean
}

export default function ToursTab({ lang }: { lang: Lang }) {
  const [tours, setTours]       = useState<Tour[]>([])
  const [loading, setLoading]   = useState(true)
  const [editing, setEditing]   = useState<string | null>(null)
  const [editData, setEditData] = useState<Partial<Tour>>({})
  const [saving, setSaving]     = useState(false)

  async function load() {
    setLoading(true)
    const res = await fetch('/api/admin/tours')
    const data = await res.json()
    setTours(data)
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  function startEdit(t: Tour) {
    setEditing(t.id)
    setEditData({ name: t.name, description: t.description, length_hours: t.length_hours })
  }

  async function saveEdit(id: string) {
    setSaving(true)
    await fetch('/api/admin/tours', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, ...editData }),
    })
    setSaving(false); setEditing(null); load()
  }

  async function toggleActive(t: Tour) {
    await fetch('/api/admin/tours', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: t.id, active: !t.active }),
    })
    load()
  }

  const input = {
    background: T.bgInput, border: T.border, borderRadius: 8,
    padding: '7px 10px', fontSize: 13, color: T.text, outline: 'none',
    width: '100%', boxSizing: 'border-box' as const,
  }

  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 600, color: T.text, marginBottom: 20 }}>{tx('tours', lang)}</h2>

      {loading ? (
        <p style={{ color: T.textMuted, fontSize: 13 }}>{tx('loading', lang)}</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {tours.map((t) => (
            <div key={t.id} style={{ background: T.bgPanel, border: T.border, borderRadius: T.radius, padding: '1rem 1.25rem' }}>
              {editing === t.id ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 10 }}>
                    <div>
                      <label style={{ fontSize: 11, color: T.textMuted, display: 'block', marginBottom: 4 }}>{tx('name', lang)}</label>
                      <input value={editData.name ?? ''} onChange={(e) => setEditData((p) => ({ ...p, name: e.target.value }))} style={input} />
                    </div>
                    <div>
                      <label style={{ fontSize: 11, color: T.textMuted, display: 'block', marginBottom: 4 }}>{tx('durationHours', lang)}</label>
                      <input type="number" min={1} max={8} value={editData.length_hours ?? ''}
                        onChange={(e) => setEditData((p) => ({ ...p, length_hours: parseFloat(e.target.value) }))} style={input} />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: 11, color: T.textMuted, display: 'block', marginBottom: 4 }}>{tx('description', lang)}</label>
                    <textarea value={editData.description ?? ''} onChange={(e) => setEditData((p) => ({ ...p, description: e.target.value }))}
                      rows={2} style={{ ...input, resize: 'vertical' }} />
                  </div>
                  <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                    <button onClick={() => setEditing(null)} style={{ fontSize: 13, padding: '6px 14px', borderRadius: 6, cursor: 'pointer', background: 'none', border: T.border, color: T.textMuted }}>{tx('cancel2', lang)}</button>
                    <button onClick={() => saveEdit(t.id)} disabled={saving} style={{ fontSize: 13, padding: '6px 14px', borderRadius: 6, cursor: 'pointer', background: T.orange, border: 'none', color: '#fff' }}>
                      {saving ? tx('saving', lang) : tx('save', lang)}
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                      <span style={{ fontSize: 15, fontWeight: 600, color: T.text }}>{t.name}</span>
                      <span style={{ fontSize: 12, color: T.orange }}>{t.length_hours}hr{t.length_hours > 1 ? 's' : ''}</span>
                      <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 999, background: t.active ? 'rgba(34,197,94,0.15)' : 'rgba(255,68,68,0.15)', color: t.active ? T.green : T.red }}>
                        {t.active ? tx('active', lang) : tx('inactive', lang)}
                      </span>
                    </div>
                    {t.description && <p style={{ fontSize: 12, color: T.textMuted, margin: 0 }}>{t.description}</p>}
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button onClick={() => startEdit(t)} style={{ fontSize: 12, padding: '5px 12px', borderRadius: 6, cursor: 'pointer', background: 'none', border: T.border, color: T.textMuted }}>{tx('edit', lang)}</button>
                    <button onClick={() => toggleActive(t)} style={{ fontSize: 12, padding: '5px 12px', borderRadius: 6, cursor: 'pointer', background: 'none', border: `1px solid ${t.active ? T.red : T.green}`, color: t.active ? T.red : T.green }}>
                      {t.active ? tx('deactivate', lang) : tx('activate', lang)}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
