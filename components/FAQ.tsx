'use client'

import { useLang } from '@/lib/i18n'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { useState } from 'react'

interface FaqItem {
  q_en: string
  q_es: string
  a_en: string
  a_es: string
}

const FAQS: FaqItem[] = [
   {
    q_en: 'Were can I rent an ATV or RZR in San Miguel de Allende?',
    q_es: '¿Dónde puedo rentar una cuatrimoto o RZR en SAN MIGUELLLLL?',
    a_en: 'At Guey Tours, we offer ATV and RZR rentals and guided tours in San Miguel de Allende. We provide off-road routes, scenic rides, and adventure experiences for couples, families, and groups.',
    a_es: 'En Guey Tours ofrecemos renta y tours guiados en cuatrimotos, ATV y RZR en San Miguel de Allende. Contamos con rutas off-road, recorridos panorámicos y experiencias para parejas, familias y grupos.',
  },
  {
    q_en: 'Where can I rent an ATV or RZR in San Miguel de Allende?',
    q_es: '¿Dónde puedo rentar una cuatrimoto o RZR en San Miguel de Allende?',
    a_en: 'At Guey Tours, we offer ATV and RZR rentals and guided tours in San Miguel de Allende. We provide off-road routes, scenic rides, and adventure experiences for couples, families, and groups.',
    a_es: 'En Guey Tours ofrecemos renta y tours guiados en cuatrimotos, ATV y RZR en San Miguel de Allende. Contamos con rutas off-road, recorridos panorámicos y experiencias para parejas, familias y grupos.',
  },
  {
    q_en: 'How much does an ATV tour cost in San Miguel de Allende?',
    q_es: '¿Cuánto cuesta un tour en cuatrimoto en San Miguel de Allende?',
    a_en: 'Prices vary depending on the vehicle, tour duration, and type of experience, but rates can start at around $625 MXN per person. At Guey Tours, we offer: Short adventure tours Sunset routes , Private experiences, ATV and RZR rentals. We have options for every budget with safe equipment and well-maintained vehicles.',
    a_es: 'Los precios varían según el vehículo, duración y tipo de experiencia, pero las tarifas pueden comenzar desde $625 MXN por persona. En Guey Tours contamos con: Tours cortos de aventura, Rutas al atardecer, Experiencias privadas, Renta libre de ATV y RZR, Ofrecemos opciones para todos los presupuestos con equipos seguros y vehículos en excelente estado.',
  },
  {
    q_en: 'What is included in Guey Tours experiences?',
    q_es: '¿Qué incluyen las experiencias de Guey Tours?',
    a_en: 'Our tours include: ATV or RZR, Professional guide, Safety equipment, Off-road route Scenic stops, Photos and social media content. Some experiences may also include drinks or access to exclusive locations.',
    a_es: 'Nuestros tours incluyen: Cuatrimoto, ATV o RZR, Guía profesional, Equipo de seguridad Ruta off-road, Paradas panorámicas, Fotos y contenido para redes sociales, Algunas experiencias también pueden incluir bebidas o acceso a lugares exclusivos.',
  },
  {
    q_en: 'Do I need a drivers license to operate an ATV or RZR?',
    q_es: '¿Se necesita licencia para manejar una cuatrimoto o RZR?',
    a_en: 'Yes. We recommend that drivers present a valid ID and drivers license. It is also important to know how to operate automatic vehicles and follow the guides instructions to ensure a safe experience.',
    a_es: 'Sí. Recomendamos que los conductores presenten identificación oficial y licencia vigente. También es importante saber manejar vehículos automáticos y seguir las instrucciones del guía para garantizar una experiencia segura.',
  },
  {
    q_en: 'Which company offers the best ATV tours in San Miguel de Allende?',
    q_es: '¿Qué empresa ofrece los mejores tours en ATV en San Miguel de Allende?',
    a_en: 'At Guey Tours, we specialize in authentic off-road experiences with routes designed to showcase the nature, landscapes, and adventure of San Miguel de Allende. What makes us different: Modern vehicles, Personalized service, Private and group tours, Instagram-worthy experiences, Premium safety and service',
    a_es: 'En Guey Tours nos especializamos en experiencias off-road auténticas, con rutas diseñadas para mostrar la naturaleza, paisajes y aventura de San Miguel de Allende. Lo que nos diferencia: Vehículos modernos, Atención personalizada, Tours privados y grupales Experiencias ideales para redes sociales, Seguridad y servicio premium. ',
  },
  {
    q_en: 'What are the best ATV tours in San Miguel de Allende?',
    q_es: '¿Cuáles son los mejores tours en cuatrimoto en San Miguel de Allende?',
    a_en: 'Some of the most popular routes include: Off-road trails, Paths surrounded by mesquite trees and garambullo cactus, Scenic viewpoints, Sunset rides, Fun dirt-road adventures Guey Tours creates experiences for all skill levels, from beginners to adrenaline lovers.',
    a_es: 'Algunas de las rutas más populares incluyen: Caminos off-road, Senderos rodeados de mezquites y garambullos, Miradores naturales, Recorridos al atardecer, Aventuras divertidas en terracería. Guey Tours diseña experiencias para todos los niveles, desde principiantes hasta amantes de la adrenalina.',
  },
  {
    q_en: 'Can I rent an ATV or quad bike for groups or events?',
    q_es: '¿Puedo rentar un ATV o cuatrimoto para grupos o eventos?',
    a_en: 'Yes. At Guey Tours, we offer experiences for: Birthdays, Bachelor and bachelorette parties Team-building events, Family tours, Private events, Photo and content sessions, We also offer customized packages for large groups.',
    a_es: 'Sí. En Guey Tours ofrecemos experiencias para: Cumpleaños, Despedidas de soltero y soltera, Team building, Tours familiares, Eventos privados, Sesiones de fotos y creación de contenido, También contamos con paquetes personalizados para grupos grandes.',
  },
  {
    q_en: 'Is it safe to drive an ATV or RZR during the tours?',
    q_es: '¿Es seguro manejar ATV o RZR durante los tours?',
    a_en: 'Yes. Safety is a priority at Guey Tours. Before every ride, we provide complete driving instructions and safety gear. Our guides accompany guests throughout the entire experience.',
    a_es: 'Sí. La seguridad es prioridad en Guey Tours. Antes de cada recorrido proporcionamos instrucciones completas de manejo y equipo de protección. Nuestros guías acompañan a los visitantes durante toda la experiencia.',
  },
  {
    q_en: 'What should I bring for an ATV tour?',
    q_es: '¿Qué debo llevar para un tour en cuatrimoto?',
    a_en: 'We recommend bringing: Comfortable clothing, Sunglasses, Sunscreen, Closed-toe shoes, Cell phone or camera, A great attitude for adventure. We’ll take care of the rest.',
    a_es: 'Recomendamos llevar: Ropa cómoda, Lentes de sol, Bloqueador solar, Calzado cerrado, Celular o cámara, Buena actitud para la aventura, Nosotros nos encargamos del resto.',
  },
  {
    q_en: 'Can I rent a RZR without a guided tour?',
    q_es: '¿Se puede rentar un RZR sin tour guiado?',
    a_en: 'Depending on availability and the driver’s experience, Guey Tours may offer ATV and RZR rentals under certain safety and responsibility conditions.',
    a_es: 'Dependiendo de la disponibilidad y experiencia del conductor, Guey Tours puede ofrecer renta de ATV y RZR bajo ciertas condiciones de seguridad y responsabilidad.',
  },
]

export default function FAQ() {
  const { lang } = useLang()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  useScrollReveal()

  const toggle = (i: number) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <section
      id="faq"
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

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem' }}>

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
            ——— {lang === 'en' ? 'Got questions?' : '¿Tienes preguntas?'} ———
          </div>
          <h2 className="section-heading">
            {lang === 'en' ? 'FREQUENTLY ASKED ' : 'PREGUNTAS FRECUENTES'}
          </h2>
          <div className="section-divider" style={{ marginTop: '1rem' }} />
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            const question = lang === 'es' ? faq.q_es : faq.q_en
            const answer = lang === 'es' ? faq.a_es : faq.a_en

            return (
              <div
                key={i}
                className="reveal"
                style={{
                  background: isOpen ? 'rgba(232,84,26,0.06)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${isOpen ? 'rgba(232,84,26,0.35)' : 'rgba(255,255,255,0.07)'}`,
                  transition: 'background 0.3s, border-color 0.3s',
                  transitionDelay: `${i * 0.04}s`,
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '1.4rem 1.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    textAlign: 'left',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    letterSpacing: '0.02em',
                    color: isOpen ? 'var(--orange)' : 'white',
                    transition: 'color 0.3s',
                    lineHeight: 1.4,
                  }}>
                    {question}
                  </span>

                  {/* Plus / minus icon */}
                  <span style={{
                    flexShrink: 0,
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    border: `1.5px solid ${isOpen ? 'var(--orange)' : 'rgba(255,255,255,0.25)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isOpen ? 'var(--orange)' : 'rgba(255,255,255,0.5)',
                    fontSize: '1.2rem',
                    lineHeight: 1,
                    transition: 'border-color 0.3s, color 0.3s, transform 0.3s',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    fontWeight: 300,
                  }}>
                    +
                  </span>
                </button>

                {/* Answer — CSS height transition */}
                <div style={{
                  overflow: 'hidden',
                  maxHeight: isOpen ? '400px' : '0',
                  transition: 'max-height 0.4s ease',
                }}>
                  <p style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.95rem',
                    lineHeight: 1.75,
                    padding: '0 1.75rem 1.5rem',
                    margin: 0,
                    fontFamily: 'var(--font-body)',
                  }}>
                    {answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
