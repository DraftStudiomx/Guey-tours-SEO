'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
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
        minHeight: 'calc(100vh - 100px)',
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
          background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.2) 100%)',
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

      {/* Content */}
      <div
        ref={textRef}
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'left',
          padding: '0 5rem',
          maxWidth: '1000px',
          opacity: 0,
          transform: 'translateY(30px)',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
          marginTop: '180px',
        }}
      >
        {/* Badge sin fondo naranja */}
        <div style={{
          display: 'inline-block',
          color: 'var(--orange)',
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '1.05rem',
          letterSpacing: '0.15em',
          marginBottom: '1.2rem',
          textTransform: 'uppercase',
        }}>
          SAN MIGUEL DE ALLENDE · MEXICO
        </div>

        {/* H1 SEO con doble estilo */}
        <h1 style={{
          fontFamily: '"cheddar-gothic-rough", sans-serif',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: 'clamp(3rem, 6.5vw, 5.8rem)',
          lineHeight: 0.95,
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          color: 'white',
          marginBottom: '1.5rem',
          textShadow: '0 4px 30px rgba(0,0,0,0.5)',
        }}>
          ATV Tours <br />
          <span style={{ color: 'var(--orange)', fontSize: '0.8em' }}>IN SAN MIGUEL DE ALLENDE</span>
        </h1>

        {/* Párrafo corregido sintácticamente */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 300,
          fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
          color: 'rgba(255,255,255,0.85)',
          marginBottom: '2.5rem',
          maxWidth: '620px',
          lineHeight: 1.6,
        }}>
          Ready to explore San Miguel de Allende beyond the usual cobblestone streets? At Guey Tours, we bring you thrilling ATV tours and unforgettable off-road tours designed for maximum excitement and safety. 
          <br /><br />
          Whether you want guided ATV tours or custom private ATV tours, discover the region with us today.
        </p>

        {/* Botones con animación hover */}
        <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
          <a href="https://www.gueytours.com/#tours" className="hero-btn-primary">
            VIEW ALL TOURS
          </a>
          <a href="https://www.gueytours.com/contact" className="hero-btn-outline">
            GET A QUOTE
          </a>
        </div>
      </div>

      {/* Widget de Google 5-Star Review Congruente */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          right: '3.5rem',
          zIndex: 15,
          background: 'white',
          padding: '1rem 1.6rem',
          borderRadius: '8px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.2rem',
          textAlign: 'center',
        }}
        className="hidden-mobile"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontFamily: 'sans-serif', fontWeight: 700, fontSize: '1.3rem', color: '#222', lineHeight: 1.1 }}>
          <span style={{ color: '#4285F4' }}>G</span>
          <span style={{ color: '#EA4335' }}>o</span>
          <span style={{ color: '#FBBC05' }}>o</span>
          <span style={{ color: '#4285F4' }}>g</span>
          <span style={{ color: '#34A853' }}>l</span>
          <span style={{ color: '#EA4335' }}>e</span>
          <span style={{ marginLeft: '4px', fontWeight: 500 }}>Google</span>
        </div>
        <div style={{ fontFamily: 'sans-serif', fontWeight: 800, fontSize: '1.9rem', color: '#00e676', lineHeight: 1.2, margin: '2px 0' }}>
          150+
        </div>
        <div style={{ fontFamily: 'sans-serif', fontSize: '0.95rem', fontWeight: 700, color: '#111', letterSpacing: '0.01em', marginBottom: '4px' }}>
          5-Star Review
        </div>
        <div style={{ color: '#FBBC05', fontSize: '1.1rem', letterSpacing: '3px', lineHeight: 1 }}>
          ★★★★★
        </div>
      </div>

      <style jsx>{`
        .hero-btn-primary, .hero-btn-outline {
          padding: 0.9rem 2.2rem;
          background: var(--orange);
          color: white;
          text-decoration: none;
          font-weight: 700;
          letter-spacing: 0.05em;
          border-radius: 4px;
          display: inline-block;
          border: 2px solid var(--orange);
          transition: all 0.3s ease;
        }
        .hero-btn-primary:hover, .hero-btn-outline:hover {
          background: transparent;
          border-color: white;
          color: white;
        }

        @media (max-width: 768px) {
          div[style*="padding: '0 5rem'"] {
            padding: 0 1.5rem !important;
            text-align: center !important;
            margin-top: 100px !important;
          }
          div[style*="display: 'flex'][style*="gap: '1.2rem'"] {
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
