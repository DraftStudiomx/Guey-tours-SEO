'use client'

import { useLang } from '@/lib/i18n'
import { useState } from 'react'
import { X, ArrowRight } from 'lucide-react'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { urlFor } from '@/lib/sanity'
import Link from 'next/link'

type GalleryImage = {
  _id: string
  image: any
  alt_en: string
  alt_es: string
  span: 'normal' | 'wide'
}

type Props = {
  images: GalleryImage[]
  showSeeAll?: boolean
}

export default function Gallery({ images, showSeeAll = true }: Props) {
  const { lang, t } = useLang()
  const [lightbox, setLightbox] = useState<string | null>(null)
  useScrollReveal()

  return (
    <>
      <section
        id="gallery"
        style={{
          background: 'var(--charcoal)',
          padding: '6rem 0',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 2rem' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="reveal">
            <div style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--orange)',
              fontSize: '0.85rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}>
              ——— {t('gallery.subtitle')} ———
            </div>
            <h2 className="section-heading">{t('gallery.title')}</h2>
            <div className="section-divider" style={{ marginTop: '1rem' }} />
          </div>

          {/* Masonry-style grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.75rem',
          }}
          className="gallery-grid"
          >
            {images.map((img, i) => {
              const src = urlFor(img.image).width(800).height(600).fit('crop').url()
              const alt = lang === 'es' ? img.alt_es : img.alt_en
              return (
                <div
                  key={img._id}
                  className="reveal"
                  onClick={() => setLightbox(urlFor(img.image).width(1600).url())}
                  style={{
                    gridColumn: img.span === 'wide' ? 'span 2' : 'span 1',
                    height: '280px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative',
                    transitionDelay: `${i * 0.08}s`,
                  }}
                >
                  <img
                    src={src}
                    alt={alt || `Gallery ${i + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      display: 'block',
                    }}
                    onMouseEnter={e => { (e.target as HTMLImageElement).style.transform = 'scale(1.06)' }}
                    onMouseLeave={e => { (e.target as HTMLImageElement).style.transform = 'scale(1)' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(232,84,26,0)',
                    transition: 'background 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(232,84,26,0.3)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(232,84,26,0)' }}
                  >
                    <div style={{
                      width: '44px',
                      height: '44px',
                      border: '2px solid white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                      fontSize: '1.5rem',
                    }}
                    className="zoom-icon"
                    >+</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* See All button */}
          {showSeeAll && (
          <div style={{ textAlign: 'center', marginTop: '3rem' }} className="reveal">
            <Link
              href="/gallery"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--orange)',
                color: 'white',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '0.9rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '0.9rem 2rem',
                borderRadius: '999px',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
            >
              {lang === 'es' ? 'Ver Todo' : 'See All Photos'} <ArrowRight size={16} />
            </Link>
          </div>
          )}
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .gallery-grid {
              grid-template-columns: 1fr 1fr !important;
            }
            .gallery-grid > div {
              grid-column: span 1 !important;
              height: 200px !important;
            }
          }
        `}</style>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.92)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'var(--orange)',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '50%',
              display: 'flex',
            }}
          >
            <X size={22} />
          </button>
          <img
            src={lightbox}
            alt="Gallery"
            style={{
              maxWidth: '90vw',
              maxHeight: '85vh',
              objectFit: 'contain',
              boxShadow: '0 0 60px rgba(0,0,0,0.8)',
            }}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
