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
          <h2 className="section-heading">
            {lang === 'es' ? 'Experiencias Privadas en Cuatrimoto y RZR' : 'Private ATV & RZR Experiences'}
          </h2>
          <div className="section-divider" style={{ marginTop: '1rem' }} />
        </div>

        <div className="tours-grid">
          {vehicles.map((vehicle, i) => {
            const name        = lang === 'es' ? vehicle.name_es        : vehicle.name_en
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
                  height: '250px',
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
                  background: '#000',
                  padding: '1.2rem 1.4rem 1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  flex: 1,
                }}>
                  {/* Name */}
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '1.4rem',
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
                    fontSize: '1.1rem',
                    color: 'var(--orange)',
                    margin: 0,
                    letterSpacing: '0.03em',
                  }}>
                    {vehicle.price}
                  </p>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.7)',
                    margin: 0,
                    lineHeight: 1.5,
                    display: '-webkit-box',
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {description}
                  </p>

                  {/* RENT IT button */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 'auto',
                    paddingTop: '1.75rem',
                  }}>
                    <span
                      onClick={(e) => { e.stopPropagation(); goToVehicle(vehicle.slug) }}
                      style={{
                        background: 'var(--orange)',
                        color: 'white',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 800,
                        fontSize: '1rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        padding: '0.7rem 2rem',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        display: 'inline-block',
                        animation: 'pulse 2s infinite',
                      }}
                    >
                      {lang === 'es' ? 'Rentarlo' : 'Rent It'}
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
