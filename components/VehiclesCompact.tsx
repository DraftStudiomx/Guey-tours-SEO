'use client'

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

          // Use tour-page-specific description if set, otherwise fall back to homepage description
          let description = lang === 'es'
            ? (vehicle.tour_page_description_es || vehicle.description_es)
            : (vehicle.tour_page_description_en || vehicle.description_en)

          // MODIFICACIÓN ÚNICA PARA LA DEFENDER (Español e Inglés):
          if (name.toLowerCase().includes('defender')) {
            description = lang === 'es'
              ? 'En el paso 3 del proceso de reserva, podrás elegir nuestro emocionante y divertido vehículo RZR para 4 pasajeros. ¡Es muy divertido! Recibirás instrucciones completas para conducirlo antes de partir.'
              : 'In step 3 of the booking process, you can choose our exciting and fun 4-passenger RZR vehicle. It’s a blast! You will receive full driving instructions before setting off.'
          }

          return (
            <div key={vehicle._id} className="vc-card">
              <div style={{
                width: '100%',
                height: 160,
                overflow: 'hidden',
                flexShrink: 0,
                background: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <video
                  src={vehicle.video_url}
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
              </div>

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
                    {name.toLowerCase().includes('defender') ? '$2900 MXN' : priceLine?.[vehicle._id]}
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
