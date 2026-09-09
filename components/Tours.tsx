'use client'

import { useLang } from '@/lib/i18n'
import { Clock } from 'lucide-react'
import { useScrollReveal } from '@/lib/useScrollReveal'

type TourCard = {
  id: string
  title: { en: string; es: string }
  description: { en: string; es: string }
  duration: { en: string; es: string }
  url: string
  image: string
  imgTitle: string
  imgAlt: string
}

const manualTours: TourCard[] = [
  {
    id: 'city-tour',
    title: { en: 'City Tour', es: 'City Tour' },
    description: {
      en: 'Discover the historic heart and vibrant outskirts of the city on an accessible route that blends local culture with light, scenic riding. Perfect for a quick, immersive outdoor introduction.',
      es: 'Descubre el corazón histórico y las afueras vibrantes de la ciudad en una ruta accesible que combina la cultura local con un manejo ligero y panorámico. Perfecto para una introducción al aire libre rápida y envolvente.'
    },
    duration: { en: '1.5 HRS', es: '1.5 HRS' },
    url: 'https://www.gueytours.com/tour-el-centro-san-miguel',
    image: '/images/SEO/Guey Tours Combine ATV Tours with a Fun City Tour Adventure.webp',
    imgTitle: 'Guey Tours Combine ATV Tours with a Fun City Tour Adventure',
    imgAlt: 'Two women in goggles enjoying a Guey Tours City Tour on an ATV, blending thrills with an ATV Tours experience.',
  },
  {
    id: 'san-miguel-buggy-tour',
    title: { en: 'San Miguel Buggy Tour', es: 'San Miguel Buggy Tour' },
    description: {
      en: 'Experience the thrill of a rugged buggy ride across open trails. This tour offers a comfortable yet daring way to navigate dusty paths and wide-open scenic spaces.',
      es: 'Experimenta la emoción de un recorrido en buggy por senderos abiertos. Este tour ofrece una forma cómoda pero atrevida de navegar por caminos polvorientos y espacios panorámicos abiertos.'
    },
    duration: { en: '2 HRS', es: '2 HRS' },
    url: 'https://www.gueytours.com/tours/san-miguel-viejo',
    image: '/images/SEO/Guey Tours Discover History on ATV Tours & San Miguel Buggy Tour.webp',
    imgTitle: 'Guey Tours: Discover History on ATV Tours & San Miguel Buggy Tour',
    imgAlt: 'Two women posing in an ancient stone archway during their Guey Tours ATV Tours and San Miguel Buggy Tour adventure.',
  },
  {
    id: 'atotonilco',
    title: { en: 'Atotonilco ATV Tour', es: 'Atotonilco ATV Tour' },
    description: {
      en: 'Ride out toward the iconic sanctuary of Atotonilco. This route delivers a unique mix of historical landmarks and dynamic terrain that keeps your energy high.',
      es: 'Cabalga hacia el icónico santuario de Atotonilco. Esta ruta ofrece una combinación única de monumentos históricos y terreno dinámico que mantiene tu energía al máximo.'
    },
    duration: { en: '2 HRS', es: '2 HRS' },
    url: 'https://www.gueytours.com/tours/atotonilco',
    image: '/images/SEO/Guey Tours Atotonilco Sightseeing on UTV & ATV Tours.webp',
    imgTitle: 'Guey Tours: Atotonilco Sightseeing on UTV & ATV Tours',
    imgAlt: 'A gray Can-Am UTV, part of the Guey Tours ATV Tours fleet, parked in front of the historic Atotonilco church.',
  },
  {
    id: 'atascadero',
    title: { en: 'Atascadero ATV Tour', es: 'Atascadero ATV Tour' },
    description: {
      en: 'Navigate through charming historic streets and traditional cobblestone paths just like this. This route blends local colonial architecture with an engaging, dynamic ride through scenic urban neighborhoods.',
      es: 'Navega a través de encantadoras calles históricas y caminos empedrados tradicionales. Esta ruta combina la arquitectura colonial local con un paseo atractivo y dinámico a través de pintorescos vecindarios urbanos.'
    },
    duration: { en: '2 HRS', es: '2 HRS' },
    url: 'https://www.gueytours.com/tours/atascadero',
    image: '/images/SEO/Guey Tours ATV Tours and Convoy Riding through Atascadero.webp',
    imgTitle: 'Guey Tours: ATV Tours and Convoy Riding through Atascadero',
    imgAlt: 'A caravan of ATVs driving down a cobblestone street in Atascadero during a Guey Tours ATV Tours excursion.',
  },
  {
    id: 'agua-espinoza',
    title: { en: 'Agua Espinosa ATV Tour', es: 'Agua Espinosa ATV Tour' },
    description: {
      en: 'Immerse yourself in lush, water-carved landscapes. This scenic path treats you to diverse terrain, rich vegetation, and rewarding nature viewpoints.',
      es: 'Sumérgete en paisajes exuberantes esculpidos por el agua. Este sendero panorámico te obsequia diversos terrenos, vegetación rica y gratificantes miradores naturales.'
    },
    duration: { en: '2 HRS', es: '2 HRS' },
    url: 'https://www.gueytours.com/tours/agua-espinoza',
    image: '/images/SEO/Guey Tours Exploring Agua Espinoza on Exciting ATV Tours.webp',
    imgTitle: 'Guey Tours Exploring Agua Espinoza on Exciting ATV Tours',
    imgAlt: 'A group of riders on red ATVs, led by Guey Tours, on a dusty trail through the arid landscape of Agua Espinosa.',
  },
]

export default function Tours() {
  const { lang, t } = useLang()
  useScrollReveal()

  return (
    <section
      id="tours"
      style={{
        background: 'var(--charcoal, #1a1a1a)',
        padding: '6rem 0',
        position: 'relative',
      }}
    >
      {/* Top decoration */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent, var(--orange), transparent)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="reveal">
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 3vw, 2.8rem)',
            fontWeight: 800,
            color: 'white',
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            {lang === 'es' 
              ? 'Explora Nuestros Tours en Cuatrimoto en San Miguel de Allende' 
              : 'Explore Our ATV Tours in San Miguel de Allende'}
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.75)',
            fontSize: '1.05rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            {lang === 'es' 
              ? 'Elige entre nuestra selección diversa de excursiones y encuentra la ruta ideal para explorar los impresionantes paisajes que rodean San Miguel de Allende.'
              : 'Choose from our diverse selection of excursions and find the ideal route to explore the stunning landscapes surrounding San Miguel de Allende.'}
          </p>
          <div className="section-divider" style={{ marginTop: '1.5rem', marginInline: 'auto' }} />
        </div>

        {/* Tour cards flex container */}
        <div className="tours-container">
          {manualTours.map((tour, i) => {
            const title = lang === 'es' ? tour.title.es : tour.title.en
            const description = lang === 'es' ? tour.description.es : tour.description.en
            const duration = lang === 'es' ? tour.duration.es : tour.duration.en

            return (
              <div
                key={tour.id}
                className="reveal tour-card"
                style={{ transitionDelay: `${i * 0.1}s` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(255,107,0,0.25)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.4)'
                }}
              >
                {/* Image */}
                <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={tour.image}
                    title={tour.imgTitle}
                    alt={tour.imgAlt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                  />
                </div>

                {/* Info panel */}
                <div style={{
                  padding: '1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem',
                  flex: 1,
                  justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {/* Title + Duration */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                      <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 800,
                        fontSize: '1.15rem',
                        letterSpacing: '0.03em',
                        textTransform: 'uppercase',
                        color: 'white',
                        margin: 0,
                        lineHeight: 1.1,
                      }}>
                        {title}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', opacity: 0.75, flexShrink: 0 }}>
                        <Clock size={14} color="white" />
                        <span style={{ fontSize: '0.8rem', color: 'white', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em' }}>
                          {duration}
                        </span>
                      </div>
                    </div>

                    <p style={{
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.7)',
                      margin: 0,
                      lineHeight: 1.5,
                    }}>
                      {description}
                    </p>
                  </div>

                  {/* Book Now Button */}
                  <div style={{ paddingTop: '0.8rem' }}>
                    <a
                      href={tour.url}
                      style={{
                        background: 'var(--orange)',
                        color: 'white',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        padding: '0.65rem 1.5rem',
                        borderRadius: '999px',
                        textDecoration: 'none',
                        display: 'block',
                        textAlign: 'center',
                        width: '100%',
                        boxSizing: 'border-box',
                        transition: 'background 0.3s ease',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = '#e05d00' }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--orange)' }}
                    >
                      {t('tours.bookNow')}
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* Flexbox layout styles for perfect centering */}
      <style jsx>{`
        .tours-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
        }

        .tour-card {
          display: flex;
          flex-direction: column;
          background: #000;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          width: calc(33.333% - 1.34rem);
          max-width: 360px;
        }

        @media (max-width: 1024px) {
          .tour-card {
            width: calc(50% - 1rem);
          }
        }

        @media (max-width: 640px) {
          .tour-card {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
