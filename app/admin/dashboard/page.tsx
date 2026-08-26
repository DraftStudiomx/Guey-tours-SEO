'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'
import { type Lang, tx } from '@/lib/translations'
import BookingsTab     from './BookingsTab'
import BlockedSlotsTab from './BlockedSlotsTab'
import ToursTab        from './ToursTab'
import VehiclesTab     from './VehiclesTab'
import SeasonsTab      from './SeasonsTab'

const T = {
  bg:      '#111111',
  bgPanel: '#1c1c1c',
  border:  '1px solid rgba(255,107,0,0.3)',
  orange:  '#ff6b00',
  text:    '#ffffff',
  textMuted: 'rgba(255,255,255,0.55)',
}

export default function DashboardPage() {
  const [lang, setLang]     = useState<Lang>('es')
  const [tab, setTab]       = useState('bookings')
  const [email, setEmail]   = useState('')
  const router              = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) setEmail(data.user.email ?? '')
    })
  }, [])

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/admin')
  }

  const TABS = [
    { id: 'bookings', label: tx('tabBookings',   lang) },
    { id: 'blocked',  label: tx('tabBlockSlots', lang) },
    { id: 'tours',    label: tx('tabTours',      lang) },
    { id: 'vehicles', label: tx('tabVehicles',   lang) },
    { id: 'seasons',  label: tx('tabSeasons',    lang) },
  ]

  return (
    <div style={{ minHeight: '100vh', background: T.bg, fontFamily: 'sans-serif' }}>

      {/* Top bar */}
      <div style={{
        background: T.bgPanel, borderBottom: T.border,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 1.5rem', height: 56,
      }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: T.text }}>Guey Tours Admin</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Language toggle */}
          <div style={{ display: 'flex', gap: 4 }}>
            {(['es', 'en'] as Lang[]).map((l) => (
              <button key={l} onClick={() => setLang(l)} style={{
                fontSize: 11, fontWeight: 600, padding: '3px 8px', borderRadius: 4, cursor: 'pointer',
                background: lang === l ? T.orange : 'none',
                color: lang === l ? '#fff' : 'rgba(255,255,255,0.35)',
                border: lang === l ? 'none' : '1px solid rgba(255,255,255,0.15)',
                textTransform: 'uppercase',
              }}>{l}</button>
            ))}
          </div>
          <span style={{ fontSize: 12, color: T.textMuted }}>{email}</span>
          <button onClick={handleLogout} style={{
            fontSize: 12, color: T.textMuted, background: 'none',
            border: T.border, borderRadius: 6, padding: '5px 12px', cursor: 'pointer',
          }}>
            {tx('signOut', lang)}
          </button>
        </div>
      </div>

      {/* Tab nav */}
      <div style={{ borderBottom: T.border, padding: '0 1.5rem', display: 'flex', gap: 4 }}>
        {TABS.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            padding: '12px 16px', fontSize: 13, fontWeight: 500,
            background: 'none', border: 'none', cursor: 'pointer',
            color: tab === t.id ? T.orange : T.textMuted,
            borderBottom: tab === t.id ? `2px solid ${T.orange}` : '2px solid transparent',
            transition: 'color 0.15s',
          }}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div style={{ padding: '1.5rem', maxWidth: 900, margin: '0 auto' }}>
        {tab === 'bookings' && <BookingsTab     lang={lang} />}
        {tab === 'blocked'  && <BlockedSlotsTab lang={lang} />}
        {tab === 'tours'    && <ToursTab        lang={lang} />}
        {tab === 'vehicles' && <VehiclesTab     lang={lang} />}
        {tab === 'seasons'  && <SeasonsTab      lang={lang} />}
      </div>
    </div>
  )
}
