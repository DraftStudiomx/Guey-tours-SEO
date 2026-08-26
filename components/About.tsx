'use client'

import { useLang } from '@/lib/i18n'
import { Shield, Users, Truck } from 'lucide-react'
import { useScrollReveal } from '@/lib/useScrollReveal'

const features = [
  { iconKey: 'safety', icon: Shield },
  { iconKey: 'bilingual', icon: Users },
  { iconKey: 'vehicles', icon: Truck },
]

export default function About() {
  const { t } = useLang()
  useScrollReveal()

  return (
    <>
      {/* About section */}
      <section
        id="about"
        style={{
          background: 'var(--dark)',
          padding: '6rem 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background texture */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          background: 'radial-gradient(ellipse at right, rgba(232,84,26,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center',
          }}
          className="about-grid"
          >
            {/* Image side */}
            <div className="reveal-left" style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '-1.5rem',
                left: '-1.5rem',
                width: '60%',
                height: '60%',
                border: '3px solid var(--orange)',
                zIndex: 0,
                opacity: 0.4,
              }} />
              <img
                src='/images/guey-atv-tours-about.jpg'
                alt="ATV Tour"
                style={{
                  width: '100%',
                  height: '500px',
                  objectFit: 'cover',
                  position: 'relative',
                  zIndex: 1,
                  display: 'block',
                }}
              />
              {/* Stats badge */}
              <div style={{
                position: 'absolute',
                bottom: '-2rem',
                right: '-2rem',
                zIndex: 2,
              }}>
                <img
                  src="/images/google-reviews.png"
                  alt="140+ 5-Star Google Reviews"
                  style={{ width: '160px', display: 'block' }}
                />
              </div>
            </div>

            {/* Text side */}
            <div className="reveal-right">
              <div style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--orange)',
                fontSize: '0.85rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}>
                ——— {t('about.subtitle')} ———
              </div>
              <div className="section-heading" style={{ marginBottom: '2rem' }}>
                {t('about.title')}
              </div>

              <p style={{
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.8,
                marginBottom: '1.2rem',
                fontSize: '0.95rem',
              }}>
                {t('about.p1')}
              </p>
              <p style={{
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.8,
                marginBottom: '1.2rem',
                fontSize: '0.95rem',
              }}>
                {t('about.p2')}
              </p>
              <p style={{
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.8,
                marginBottom: '2rem',
                fontSize: '0.95rem',
              }}>
                {t('about.p3')}
              </p>

              <a href="#contact" className="btn-orange">{t('about.readmore')}</a>
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

      {/* Why Choose Us */}
      <section
        style={{
          background: 'var(--charcoal)',
          padding: '5rem 0',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="reveal">
            <h2 className="section-heading">{t('why.title')}</h2>
            <div className="section-divider" style={{ marginTop: '1rem' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
          }}>
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <div
                  key={f.iconKey}
                  className="reveal"
                  style={{
                    textAlign: 'center',
                    padding: '2.5rem 2rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    transition: 'border-color 0.3s, background 0.3s',
                    transitionDelay: `${i * 0.1}s`,
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget
                    el.style.borderColor = 'var(--orange)'
                    el.style.background = 'rgba(232,84,26,0.05)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.borderColor = 'rgba(255,255,255,0.06)'
                    el.style.background = 'rgba(255,255,255,0.03)'
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'var(--orange)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.2rem',
                  }}>
                    <Icon size={26} color="white" />
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '0.6rem',
                  }}>
                    {t(`why.${f.iconKey}`)}
                  </h3>
                  <p style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                  }}>
                    {t(`why.${f.iconKey}.desc`)}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
