'use client'

import { useLang } from '@/lib/i18n'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { useRouter } from 'next/navigation'

export default function Vehicles() {
  const { lang } = useLang()
  const router = useRouter()
  useScrollReveal()

  const vehiclesData = [
    {
      slug: 'moto',
      video_url: 'images/SEO/ATV Rentals Red Dirt Honda 150 Motorbike Ready for Adventure.mp4', // <-- Coloca aquí la ruta real de tu video de moto
      name: {
        es: 'Motorcycle Rentals',
        en: 'Motorcycle Rentals'
      },
      price: '$500 MXN For hour',
      experience: {
        es: 'Libertad de manejo off-road en solitario a través de senderos campestres abiertos.',
        en: 'Solo dirt-biking freedom across open country trails.'
      },
      recommendedOrCapacity: {
        es: 'Recomendado para: Riders experimentados que buscan agilidad y velocidad.',
        en: 'Recommended For: Experienced riders looking for agility and speed.'
      },
      keyFeature: {
        es: 'Característica clave: Manejo ligero para terrenos técnicos.',
        en: 'Key Feature: Lightweight handling for technical terrain.'
      },
      videoTitle: {
        es: 'Motocicleta deportiva Honda roja para tours en cuatrimoto con Guey Tours',
        en: 'Red Honda Dual Sport Motorcycle for Guey Tours ATV Tours'
      }
    },
    {
      slug: 'atv',
      video_url: 'images/SEO/Guey Tours Reliable quad options for your ATV rentals.mp4', // <-- Coloca aquí la ruta real de tu video de ATV
      name: {
        es: 'ATV Rentals',
        en: 'ATV Rentals'
      },
      price: '$850 MXN For hour',
      experience: {
        es: 'Acceso flexible a vehículos a su propio ritmo para explorar pistas locales.',
        en: 'Flexible, self-paced vehicle access for exploring local tracks.'
      },
      recommendedOrCapacity: {
        es: 'Vehículos: Unidades monoplaza y biplaza listas para terrenos difíciles.',
        en: 'Vehicles: Single and multi-passenger units ready for rough terrain.'
      },
      keyFeature: {
        es: 'Característica clave: Estabilidad confiable en caminos de tierra y lodo.',
        en: 'Key Feature: Reliable stability across dirt and mud paths.'
      },
      videoTitle: {
        es: 'Cuatrimoto ATV roja de Guey Tours',
        en: 'ATV Tours by Guey Tours Red ATV Quad'
      }
    },
    {
      slug: 'defender',
      video_url: 'images/SEO/Guey Tours Defender ATV rentals for off-road group adventures.mp4', // <-- Coloca aquí la ruta real de tu video de Defender/RZR
      name: {
        es: 'RZR Rentals',
        en: 'RZR Rentals'
      },
      price: '$1,900 MXN For hour',
      experience: {
        es: 'Tours en RZR side-by-side de alta velocidad y acceso a vehículos.',
        en: 'High-speed side-by-side RZR tours and vehicle access.'
      },
      recommendedOrCapacity: {
        es: 'Capacidad: Configuraciones de 2 a 4 plazas.',
        en: 'Capacity: 2 to 4-seater configurations.'
      },
      keyFeature: {
        es: 'Característica clave: Ideal para parejas o grupos que desean comodidad en cabina compartida durante off-roading pesado.',
        en: 'Key Feature: Ideal for couples or groups wanting shared cabin comfort during heavy off-roading.'
      },
      videoTitle: {
        es: 'Vehículo Can-Am Defender verde para tours grupales de Guey Tours',
        en: 'Guey Tours: Green Can-Am Defender for Group ATV Tours'
      }
    }
  ]

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
            ——— {lang === 'es' ? 'Nuestra Flota' : 'Our Fleet'} ———
          </div>
          <h2 className="section-heading" style={{ marginBottom: '1rem' }}>
            {lang === 'es' 
              ? 'Private ATV & RZR Experiences' 
              : 'Private ATV & RZR Experiences'}
          </h2>
          <p style={{
            maxWidth: '650px',
            margin: '0 auto',
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.6,
          }}>
            {lang === 'es'
              ? 'Personaliza tu viaje con nuestras exclusivas salidas privadas. Ofrecemos opciones flexibles con vehículos de alto rendimiento para que explores a tu propio ritmo. Perfecto para parejas, familias y grupos.'
              : 'Customize your journey with our exclusive private outings. We offer flexible options featuring high-performance vehicles so you can explore at your own pace. Perfect for couples, families and groups.'}
          </p>
          <div className="section-divider" style={{ marginTop: '1.5rem' }} />
        </div>

        {/* Grid horizontal de tarjetas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '2rem',
        }}>
          {vehiclesData.map((item, i) => {
            const currentName = lang === 'es' ? item.name.es : item.name.en
            const currentExp = lang === 'es' ? item.experience.es : item.experience.en
            const currentRec = lang === 'es' ? item.recommendedOrCapacity.es : item.recommendedOrCapacity.en
            const currentFeat = lang === 'es' ? item.keyFeature.es : item.keyFeature.en
            const currentVideoTitle = lang === 'es' ? item.videoTitle.es : item.videoTitle.en

            return (
              <div
                key={i}
                className="reveal"
                onClick={() => goToVehicle(item.slug)}
                style={{
                  transitionDelay: `${i * 0.1}s`,
                  display: 'flex',
                  flexDirection: 'row', // DISEÑO HORIZONTAL
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
                {/* Video a la izquierda */}
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
                    title={currentVideoTitle}
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
                    {currentName}
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

                  {/* Detalles (Experience, Recommended/Capacity, Key Feature) */}
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.75)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem',
                    margin: '0.2rem 0',
                    lineHeight: 1.3,
                  }}>
                    <p style={{ margin: 0 }}>{currentExp}</p>
                    <p style={{ margin: 0 }}>{currentRec}</p>
                    <p style={{ margin: 0 }}>{currentFeat}</p>
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
                      {lang === 'es' 
                        ? (i === 2 ? 'Reservar' : 'Rentarlo') 
                        : (i === 2 ? 'Book Now' : 'Rent It')}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
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
