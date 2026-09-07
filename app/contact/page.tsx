'use client'

import { useLang } from '@/lib/i18n'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactComponent from '@/components/Contact'

export default function ContactPage() {
  const { lang } = useLang()

  return (
    <>
      <Navbar />
      <main style={{
        background: 'var(--dark, #0b0b0b)',
        minHeight: '100vh',
        paddingTop: '7rem', // Espacio para que el Navbar fijo no tape el banner
        paddingBottom: '4rem'
      }}>
        {/* Banner de la página */}
        <div style={{ 
          maxWidth: '1300px',
          margin: '0 auto',
          padding: '0 2rem'
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
              alt="Tourists waving to a guide on an ATV during a cultural cobblestone alley ride with CONTACT GUEY TOURS"
              title="ATV adventure and historic alleys with CONTACT GUEY TOURS"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>

        {/* Introducción y textos descriptivos completos */}
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
              At Guey Tours, we create authentic adventure experiences for travelers looking to discover San Miguel de Allende and its surroundings in a different way.
            </p>
            <p style={{ margin: 0 }}>
              Our team specializes in ATV and RZR tours, off-road adventures, and vehicle rentals, offering experiences for couples, families, friends, and groups. Whether you want to explore scenic landscapes, rural roads, historic sites, or hidden places beyond the city center, our local guides are ready to help you choose the right adventure for your trip.
            </p>
            <p style={{ margin: 0 }}>
              Contact us today to learn more about our tours, rental options, availability, and experiences in San Miguel de Allende. 
            </p>
            <p style={{ margin: 0 }}>
              Discover why travelers choose Guey Tours for safe, exciting, and personalized outdoor experiences in San Miguel de Allende.
            </p>
          </div>
        </div>

        {/* Componente original de contacto (con info y tu formulario completo) */}
        <ContactComponent />
      </main>
      <Footer />
    </>
  )
}
