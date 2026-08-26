'use client'

import { useLang } from '@/lib/i18n'
import { Clock } from 'lucide-react'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { urlFor } from '@/lib/sanity'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type Tour = {
  _id: string
  name_en: string
  name_es: string
  description_en: string
  description_es: string
  duration_en: string
  duration_es: string
  price_en: string  // was: price: string
  price_es: string
  image: any
  slug: string | null
}

type Props = {
  tours: Tour[]
}

export default function Tours({ tours }: Props) {
  const { lang, t } = useLang()
  const router = useRouter()
  useScrollReveal()
  const [showAll, setShowAll] = useState(false)

  function goToTour(slug: string | null) {
    if (slug) router.push(`/tours/${slug}`)
  }

  return (
    <section
      id="tours"
      style={{
        background: 'var(--charcoal)',
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
            ——— {t('tours.subtitle')} ———
          </div>
          <h2 className="section-heading">{t('tours.title')}</h2>
          <div className="section-divider" style={{ marginTop: '1rem' }} />
        </div>

        {/* Tour cards grid */}
        <div className="tours-grid">
          
          {(showAll ? tours : tours.slice(0, 3)).map((tour, i) => {
            const name = lang === 'es' ? tour.name_es : tour.name_en
            const description = lang === 'es' ? tour.description_es : tour.description_en
            const duration = lang === 'es' ? tour.duration_es : tour.duration_en
            const price = lang === 'es' ? tour.price_es : tour.price_en

            return (
              <div
                key={tour._id}
                className={showAll && i >= 3 ? '' : 'reveal'}
                onClick={() => goToTour(tour.slug)}
                style={{
                  transitionDelay: `${i * 0.1}s`,
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  gap: 0,
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
                {/* Image */}
                <div style={{ width: '100%', height: '340px', overflow: 'hidden', flexShrink: 0 }}>
                  <img
                    src={urlFor(tour.image).width(600).height(600).fit('crop').url()}
                    alt={name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
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
                  {/* Name + Duration */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', opacity: 0.7, flexShrink: 0 }}>
                      <Clock size={16} color="white" />
                      <span style={{ fontSize: '1rem', color: 'white', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em' }}>
                        {duration}
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <p style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    color: 'var(--orange)',
                    margin: 0,
                    letterSpacing: '0.03em',
                  }}>
                    
                    {price}
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

                  {/* Book Now */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 'auto',
                    paddingTop: '1.75rem',
                  }}>
                    <span
                      onClick={(e) => { e.stopPropagation(); goToTour(tour.slug) }}
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
                      {t('tours.bookNow')}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Show More / Show Less */}
        {tours.length > 3 && (
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              onClick={() => setShowAll(!showAll)}
              style={{
                background: 'none',
                border: '1px solid var(--orange)',
                color: 'var(--orange)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.75rem 2.5rem',
                borderRadius: '999px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--orange)'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'none'
                e.currentTarget.style.color = 'var(--orange)'
              }}
            >
              {showAll
                ? (lang === 'es' ? 'Ver menos' : 'Show Less')
                : (lang === 'es' ? 'Ver más' : 'Show More')}
            </button>
          </div>
        )}

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
