'use client'

import React, { useState } from 'react'
import { Mail, Phone } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SanMiguelContent() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

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

            {/* Botón de acción principal debajo del H1 y texto */}
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
              Book Your Tour
            </a>
          </div>
        </section>
        {/* --- FIN PRIMERA SECCIÓN --- */}

        {/* --- CONTENIDO INFORMATIVO SOBRE LOS TOURS --- */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '2.5rem', lineHeight: 1.8 }}>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
              San Miguel de Allende is one of Mexico’s most captivating destinations, known for its colorful colonial architecture, cobblestone streets, vibrant cultural scene and historic charm. But there is much more to discover beyond the city center.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.8)' }}>
              With San Miguel de Allende tours from Guey Tours, travelers can combine sightseeing with adventure, nature and authentic local experiences.
            </p>
          </div>
        </section>

        {/* --- SECCIÓN DE CONTACTO (CONTACT US) --- */}
        <section id="contact" style={{ padding: '5rem 2rem', background: '#070707', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '1.5rem', color: '#fff' }}>
                CONTACT US
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Get in touch with us to book your spot or clear any doubts about our San Miguel de Allende tours.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>
                <Phone size={18} color="var(--orange, #d97736)" />
                <span>+52 1 415 109 0021</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'rgba(255,255,255,0.8)' }}>
                <Mail size={18} color="var(--orange, #d97736)" />
                <span>gueycuatritours@gmail.com</span>
              </div>
            </div>

            <div>
              {sent ? (
                <div style={{ background: 'rgba(217,119,54,0.1)', border: '1px solid var(--orange, #d97736)', padding: '2rem', textAlign: 'center', borderRadius: '8px' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>Message Sent!</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>We will reply shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                    style={{ padding: '0.9rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                    style={{ padding: '0.9rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}
                  />
                  <textarea
                    placeholder="Message"
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                    style={{ padding: '0.9rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px', resize: 'vertical' }}
                  />
                  <button type="submit" style={{ padding: '1rem', background: 'var(--orange, #d97736)', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
