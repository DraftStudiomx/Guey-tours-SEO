'use client'

import { useState, useEffect } from 'react'
import { useLang } from '@/lib/i18n'

type Vehicle = {
  _id: string
  name_en: string
  name_es: string
  description_en: string
  description_es: string
  tour_page_description_en?: string
  tour_page_description_es?: string
  price: string
  video_url: string
  slug: string | null
}

type Props = {
  vehicles: Vehicle[]
  priceLine?: Record<string, string>
}

// Tus imágenes ya listas y apuntando a public/images/
const vehicleImages: Record<string, string[]> = {
  default: [
    '/images/derecha_rzr',
    '/images/frente_rzr',
    '/images/izquierda_rzr',
    '/images/trasera_rzr',
  ]
}

function AutoImageCarousel({ images, videoFallback }: { images: string[], videoFallback: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const hasImages = images && images.length > 0

  useEffect(() => {
    if (!hasImages || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [images, hasImages])

  return (
    <div style={{
      width: '100%',
      height: 160,
      overflow: 'hidden',
      flexShrink: 0,
      background: '#000',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {hasImages ? (
        <>
          <img
            src={images[currentIndex]}
            alt="Vehicle slide"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'opacity 0.5s ease-in-out',
            }}
          />

          <div style={{
            position: 'absolute',
            bottom: '8px',
            display: 'flex',
            gap: '5px',
          }}>
            {images.map((_, idx) => (
              <span
                key={idx}
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: idx === currentIndex ? '#fff' : 'rgba(255,255,255,0.4)',
                  transition: 'background 0.3s',
                }}
              />
            ))}
          </div>
        </>
      ) : (
        <video
          src={videoFallback}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '80%',
            height: '80%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      )}
    </div>
  )
}

export default function VehiclesCompact({ vehicles, priceLine }: Props) {
  const { lang } = useLang()

  if (!vehicles || vehicles.length === 0) return null

  return (
    <section style={{ width: '100%' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <div style={{
          fontFamily: 'var(--font-heading)',
          color: 'var(--orange)',
          fontSize: '0.75rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
        }}>
          {lang === 'es' ? 'Nuestros vehículos' : 'Our Vehicles'}
        </div>
      </div>

      <div className="vc-grid">
        {vehicles.map((vehicle) => {
          const name = lang === 'es' ? vehicle.name_es : vehicle.name_en

          let description = lang === 'es'
            ? (vehicle.tour_page_description_es || vehicle.description_es)
            : (vehicle.tour_page_description_en || vehicle.description_en)

          if (name.toLowerCase().includes('rzr')) {
            description = lang === 'es'
              ? 'En el paso 3 del proceso de reserva, podrás elegir nuestro emocionante y divertido vehículo RZR para 4 pasajeros. ¡Es muy divertido! Recibirás instrucciones completas para conducirlo antes de partir.'
              : 'In step 3 of the booking process, you can choose our exciting and fun 4-passenger RZR vehicle. It’s a blast! You will receive full driving instructions before setting off.'
          }

          const customImages = vehicleImages[vehicle._id] || vehicleImages.default

          return (
            <div key={vehicle._id} className="vc-card">
              <AutoImageCarousel images={customImages} videoFallback={vehicle.video_url} />

              <div style={{
                padding: '0.9rem 1rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
                flex: 1,
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1rem',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  margin: 0,
                  lineHeight: 1.1,
                }}>
                  {name}
                </h3>

                <p style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.65)',
                  margin: 0,
                  lineHeight: 1.5,
                }}>
                  {description}
                </p>

                {(name.toLowerCase().includes('defender') || priceLine?.[vehicle._id]) && (
                  <div style={{
                    marginTop: '0.5rem',
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.75)',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '0.5rem',
                  }}>
                    {name.toLowerCase().includes('rzr') ? '$2900 MXN' : priceLine?.[vehicle._id]}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <style jsx>{`
        .vc-grid {
          display: flex;
          gap: 0.75rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 0.5rem;
          margin: 0 -1rem;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .vc-grid::-webkit-scrollbar { display: none; }

        .vc-card {
          flex: 0 0 78%;
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          border-radius: 12px;
          overflow: hidden;
          background: #000;
          border: 1px solid rgba(107, 191, 46, 0.15);
        }

        @media (min-width: 720px) {
          .vc-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            overflow: visible;
            scroll-snap-type: none;
            margin: 0;
            padding: 0;
            gap: 1rem;
          }
          .vc-card {
            flex: initial;
            scroll-snap-align: none;
          }
        }
      `}</style>
    </section>
  )
}
