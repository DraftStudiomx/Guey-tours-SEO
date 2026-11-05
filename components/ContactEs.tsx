'use client'

import { useLang } from '@/lib/i18n'
import { useState } from 'react'
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react'
import { useScrollReveal } from '@/lib/useScrollReveal'

export default function Contact() {
  const { t } = useLang()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  useScrollReveal()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.9rem 1rem',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: 'white',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    borderRadius: '2px',
  }

  return (
    <section
      id="contact"
      style={{
        background: 'var(--dark)',
        padding: '6rem 0',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent, var(--orange), transparent)',
      }} />

      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="reveal">
          <h2 className="section-heading">{t('contact.title')}</h2>
          <div className="section-divider" style={{ marginTop: '1rem' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'start',
        }}
        className="contact-grid"
        >
          {/* Info side */}
          <div className="reveal-left">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              {[
                {
                  icon: MapPin,
                  label: t('contact.address'),
                },
                {
                  icon: Mail,
                  label: 'gueycuatritours@gmail.com',
                  href: 'mailto:gueycuatritours@gmail.com',
                },
                {
                  icon: Phone,
                  label: '+52 1 415 109 0021',
                  href: 'tel:+5214151090021',
                },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      background: 'var(--orange)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '0.1rem',
                    }}>
                      <Icon size={18} color="white" />
                    </div>
                    {item.href ? (
                      <a href={item.href} style={{
                        color: 'rgba(255,255,255,0.75)',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        lineHeight: 1.5,
                        paddingTop: '0.6rem',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => { (e.target as HTMLElement).style.color = 'var(--orange)' }}
                      onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.75)' }}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span style={{
                        color: 'rgba(255,255,255,0.75)',
                        fontSize: '0.95rem',
                        lineHeight: 1.5,
                        paddingTop: '0.6rem',
                      }}>
                        {item.label}
                      </span>
                    )}
                  </div>
                )
              })}

              {/* <a
              
                href="https://goo.gl/maps/7suNDjfq9fHgryVM8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', width: 'fit-content' }}
              >
                {t('contact.maps')} <ExternalLink size={14} />
              </a> */}
            </div>
          </div>

          {/* Form side */}
          <div className="reveal-right">
            {sent ? (
              <div style={{
                background: 'rgba(232,84,26,0.1)',
                border: '1px solid var(--orange)',
                padding: '2rem',
                textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>✓ Message sent!</div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <input
                  type="text"
                  placeholder={t('contact.name')}
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                  style={inputStyle}
                  onFocus={e => { (e.target as HTMLElement).style.borderColor = 'var(--orange)' }}
                  onBlur={e => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)' }}
                />
                <input
                  type="email"
                  placeholder={t('contact.email')}
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                  style={inputStyle}
                  onFocus={e => { (e.target as HTMLElement).style.borderColor = 'var(--orange)' }}
                  onBlur={e => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)' }}
                />
                <textarea
                  placeholder={t('contact.message')}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => { (e.target as HTMLElement).style.borderColor = 'var(--orange)' }}
                  onBlur={e => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)' }}
                />
                <button type="submit" className="btn-orange" style={{ cursor: 'pointer', border: 'none', width: '100%', textAlign: 'center' }}>
                  {t('contact.send')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  )
}
