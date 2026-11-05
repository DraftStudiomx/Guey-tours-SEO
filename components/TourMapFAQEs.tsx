'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/lib/useScrollReveal'

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
    a: 'En Guey Tours puedes solicitar información y reservar tours en cuatrimoto para explorar los paisajes y atractivos de San Miguel de Allende. Consulta las opciones disponibles, horarios y requisitos para elegir la experiencia que mejor se adapte a ti.',
  },
  {
    q: '¿Cuánto cuesta un tour en cuatrimoto?',
    a: 'El precio de un tour en cuatrimoto depende de la duración del recorrido, la ruta y el tipo de experiencia. En Guey Tours puedes consultar las opciones disponibles y solicitar información para conocer el costo de tu recorrido.',
  },
  {
    q: '¿Qué incluyen los tours de aventura?',
    a: 'Los tours en cuatrimoto pueden incluir el uso de la unidad, recorrido guiado y recomendaciones de seguridad antes de comenzar. Los servicios específicos varían según la experiencia contratada, por lo que conviene confirmar qué contempla cada recorrido.',
  },
  {
    q: '¿Necesito experiencia previa para manejar una cuatrimoto?',
    a: 'No necesariamente. Algunas experiencias están diseñadas para principiantes e incluyen indicaciones básicas antes del recorrido. En Guey Tours puedes consultar los requisitos de edad, conducción y seguridad para participar en los tours en cuatrimoto.',
  },
]

export default function TourMapFAQEs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  useScrollReveal()

  const toggle = (i: number) => {
    setOpenIndex(prev => (prev === i ? null : i))
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
                whiteSpace: 'pre-line',
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

          {/* Columna Derecha: Preguntas Frecuentes */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                color: 'white',
                textTransform: 'uppercase',
                margin: '0 0 1rem 0',
              }}
            >
              PREGUNTAS FRECUENTES
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {FAQS_ES.map((faq, i) => {
                const isOpen = openIndex === i
                return (
                  <div
                    key={i}
                    style={{
                      background: isOpen ? 'rgba(232,84,26,0.06)' : 'rgba(255,255,255,0.03)',
                      border: `1px solid ${isOpen ? 'rgba(232,84,26,0.35)' : 'rgba(255,255,255,0.07)'}`,
                      borderRadius: '6px',
                    }}
                  >
                    <button
                      onClick={() => toggle(i)}
                      style={{
                        width: '100%',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '1.2rem 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        textAlign: 'left',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          color: isOpen ? 'var(--orange, #e8541a)' : 'white',
                        }}
                      >
                        {faq.q}
                      </span>
                      <span
                        style={{
                          color: isOpen ? 'var(--orange, #e8541a)' : 'rgba(255,255,255,0.5)',
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s',
                          fontSize: '1.2rem',
                        }}
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div style={{ padding: '0 1.5rem 1.2rem' }}>
                        <p
                          style={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.9rem',
                            lineHeight: 1.7,
                            margin: 0,
                          }}
                        >
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
