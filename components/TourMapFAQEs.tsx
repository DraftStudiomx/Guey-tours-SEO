'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const FAQS_ES = [
  {
    q: '¿Dónde puedo rentar una cuatrimoto o RZR en San Miguel de Allende?',
    a: 'En Guey Tours ofrecemos renta y tours guiados en cuatrimotos, ATV y RZR en San Miguel de Allende. Contamos con rutas off-road y recorridos panorámicos.',
  },
  {
    q: '¿Cuánto cuesta un tour en cuatrimoto en San Miguel de Allende?',
    a: 'Los precios comienzan desde $625 MXN por persona según el vehículo y duración. Ofrecemos tours cortos, rutas al atardecer y experiencias privadas.',
  },
  {
    q: '¿Qué incluyen las experiencias de Guey Tours?',
    a: 'Nuestros tours incluyen la cuatrimoto, guía profesional, equipo de seguridad, paradas panorámicas y fotos o contenido para redes sociales.',
  },
  {
    q: '¿Se necesita licencia para manejar una cuatrimoto o RZR?',
    a: 'Sí, recomendamos traer identificación oficial o licencia. Es esencial saber manejar vehículos automáticos y seguir las instrucciones del guía.',
  },
  {
    q: '¿Cuáles son los mejores tours en cuatrimoto en San Miguel de Allende?',
    a: 'Las rutas populares incluyen caminos off-road entre mezquites, cactus de garambullo, miradores naturales y aventuras en terracería.',
  },
  {
    q: '¿Es seguro manejar ATV o RZR durante los tours?',
    a: 'Sí, la seguridad es nuestra prioridad. Damos instrucciones de manejo, equipo de protección y un guía profesional te acompaña todo el tiempo.',
  },
  {
    q: '¿Dónde puedo reservar tours en cuatrimoto en San Miguel de Allende?',
    a: 'En Guey Tours puedes solicitar información y reservar tours en cuatrimoto para explorar los paisajes y atractivos de San Miguel de Allende.',
  },
  {
    q: '¿Cuánto cuesta un tour en cuatrimoto?',
    a: 'El precio de un tour en cuatrimoto depende de la duración del recorrido, la ruta y el tipo de experiencia.',
  },
  {
    q: '¿Qué incluyen los tours de aventura?',
    a: 'Los tours en cuatrimoto pueden incluir el uso de la unidad, recorrido guiado y recomendaciones de seguridad antes de comenzar.',
  },
  {
    q: '¿Necesito experiencia previa para manejar una cuatrimoto?',
    a: 'No necesariamente. Algunas experiencias están diseñadas para principiantes e incluyen indicaciones básicas antes del recorrido.',
  },
]

export default function TourMapFAQEs() {
  const [currentIndex, setCurrentIndex] = useState(0)
  useScrollReveal()

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? FAQS_ES.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === FAQS_ES.length - 1 ? 0 : prev + 1))
  }

  return (
    <section
      id="tour-map-faq"
      style={{
        background: '#121212',
        padding: '6rem 0',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* Columna Izquierda: Info y Mapa */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                color: 'white',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              A DÓNDE LLEVAN NUESTROS TOURS
            </h2>

            <div
              style={{
                width: '60px',
                height: '3px',
                background: 'var(--orange, #e8541a)',
                margin: '-0.5rem 0 0 0',
              }}
            />

            <p
              style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '1rem',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Nuestros viajes comienzan aquí mismo en San Miguel de Allende, ramificándose a través de diversos ecosistemas locales y senderos montañosos.
            </p>

            <div
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                background: '#1a1a1a',
              }}
            >
              <iframe
                title="Guey Tours Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.2!2d-100.7438!3d20.9161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b51bb20a11cff%3A0x815817733a05fa9b!2sTours%20en%20cuatrimoto%20ATV%20San%20Miguel%20Allende%20Guey%20Tours!5e0!3m2!1ses!2smx!4v1710000000000!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.1) saturate(0.8)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Columna Derecha: Carrusel de Preguntas */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                color: 'white',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              PREGUNTAS FRECUENTES
            </h2>

            {/* Tarjeta del Carrusel */}
            <div
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(232,84,26,0.3)',
                borderRadius: '12px',
                padding: '2rem',
                minHeight: '260px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                <span
                  style={{
                    color: 'var(--orange, #e8541a)',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                  }}
                >
                  PREGUNTA {currentIndex + 1} DE {FAQS_ES.length}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.15rem',
                    color: 'white',
                    marginTop: '0.6rem',
                    marginBottom: '1rem',
                    lineHeight: 1.4,
                  }}
                >
                  {FAQS_ES[currentIndex].q}
                </h3>

                <p
                  style={{
                    color: 'rgba(255,255,255,0.75)',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {FAQS_ES[currentIndex].a}
                </p>
              </div>

              {/* Controles de Navegación (Flechas y Puntos) */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Indicadores de Puntos */}
                <div style={{ display: 'flex', gap: '6px' }}>
                  {FAQS_ES.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setCurrentIndex(dotIdx)}
                      style={{
                        width: dotIdx === currentIndex ? '18px' : '6px',
                        height: '6px',
                        borderRadius: '3px',
                        background: dotIdx === currentIndex ? 'var(--orange, #e8541a)' : 'rgba(255,255,255,0.2)',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  ))}
                </div>

                {/* Botones Flecha */}
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={prevSlide}
                    aria-label="Anterior"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      cursor: 'pointer',
                    }}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Siguiente"
                    style={{
                      background: 'var(--orange, #e8541a)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      cursor: 'pointer',
                    }}
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
