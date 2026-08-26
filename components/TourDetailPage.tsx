'use client'

import { useLang } from '@/lib/i18n'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { Clock, Star, MapPin, ChevronLeft, ChevronRight, ChevronDown, Play } from 'lucide-react'
import Link from 'next/link'
import { useState, useRef } from 'react'
import Navbar from '@/components/Navbar'
import BookingWidget from '@/components/BookingWidget'
import VehiclesCompact from '@/components/VehiclesCompact'

interface Review {
  name: string
  location: string
  quote_en: string
  quote_es: string
  rating: number
}

interface Vehicle {
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

interface VehiclePrice {
  price_label: string
  vehicle: {
    _id: string
    name_en: string
    name_es: string
  }
}

interface GalleryImage {
  asset: any
  alt_en: string
  alt_es: string
  hotspot?: any
  crop?: any
}

interface TourDetailData {
  slug: { current: string }
  hero_image: any
  hero_video?: string
  subtitle_en: string
  subtitle_es: string
  long_description_en: any[]
  long_description_es: any[]
  whats_included_en: string[]
  whats_included_es: string[]
  what_to_expect_bullets_en: string[]
  what_to_expect_bullets_es: string[]
  insurance_en: any[]
  insurance_es: any[]
  cancellation_en: any[]
  cancellation_es: any[]
  gallery: GalleryImage[]
  reviews: Review[]
  vehicle_prices?: VehiclePrice[]
  tour: {
    name_en: string
    name_es: string
    description_en: string
    description_es: string
    duration_en: string
    duration_es: string
    price: string
    image: any
  }
}

// A unified media item — either a video URL or a Sanity image
type MediaItem =
  | { type: 'video'; url: string }
  | { type: 'image'; img: GalleryImage | any }

// ─── Small components ────────────────────────────────────────────────────────

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ border: '1px solid rgba(107,191,46,0.2)', borderRadius: 12, overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1rem 1.25rem', background: '#1c1c1c', border: 'none', cursor: 'pointer',
          color: '#fff', fontFamily: 'var(--font-heading)',
          fontSize: '1rem', letterSpacing: '0.04em', textTransform: 'uppercase', textAlign: 'left',
        }}
      >
        {title}
        <ChevronDown size={18} style={{ color: 'var(--orange)', flexShrink: 0, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </button>
      {open && (
        <div style={{ padding: '1.25rem', background: '#161616', fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)', borderTop: '1px solid rgba(107,191,46,0.1)' }}>
          {children}
        </div>
      )}
    </div>
  )
}

function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 2, marginBottom: '0.75rem' }}>
      {Array.from({ length: 5 }).map((_, s) => (
        <Star key={s} size={14}
          fill={s < rating ? 'var(--orange)' : 'transparent'}
          stroke={s < rating ? 'var(--orange)' : 'rgba(255,255,255,0.25)'}
        />
      ))}
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      {items.map((h, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)' }}>
          <span style={{ color: 'var(--orange)', marginTop: 2, flexShrink: 0 }}>✓</span>
          {h}
        </li>
      ))}
    </ul>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: 'var(--font-heading)',
      fontSize: '1.1rem', textTransform: 'uppercase',
      letterSpacing: '0.05em', marginBottom: '1rem', marginTop: 0,
      color: 'var(--orange)',
    }}>
      {children}
    </h2>
  )
}



// ─── Main component ──────────────────────────────────────────────────────────

export default function TourDetailPage({ data, vehicles }: { data: TourDetailData; vehicles: Vehicle[] }) {
  const { lang } = useLang()

  const [activeIdx, setActiveIdx] = useState(0)
  const [lightbox, setLightbox] = useState<{ kind: 'image' | 'video'; src: string } | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const tour = data.tour

  const name          = lang === 'es' ? tour.name_es                   : tour.name_en
  const duration      = lang === 'es' ? tour.duration_es               : tour.duration_en
  const longDesc      = lang === 'es' ? data.long_description_es       : data.long_description_en
  const whatsIncluded = lang === 'es' ? data.whats_included_es         : data.whats_included_en
  const expectBullets = lang === 'es' ? data.what_to_expect_bullets_es : data.what_to_expect_bullets_en
  const insurance     = lang === 'es' ? data.insurance_es              : data.insurance_en
  const cancellation  = lang === 'es' ? data.cancellation_es           : data.cancellation_en

  const mediaItems: MediaItem[] = []
  if (data.hero_video) {
    mediaItems.push({ type: 'video', url: data.hero_video })
  }
  if (data.gallery && data.gallery.length > 0) {
    for (const img of data.gallery) mediaItems.push({ type: 'image', img })
  } else if (data.hero_image && !data.hero_video) {
    mediaItems.push({ type: 'image', img: { ...data.hero_image, alt_en: name, alt_es: name } })
  }

  function prev() { setActiveIdx((i) => (i === 0 ? mediaItems.length - 1 : i - 1)) }
  function next() { setActiveIdx((i) => (i === mediaItems.length - 1 ? 0 : i + 1)) }

  function handleCarouselScroll() {
    if (!carouselRef.current) return
    const el = carouselRef.current
    const idx = Math.round(el.scrollLeft / el.clientWidth)
    if (idx !== activeIdx) setActiveIdx(idx)
  }

  function jumpToCarousel(i: number) {
    setActiveIdx(i)
    if (!carouselRef.current) return
    const el = carouselRef.current
    el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' })
  }

  function openLightbox(item: MediaItem) {
    if (item.type === 'video') {
      setLightbox({ kind: 'video', src: item.url })
    } else {
      setLightbox({ kind: 'image', src: urlFor(item.img).width(1600).url() })
    }
  }

  const noContent = <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
    {lang === 'es' ? 'Información próximamente.' : 'Information coming soon.'}
  </p>

  return (
  <main style={{ background: 'var(--charcoal)', minHeight: '100vh', color: '#fff', paddingTop: '80px' }}>
    <Navbar />

      {/* ─── TOP SECTION: title, vehicle cards, price strip, booking widget ─── */}
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '66px 1rem 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.75rem',
      }}>

        <Link href="/#tours" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
          fontFamily: 'var(--font-heading)', fontSize: '0.8rem',
          letterSpacing: '0.05em',
        }}>
          <ChevronLeft size={14} /> {lang === 'es' ? 'Volver a tours' : 'Back to tours'}
        </Link>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 6vw, 4rem)', textTransform: 'uppercase',
            letterSpacing: '0.03em', lineHeight: 1.05, color: '#fff', margin: 0,
          }}>
            {name}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={15} style={{ color: 'var(--orange)' }} />
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--orange)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {duration}
            </span>
          </div>
        </div>

        {/* Vehicle cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <VehiclesCompact
            vehicles={vehicles}
            priceLine={Object.fromEntries(
              (data.vehicle_prices ?? [])
                .filter((vp) => vp.vehicle?._id)
                .map((vp) => [vp.vehicle._id, vp.price_label])
            )}
          />
        </div>

        <aside style={{
          background: '#1c1c1c',
          border: '1px solid rgba(107, 191, 46, 0.2)',
          borderRadius: 12,
          overflow: 'hidden',
          width: '100%',
          maxWidth: 680,
          alignSelf: 'center',
        }}>
          <BookingWidget initialTourName={tour.name_en} />
        </aside>
      </div>

      {/* ─── LOWER SECTION ─── */}
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '2rem 1rem 4rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
      }}>

        {/* ── GALLERY ── */}
        {mediaItems.length > 0 && (
        <div className="tdp-gallery">
          {/* Mobile: swipeable carousel */}
          <div
            ref={carouselRef}
            className="tdp-carousel"
            onScroll={handleCarouselScroll}
          >
            {mediaItems.map((item, i) => (
              <div key={i} className="tdp-carousel-item" onClick={() => openLightbox(item)} style={{ position: 'relative' }}>
                {item.type === 'video' ? (
                  <>
                    <video
                      src={item.url}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', background: '#000' }}
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      pointerEvents: 'none',
                    }}>
                      <div style={{
                        width: 56, height: 56,
                        background: 'rgba(0,0,0,0.5)',
                        border: '2px solid white',
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Play size={22} fill="white" strokeWidth={0} style={{ marginLeft: 3 }} />
                      </div>
                    </div>
                  </>
                ) : (
                  <img
                    src={urlFor(item.img).width(900).height(675).fit('crop').url()}
                    alt={lang === 'es' ? item.img.alt_es : item.img.alt_en}
                  />
                )}
              </div>
            ))}
          </div>
          {mediaItems.length > 1 && (
            <div className="tdp-carousel-dots">
              {mediaItems.map((_, i) => (
                <button
                  key={i}
                  className={`tdp-carousel-dot ${i === activeIdx ? 'active' : ''}`}
                  onClick={() => jumpToCarousel(i)}
                  aria-label={`Item ${i + 1}`}
                />
              ))}
            </div>
          )}

          {/* Desktop: main media + thumbnails with arrows */}
          <div className="tdp-desktop-gallery">
            <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', aspectRatio: '16/9' }}>
              {mediaItems[activeIdx].type === 'video' ? (
                <>
                  <video
                    src={(mediaItems[activeIdx] as { type: 'video'; url: string }).url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', cursor: 'pointer', background: '#000' }}
                    onClick={() => openLightbox(mediaItems[activeIdx])}
                  />
                  <div
                    onClick={() => openLightbox(mediaItems[activeIdx])}
                    style={{
                      position: 'absolute', inset: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{
                      width: 64, height: 64,
                      background: 'rgba(0,0,0,0.5)',
                      border: '2px solid white',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Play size={26} fill="white" strokeWidth={0} style={{ marginLeft: 3 }} />
                    </div>
                  </div>
                </>
              ) : (
                <img
                  src={urlFor((mediaItems[activeIdx] as { type: 'image'; img: any }).img).width(1600).height(900).fit('crop').url()}
                  alt={lang === 'es'
                    ? (mediaItems[activeIdx] as { type: 'image'; img: any }).img.alt_es
                    : (mediaItems[activeIdx] as { type: 'image'; img: any }).img.alt_en}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', cursor: 'zoom-in' }}
                  onClick={() => openLightbox(mediaItems[activeIdx])}
                />
              )}
              {mediaItems.length > 1 && (
                <>
                  <button onClick={prev} style={{
                    position: 'absolute', top: '50%', left: 12, transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '50%', width: 40, height: 40,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', color: '#fff', zIndex: 2,
                  }}><ChevronLeft size={20} /></button>
                  <button onClick={next} style={{
                    position: 'absolute', top: '50%', right: 12, transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '50%', width: 40, height: 40,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', color: '#fff', zIndex: 2,
                  }}><ChevronRight size={20} /></button>
                </>
              )}
              <div style={{
                position: 'absolute', bottom: 12, right: 14, fontSize: 12,
                color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-heading)',
                background: 'rgba(0,0,0,0.5)', padding: '2px 8px', borderRadius: 999,
              }}>
                {activeIdx + 1} / {mediaItems.length}
              </div>
            </div>
            {mediaItems.length > 1 && (
              <div style={{ display: 'flex', gap: 8, marginTop: 10, overflowX: 'auto', paddingBottom: 4 }}>
                {mediaItems.map((item, i) => (
                  <div key={i} onClick={() => setActiveIdx(i)} style={{
                    flexShrink: 0, width: 96, height: 54, borderRadius: 6, overflow: 'hidden', cursor: 'pointer',
                    border: activeIdx === i ? '2px solid var(--orange)' : '2px solid transparent',
                    opacity: activeIdx === i ? 1 : 0.55, transition: 'opacity 0.2s, border-color 0.2s',
                    position: 'relative',
                    background: '#000',
                  }}>
                    {item.type === 'video' ? (
                      <>
                        <video
                          src={item.url}
                          muted
                          playsInline
                          preload="metadata"
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                        <div style={{
                          position: 'absolute', inset: 0,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          pointerEvents: 'none',
                        }}>
                          <Play size={16} fill="white" strokeWidth={0} style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.6))' }} />
                        </div>
                      </>
                    ) : (
                      <img src={urlFor(item.img).width(192).height(108).fit('crop').url()} alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        )}

        {/* ── WHAT'S INCLUDED ── */}
        {whatsIncluded && whatsIncluded.length > 0 && (
          <div className="tdp-section">
            <SectionHeading>{lang === 'es' ? 'Qué incluye' : "What's Included"}</SectionHeading>
            <BulletList items={whatsIncluded} />
          </div>
        )}

        {/* ── WHAT TO EXPECT ── */}
        {((longDesc && longDesc.length > 0) || (expectBullets && expectBullets.length > 0)) && (
          <div className="tdp-section">
            <SectionHeading>{lang === 'es' ? 'Qué esperar' : 'What to Expect'}</SectionHeading>
            {longDesc && longDesc.length > 0 && (
              <div style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)', marginBottom: expectBullets?.length ? '1rem' : 0 }}>
                <PortableText value={longDesc} />
              </div>
            )}
            {expectBullets && expectBullets.length > 0 && <BulletList items={expectBullets} />}
          </div>
        )}

        {/* ── QUICK INFO ── */}
        <div className="tdp-section" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
          {[
            { icon: <Clock size={15} />, label: lang === 'es' ? 'Duración' : 'Duration', value: duration },
            { icon: <MapPin size={15} />, label: lang === 'es' ? 'Salida' : 'Departure', value: 'San Miguel de Allende' },
          ].map(({ icon, label, value }) => (
            <div key={label} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--orange)', marginTop: 2 }}>{icon}</span>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
                <div style={{ fontSize: '0.95rem', color: '#fff', marginTop: 2 }}>{value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── REVIEWS ── */}
        {data.reviews && data.reviews.length > 0 && (
          <div className="tdp-section">
            <SectionHeading>{lang === 'es' ? 'Reseñas' : 'Reviews'}</SectionHeading>
            <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: 8 }}>
              {data.reviews.map((r, i) => (
                <div key={i} style={{
                  flexShrink: 0, width: 260,
                  background: '#111',
                  border: '1px solid rgba(107,191,46,0.1)',
                  borderRadius: 10, padding: '1rem',
                }}>
                  <Stars rating={r.rating ?? 5} />
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', margin: '0 0 0.75rem' }}>
                    "{lang === 'es' && r.quote_es ? r.quote_es : r.quote_en}"
                  </p>
                  <div style={{ fontSize: '0.85rem', color: '#fff', fontFamily: 'var(--font-heading)' }}>{r.name}</div>
                  {r.location && <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{r.location}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── ACCORDIONS ── */}
        <Accordion title={lang === 'es' ? 'Información de seguro' : 'Insurance Information'}>
          {insurance && insurance.length > 0 ? <PortableText value={insurance} /> : noContent}
        </Accordion>
        <Accordion title={lang === 'es' ? 'Política de cancelación' : 'Cancellation Policy'}>
          {cancellation && cancellation.length > 0 ? <PortableText value={cancellation} /> : noContent}
        </Accordion>

      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.95)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem',
            cursor: lightbox.kind === 'image' ? 'zoom-out' : 'default',
          }}
        >
          {lightbox.kind === 'video' ? (
            <video
              src={lightbox.src}
              autoPlay
              controls
              playsInline
              style={{ maxWidth: '90vw', maxHeight: '85vh', display: 'block' }}
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={lightbox.src}
              alt=""
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 8 }}
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </main>
  )
}
