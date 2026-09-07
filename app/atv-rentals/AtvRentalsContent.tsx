'use client'

import { useLang } from '@/lib/i18n'
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
        paddingTop: '8rem',
        paddingBottom: '4rem'
      }}>
        {/* Contenido de la página */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '1rem 1.5rem',
          color: '#fff',
          fontFamily: 'sans-serif',
          textAlign: 'left'
        }}>
          {/* Encabezado estilo galería */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              color: 'var(--orange, #d97736)',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.9rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              --- {lang === 'es' ? 'AVENTURA SOBRE RUEDAS' : 'OFF-ROAD EXPERIENCE'} ---
            </div>
            
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '3rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#fff',
              margin: '0 0 0.8rem 0',
            }}>
              {lang === 'es' ? 'Renta de ATV' : 'ATV Rentals'}
            </h1>

            <div style={{
              width: '120px',
              height: '2px',
              background: 'var(--orange, #d97736)',
              margin: '0 auto',
              boxShadow: '0 0 10px var(--orange, #d97736)'
            }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', lineHeight: 1.7, fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)' }}>
            <p style={{ margin: 0 }}>
              {lang === 'es' ? (
                <>¿Buscas una forma emocionante de explorar más allá de las clásicas calles empedradas? En <a href="https://www.gueytours.com/" style={{ color: 'var(--orange)', textDecoration: 'none !important', fontWeight: 'bold' }}>Guey Tours</a>, ofrecemos renta de ATVs premium para viajeros que buscan una experiencia al aire libre inolvidable.</>
              ) : (
                <>Looking for an exciting way to explore beyond the classic cobblestone streets? At <a href="https://www.gueytours.com/" style={{ color: 'var(--orange)', textDecoration: 'none !important', fontWeight: 'bold' }}>Guey Tours</a>, we offer premium ATV rentals for travelers seeking an unforgettable outdoor experience.</>
              )}
            </p>

            <p style={{ margin: 0 }}>
              {lang === 'es' ? (
                <>Ya sea que quieras una rápida renta de cuatrimotos o una aventura en ATV de día completo, nuestra flota confiable está lista para ti.</>
              ) : (
                <>Whether you want a quick ATV rental or an all-day ATV adventure, our reliable fleet is ready for you.</>
              )}
            </p>

            <p style={{ margin: 0 }}>
              {lang === 'es' ? (
                <>Como una de las mejores opciones para visitantes internacionales, hacemos que sea muy fácil reservar la renta de tu vehículo todoterreno y disfrutar de la belleza del campo local.</>
              ) : (
                <>As a top choice for international visitors, we make it effortless to book your off-road vehicle rental and experience the beauty of the local countryside.</>
              )}
            </p>

            {/* Botón transparente con efecto hover sólido */}
            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <a 
                href="https://www.gueytours.com/contact" 
                style={{
                  display: 'inline-block',
                  background: 'transparent',
                  color: 'var(--orange, #d97736)',
                  border: '2px solid var(--orange, #d97736)',
                  padding: '0.75rem 2.5rem',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  fontFamily: 'var(--font-heading)',
                  textDecoration: 'none !important',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--orange, #d97736)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--orange, #d97736)';
                }}
              >
                {lang === 'es' ? 'Contáctanos' : 'Contact Us'}
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
