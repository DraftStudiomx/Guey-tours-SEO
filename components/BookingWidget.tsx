'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { supabase } from '@/lib/supabase-client'
import { useLang } from '@/lib/i18n'
import type { Tour, VehicleModel, Slot, Lang, ReferralSource } from '@/types/booking'

// ─── Theme ────────────────────────────────────────────────────────────────────
const T = {
  bg:        '#111111',
  bgPanel:   '#1c1c1c',
  bgInput:   '#242424',
  border:    '1px solid rgba(243, 132, 5, 0.57)',
  borderSel: '2px solid #c65e2b',
  accent:    '#c65e2b',
  accentDim: 'rgba(244, 210, 39, 0.15)',
  text:      '#ffffff',
  textMuted: 'rgba(255,255,255,0.55)',
  textDim:   'rgba(255,255,255,0.35)',
  red:       '#ff4444',
  radius:    12,
  radiusSm:  8,
}

type AvailabilityMap = Record<string, Record<string, Record<string, number>>>

const SLOTS_BY_HOURS: Record<number, string[]> = {
  1: ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'],
  2: ['09:00','12:00','14:00','17:00'],
  3: ['09:00','12:00','15:00'],
}

function getSlotsForTour(tour: Tour | null): string[] {
  if (!tour) return []
  return SLOTS_BY_HOURS[tour.length_hours] ?? SLOTS_BY_HOURS[1]
}

function formatSlot(slot: string): string {
  const [h, m] = slot.split(':').map(Number)
  const ampm = h < 12 ? 'AM' : 'PM'
  const hour = h % 12 === 0 ? 12 : h % 12
  return `${hour}:${String(m).padStart(2, '0')} ${ampm}`
}

function pad(n: number) { return String(n).padStart(2, '0') }
function ds(y: number, m: number, d: number) { return `${y}-${pad(m)}-${pad(d)}` }

function slotOpen(availability: AvailabilityMap, date: string, slot: string): boolean {
  const s = availability[date]?.[slot]
  if (!s) return false
  return Object.values(s).some((c) => c > 0)
}

function anySlotOpen(availability: AvailabilityMap, date: string, slots: string[]): boolean {
  return slots.some((s) => slotOpen(availability, date, s))
}

function formatDate(date: string, slot: Slot, t: (k: string) => string, lang: Lang): string {
  const [y, mo, d] = date.split('-')
  const month = t(`booking.monthsShort.${parseInt(mo) - 1}`)
  const day = parseInt(d)
  return `${day} ${month} ${y} — ${formatSlot(slot)}`
}

function interp(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''))
}

const panel      = { background: T.bgPanel, border: T.border, borderRadius: T.radius, padding: '1rem 1.25rem' }
const btnAccent  = { background: T.accent, color: '#fff', border: 'none', borderRadius: T.radiusSm, fontSize: 15, fontWeight: 500, cursor: 'pointer', padding: '11px 24px' }
const btnGhost   = { background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, color: T.textMuted, lineHeight: 1 }
const h2Style    = { fontSize: 18, fontWeight: 600, color: T.text }
const labelStyle = { fontSize: 12, color: T.textMuted, marginBottom: 4 }
const inputStyle = { border: T.border, borderRadius: T.radiusSm, padding: '9px 12px', fontSize: 14, background: T.bgInput, color: T.text, outline: 'none', fontFamily: 'inherit' }

// ─── Component ────────────────────────────────────────────────────────────────
export default function BookingWidget({ initialTourName, onClose }: { initialTourName?: string; onClose?: () => void }) {
  const { lang, t } = useLang()

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const widgetRef = useRef<HTMLDivElement>(null)

  const [tours, setTours]               = useState<Tour[]>([])
  const [vehicles, setVehicles]         = useState<VehicleModel[]>([])
  const [availability, setAvailability] = useState<AvailabilityMap>({})
  const [step, setStep]                 = useState(1)
  const [tour, setTour]                 = useState<Tour | null>(null)
  const [calYear, setCalYear]           = useState(today.getFullYear())
  const [calMonth, setCalMonth]         = useState(today.getMonth() + 1)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null)
  const [people, setPeople]             = useState(2)
  const [vehicleQtys, setVehicleQtys]   = useState<Record<string, number>>({})
  const [firstName, setFirstName]       = useState('')
  const [lastName, setLastName]         = useState('')
  const [email, setEmail]               = useState('')
  const [phone, setPhone]               = useState('')
  const [accommodation, setAccommodation] = useState('')
  const [referralSource, setReferralSource] = useState<ReferralSource | ''>('')
  const [loading, setLoading]           = useState(true)
  const [submitting, setSubmitting]     = useState(false)
  const [error, setError]               = useState<string | null>(null)

  function hoursLabel(n: number): string {
    return `${n}${n === 1 ? t('booking.hour') : t('booking.hours')}`
  }

  useEffect(() => {
    async function fetchData() {
      const [{ data: toursData }, { data: vehiclesData }] = await Promise.all([
        supabase.from('tours').select('*').eq('active', true).order('name'),
        supabase.from('vehicle_models').select('*').order('name'),
      ])
      const tourList = toursData ?? []
      setTours(tourList)
      setVehicles(vehiclesData ?? [])
      setLoading(false)
      if (initialTourName) {
        const match = tourList.find((t) => t.name.toLowerCase() === initialTourName.toLowerCase())
        console.log('initialTourName:', initialTourName)
        console.log('tourList names:', tourList.map(t => t.name))
        console.log('match:', match)
        if (match) {
          setTour(match)
          setStep(2)
        }
      }
    }
    fetchData()
  }, [])

  const fetchAvailability = useCallback(async (year: number, month: number, tourId: string) => {
    const res = await fetch(`/api/availability?year=${year}&month=${month}&tour_id=${tourId}`)
    const data = await res.json()
    setAvailability((prev) => ({ ...prev, ...data }))
  }, [])

  useEffect(() => {
    if (!tour) return
    setAvailability({})
    fetchAvailability(calYear, calMonth, tour.id)
  }, [calYear, calMonth, tour, fetchAvailability])

  const totalCapacity    = vehicles.reduce((sum, v) => sum + (vehicleQtys[v.id] ?? 0) * v.capacity, 0)
  const capacityMet      = totalCapacity >= people
  const selectedVehicles = vehicles.filter((v) => (vehicleQtys[v.id] ?? 0) > 0)

  function getRate(v: VehicleModel, hours: number): number {
    if (hours <= 1) return v.rate_1hr
    if (hours <= 2) return v.rate_2hr
    return v.rate_3hr
  }

  const totalPrice = vehicles.reduce((sum, v) => {
    return sum + (vehicleQtys[v.id] ?? 0) * getRate(v, tour?.length_hours ?? 0)
  }, 0)

  function goStep(n: number) {
    setError(null)
    setStep(n)
    setTimeout(() => {
      widgetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 50)
  }

  function selectTour(tr: Tour) {
    setTour(tr)
    setSelectedDate(null)
    setSelectedSlot(null)
    setVehicleQtys({})
    setAvailability({})
    setTimeout(() => goStep(2), 150)
  }

  function changeMonth(dir: number) {
    let m = calMonth + dir, y = calYear
    if (m > 12) { m = 1; y++ }
    if (m < 1)  { m = 12; y-- }
    setCalMonth(m); setCalYear(y)
  }

  function selectDate(d: string) { setSelectedDate(d); setSelectedSlot(null) }

  function selectSlot(s: Slot) {
    if (!selectedDate || !slotOpen(availability, selectedDate, s)) return
    setSelectedSlot(s)
  }

  function changeVeh(vehicleId: string, dir: number) {
    const v     = vehicles.find((x) => x.id === vehicleId)!
    const cur   = vehicleQtys[vehicleId] ?? 0
    const avail = selectedDate && selectedSlot ? (availability[selectedDate]?.[selectedSlot]?.[v.id] ?? 4) : 4
    setVehicleQtys((prev) => ({ ...prev, [vehicleId]: Math.max(0, Math.min(avail, cur + dir)) }))
  }

  function validateStep5(): boolean {
    if (!firstName || !lastName || !email) {
      setError(t('booking.error.nameEmail'))
      return false
    }
    return true
  }

  async function handleSubmit() {
    if (!tour || !selectedDate || !selectedSlot) return
    if (!validateStep5()) return
    setSubmitting(true); setError(null)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tour_id: tour.id, date: selectedDate, slot: selectedSlot, num_people: people,
          vehicles: selectedVehicles.map((v) => ({ model_id: v.id, quantity: vehicleQtys[v.id] })),
          principal_name: `${firstName} ${lastName}`.trim(), email, phone, total_price: totalPrice,
          lang,
          accommodation: accommodation.trim() || undefined,
          referral_source: referralSource || undefined,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? t('booking.error.generic'))
      window.location.href = data.url
    } catch (err: any) {
      setError(err.message); setSubmitting(false)
    }
  }

  function renderCalendar() {
    const slots       = getSlotsForTour(tour)
    const firstDay    = new Date(calYear, calMonth - 1, 1).getDay()
    const daysInMonth = new Date(calYear, calMonth, 0).getDate()
    const cells: JSX.Element[] = []
    for (let i = 0; i < firstDay; i++) cells.push(<div key={`e${i}`} />)
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr    = ds(calYear, calMonth, d)
      const isPast     = new Date(calYear, calMonth - 1, d) < today
      const anyOpen    = anySlotOpen(availability, dateStr, slots)
      const isSelected = selectedDate === dateStr
      const disabled   = isPast || !anyOpen
      cells.push(
        <div
          key={dateStr}
          onClick={() => { if (!disabled) selectDate(dateStr) }}
          style={{
            fontSize: 13, padding: '7px 4px', borderRadius: T.radiusSm, textAlign: 'center',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.3 : 1,
            textDecoration: !isPast && !anyOpen ? 'line-through' : 'none',
            background: isSelected ? T.accent : 'transparent',
            color: isSelected ? '#fff' : T.text,
            border: isSelected ? 'none' : '1px solid transparent',
            transition: 'background 0.15s',
          }}
        >{d}</div>
      )
    }
    return cells
  }

  function CapacityBar() {
    const pct        = Math.min(100, Math.round((totalCapacity / Math.max(people, 1)) * 100))
    const peopleNoun = people === 1
      ? (lang === 'es' ? 'persona' : 'person')
      : (lang === 'es' ? 'personas' : 'people')
    const selectedText = totalCapacity === 1
      ? interp(t('booking.capacity.selected_one'), { p: people, noun: peopleNoun })
      : interp(t('booking.capacity.selected_other'), { s: totalCapacity, p: people, noun: peopleNoun })
    const missing      = people - totalCapacity
    const needMoreText = missing === 1
      ? t('booking.capacity.needMore_one')
      : interp(t('booking.capacity.needMore_other'), { n: missing })

    return (
      <div style={{ marginTop: 16 }}>
        <div style={{ background: '#2a2a2a', borderRadius: 4, height: 6, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${pct}%`, background: capacityMet ? T.accent : T.red, borderRadius: 4, transition: 'width 0.2s' }} />
        </div>
        <p style={{ fontSize: 12, color: T.textMuted, marginTop: 6 }}>{selectedText}</p>
        {!capacityMet && totalCapacity > 0 && (
          <p style={{ fontSize: 12, color: T.red, marginTop: 4 }}>{needMoreText}</p>
        )}
      </div>
    )
  }

  if (loading) return (
    <div style={{ padding: '3rem', textAlign: 'center', color: T.textMuted, fontSize: 14, background: T.bg }}>
      {t('booking.loading')}
    </div>
  )

  const dayLabels  = [0,1,2,3,4,5,6].map((i) => t(`booking.days.${i}`))
  const accomLabel = lang === 'es' ? 'Dónde te alojas' : 'Where are you staying'
  const accomPh    = lang === 'es' ? 'Hotel, Airbnb o zona' : 'Hotel, Airbnb, or area'

  return (
    <div
      ref={widgetRef}
      style={{ background: T.bg, maxWidth: 680, width: '100%', margin: '0 auto', padding: '1.5rem 1rem', fontFamily: 'sans-serif', boxSizing: 'border-box' }}
    >
      {/* Progress bar */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 24 }}>
        {[1,2,3,4,5].map((n) => (
          <div key={n} style={{ flex: 1, height: 3, borderRadius: 2, background: step >= n ? T.accent : '#333', transition: 'background 0.2s' }} />
        ))}
      </div>

      {/* ── Step 1 ── */}
      {step === 1 && (
        <>
          <h2 style={{ ...h2Style, marginBottom: 20 }}>{t('booking.step1.title')}</h2>
          <div className="bw-tour-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {tours.map((tr) => (
              <div key={tr.id} onClick={() => selectTour(tr)} style={{
                ...panel,
                cursor: 'pointer',
                border: tour?.id === tr.id ? T.borderSel : T.border,
                transition: 'border-color 0.15s',
              }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: T.text, marginBottom: 4 }}>{tr.name}</div>
                <div style={{ fontSize: 12, color: T.accent }}>{hoursLabel(tr.length_hours)}</div>
                {tr.description && <div style={{ fontSize: 12, color: T.textMuted, marginTop: 6, lineHeight: 1.5 }}>{tr.description}</div>}
              </div>
            ))}
          </div>
        </>
      )}

      {/* ── Step 2 ── */}
      {step === 2 && (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <button onClick={() => goStep(1)} style={btnGhost}>←</button>
            <h2 style={h2Style}>{t('booking.step2.title')}</h2>
          </div>

          {tour && (
            <div style={{ display: 'inline-block', background: T.accentDim, border: T.border, borderRadius: 999, padding: '4px 14px', fontSize: 12, color: T.accent, marginBottom: 16 }}>
              {tour.name} · {hoursLabel(tour.length_hours)}
            </div>
          )}

          <div style={{ ...panel, marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <button onClick={() => changeMonth(-1)} style={{ background: '#2a2a2a', border: T.border, borderRadius: T.radiusSm, width: 30, height: 30, cursor: 'pointer', color: T.text, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
              <span style={{ fontSize: 15, fontWeight: 500, color: T.text }}>
                {t(`booking.months.${calMonth - 1}`)} {calYear}
              </span>
              <button onClick={() => changeMonth(1)} style={{ background: '#2a2a2a', border: T.border, borderRadius: T.radiusSm, width: 30, height: 30, cursor: 'pointer', color: T.text, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, textAlign: 'center' }}>
              {dayLabels.map((l, i) => <div key={i} style={{ fontSize: 11, color: T.textDim, padding: '4px 0' }}>{l}</div>)}
              {renderCalendar()}
            </div>
          </div>

          <p style={{ fontSize: 13, color: T.textMuted, marginBottom: 8 }}>{t('booking.step2.selectTime')}</p>
          <div className="bw-time-slots" style={{
            display: 'grid',
            gridTemplateColumns: tour?.length_hours === 1 ? 'repeat(3, 1fr)' : `repeat(${Math.min(getSlotsForTour(tour).length, 4)}, 1fr)`,
            gap: 8,
          }}>
            {getSlotsForTour(tour).map((s) => {
              const open = selectedDate ? slotOpen(availability, selectedDate, s) : false
              const sel  = selectedSlot === s
              return (
                <button
                  key={s}
                  onClick={() => selectSlot(s)}
                  disabled={!selectedDate || !open}
                  style={{
                    padding: '10px 6px',
                    cursor: selectedDate && open ? 'pointer' : 'not-allowed',
                    border: sel ? T.borderSel : T.border,
                    borderRadius: T.radiusSm,
                    background: sel ? T.accentDim : T.bgPanel,
                    fontSize: 13,
                    color: sel ? T.accent : T.text,
                    fontWeight: sel ? 600 : 400,
                    opacity: !selectedDate || !open ? 0.35 : 1,
                    textDecoration: selectedDate && !open ? 'line-through' : 'none',
                    transition: 'all 0.15s',
                  }}
                >
                  {formatSlot(s)}
                </button>
              )
            })}
          </div>

          <div style={{ marginTop: 16, textAlign: 'right' }}>
            <button onClick={() => goStep(3)} disabled={!selectedDate || !selectedSlot} style={{
              ...btnAccent,
              opacity: selectedDate && selectedSlot ? 1 : 0.4,
              cursor: selectedDate && selectedSlot ? 'pointer' : 'not-allowed',
            }}>{t('booking.btn.next')}</button>
          </div>
        </>
      )}

      {/* ── Step 3 ── */}
      {step === 3 && (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <button onClick={() => goStep(2)} style={btnGhost}>←</button>
            <h2 style={h2Style}>{t('booking.step3.title')}</h2>
          </div>
          <div style={{ ...panel, marginBottom: 20 }}>
            <p style={{ fontSize: 13, color: T.textMuted, marginBottom: 16 }}>{t('booking.step3.numGuests')}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <button onClick={() => setPeople((p) => Math.max(1, p - 1))} style={{ width: 38, height: 38, border: T.border, borderRadius: T.radiusSm, background: T.bgInput, cursor: 'pointer', fontSize: 20, color: T.text }}>−</button>
              <span style={{ fontSize: 26, fontWeight: 600, color: T.text, minWidth: 36, textAlign: 'center' }}>{people}</span>
              <button onClick={() => setPeople((p) => Math.min(12, p + 1))} style={{ width: 38, height: 38, border: T.border, borderRadius: T.radiusSm, background: T.bgInput, cursor: 'pointer', fontSize: 20, color: T.text }}>+</button>
              <span style={{ fontSize: 13, color: T.textMuted }}>{t('booking.step3.peopleSuffix')}</span>
            </div>
            <p style={{ fontSize: 12, color: T.textDim, marginTop: 14 }}>{t('booking.step3.max')}</p>
          </div>
          <button onClick={() => { setVehicleQtys({}); goStep(4) }} style={{ ...btnAccent, width: '100%' }}>{t('booking.btn.next')}</button>
        </>
      )}

      {/* ── Step 4 ── */}
      {step === 4 && (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <button onClick={() => goStep(3)} style={btnGhost}>←</button>
            <h2 style={h2Style}>{t('booking.step4.title')}</h2>
          </div>
          <p style={{ fontSize: 13, color: T.textMuted, marginBottom: 14 }}>
            {people === 1
              ? t('booking.step4.intro_one')
              : interp(t('booking.step4.intro_other'), { n: people })}
          </p>
          <div className="bw-vehicle-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {vehicles.map((v) => {
              const qty   = vehicleQtys[v.id] ?? 0
              const avail = selectedDate && selectedSlot ? (availability[selectedDate]?.[selectedSlot]?.[v.id] ?? 4) : 4
              return (
                <div key={v.id} style={{ border: qty > 0 ? T.borderSel : T.border, borderRadius: T.radius, overflow: 'hidden', background: T.bgPanel }}>
                  {v.video_url ? (
                    <video src={v.video_url} autoPlay loop muted playsInline preload="metadata"
                      style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block', background: '#000' }} />
                  ) : (
                    <div style={{ width: '100%', height: 180, background: '#000' }} />
                  )}
                  <div style={{ padding: '0.75rem', background: qty > 0 ? T.accentDim : T.bgPanel }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: T.text, marginBottom: 2 }}>{v.name}</div>
                    <div style={{ fontSize: 11, color: T.textMuted, marginBottom: 2 }}>{t('booking.step4.seats')} {v.capacity}</div>
                    <div style={{ fontSize: 13, color: T.accent, fontWeight: 500, marginBottom: 6 }}>
                      {tour ? `$${getRate(v, tour.length_hours).toLocaleString()} MXN` : `${t('booking.step4.from')} $${v.rate_1hr.toLocaleString()} MXN`}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: 11, color: T.textDim }}>{avail} {t('booking.step4.available')}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <button onClick={() => changeVeh(v.id, -1)} style={{ width: 26, height: 26, border: T.border, borderRadius: 6, background: T.bgInput, cursor: 'pointer', fontSize: 16, color: T.text }}>−</button>
                        <span style={{ fontSize: 14, fontWeight: 600, color: T.text, minWidth: 18, textAlign: 'center' }}>{qty}</span>
                        <button onClick={() => changeVeh(v.id, 1)} disabled={qty >= avail} style={{ width: 26, height: 26, border: T.border, borderRadius: 6, background: T.bgInput, cursor: qty >= avail ? 'not-allowed' : 'pointer', fontSize: 16, color: T.text, opacity: qty >= avail ? 0.3 : 1 }}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <CapacityBar />
          <div style={{ marginTop: 20, textAlign: 'right' }}>
            <button onClick={() => goStep(5)} disabled={!capacityMet} style={{ ...btnAccent, opacity: capacityMet ? 1 : 0.4, cursor: capacityMet ? 'pointer' : 'not-allowed' }}>{t('booking.btn.next')}</button>
          </div>
        </>
      )}

      {/* ── Step 5 ── */}
      {step === 5 && (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <button onClick={() => goStep(4)} style={btnGhost}>←</button>
            <h2 style={h2Style}>{t('booking.step5.title')}</h2>
          </div>

          <div style={{ ...panel, marginBottom: 20 }}>
            {[
              [t('booking.summary.tour'),   `${tour?.name} (${hoursLabel(tour?.length_hours ?? 0)})`],
              [t('booking.summary.date'),   selectedDate && selectedSlot ? formatDate(selectedDate, selectedSlot, t, lang) : ''],
              [t('booking.summary.guests'), String(people)],
            ].map(([label, val]) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '5px 0', borderBottom: '1px solid #2a2a2a' }}>
                <span style={{ color: T.textMuted }}>{label}</span>
                <span style={{ color: T.text }}>{val}</span>
              </div>
            ))}
            {selectedVehicles.map((v) => {
              const qty  = vehicleQtys[v.id]
              const cost = qty * getRate(v, tour?.length_hours ?? 0)
              return (
                <div key={v.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '5px 0', borderBottom: '1px solid #2a2a2a' }}>
                  <span style={{ color: T.textMuted }}>{qty}× {v.name}</span>
                  <span style={{ color: T.text }}>${cost.toLocaleString()} MXN</span>
                </div>
              )
            })}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 17, fontWeight: 600, marginTop: 10, paddingTop: 10 }}>
              <span style={{ color: T.text }}>{t('booking.summary.total')}</span>
              <span style={{ color: T.accent }}>${totalPrice.toLocaleString()} MXN</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            {[
              { label: t('booking.form.firstName'), val: firstName, set: setFirstName, type: 'text',  ph: t('booking.form.firstNamePh'), full: false },
              { label: t('booking.form.lastName'),  val: lastName,  set: setLastName,  type: 'text',  ph: t('booking.form.lastNamePh'),  full: false },
              { label: t('booking.form.email'),     val: email,     set: setEmail,     type: 'email', ph: t('booking.form.emailPh'),     full: true  },
              { label: t('booking.form.phone'),     val: phone,     set: setPhone,     type: 'tel',   ph: t('booking.form.phonePh'),     full: true  },
            ].map(({ label, val, set, type, ph, full }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 4, gridColumn: full ? '1 / -1' : 'auto' }}>
                <label style={labelStyle}>{label}</label>
                <input type={type} value={val} onChange={(e) => set(e.target.value)} placeholder={ph} style={inputStyle} />
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 14 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <label style={labelStyle}>
                {accomLabel} <span style={{ color: T.textDim }}>{t('booking.form.optional')}</span>
              </label>
              <input
                type="text"
                value={accommodation}
                onChange={(e) => setAccommodation(e.target.value)}
                placeholder={accomPh}
                style={inputStyle}
              />
              <span style={{ fontSize: 11, color: T.textDim, marginTop: 2 }}>
                {lang === 'es' ? 'Para que sepamos dónde recogerte' : 'So we know where to pick you up'}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <label style={labelStyle}>
                {t('booking.form.referral')} <span style={{ color: T.textDim }}>{t('booking.form.optional')}</span>
              </label>
              <select
                value={referralSource}
                onChange={(e) => setReferralSource(e.target.value as ReferralSource | '')}
                style={inputStyle}
              >
                <option value="">{t('booking.referral.select')}</option>
                <option value="google">{t('booking.referral.google')}</option>
                <option value="facebook">{t('booking.referral.facebook')}</option>
                <option value="instagram">{t('booking.referral.instagram')}</option>
                <option value="tiktok">{t('booking.referral.tiktok')}</option>
                <option value="friend">{t('booking.referral.friend')}</option>
                <option value="hotel">{t('booking.referral.hotel')}</option>
                <option value="travel_site">{t('booking.referral.travel_site')}</option>
                <option value="walking_by">{t('booking.referral.walking_by')}</option>
                <option value="other">{t('booking.referral.other')}</option>
              </select>
            </div>
          </div>

          {error && <p style={{ fontSize: 13, color: T.red, marginBottom: 12 }}>{error}</p>}

          <button
            onClick={handleSubmit}
            disabled={submitting}
            style={{ ...btnAccent, width: '100%', opacity: submitting ? 0.6 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}
          >
            {submitting ? t('booking.btn.redirecting') : t('booking.btn.confirm')}
          </button>
        </>
      )}
    </div>
  )
}
