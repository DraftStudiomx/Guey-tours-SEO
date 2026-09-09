'use client'

import { useLang } from '@/lib/i18n'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const { t } = useLang()
  const textRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (textRef.current) {
        textRef.current.style.opacity = '1'
        textRef.current.style.transform = 'translateY(0)'
      }
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const isMobile = window.innerWidth < 768
    video.src = isMobile
      ? 'https://pub-241045e4c6674ccd828b541415cdb872.r2.dev/resumen_sin%20logo_comp.mp4'
      : 'https://pub-241045e4c6674ccd828b541415cdb872.r2.dev/resumen_sin%20logo.mp4'

    video.muted = true
    video.load()
    video.play().catch(() => {})
  }, [])

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 120px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        background: '#0a0a0a',
      }}
    >
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.45)',
        }}
      >
        <source src="https://pub-241045e4c6674ccd828b541415cdb872.r2.dev/resumen_sin%20logo.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)',
        }}
      />

      {/* Orange accent line top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'var(--orange)',
        zIndex: 20,
      }} />

      {/* Content (Aligned Left) */}
      <div
        ref={textRef}
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'left',
          padding: '0 4rem',
          maxWidth: '850px',
          opacity: 0,
          transform: 'translateY(30px)',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
          marginTop: '100px',
        }}
      >
        {/* Badge */}
        <div style={{
          display: 'inline-block',
          background: 'var(--orange)',
          color: 'white',
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '0.8rem',
          letterSpacing: '0.2em',
          padding: '0.4rem 1.2rem',
          marginBottom: '1.2rem',
          textTransform: 'uppercase',
        }}>
          SAN MIGUEL DE ALLENDE · MEXICO
        </div>

        <h1 style={{
          fontFamily: '"cheddar-gothic-rough", sans-serif',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: 'clamp(3rem, 7vw, 6.5rem)',
          lineHeight: 1,
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          color: 'white',
          marginBottom: '1rem',
          textShadow: '0 4px 30px rgba(0,0,0,0.5)',
        }}>
          {t('hero.tagline')}
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 300,
          fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
          color: 'rgba(255,255,255,0.85)',
          marginBottom: '2rem',
          maxWidth: '580px',
          lineHeight: 1.6,
        }}>
          {t('hero.sub')}
        </p>

        {/* Dos Botones */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#tours" className="btn-primary" style={{ padding: '0.8rem 2rem', background: 'var(--orange)', color: 'white', textDecoration: 'none', fontWeight: 700, letterSpacing: '0.05em', borderRadius: '4px' }}>
            {t('hero.cta1') || 'VIEW ALL TOURS'}
          </a>
          <a href="/contact" className="btn-outline" style={{ padding: '0.8rem 2rem', background: 'var(--orange)', color: 'white', textDecoration: 'none', fontWeight: 700, letterSpacing: '0.05em', borderRadius: '4px' }}>
            {t('hero.cta2') || 'GET A QUOTE'}
          </a>
        </div>
      </div>

      {/* Google 5-Star Reviews Widget (Flotante Abajo a la Derecha) */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '3rem',
          zIndex: 15,
          background: 'white',
          padding: '0.8rem 1.2rem',
          borderRadius: '8px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.2rem',
        }}
        className="hidden-mobile"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'sans-serif', fontWeight: 800, fontSize: '0.95rem', color: '#333' }}>
          <span style={{ color: '#4285F4' }}>G</span>
          <span style={{ color: '#EA4335' }}>o</span>
          <span style={{ color: '#FBBC05' }}>o</span>
          <span style={{ color: '#4285F4' }}>g</span>
          <span style={{ color: '#34A853' }}>l</span>
          <span style={{ color: '#EA4335' }}>e</span>
          <span style={{ marginLeft: '4px' }}>150+</span>
        </div>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#555', letterSpacing: '0.02em' }}>
          5-Star Reviews
        </div>
        <div style={{ color: '#FBBC05', fontSize: '1rem', letterSpacing: '2px', lineHeight: 1 }}>
          ★★★★★
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="padding: '0 4rem'"] {
            padding: 0 1.5rem !important;
            text-align: center !important;
          }
          div[style*="display: 'flex'][style*="gap: '1rem'"] {
            justify-content: center !important;
          }
          .hidden-mobile {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
