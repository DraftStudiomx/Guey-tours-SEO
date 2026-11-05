'use client'

import { useLang } from '@/lib/i18n'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { CheckCircle2 } from 'lucide-react'

export default function About() {
  const { t } = useLang()
  useScrollReveal()

  return (
    <section
      id="about"
      style={{
        background: 'var(--dark, #141414)',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}
        className="about-grid"
        >
          {/* Columna Izquierda: Imagen y la insignia de Google */}
          <div className="reveal-left" style={{ position: 'relative' }}>
            <img
              src='/images/guey-atv-tours-about.jpg'
              alt="ATV Adventure in San Miguel de Allende"
              style={{
                width: '100%',
                height: '380px',
                objectFit: 'cover',
                borderRadius: '12px',
                display: 'block',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              }}
            />
            {/* Insignia de Google */}
            <div style={{
              position: 'absolute',
              bottom: '-1.5rem',
              right: '-1.5rem',
              zIndex: 2,
              background: 'white',
              borderRadius: '8px',
              padding: '6px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            }}>
              <img
                src="/images/google-reviews.png"
                alt="150+ 5-Star Google Reviews"
                style={{ width: '140px', display: 'block' }}
              />
            </div>
          </div>

          {/* Columna Derecha: Títulos, tu información real y botón */}
          <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
              fontWeight: 800,
              letterSpacing: '0.05em',
              color: 'white',
              lineHeight: 1.15,
            }}>
              <span style={{ color: 'var(--orange)' }}>{t('about.title1')}</span> {t('about.title2')}
            </h2>

            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '0.95rem',
              lineHeight: '1.7',
              margin: 0,
            }}>
              {t('about.p1')}
            </p>

            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '0.95rem',
              lineHeight: '1.7',
              margin: 0,
            }}>
              {t('about.p2')}
            </p>

            {/* Viñetas con tus puntos clave */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', margin: '0.4rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'white', fontSize: '0.9rem' }}>
                <CheckCircle2 size={18} color="var(--orange)" />
                <span>{t('about.bullet1')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'white', fontSize: '0.9rem' }}>
                <CheckCircle2 size={18} color="var(--orange)" />
                <span>{t('about.bullet2')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'white', fontSize: '0.9rem' }}>
                <CheckCircle2 size={18} color="var(--orange)" />
                <span>{t('about.bullet3')}</span>
              </div>
            </div>

            <div style={{ marginTop: '0.5rem' }}>
              <a
                href="https://www.gueytours.com/contact"
                style={{
                  display: 'inline-block',
                  border: '2px solid var(--orange)',
                  color: 'white',
                  padding: '0.8rem 2rem',
                  borderRadius: '8px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textDecoration: 'none',
                  transition: 'background 0.3s, color 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--orange)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {t('about.button')}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  )
}
