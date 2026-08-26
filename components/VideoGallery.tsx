'use client'

import { useLang } from '@/lib/i18n'
import { useState, useRef } from 'react'
import { X, Play } from 'lucide-react'
import { useScrollReveal } from '@/lib/useScrollReveal'

type VideoItem = {
  _id: string
  title_en: string
  title_es: string
  video_url: string
}

type Props = {
  videos: VideoItem[]
}

function VideoCard({ video, lang, onOpen, delay }: { video: VideoItem; lang: 'en' | 'es'; onOpen: (url: string) => void; delay: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hovered, setHovered] = useState(false)
  const title = lang === 'es' ? video.title_es : video.title_en

  function handleEnter() {
    setHovered(true)
    const v = videoRef.current
    if (v) {
      v.currentTime = 0
      v.play().catch(() => { /* autoplay can fail silently — fine */ })
    }
  }

  function handleLeave() {
    setHovered(false)
    const v = videoRef.current
    if (v) v.pause()
  }

  return (
    <div
      className="reveal"
      onClick={() => onOpen(video.video_url)}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        height: 280,
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
        background: '#000',
        transitionDelay: `${delay}s`,
      }}
    >
      <video
        ref={videoRef}
        src={video.video_url}
        muted
        loop
        playsInline
        preload="metadata"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.5s ease',
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
        }}
      />

      {/* Gradient + title — visible by default, intensifies on hover */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: hovered
          ? 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(232,84,26,0.25) 60%, rgba(0,0,0,0.2) 100%)'
          : 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)',
        transition: 'background 0.3s',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1rem',
      }}>
        {/* Top: play icon (only visible on hover) */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
          <div style={{
            width: 44,
            height: 44,
            border: '2px solid white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'scale(1)' : 'scale(0.8)',
            transition: 'opacity 0.3s, transform 0.3s',
          }}>
            <Play size={18} fill="white" strokeWidth={0} style={{ marginLeft: 2 }} />
          </div>
        </div>

        {/* Bottom: title */}
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1rem',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          color: 'white',
          lineHeight: 1.2,
          textShadow: '0 2px 8px rgba(0,0,0,0.6)',
          transform: hovered ? 'translateY(0)' : 'translateY(4px)',
          opacity: hovered ? 1 : 0.85,
          transition: 'transform 0.3s, opacity 0.3s',
        }}>
          {title}
        </div>
      </div>
    </div>
  )
}

export default function VideoGallery({ videos }: Props) {
  const { lang, t } = useLang()
  const [lightbox, setLightbox] = useState<string | null>(null)
  useScrollReveal()

  if (!videos || videos.length === 0) return null

  return (
    <>
      <section
        id="video-gallery"
        style={{
          background: 'var(--charcoal)',
          padding: '6rem 0 0',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 2rem' }}>
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
              ——— {lang === 'es' ? 'En Movimiento' : 'In Motion'} ———
            </div>
            <h2 className="section-heading">
              {lang === 'es' ? 'Videos' : 'Videos'}
            </h2>
            <div className="section-divider" style={{ marginTop: '1rem' }} />
          </div>

          {/* Grid — same dimensions as photo gallery */}
          <div
            className="video-gallery-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.75rem',
            }}
          >
            {videos.map((v, i) => (
              <VideoCard
                key={v._id}
                video={v}
                lang={lang as 'en' | 'es'}
                onOpen={(url) => setLightbox(url)}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
        {/* Small print */}
                <div style={{
                  textAlign: 'center',
                  padding: '2rem 1rem 3rem',
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '0.78rem',
                  lineHeight: 1.6,
                  maxWidth: '600px',
                  margin: '0 auto',
                }}>
                  {lang === 'es'
                    ? 'Videos ilustrativos - las condiciones que se muestran pueden variar conforme el clima, manejo y número de vehículos'
                    : 'Videos are for illustrative purposes only — actual conditions may vary based on weather, driving, and number of vehicles'}
                </div>
        <style jsx>{`
          @media (max-width: 768px) {
            .video-gallery-grid {
              grid-template-columns: 1fr 1fr !important;
            }
            .video-gallery-grid > div {
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
            background: 'rgba(0,0,0,0.95)',
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
              zIndex: 1001,
            }}
          >
            <X size={22} />
          </button>
          <video
            src={lightbox}
            autoPlay
            controls
            playsInline
            style={{
              maxWidth: '90vw',
              maxHeight: '85vh',
              boxShadow: '0 0 60px rgba(0,0,0,0.8)',
              display: 'block',
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
