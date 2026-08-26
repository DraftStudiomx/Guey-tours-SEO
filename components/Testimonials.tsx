'use client'

import { useLang } from '@/lib/i18n'
import { Star } from 'lucide-react'
import { useScrollReveal } from '@/lib/useScrollReveal'

interface Testimonial {
  _id: string
  name: string
  date: string
  text_en: string
  text_es: string
  stars: number
}

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const { lang, t } = useLang()
  useScrollReveal()

  return (
    <section
      id="testimonials"
      style={{
        background: 'var(--dark)',
        padding: '6rem 0',
        position: 'relative',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(232,84,26,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="reveal">
          <div style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--orange)',
            fontSize: '0.85rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}>
            ——— {t('testimonials.subtitle')} ———
          </div>
          <h2 className="section-heading">{t('testimonials.title')}</h2>
          <div className="section-divider" style={{ marginTop: '1rem' }} />

          {/* Rating badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(232,84,26,0.1)',
            border: '1px solid rgba(232,84,26,0.3)',
            padding: '0.5rem 1.2rem',
            marginTop: '1rem',
          }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="var(--orange)" color="var(--orange)" />
            ))}
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.7)',
              marginLeft: '0.3rem',
            }}>
              {t('testimonials.rating')}
            </span>
          </div>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {testimonials.map((item, i) => (
            <div
              key={item._id}
              className="reveal"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                padding: '2rem',
                position: 'relative',
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              {/* Quote mark */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1.5rem',
                fontFamily: 'Georgia, serif',
                fontSize: '4rem',
                color: 'var(--orange)',
                opacity: 0.2,
                lineHeight: 1,
              }}>"</div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
                {[...Array(item.stars)].map((_, si) => (
                  <Star key={si} size={14} fill="var(--orange)" color="var(--orange)" />
                ))}
              </div>

              {/* Text */}
              <p style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '0.9rem',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
                fontStyle: 'italic',
              }}>
                {lang === 'es' && item.text_es ? item.text_es : item.text_en}
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  flexShrink: 0,
                }}>
                  {item.name[0]}
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    letterSpacing: '0.03em',
                  }}>{item.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>{item.date}</div>
                </div>
                <div style={{
                  marginLeft: 'auto',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.7rem',
                  color: 'rgba(255,255,255,0.3)',
                  letterSpacing: '0.05em',
                }}>Google</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
