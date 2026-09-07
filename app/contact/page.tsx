'use client'

import { useLang } from '@/lib/i18n'
import Image from 'next/image'

export default function ContactPage() {
  const { lang } = useLang()

  return (
    <main style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '4rem 1.5rem',
      color: '#fff',
      fontFamily: 'sans-serif'
    }}>
      {/* Banner de la página */}
      <div style={{ 
        width: '100%', 
        height: '320px', 
        position: 'relative', 
        borderRadius: '12px', 
        overflow: 'hidden', 
        marginBottom: '2.5rem',
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

      {/* Título Principal */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '2.2rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: 'var(--orange)',
          margin: 0,
        }}>
          Contact Guey Tours
        </h1>
      </div>

      {/* Descripciones de texto */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', lineHeight: 1.6, fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
        <p style={{ margin: 0 }}>
          At <strong style={{ color: '#fff' }}>Guey Tours</strong>, we create authentic adventure experiences for travelers looking to discover <strong style={{ color: '#fff' }}>San Miguel de Allende and its surroundings in a different way</strong>.
        </p>

        <p style={{ margin: 0 }}>
          Our team specializes in <strong style={{ color: '#fff' }}>ATV and RZR tours, off-road adventures, and vehicle rentals</strong>, offering experiences for couples, families, friends, and groups. Whether you want to explore scenic landscapes, rural roads, historic sites, or hidden places beyond the city center, our local guides are ready to help you choose the right adventure for your trip.
        </p>

        <p style={{ margin: 0 }}>
          <strong style={{ color: 'var(--orange)' }}>Contact us today</strong> to learn more about our tours, rental options, availability, and experiences in San Miguel de Allende.
        </p>

        <p style={{ margin: 0 }}>
          Discover why travelers choose Guey Tours for <strong style={{ color: '#fff' }}>safe, exciting, and personalized outdoor experiences</strong> in San Miguel de Allende.
        </p>
      </div>

      {/* Sección del Formulario */}
      <div style={{
        marginTop: '3rem',
        padding: '2rem',
        background: '#111',
        border: '1px solid rgba(107, 191, 46, 0.2)',
        borderRadius: '12px'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.3rem',
          color: '#fff',
          marginTop: 0,
          marginBottom: '1rem',
          textTransform: 'uppercase'
        }}>
          {lang === 'es' ? 'Formulario de contacto' : 'Contact Form'}
        </h2>
        
        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
          {lang === 'es' ? 'Aquí irá integrado tu formulario próximamente.' : 'Your form will be integrated here soon.'}
        </p>
      </div>
    </main>
  )
}
