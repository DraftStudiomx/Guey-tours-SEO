import Link from 'next/link'

export const metadata = { title: 'Booking Confirmed — Guey Tours' }

export default function SuccessPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ textAlign: 'center', maxWidth: 440 }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 500, marginBottom: 8 }}>Booking confirmed!</h1>
        <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', marginBottom: 24 }}>
          Check your email for booking details. We look forward to seeing you on the trail.
        </p>
        <Link href="/book" style={{ padding: '10px 24px', border: '0.5px solid var(--color-border-tertiary)', borderRadius: 8, fontSize: 14, color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
          Book another tour
        </Link>
      </div>
    </main>
  )
}
