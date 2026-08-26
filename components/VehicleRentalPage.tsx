'use client'

import { useLang } from '@/lib/i18n'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState, useRef } from 'react'
import Navbar from '@/components/Navbar'

interface GalleryImage {
  asset: any
  alt_en: string
  alt_es: string
  hotspot?: any
  crop?: any
}

interface VehicleRentalData {
  slug: { current: string }
  hero_image: any
  tagline_en: string
  tagline_es: string
  long_description_en: any[]
  long_description_es: any[]
  rental_rates_en: string[]
  rental_rates_es: string[]
  whats_included_en: string[]
  whats_included_es: string[]
  requirements_en: string[]
  requirements_es: string[]
  insurance_en: any[]
  insurance_es: any[]
  cancellation_en: any[]
  cancellation_es: any[]
  gallery: GalleryImage[]
  vehicle: {
    name_en: string
    name_es: string
    description_en: string
    description_es: string
    price: string
    video_url: string
  }
}

const WHATSAPP_NUMBER = '5214151090021'

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.515 5.26l.36.572-1.003 3.668 3.767-.992-.15.792zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.371s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
    </svg>
  )
}

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

// Tick-prefixed bullet list (used for What's Included, Rental Requirements)
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

// Plain bullet list (used for Rental Rates)
function PlainBulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      {items.map((h, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)' }}>
          <span style={{ color: 'var(--orange)', marginTop: '0.55em', flexShrink: 0, width: 5, height: 5, borderRadius: '50%', background: 'var(--orange)', display: 'inline-block' }} />
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

function ReserveButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        background: '#25D366',
        color: 'white',
        fontFamily: 'var(--font-heading)',
        fontSize: '1rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        padding: '0.85rem 2.2rem',
        borderRadius: 999,
        textDecoration: 'none',
        transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
        boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
        alignSelf: 'flex-start',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.background = '#1ebe57'
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.5)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.background = '#25D366'
        e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 211, 102, 0.35)'
      }}
    >
      <WhatsAppIcon size={18} />
      {label}
    </a>
  )
}

// ─── Main component ─────────────────────────────────────────────────────────

export default function VehicleRentalPage({ data }: { data: VehicleRentalData }) {
  const { lang } = useLang()

  const [activeImg, setActiveImg] = useState(0)
  const [lightbox, setLightbox] = useState<string | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const vehicle = data.vehicle

  const name          = lang === 'es' ? vehicle.name_es                : vehicle.name_en
  const tagline       = lang === 'es' ? data.tagline_es                : data.tagline_en
  const longDesc      = lang === 'es' ? data.long_description_es       : data.long_description_en
  const rentalRates   = lang === 'es' ? data.rental_rates_es           : data.rental_rates_en
  const whatsIncluded = lang === 'es' ? data.whats_included_es         : data.whats_included_en
  const requirements  = lang === 'es' ? data.requirements_es           : data.requirements_en
  const insurance     = lang === 'es' ? data.insurance_es              : data.insurance_en
  const cancellation  = lang === 'es' ? data.cancellation_es           : data.cancellation_en

  const whatsAppMessage = lang === 'es'
    ? `¡Hola! Me gustaría reservar el ${name}. ¿Podrías confirmarme disponibilidad?`
    : `Hi! I'd like to reserve the ${name}. Could you let me know availability?`
  const whatsAppHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsAppMessage)}`
  const reserveLabel = lang === 'es' ? 'Reservar' : 'Reserve'

  const galleryImages = data.gallery && data.gallery.length > 0
    ? data.gallery
    : data.hero_image
      ? [{ ...data.hero_image, alt_en: name, alt_es: name }]
      : []

  function prev() { setActiveImg((i) => (i === 0 ? galleryImages.length - 1 : i - 1)) }
  function next() { setActiveImg((i) => (i === galleryImages.length - 1 ? 0 : i + 1)) }

  function handleCarouselScroll() {
    if (!carouselRef.current) return
    const el = carouselRef.current
    const idx = Math.round(el.scrollLeft / el.clientWidth)
    if (idx !== activeImg) setActiveImg(idx)
  }

  function jumpToCarousel(i: number) {
    setActiveImg(i)
    if (!carouselRef.current) return
    const el = carouselRef.current
    el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' })
  }

  const noContent = <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
    {lang === 'es' ? 'Información próximamente.' : 'Information coming soon.'}
  </p>

  return (
  <main style={{ background: 'var(--charcoal)', minHeight: '100vh', color: '#fff', paddingTop: '80px' }}>
    <Navbar />

      {/* ─── TOP SECTION ─── */}
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '66px 1rem 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.75rem',
      }}>

        <Link href="/#vehicles" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
          fontFamily: 'var(--font-heading)', fontSize: '0.8rem',
          letterSpacing: '0.05em',
        }}>
          <ChevronLeft size={14} /> {lang === 'es' ? 'Volver a vehículos' : 'Back to vehicles'}
        </Link>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 6vw, 4rem)', textTransform: 'uppercase',
            letterSpacing: '0.03em', lineHeight: 1.05, color: '#fff', margin: 0,
          }}>
            {name}
          </h1>
          {tagline && (
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              color: 'var(--orange)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              {tagline}
            </div>
          )}
        </div>

        <ReserveButton href={whatsAppHref} label={reserveLabel} />
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
        {galleryImages.length > 0 && (
        <div className="tdp-gallery">
          <div
            ref={carouselRef}
            className="tdp-carousel"
            onScroll={handleCarouselScroll}
          >
            {galleryImages.map((img, i) => (
              <div key={i} className="tdp-carousel-item">
                <img
                  src={urlFor(img).width(900).height(675).fit('crop').url()}
                  alt={lang === 'es' ? img.alt_es : img.alt_en}
                  onClick={() => setLightbox(urlFor(img).width(1600).url())}
                />
              </div>
            ))}
          </div>
          {galleryImages.length > 1 && (
            <div className="tdp-carousel-dots">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  className={`tdp-carousel-dot ${i === activeImg ? 'active' : ''}`}
                  onClick={() => jumpToCarousel(i)}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          )}

          <div className="tdp-desktop-gallery">
            <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', aspectRatio: '16/9' }}>
              <img
                src={urlFor(galleryImages[activeImg]).width(1600).height(900).fit('crop').url()}
                alt={lang === 'es' ? galleryImages[activeImg].alt_es : galleryImages[activeImg].alt_en}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', cursor: 'zoom-in' }}
                onClick={() => setLightbox(urlFor(galleryImages[activeImg]).width(1600).url())}
              />
              {galleryImages.length > 1 && (
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
                {activeImg + 1} / {galleryImages.length}
              </div>
            </div>
            {galleryImages.length > 1 && (
              <div style={{ display: 'flex', gap: 8, marginTop: 10, overflowX: 'auto', paddingBottom: 4 }}>
                {galleryImages.map((img, i) => (
                  <div key={i} onClick={() => setActiveImg(i)} style={{
                    flexShrink: 0, width: 96, height: 54, borderRadius: 6, overflow: 'hidden', cursor: 'pointer',
                    border: activeImg === i ? '2px solid var(--orange)' : '2px solid transparent',
                    opacity: activeImg === i ? 1 : 0.55, transition: 'opacity 0.2s, border-color 0.2s',
                  }}>
                    <img src={urlFor(img).width(192).height(108).fit('crop').url()} alt=""
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        )}

        {/* ── ABOUT THIS VEHICLE ── */}
        {longDesc && longDesc.length > 0 && (
          <div className="tdp-section">
            <SectionHeading>{lang === 'es' ? 'Sobre este vehículo' : 'About This Vehicle'}</SectionHeading>
            <div style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)' }}>
            {data.slug?.current?.toLowerCase() === 'defender' || name?.toLowerCase().includes('defender') ? (
                <p>
                  {lang === 'es' 
                    ? 'En el paso 3 del proceso de reserva, podrás elegir nuestro emocionante y divertido vehículo RZR para 4 pasajeros. ¡Es muy divertido! Recibirás instrucciones completas para conducirlo antes de partir' 
                    : 'In step 3 of the booking process, you can choose our exciting and fun 4-passenger RZR vehicle. It is a lot of fun! You will receive full driving instructions before setting off.'}
                </p>
              ) : (
                <PortableText value={longDesc} />
              )}
            
            </div>
          </div>
        )}

        {/* ── RENTAL RATES ── */}
        {rentalRates && rentalRates.length > 0 && (
          <div className="tdp-section">
            <SectionHeading>{lang === 'es' ? 'Tarifas de alquiler' : 'Rental Rates'}</SectionHeading>
            <PlainBulletList items={rentalRates} />
          </div>
        )}

        {/* ── WHAT'S INCLUDED ── */}
        {whatsIncluded && whatsIncluded.length > 0 && (
          <div className="tdp-section">
            <SectionHeading>{lang === 'es' ? 'Qué incluye' : "What's Included"}</SectionHeading>
            <BulletList items={whatsIncluded} />
          </div>
        )}

        {/* ── RENTAL REQUIREMENTS ── */}
        {requirements && requirements.length > 0 && (
          <div className="tdp-section">
            <SectionHeading>{lang === 'es' ? 'Requisitos de alquiler' : 'Rental Requirements'}</SectionHeading>
            <BulletList items={requirements} />
          </div>
        )}

        {/* ── ACCORDIONS ── */}
        <Accordion title={lang === 'es' ? 'Información de seguro' : 'Insurance Information'}>
          {insurance && insurance.length > 0 ? <PortableText value={insurance} /> : noContent}
        </Accordion>
        <Accordion title={lang === 'es' ? 'Política de cancelación' : 'Cancellation Policy'}>
          {cancellation && cancellation.length > 0 ? <PortableText value={cancellation} /> : noContent}
        </Accordion>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
          <ReserveButton href={whatsAppHref} label={reserveLabel} />
        </div>

      </div>

      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', cursor: 'zoom-out' }}>
          <img src={lightbox} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 8 }} />
        </div>
      )}
    </main>
  )
}
