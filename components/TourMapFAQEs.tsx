'use client'

import { useState } from 'react'
import { useLang } from '@/lib/i18n'
import { useScrollReveal } from '@/lib/useScrollReveal'

const FAQS = [
  {
    q_en: 'Where can I rent an ATV or RZR in San Miguel de Allende?',
    q_es: '¿Dónde puedo rentar una cuatrimoto o RZR en San Miguel de Allende?',
    a_en: 'At Guey Tours, we offer ATV and RZR rentals and guided tours in San Miguel de Allende. We provide off-road routes, scenic rides, and adventure experiences.',
    a_es: 'En Guey Tours ofrecemos renta y tours guiados en cuatrimotos, ATV y RZR en San Miguel de Allende. Contamos con rutas off-road y recorridos panorámicos.',
  },
  {
    q_en: 'How much does an ATV tour cost in San Miguel de Allende?',
    q_es: '¿Cuánto cuesta un tour en cuatrimoto en San Miguel de Allende?',
    a_en: 'Prices start around $625 MXN per person depending on the vehicle and duration. We offer short adventures, sunset routes, and private experiences.',
    a_es: 'Los precios comienzan desde $625 MXN por persona según el vehículo y duración. Ofrecemos tours cortos, rutas al atardecer y experiencias privadas.',
  },
  {
    q_en: 'What is included in Guey Tours experiences?',
    q_es: '¿Qué incluyen las experiencias de Guey Tours?',
    a_en: 'Our tours include the ATV or RZR, a professional guide, safety equipment, scenic stops, and photos or social media content.',
    a_es: 'Nuestros tours incluyen la cuatrimoto, guía profesional, equipo de seguridad, paradas panorámicas y fotos o contenido para redes sociales.',
  },
  {
    q_en: 'Do I need a drivers license to operate an ATV or RZR?',
    q_es: '¿Se necesita licencia para manejar una cuatrimoto o RZR?',
    a_en: 'Yes, we recommend bringing a valid ID or drivers license. Knowing how to operate an automatic vehicle and following guide instructions is essential.',
    a_es: 'Sí, recomendamos traer identificación oficial o licencia. Es esencial saber manejar vehículos automáticos y seguir las instrucciones del guía.',
  },
  {
    q_en: 'What are the best ATV tours in San Miguel de Allende?',
    q_es: '¿Cuáles son los mejores tours en cuatrimoto en San Miguel de Allende?',
    a_en: 'Popular routes include off-road trails through mesquite trees, garambullo cactus, natural viewpoints, and fun dirt-road adventures.',
    a_es: 'Las rutas populares incluyen caminos off-road entre mezquites, cactus de garambullo, miradores naturales y aventuras en terracería.',
  },
  {
    q_en: 'Is it safe to drive an ATV or RZR during the tours?',
    q_es: '¿Es seguro manejar ATV o RZR durante los tours?',
    a_en: 'Yes, safety is our priority. We provide driving instructions, safety gear, and a professional guide accompanies you at all times.',
    a_es: 'Sí, la seguridad es nuestra prioridad. Damos instrucciones de manejo, equipo de protección y un guía profesional te acompaña todo el tiempo.',
  },
]

export default function TourMapFAQ() {
  const { lang } = useLang()
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
              {lang === 'es' ? 'A DÓNDE LLEVAN NUESTROS TOURS' : 'WHERE OUR ATV TOURS TAKE YOU'}
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
              {lang === 'es'
                ? 'Nuestros viajes comienzan aquí mismo en San Miguel de Allende, ramificándose a través de diversos ecosistemas locales y senderos montañosos.'
                : 'Our journeys start right here in San Miguel de Allende, branching out across diverse local ecosystems and mountain trails.'}
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
              {lang === 'es' ? 'PREGUNTAS FRECUENTES' : 'ATV TOURS FAQ'}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {FAQS.map((faq, i) => {
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
                        {lang === 'es' ? faq.q_es : faq.q_en}
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
                          {lang === 'es' ? faq.a_es : faq.a_en}
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
