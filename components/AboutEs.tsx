'use client'

import { useScrollReveal } from '@/lib/useScrollReveal'
import { CheckCircle2 } from 'lucide-react'

export default function AboutEs() {
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
              alt="Aventura en Cuatrimoto en San Miguel de Allende"
              title="Aventura en Cuatrimoto en San Miguel de Allende"
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
            <div 
              className="google-badge-container"
              style={{
                position: 'absolute',
                bottom: '-1.5rem',
                right: '-1.5rem',
                zIndex: 2,
                background: 'white',
                borderRadius: '8px',
                padding: '6px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
              }}
            >
              <img
                src="/images/google-reviews.png"
                alt="Más de 150 reseñas de 5 estrellas en Google"
                style={{ width: '140px', display: 'block' }}
              />
            </div>
          </div>

          {/* Columna Derecha: Títulos, información real y botón */}
          <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
              fontWeight: 800,
              letterSpacing: '0.05em',
              color: 'white',
              lineHeight: '1.15',
            }}>
              <span style={{ color: 'var(--orange)' }}>AVENTURAS EN CUATRIMOTO</span> EN SAN MIGUEL DE ALLENDE
            </h2>

            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '0.95rem',
              lineHeight: '1.7',
              margin: 0,
            }}>
              En Guey Tours, nos especializamos en tours en cuatrimoto llenos de acción y experiencias todoterreno que te permiten vivir los Tours en San Miguel de Allende desde una perspectiva totalmente nueva.
            </p>

            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '0.95rem',
              lineHeight: '1.7',
              margin: 0,
            }}>
              Nuestros tours en ATV en San Miguel de Allende combinan la profunda cultura local con rutas llenas de adrenalina.
            </p>

            {/* Viñetas con tus puntos clave */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', margin: '0.4rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'white', fontSize: '0.9rem' }}>
                <CheckCircle2 size={18} color="var(--orange)" style={{ flexShrink: 0 }} />
                <span><strong>Guías Expertos:</strong> Profesionales certificados liderando cada viaje.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'white', fontSize: '0.9rem' }}>
                <CheckCircle2 size={18} color="var(--orange)" style={{ flexShrink: 0 }} />
                <span><strong>Flota de Primera:</strong> Modelos de ATV premium mantenidos para un rendimiento óptimo.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'white', fontSize: '0.9rem' }}>
                <CheckCircle2 size={18} color="var(--orange)" style={{ flexShrink: 0 }} />
                <span><strong>Tranquilidad Total:</strong> Seguro médico completo incluido en cada recorrido.</span>
              </div>
            </div>

            <div style={{ marginTop: '0.5rem' }}>
              <a
                href="https://www.gueytours.com/contact"
                className="about-btn-cta"
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
                CONTÁCTANOS
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          /* Ajuste responsivo para móvil: evita que la insignia de Google estorbe o rompa el diseño lateral */
          .google-badge-container {
            bottom: -1rem !important;
            right: 1rem !important;
            padding: 4px !important;
          }
          .google-badge-container img {
            width: 110px !important;
          }
          /* Centrar el botón de contacto en dispositivos móviles para mejor estética */
          .about-btn-cta {
            width: 100% !important;
            text-align: center !important;
            box-sizing: border-box !important;
          }
        }
      `}</style>
    </section>
  )
}
