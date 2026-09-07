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
        paddingTop: '7rem',
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

        {/* Textos descriptivos con soporte bilingüe, manteniendo tus textos originales y enlaces */}
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
            {lang === 'es' ? 'Contacta a Guey Tours' : 'Contact Guey Tours'}
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', lineHeight: 1.6, fontSize: '1.0rem', color: 'rgba(255,255,255,0.8)', textAlign: 'left' }}>
            <p style={{ margin: 0 }}>
              {lang === 'es' ? (
                <>En <a href="https://www.gueytours.com/" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>Guey Tours</a>, creamos experiencias de aventura auténticas para los viajeros que buscan descubrir San Miguel de Allende y sus alrededores de una manera diferente.</>
              ) : (
                <>At <a href="https://www.gueytours.com/" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>Guey Tours</a>, we create authentic adventure experiences for travelers looking to discover San Miguel de Allende and its surroundings in a different way.</>
              )}
            </p>

            <p style={{ margin: 0 }}>
              {lang === 'es' ? (
                <>Nuestro equipo se especializa en tours en ATV y RZR, aventuras todoterreno y renta de vehículos, ofreciendo experiencias para parejas, familias, amigos y grupos. Ya sea que quieras explorar paisajes pintorescos, caminos rurales, sitios históricos o lugares ocultos más allá del centro de la ciudad, nuestros guías locales están listos para ayudarte a elegir la aventura adecuada para tu viaje.</>
              ) : (
                <>Our team specializes in ATV and RZR tours, off-road adventures, and vehicle rentals, offering experiences for couples, families, friends, and groups. Whether you want to explore scenic landscapes, rural roads, historic sites, or hidden places beyond the city center, our local guides are ready to help you choose the right adventure for your trip.</>
              )}
            </p>

            <p style={{ margin: 0 }}>
              {lang === 'es' ? (
                <><a href="https://www.gueytours.com/contact/" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>Contáctanos hoy</a> para conocer más sobre nuestros tours, opciones de renta, disponibilidad y experiencias en San Miguel de Allende.</>
              ) : (
                <><a href="https://www.gueytours.com/contact/" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>Contact us today</a> to learn more about our tours, rental options, availability, and experiences in San Miguel de Allende.</>
              )}
            </p>

            <p style={{ margin: 0 }}>
              {lang === 'es' ? (
                <>Descubre por qué los viajeros eligen a Guey Tours para vivir experiencias al aire libre seguras, emocionantes y personalizadas en San Miguel de Allende.</>
              ) : (
                <>Discover why travelers choose Guey Tours for safe, exciting, and personalized outdoor experiences in San Miguel de Allende.</>
              )}
            </p>
          </div>
        </div>

        {/* Componente original de contacto */}
        <ContactComponent />
      </main>
      <Footer />
    </>
  )
}
