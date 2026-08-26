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
        justifyContent: 'center',
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
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, rgba(20,20,20,0.8) 100%)',
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
      }} />

      {/* Content */}
      <div
        ref={textRef}
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 1.5rem',
          maxWidth: '900px',
          opacity: 0,
          transform: 'translateY(30px)',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
          marginTop: '150px',
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
          marginBottom: '1.5rem',
          textTransform: 'uppercase',
        }}>
          SAN MIGUEL DE ALLENDE · MEXICO
        </div>

        <h1 style={{
          fontFamily: '"cheddar-gothic-rough", sans-serif',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: 'clamp(3.2rem, 8vw, 7rem)',
          lineHeight: 1,
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          color: 'white',
          marginBottom: '1.2rem',
          textShadow: '0 4px 30px rgba(0,0,0,0.5)',
        }}>
          {t('hero.tagline')}
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 300,
          fontSize: 'clamp(1rem, 2vw, 1.3rem)',
          color: 'rgba(255,255,255,0.8)',
          marginBottom: '2.5rem',
          maxWidth: '600px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.6,
        }}>
          {t('hero.sub')}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href="#tours" className="btn-outline">
          {t('hero.cta2')}
        </a>
      </div>
      </div>
    </section>
  )
}
