'use client'

import { useScrollReveal } from '@/lib/useScrollReveal'
import { ShieldCheck, Users, Bike } from 'lucide-react'

type FeatureItem = {
  icon: React.ReactNode
  title: string
  desc: string
}

const featuresEs: FeatureItem[] = [
  {
    icon: <ShieldCheck size={32} color="white" />,
    title: 'Seguridad ante todo',
    desc: 'Proporcionamos cascos y equipo de seguridad de calidad profesional con cada reserva. Nuestros vehículos se someten a estrictas revisiones de mantenimiento diario y nuestro equipo ofrece instrucciones previas detalladas para garantizar un viaje seguro y bien organizado.',
  },
  {
    icon: <Users size={32} color="white" />,
    title: 'Guías bilingües',
    desc: 'Disfruta de una comunicación clara durante toda tu excursión. Nuestro equipo domina el inglés y el español, ofreciendo un profundo conocimiento local y apoyo continuo de principio a fin.',
  },
  {
    icon: <Bike size={32} color="white" />,
    title: 'Cuatrimotos de último modelo',
    desc: 'Conduce con confianza en nuestra flota moderna. Renovamos constantemente nuestros vehículos para garantizar un confort óptimo, un manejo receptivo y un rendimiento de motor confiable en cada sendero.',
  },
]

export default function WhyChooseUsEs() {
  useScrollReveal()

  return (
    <section
      id="why-choose-us"
      style={{
        background: 'var(--dark)',
        padding: '5rem 0',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="reveal">
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'white',
            margin: 0,
          }}>
            ¿Por qué elegir Guey Tours para tu aventura en cuatrimoto?
          </h2>
          <div className="section-divider" style={{ marginTop: '0.8rem', marginInline: 'auto' }} />
        </div>

        {/* Grid horizontal estilo fila */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start',
        }}>
          {featuresEs.map((item, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.2rem',
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              {/* Círculo naranja con icono */}
              <div style={{
                width: '75px',
                height: '75px',
                minWidth: '75px',
                borderRadius: '50%',
                background: 'var(--orange)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 25px rgba(232,84,26,0.3)',
              }}>
                {item.icon}
              </div>

              {/* Texto al lado */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', paddingTop: '0.3rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  color: 'white',
                  margin: 0,
                  textTransform: 'uppercase',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: 1.5,
                  margin: 0,
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
