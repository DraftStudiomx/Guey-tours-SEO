'use client'

import { useLang } from '@/lib/i18n'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { useRouter } from 'next/navigation'

type Vehicle = {
  _id: string
  name_en: string
  name_es: string
  description_en: string
  description_es: string
  price: string
  video_url: string
  slug: string | null
  features?: {
    experience_en: string
    experience_es: string
    extra_en: string
    extra_es: string
    keyFeature_en: string
    keyFeature_es: string
  }
}

type Props = {
  vehicles: Vehicle[]
}

export default function Vehicles({ vehicles }: Props) {
  const { lang, t } = useLang()
  const router = useRouter()
  useScrollReveal()

  function goToVehicle(slug: string | null) {
    if (slug) router.push(`/rentals/${slug}`)
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
              ? 'Experiencias Privadas en Cuatrimoto y RZR' 
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
              ? '¿Prefieres una aventura privada? Elige tu vehículo y explora a tu propio ritmo. Perfecto para parejas, familias y grupos.'
              : 'Prefer a private adventure? Choose your ride and explore at your own pace. Perfect for couples, families and groups.'}
          </p>
          <div className="section-divider" style={{ marginTop: '1.5rem' }} />
        </div>

        <div className="tours-grid">
          {vehicles.map((vehicle, i) => {
            const name = lang === 'es' ? vehicle.name_es : vehicle.name_en
            const description = lang === 'es' ? vehicle.description_es : vehicle.description_en

            return (
              <div
                key={vehicle._id}
                className="reveal"
                onClick={() => goToVehicle(vehicle.slug)}
                style={{
                  transitionDelay: `${i * 0.1}s`,
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  gap: 0,
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
                {/* Video */}
                <div style={{
                  width: '100%',
                  height: '240px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  background: '#000',
                }}>
                  <video
                    src={vehicle.video_url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    title={
                      i === 0 
                        ? (lang === 'es' ? 'Motocicleta deportiva Honda roja para tours en cuatrimoto con Guey Tours' : 'Red Honda Dual Sport Motorcycle for Guey Tours ATV Tours')
                        : i === 1 
                        ? (lang === 'es' ? 'Cuatrimoto ATV roja de Guey Tours' : 'ATV Tours by Guey Tours Red ATV Quad')
                        : (lang === 'es' ? 'Vehículo Can-Am Defender verde para tours grupales de Guey Tours' : 'Guey Tours: Green Can-Am Defender for Group ATV Tours')
                    }
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Info panel */}
                <div style={{
                  padding: '1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                  flex: 1,
                }}>
                  {/* Name */}
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '1.3rem',
                    letterSpacing: '0.03em',
                    textTransform: 'uppercase',
                    color: 'white',
                    margin: 0,
                    lineHeight: 1.1,
                  }}>
                    {name}
                  </h3>

                  {/* Price */}
                  <p style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '1.05rem',
                    color: 'var(--orange)',
                    margin: 0,
                    letterSpacing: '0.03em',
                  }}>
                    {vehicle.price}
                  </p>

                  {/* Description / Extra details */}
                  <div style={{
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.7)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.3rem',
                    marginTop: '0.2rem',
                  }}>
                    <p style={{ margin: 0, lineHeight: 1.4 }}>
                      {description}
                    </p>
                  </div>

                  {/* RENT IT / BOOK NOW button */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 'auto',
                    paddingTop: '1.5rem',
                  }}>
                    <span
                      onClick={(e) => { e.stopPropagation(); goToVehicle(vehicle.slug) }}
                      style={{
                        background: 'var(--orange)',
                        color: 'white',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 800,
                        fontSize: '0.95rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        padding: '0.65rem 1.8rem',
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
