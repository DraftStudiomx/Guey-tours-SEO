'use client'

import { useLang } from '@/lib/i18n'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AtvRentalsContent() {
  const { lang } = useLang()

  return (
    <>
      <Navbar />
      <main style={{
        background: 'var(--dark, #0b0b0b)',
        minHeight: '100vh',
        paddingTop: '7rem',
        paddingBottom: '4rem'
      }}>
        {/* Banner principal */}
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
              alt="ATV rentals in San Miguel de Allende with Guey Tours"
              title="ATV rentals and off-road adventures with Guey Tours"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>

        {/* Textos y contenido de la página */}
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
            {lang === 'es' ? 'Renta de ATV en San Miguel de Allende' : 'ATV Rentals in San Miguel de Allende'}
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', lineHeight: 1.6, fontSize: '1.0rem', color: 'rgba(255,255,255,0.8)', textAlign: 'left' }}>
            <p style={{ margin: 0 }}>
              {lang === 'es' ? (
                <>En <a href="https://www.gueytours.com/" style={{ color: 'var(--orange)', textDecoration: 'none !important', fontWeight: 'bold' }}>Guey Tours</a>, ofrecemos servicio de renta de ATVs de alta calidad para que explores los alrededores de San Miguel de Allende a tu propio ritmo.</>
              ) : (
                <>At <a href="https://www.gueytours.com/" style={{ color: 'var(--orange)', textDecoration: 'none !important', fontWeight: 'bold' }}>Guey Tours</a>, we offer top-quality ATV rental services so you can explore the surroundings of San Miguel de Allende at your own pace.</>
              )}
            </p>

            <p style={{ margin: 0 }}>
              {lang === 'es' ? (
                <>Nuestros vehículos están optimizados para ofrecerte una experiencia segura, emocionante y cómoda en caminos rurales y senderos panorámicos. <a href="https://www.gueytours.com/contact/" style={{ color: 'var(--orange)', textDecoration: 'none !important', fontWeight: 'bold' }}>Contáctanos hoy</a> para consultar disponibilidad, tarifas y requisitos de renta.</>
              ) : (
                <>Our vehicles are optimized to offer you a safe, exciting, and comfortable experience on rural roads and scenic trails. <a href="https://www.gueytours.com/contact/" style={{ color: 'var(--orange)', textDecoration: 'none !important', fontWeight: 'bold' }}>Contact us today</a> to check availability, rates, and rental requirements.</>
              )}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
