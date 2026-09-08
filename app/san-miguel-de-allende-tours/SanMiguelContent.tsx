'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SanMiguelContent() {
  return (
    <>
      <Header />

      <main style={{ background: 'var(--dark, #0b0b0b)', color: '#fff', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
        {/* --- INICIO PRIMERA SECCIÓN --- */}
        <section style={{
          padding: '8rem 2rem 5rem',
          textAlign: 'center',
          background: 'linear-gradient(180deg, rgba(217,119,54,0.15) 0%, rgba(11,11,11,1) 100%)'
        }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
              San Miguel de Allende Tours
            </h1>

            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Discover San Miguel de Allende from a different perspective with Guey Tours. Go beyond the traditional sightseeing experience and explore natural landscapes, rural roads, scenic viewpoints and outdoor adventures with local guides who know the destination from the inside.
            </p>

            <a
              href="#contact"
              style={{
                display: 'inline-block',
                background: 'var(--orange, #d97736)',
                color: '#fff',
                padding: '0.9rem 2rem',
                borderRadius: '4px',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontFamily: 'var(--font-heading)',
                boxShadow: '0 4px 14px rgba(217,119,54,0.3)',
                transition: 'background 0.2s'
              }}
            >
              CONTACT US
            </a>
          </div>
        </section>
        {/* --- FIN PRIMERA SECCIÓN --- */}
      </main>

      <Footer />
    </>
  )
}
