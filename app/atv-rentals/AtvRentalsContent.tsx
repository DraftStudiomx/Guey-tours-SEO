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
        paddingTop: '11rem', // Espacio suficiente para que el logo no tape la información
        paddingBottom: '4rem'
      }}>
        {/* Contenido principal de la página */}
        <div style={{
          maxWidth: '950px',
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

          {/* Primer bloque de texto */}
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
          </div>

          {/* Nueva sección en dos columnas (Texto H2 + Imagen) */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '2.5rem',
            marginTop: '3.5rem',
            background: 'rgba(255, 255, 255, 0.02)',
            padding: '2.5rem',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            {/* Columna de Texto H2 */}
            <div style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.8rem',
                color: 'var(--orange, #d97736)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                margin: 0
              }}>
                {lang === 'es' ? 'Renta de ATV en San Miguel de Allende' : 'ATV Rental in San Miguel de Allende'}
              </h2>

              <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                {lang === 'es' 
                  ? 'Nuestro servicio de renta de ATV te da total libertad de rodar en tu propio horario.'
                  : 'Our ATV rental service gives you full freedom to ride on your own schedule.'}
              </p>

              <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                {lang === 'es'
                  ? 'Convenientemente ubicado cerca del centro de la ciudad, Guey Tours ofrece vehículos en excelente estado, equipo de seguridad completo y una reserva sencilla. Ya sea que necesites una cuatrimoto por unas horas o un día entero, tenemos gran disponibilidad y duraciones flexibles.'
                  : 'Conveniently located near the city center, Guey Tours provides well-maintained vehicles, full safety gear, and smooth booking. Whether you need a four wheeler rental for a few hours or an entire day, we offer high vehicle availability and flexible rental durations.'}
              </p>

              <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                {lang === 'es'
                  ? 'Si has estado buscando en línea una renta de ATV cerca de mí, nuestro punto céntrico es tu lugar de partida ideal.'
                  : 'If you have been searching online for an ATV rental near me, our central spot is your ideal starting point.'}
              </p>
            </div>

            {/* Columna de la Imagen */}
            <div style={{ flex: '1', minWidth: '280px' }}>
              <div style={{
                width: '100%',
                height: '300px',
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
              }}>
                {/* Puedes cambiar la ruta src por la imagen que prefieras */}
                <Image
                  src="/images/atv-tour-magic-town-CONTACT-GUEY-TOURS.webp" 
                  alt="ATV Rental San Miguel de Allende"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Botón transparente con efecto hover sólido */}
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
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
      </main>
      <Footer />
    </>
  )
}
