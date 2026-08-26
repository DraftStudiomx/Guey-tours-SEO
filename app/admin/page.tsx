'use client'

import { useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'
import { type Lang, tx } from '@/lib/translations'

export default function AdminLoginPage() {
  const router = useRouter()
  const [lang, setLang]         = useState<Lang>('es')
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState<string | null>(null)
  const [loading, setLoading]   = useState(false)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  async function handleLogin() {
    setLoading(true); setError(null)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) { setError(error.message); setLoading(false); return }
    router.push('/admin/dashboard')
  }

  return (
    <div style={{
      minHeight: '100vh', background: '#111', display: 'flex',
      alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif',
    }}>
      <div style={{
        background: '#1c1c1c', border: '1px solid rgba(255,107,0,0.3)',
        borderRadius: 16, padding: '2.5rem 2rem', width: '100%', maxWidth: 380,
        position: 'relative',
      }}>
        {/* Language toggle */}
        <div style={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 4 }}>
          {(['es', 'en'] as Lang[]).map((l) => (
            <button key={l} onClick={() => setLang(l)} style={{
              fontSize: 11, fontWeight: 600, padding: '3px 8px', borderRadius: 4, cursor: 'pointer',
              background: lang === l ? '#ff6b00' : 'none',
              color: lang === l ? '#fff' : 'rgba(255,255,255,0.4)',
              border: lang === l ? 'none' : '1px solid rgba(255,255,255,0.15)',
              textTransform: 'uppercase',
            }}>{l}</button>
          ))}
        </div>

        <div style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 6 }}>Guey Tours</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 28 }}>
          {tx('adminDashboard', lang)}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div>
            <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', display: 'block', marginBottom: 4 }}>
              {tx('email', lang)}
            </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              style={{ width: '100%', background: '#242424', border: '1px solid rgba(255,107,0,0.3)', borderRadius: 8, padding: '9px 12px', fontSize: 14, color: '#fff', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
          <div>
            <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', display: 'block', marginBottom: 4 }}>
              {tx('password', lang)}
            </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              style={{ width: '100%', background: '#242424', border: '1px solid rgba(255,107,0,0.3)', borderRadius: 8, padding: '9px 12px', fontSize: 14, color: '#fff', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
        </div>

        {error && <p style={{ fontSize: 13, color: '#ff4444', marginTop: 12 }}>{error}</p>}

        <button onClick={handleLogin} disabled={loading} style={{
          marginTop: 20, width: '100%', padding: '11px 0',
          background: '#ff6b00', color: '#fff', border: 'none',
          borderRadius: 8, fontSize: 15, fontWeight: 500,
          cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1,
        }}>
          {loading ? tx('signingIn', lang) : tx('signIn', lang)}
        </button>
      </div>
    </div>
  )
}
