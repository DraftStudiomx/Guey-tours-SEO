'use client'

import { useLang } from '@/lib/i18n'
import Image from 'next/image'
import ContactComponent from '@/components/Contact'

export default function ContactPage() {
  const { lang } = useLang()

  return (
    <main style={{
      background: 'var(--dark, #0b0b0b)',
      minHeight: '100vh',
      paddingBottom: '4rem'
    }}>
      {/* Banner de la página */}
      <div style={{ 
        maxWidth: '1300px',
        margin: '0 auto',
        padding: '2rem 2rem 0 2rem'
      }}>
        <div style={{ 
          width: '100%', 
          height: '320px', 
          position: 'relative', 
          borderRadius: '12px', 
          overflow: 'hidden', 
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <Image
            src="/images/atv-tour-magic-town-CONTACT-GUEY-TOURS.webp"
            alt="Contact Guey Tours"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>

      {/* Introducción y textos descriptivos */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '3rem 1.5rem 1rem 1.5rem',
        color: '#fff',
        fontFamily: 'sans-serif',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '2.2rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: 'var(--orange)',
          marginBottom: '1.5rem',
        }}>
          Contact Guey Tours
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', lineHeight: 1.6, fontSize: '1rem', color: 'rgba(255,255,255,0.8)', textAlign: 'left' }}>
          <p style={{ margin: 0 }}>
            At <strong style={{ color: '#fff' }}>Guey Tours</strong>, we create authentic adventure experiences for travelers looking to discover <strong style={{ color: '#fff' }}>San Miguel de Allende and its surroundings in a different way</strong>.
          </p>
          <p style={{ margin: 0 }}>
            Our team specializes in <strong style={{ color: '#fff' }}>ATV and RZR tours, off-road adventures, and vehicle rentals</strong>, offering experiences for couples, families, friends, and groups.
          </p>
        </div>
      </div>

      {/* Componente original de contacto (con info y tu formulario completo) */}
      <ContactComponent />
    </main>
  )
}
