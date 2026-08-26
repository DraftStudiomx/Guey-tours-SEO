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

interface VehicleModel {
  id: string; name: string; capacity: number
  rate_1hr: number; rate_2hr: number; rate_3hr: number
  rate_1hr_high: number; rate_1hr_low: number
  rate_2hr_high: number; rate_2hr_low: number
  rate_3hr_high: number; rate_3hr_low: number
}

interface VehicleUnit {
  id: string; name: string; model_id: string
  available: boolean; notes: string | null
  vehicle_models: { name: string }
}

export default function VehiclesTab({ lang }: { lang: Lang }) {
  const [models, setModels]         = useState<VehicleModel[]>([])
  const [units, setUnits]           = useState<VehicleUnit[]>([])
  const [loading, setLoading]       = useState(true)
  const [editingModel, setEditingModel] = useState<string | null>(null)
  const [rateData, setRateData]     = useState<Partial<VehicleModel>>({})
  const [saving, setSaving]         = useState(false)
  const [newName, setNewName]       = useState('')
  const [newModelId, setNewModelId] = useState('')
  const [adding, setAdding]         = useState(false)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  async function load() {
    setLoading(true)
    const res = await fetch('/api/admin/vehicles')
    const data = await res.json()
    setModels(data.models ?? [])
    setUnits(data.units ?? [])
    if (data.models?.length && !newModelId) setNewModelId(data.models[0].id)
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  async function saveRates(id: string) {
    setSaving(true)
    await fetch('/api/admin/vehicles', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'model', id, ...rateData }),
    })
    setSaving(false); setEditingModel(null); load()
  }

  async function toggleUnit(id: string, available: boolean) {
    await fetch('/api/admin/vehicles', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'unit', id, available }),
    })
    load()
  }

  async function addUnit() {
    if (!newName || !newModelId) return
    setAdding(true)
    await fetch('/api/admin/vehicles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName, model_id: newModelId }),
    })
    setNewName(''); setAdding(false); load()
  }

  async function deleteUnit(id: string, name: string) {
    const confirmed = window.confirm(
      lang === 'es'
        ? `¿Eliminar la unidad "${name}"? Si tiene reservas históricas, se ocultará pero se conservará el historial.`
        : `Delete unit "${name}"? If it has booking history, it will be hidden but the history preserved.`
    )
    if (!confirmed) return

    setDeletingId(id)
    const res = await fetch('/api/admin/vehicles', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    setDeletingId(null)

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      alert(`Error: ${err.error ?? 'Failed to delete'}`)
      return
    }
    load()
  }

  const input = {
    background: T.bgInput, border: T.border, borderRadius: 8,
    padding: '7px 10px', fontSize: 13, color: T.text, outline: 'none',
    width: '100%', boxSizing: 'border-box' as const,
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

      {/* Vehicle model rates */}
      <div>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: T.text, marginBottom: 16 }}>{tx('vehicleRates', lang)}</h2>
        {loading ? <p style={{ color: T.textMuted, fontSize: 13 }}>{tx('loading', lang)}</p> : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {models.map((m) => (
              <div key={m.id} style={{ background: T.bgPanel, border: T.border, borderRadius: T.radius, padding: '1rem 1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: editingModel === m.id ? 16 : 0 }}>
                  <div>
                    <span style={{ fontSize: 15, fontWeight: 600, color: T.text }}>{m.name}</span>
                    <span style={{ fontSize: 12, color: T.textMuted, marginLeft: 10 }}>{tx('seats', lang)} {m.capacity}</span>
                  </div>
                  {editingModel !== m.id && (
                    <button onClick={() => { setEditingModel(m.id); setRateData({ rate_1hr_high: m.rate_1hr_high, rate_1hr_low: m.rate_1hr_low, rate_2hr_high: m.rate_2hr_high, rate_2hr_low: m.rate_2hr_low, rate_3hr_high: m.rate_3hr_high, rate_3hr_low: m.rate_3hr_low }) }}
                      style={{ fontSize: 12, padding: '5px 12px', borderRadius: 6, cursor: 'pointer', background: 'none', border: T.border, color: T.textMuted }}>
                      {tx('editRates', lang)}
                    </button>
                  )}
                </div>

                {editingModel === m.id ? (
                  <div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 14 }}>
                      <thead>
                        <tr>
                          <th style={{ fontSize: 11, color: T.textMuted, textAlign: 'left', padding: '4px 8px' }}></th>
                          <th style={{ fontSize: 11, color: T.textMuted, textAlign: 'center', padding: '4px 8px' }}>1 hr</th>
                          <th style={{ fontSize: 11, color: T.textMuted, textAlign: 'center', padding: '4px 8px' }}>2 hr</th>
                          <th style={{ fontSize: 11, color: T.textMuted, textAlign: 'center', padding: '4px 8px' }}>3 hr</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { label: tx('highSeason', lang), keys: ['rate_1hr_high', 'rate_2hr_high', 'rate_3hr_high'] as const },
                          { label: tx('lowSeason',  lang), keys: ['rate_1hr_low',  'rate_2hr_low',  'rate_3hr_low']  as const },
                        ].map((row) => (
                          <tr key={row.label}>
                            <td style={{ fontSize: 12, color: T.textMuted, padding: '6px 8px' }}>{row.label}</td>
                            {row.keys.map((k) => (
                              <td key={k} style={{ padding: '4px 8px', textAlign: 'center' }}>
                                <input type="number" value={rateData[k] ?? ''}
                                  onChange={(e) => setRateData((p) => ({ ...p, [k]: parseFloat(e.target.value) }))}
                                  style={{ ...input, width: 90, textAlign: 'center' }} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                      <button onClick={() => setEditingModel(null)} style={{ fontSize: 13, padding: '6px 14px', borderRadius: 6, cursor: 'pointer', background: 'none', border: T.border, color: T.textMuted }}>{tx('cancel2', lang)}</button>
                      <button onClick={() => saveRates(m.id)} disabled={saving} style={{ fontSize: 13, padding: '6px 14px', borderRadius: 6, cursor: 'pointer', background: T.orange, border: 'none', color: '#fff' }}>
                        {saving ? tx('saving', lang) : tx('saveRates', lang)}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div style={{ display: 'flex', gap: 24, marginTop: 8 }}>
                    {[
                      { label: `1hr ${tx('high',lang)}`, val: m.rate_1hr_high },
                      { label: `1hr ${tx('low',lang)}`,  val: m.rate_1hr_low  },
                      { label: `2hr ${tx('high',lang)}`, val: m.rate_2hr_high },
                      { label: `2hr ${tx('low',lang)}`,  val: m.rate_2hr_low  },
                      { label: `3hr ${tx('high',lang)}`, val: m.rate_3hr_high },
                      { label: `3hr ${tx('low',lang)}`,  val: m.rate_3hr_low  },
                    ].map(({ label, val }) => (
                      <div key={label}>
                        <div style={{ fontSize: 10, color: T.textMuted }}>{label}</div>
                        <div style={{ fontSize: 14, color: T.orange, fontWeight: 500 }}>${(val ?? 0).toLocaleString()}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Physical units */}
      <div>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: T.text, marginBottom: 16 }}>{tx('physicalUnits', lang)}</h2>

        <div style={{ background: T.bgPanel, border: T.border, borderRadius: T.radius, padding: '1rem 1.25rem', marginBottom: 16 }}>
          <p style={{ fontSize: 13, color: T.textMuted, marginBottom: 12 }}>{tx('addUnit', lang)}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: 10, alignItems: 'end' }}>
            <div>
              <label style={{ fontSize: 11, color: T.textMuted, display: 'block', marginBottom: 4 }}>{tx('unitName', lang)}</label>
              <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder={tx('unitNamePlaceholder', lang)} style={input} />
            </div>
            <div>
              <label style={{ fontSize: 11, color: T.textMuted, display: 'block', marginBottom: 4 }}>{tx('model', lang)}</label>
              <select value={newModelId} onChange={(e) => setNewModelId(e.target.value)} style={input}>
                {models.map((m) => <option key={m.id} value={m.id}>{m.name}</option>)}
              </select>
            </div>
            <button onClick={addUnit} disabled={adding || !newName} style={{ padding: '8px 18px', background: T.orange, color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: adding ? 'not-allowed' : 'pointer', opacity: adding ? 0.6 : 1 }}>
              {adding ? '…' : tx('add', lang)}
            </button>
          </div>
        </div>

        {!loading && (
          <div style={{ background: T.bgPanel, border: T.border, borderRadius: T.radius, overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#161616' }}>
                  {[tx('unit',lang), tx('model',lang), tx('status',lang), '', ''].map((h, i) => (
                    <th key={i} style={{ padding: '10px 12px', fontSize: 11, color: T.textMuted, fontWeight: 600, textTransform: 'uppercase', textAlign: 'left' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {units.map((u) => (
                  <tr key={u.id}>
                    <td style={{ padding: '10px 12px', fontSize: 13, color: T.text, borderBottom: '1px solid #222' }}>{u.name}</td>
                    <td style={{ padding: '10px 12px', fontSize: 13, color: T.textMuted, borderBottom: '1px solid #222' }}>{u.vehicle_models?.name ?? '—'}</td>
                    <td style={{ padding: '10px 12px', borderBottom: '1px solid #222' }}>
                      <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 999, background: u.available ? 'rgba(34,197,94,0.15)' : 'rgba(255,68,68,0.15)', color: u.available ? T.green : T.red }}>
                        {u.available ? tx('available', lang) : tx('unavailable', lang)}
                      </span>
                    </td>
                    <td style={{ padding: '10px 12px', borderBottom: '1px solid #222' }}>
                      <button onClick={() => toggleUnit(u.id, !u.available)} style={{ fontSize: 12, padding: '4px 10px', borderRadius: 6, cursor: 'pointer', background: 'none', border: `1px solid ${u.available ? T.red : T.green}`, color: u.available ? T.red : T.green }}>
                        {u.available ? tx('markUnavailable', lang) : tx('markAvailable', lang)}
                      </button>
                    </td>
                    <td style={{ padding: '10px 12px', borderBottom: '1px solid #222' }}>
                      <button
                        onClick={() => deleteUnit(u.id, u.name)}
                        disabled={deletingId === u.id}
                        title={lang === 'es' ? 'Eliminar unidad' : 'Delete unit'}
                        style={{
                          fontSize: 12, padding: '4px 10px', borderRadius: 6,
                          cursor: deletingId === u.id ? 'not-allowed' : 'pointer',
                          background: 'none', border: `1px solid ${T.red}`, color: T.red,
                          opacity: deletingId === u.id ? 0.5 : 1,
                        }}>
                        {deletingId === u.id ? '…' : (lang === 'es' ? 'Eliminar' : 'Delete')}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
