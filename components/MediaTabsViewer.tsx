'use client'

import { useLang } from '@/lib/i18n'
import { useState } from 'react'
import { Play, Image as ImageIcon, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { urlFor } from '@/lib/sanity'

type VideoItem = {
  _id: string
  title_en: string
  title_es: string
  video_url: string
}

type GalleryImage = {
  _id: string
  image: any
  alt_en: string
  alt_es: string
}

type Props = {
  videos: VideoItem[]
  images: GalleryImage[]
}

export default function MediaTabsViewer({ videos, images }: Props) {
  const { lang } = useLang()
  const [activeTab, setActiveTab] = useState<'videos' | 'gallery'>('videos')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxVideo, setLightboxVideo] = useState<string | null>(null)

  useScrollReveal()

  // Manejo de índices para el carrusel lateral
  const currentListLength = activeTab === 'videos' ? videos.length : images.length

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? currentListLength - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === currentListLength - 1 ? 0 : prev + 1))
  }

  // Al cambiar de tab, reseteamos el index del carrusel a 0
  const switchTab = (tab: 'videos' | 'gallery') => {
    setActiveTab(tab)
    setCurrentIndex(0)
  }

  if ((!videos || videos.length === 0) && (!images || images.length === 0)) return null

  return (
    <section
      id="media-interactive-section"
      style={{
        background: 'var(--charcoal)',
        padding: '5rem 0',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Contenedor principal en Grid: Izquierda Botones, Derecha Carrusel */}
        <div className="media-container-grid" style={{
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: '2.5rem',
          alignItems: 'center',
        }}>

          {/* COLUMNA IZQUIERDA: Botones de selección */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            
            {/* Botón Videos */}
            <button
              onClick={() => switchTab('videos')}
              style={{
                background: activeTab === 'videos' ? 'var(--orange)' : 'rgba(255,255,255,0.05)',
                border: activeTab === 'videos' ? '2px solid var(--orange)' : '2px solid rgba(255,255,255,0.15)',
                color: 'white',
                padding: '1.2rem 1.8rem',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '1.1rem',
                letterSpacing: '0.1em',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === 'videos' ? '0 8px 25px rgba(232,84,26,0.4)' : 'none',
                textAlign: 'left',
              }}
            >
              <div style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: activeTab === 'videos' ? 'white' : 'rgba(232,84,26,0.2)',
                color: activeTab === 'videos' ? 'var(--orange)' : 'var(--orange)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Play size={18} fill="currentColor" strokeWidth={0} style={{ marginLeft: 2 }} />
              </div>
              {lang === 'es' ? 'VIDEOS' : 'VIDEOS'}
            </button>

            {/* Botón Gallery */}
            <button
              onClick={() => switchTab('gallery')}
              style={{
                background: activeTab === 'gallery' ? 'var(--orange)' : 'rgba(255,255,255,0.05)',
                border: activeTab === 'gallery' ? '2px solid var(--orange)' : '2px solid rgba(255,255,255,0.15)',
                color: 'white',
                padding: '1.2rem 1.8rem',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '1.1rem',
                letterSpacing: '0.1em',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === 'gallery' ? '0 8px 25px rgba(232,84,26,0.4)' : 'none',
                textAlign: 'left',
              }}
            >
              <div style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: activeTab === 'gallery' ? 'white' : 'rgba(232,84,26,0.2)',
                color: activeTab === 'gallery' ? 'var(--orange)' : 'var(--orange)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <ImageIcon size={18} />
              </div>
              {lang === 'es' ? 'GALERÍA' : 'GALLERY'}
            </button>
          </div>

          {/* COLUMNA DERECHA: Carrusel / Vista al costado */}
          <div style={{
            position: 'relative',
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            overflow: 'hidden',
            height: '380px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            
            {/* VISTA DE VIDEOS */}
            {activeTab === 'videos' && videos.length > 0 && (
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <video
                  src={videos[currentIndex].video_url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.5rem',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    color: 'white',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}>
                    {lang === 'es' ? videos[currentIndex].title_es : videos[currentIndex].title_en}
                  </div>
                  <button
                    onClick={() => setLightboxVideo(videos[currentIndex].video_url)}
                    style={{
                      alignSelf: 'flex-start',
                      background: 'var(--orange)',
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <Play size={14} fill="white" /> {lang === 'es' ? 'Ver Pantalla Completa' : 'Watch Fullscreen'}
                  </button>
                </div>
              </div>
            )}

            {/* VISTA DE GALERÍA (FOTOS) */}
            {activeTab === 'gallery' && images.length > 0 && (
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <img
                  src={urlFor(images[currentIndex].image).width(1200).height(800).url()}
                  alt={lang === 'es' ? images[currentIndex].alt_es : images[currentIndex].alt_en}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  background: 'rgba(0,0,0,0.7)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '4px',
                  color: 'white',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-body)',
                }}>
                  {currentIndex + 1} / {images.length}
                </div>
              </div>
            )}

            {/* Botones de Navegación del Carrusel (Flechas Izquierda / Derecha) */}
            <button
              onClick={handlePrev}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.6)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.2s',
                zIndex: 10,
              }}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={handleNext}
              style={{
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.6)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.2s',
                zIndex: 10,
              }}
            >
              <ChevronRight size={22} />
            </button>

          </div>

        </div>
      </div>

      {/* Lightbox por si abren el video en grande */}
      {lightboxVideo && (
        <div
          onClick={() => setLightboxVideo(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.95)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          <button
            onClick={() => setLightboxVideo(null)}
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
              zIndex: 1001,
            }}
          >
            <X size={22} />
          </button>
          <video
            src={lightboxVideo}
            autoPlay
            controls
            playsInline
            style={{ maxWidth: '90vw', maxHeight: '85vh', display: 'block' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Adaptabilidad Móvil */}
      <style jsx>{`
        @media (max-width: 900px) {
          .media-container-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
