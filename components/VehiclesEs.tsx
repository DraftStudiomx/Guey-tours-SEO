'use client'

import { useScrollReveal } from '@/lib/useScrollReveal'
import { useRouter } from 'next/navigation'

type VehicleCard = {
  slug: string
  video_url: string
  name: string
  price: string
  description: string
  videoTitle: string
}

const manualVehiclesEs: VehicleCard[] = [
  {
    slug: 'moto',
    video_url: 'images/SEO-ES/Motocicleta Honda Dual Sport Roja para tours en cuatrimoto de Guey Tours.mp4',
    name: 'Moto Honda 150',
    price: '$500 MXN por hora',
    description: 'Maneja en la ciudad de manera ágil y cómoda con doble suspensión para mayor comodidad es ideal para recorrer cualquier rincón de la ciudad.',
    videoTitle: 'Una motocicleta Honda de doble propósito roja y blanca para los tours en cuatrimoto en San Miguel de Allende.',
  },
  {
    slug: 'atv',
    video_url: 'images/SEO-ES/Cuatrimoto Roja para tours en cuatrimoto por Guey Tours.mp4',
    name: 'Cuatrimoto',
    price: '$850 MXN por hora',
    description: 'Elige nuestro excelente ATV Yamaha al mejor precio. Por dos personas. Este vehículo es muy cómodo. Es perfecto para explorar la ciudad como una pareja o solo.',
    videoTitle: 'Cuatrimoto Roja para tours en cuatrimoto por Guey Tours',
  },
  {
    slug: 'rzr',
    video_url: 'images/SEO-ES/RZR para cuatro personas que se usa en Tours de cuatrimoto.mp4',
    name: 'RZR',
    price: '$2,950 MXN por hora',
    description: 'En el paso 3 del proceso de reserva, podrás elegir nuestro emocionante y divertido vehículo RZR para 4 pasajeros. ¡Es muy divertido! Recibirás instrucciones completas para conducirlo antes de partir.',
    videoTitle: 'RZR para cuatro personas que se usa en Tours de cuatrimoto',
  },
  {
    slug: 'defender',
    video_url: 'images/SEO-ES/Guey Tours-Can-Am Defender Verde para Tours en cuatrimoto en Grupo.mp4',
    name: 'Defender',
    price: '$1900 MXN por hora',
    description: 'En el paso 3 del proceso de reserva puedes elegir tu vehículo. Elige nuestro Defender: tiene capacidad para 6 personas y es muy cómodo. Este vehículo es perfecto para toda la familia. ¡Reserva el tuyo hoy!',
    videoTitle: 'Guey Tours: Can-Am Defender Verde para Tours en cuatrimoto en Grupo',
  },
]

export default function VehiclesEs() {
  const router = useRouter()
  useScrollReveal()

  function goToVehicle(slug: string) {
    router.push(`/rentals/${slug}`)
  }

  return (
    <section
      id="vehicles"
      style={{
        background: 'var(--charcoal)',
        padding: '0 0 6rem',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="reveal">
          <div style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--orange)',
            fontSize: '0.85rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}>
            ——— Nuestra Flota ———
          </div>
          <h2 className="section-heading" style={{ marginBottom: '1rem', color: 'white' }}>
            Experiencias privadas en ATV y RZR
          </h2>
          <p style={{
            maxWidth: '650px',
            margin: '0 auto',
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.6,
          }}>
            Personaliza tu viaje con nuestras exclusivas salidas privadas. Ofrecemos opciones flexibles con vehículos de alto rendimiento para que explores a tu propio ritmo. Perfecto para parejas, familias y grupos.
          </p>
          <div className="section-divider" style={{ marginTop: '1.5rem', marginInline: 'auto' }} />
        </div>

        {/* Grid horizontal de tarjetas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '2rem',
        }}>
          {manualVehiclesEs.map((item, i) => (
            <div
              key={i}
              className="reveal"
              onClick={() => goToVehicle(item.slug)}
              style={{
                transitionDelay: `${i * 0.1}s`,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                background: '#000',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(255,107,0,0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Video a la izquierda con optimización SEO integrada */}
              <div style={{
                width: '45%',
                height: '100%',
                minHeight: '260px',
                overflow: 'hidden',
                flexShrink: 0,
                background: '#000',
              }}>
                <video
                  src={item.video_url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  title={item.videoTitle}
                  aria-label={item.videoTitle}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>

              {/* Panel de información a la derecha */}
              <div style={{
                padding: '1.2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
                flex: 1,
                justifyContent: 'center',
              }}>
                {/* H3 Name */}
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                  color: 'white',
                  margin: 0,
                  lineHeight: 1.1,
                }}>
                  {item.name}
                </h3>

                {/* Price */}
                <p style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  color: 'var(--orange)',
                  margin: 0,
                  letterSpacing: '0.03em',
                }}>
                  {item.price}
                </p>

                {/* Description */}
                <div style={{
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.75)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  margin: '0.2rem 0',
                  lineHeight: 1.3,
                }}>
                  <p style={{ margin: 0 }}>{item.description}</p>
                </div>

                {/* Button */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '0.4rem',
                }}>
                  <span
                    onClick={(e) => { e.stopPropagation(); goToVehicle(item.slug) }}
                    style={{
                      background: 'var(--orange)',
                      color: 'white',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: '0.75rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      padding: '0.5rem 1.2rem',
                      borderRadius: '999px',
                      cursor: 'pointer',
                      display: 'inline-block',
                      animation: 'pulse 2s infinite',
                    }}
                  >
                    Rentar
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%   { box-shadow: 0 0 0 0 rgba(255, 107, 0, 0.7); }
          70%  { box-shadow: 0 0 0 10px rgba(255, 107, 0, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 107, 0, 0); }
        }
      `}</style>
    </section>
  )
}
