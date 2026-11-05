'use client'

import { useLang } from '@/lib/i18n'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { ShieldCheck, Users, Bike } from 'lucide-react'

export default function WhyChooseUs() {
  const { lang } = useLang()
  useScrollReveal()

  const features = [
    {
      icon: <ShieldCheck size={32} color="white" />,
      title: {
        en: 'Safety First',
        es: 'Seguridad Ante Todo'
      },
      desc: {
        en: 'We supply professional-grade helmets and safety gear with every booking. Our vehicles undergo strict daily maintenance checks, and our team provides thorough pre-ride instructions to guarantee a secure, well-organized trip.',
        es: 'Proporcionamos cascos y equipo de seguridad de calidad profesional con cada reserva. Nuestros vehículos se someten a estrictas revisiones de mantenimiento diario y nuestro equipo ofrece instrucciones previas detalladas para garantizar un viaje seguro y bien organizado.'
      }
    },
    {
      icon: <Users size={32} color="white" />,
      title: {
        en: 'Bilingual Guides',
        es: 'Guías Bilingües'
      },
      desc: {
        en: 'Enjoy clear communication throughout your excursion. Our team is fluent in English and Spanish, offering deep local insights and continuous support from start to finish.',
        es: 'Disfruta de una comunicación clara durante toda tu excursión. Nuestro equipo domina el inglés y el español, ofreciendo un profundo conocimiento local y apoyo continuo de principio a fin.'
      }
    },
    {
      icon: <Bike size={32} color="white" />,
      title: {
        en: 'Latest Model ATVs',
        es: 'ATVs de Último Modelo'
      },
      desc: {
        en: 'Ride with confidence on our modern fleet. We constantly renew our vehicles to ensure optimal comfort, responsive handling, and dependable engine performance on every trail.',
        es: 'Conduce con confianza en nuestra flota moderna. Renovamos constantemente nuestros vehículos para garantizar un confort óptimo, un manejo receptivo y un rendimiento de motor confiable en cada sendero.'
      }
    }
  ]

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
            {lang === 'es' 
              ? '¿Por qué elegir Guey Tours para tu aventura en ATV?' 
              : 'Why Choose Guey Tours for Your ATV Adventure?'}
          </h2>
          <div className="section-divider" style={{ marginTop: '0.8rem' }} />
        </div>

        {/* Grid horizontal estilo fila */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start',
        }}>
          {features.map((item, i) => (
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
                  {lang === 'es' ? item.title.es : item.title.en}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: 1.5,
                  margin: 0,
                }}>
                  {lang === 'es' ? item.desc.es : item.desc.en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
