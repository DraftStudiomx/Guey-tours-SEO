'use client'

import { useLang } from '@/lib/i18n'
import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AtvRentalsContent() {
  const { lang } = useLang()

const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (i: number) => setOpenIndex(prev => prev === i ? null : i)

  
  return (
    <>
      <Navbar />
      <main style={{
        background: 'var(--dark, #0b0b0b)',
        minHeight: '100vh',
        paddingTop: '11rem',
        paddingBottom: '5rem'
      }}>
        {/* Contenido principal con ancho equilibrado */}
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 2rem',
          color: '#fff',
          fontFamily: 'sans-serif',
          textAlign: 'left'
        }}>
          {/* Encabezado estilo galería */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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

          {/* Primera sección de texto */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', lineHeight: 1.7, fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)' }}>
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

          {/* Botón de contacto al final de la primera sección */}
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

          {/* Segunda sección: Dos columnas (Texto H2 + Imagen) */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '3rem',
            marginTop: '5rem',
            background: 'rgba(255, 255, 255, 0.02)',
            padding: '3rem',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            {/* Columna de Texto H2 */}
            <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
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

              <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem' }}>
                {lang === 'es' 
                  ? 'Nuestro servicio de renta de ATV te da total libertad de rodar en tu propio horario.'
                  : 'Our ATV rental service gives you full freedom to ride on your own schedule.'}
              </p>

              <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem' }}>
                {lang === 'es' ? (
                  <>Convenientemente ubicado cerca del centro de la ciudad, <a href="https://www.gueytours.com/" style={{ color: 'var(--orange)', textDecoration: 'none !important', fontWeight: 'bold' }}>Guey Tours</a> ofrece vehículos en excelente estado, equipo de seguridad completo y una reserva sencilla. Ya sea que necesites una cuatrimoto por unas horas o un día entero, tenemos gran disponibilidad y duraciones flexibles.</>
                ) : (
                  <>Conveniently located near the city center, <a href="https://www.gueytours.com/" style={{ color: 'var(--orange)', textDecoration: 'none !important', fontWeight: 'bold' }}>Guey Tours</a> provides well-maintained vehicles, full safety gear, and smooth booking. Whether you need a four wheeler rental for a few hours or an entire day, we offer high vehicle availability and flexible rental durations.</>
                )}
              </p>

              <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem' }}>
                {lang === 'es'
                  ? 'Si has estado buscando en línea una renta de ATV cerca de mí, nuestro punto céntrico es tu lugar de partida ideal.'
                  : 'If you have been searching online for an ATV rental near me, our central spot is your ideal starting point.'}
              </p>
            </div>

            {/* Columna de la Imagen */}
            <div style={{ flex: '1', minWidth: '300px' }}>
              <div style={{
                width: '100%',
                height: '320px',
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
              }}>
                <Image
                  src="/images/Experience Thrilling ATV Rentals in San Miguel de Allende with Guey Tours.webp" 
                  alt="A group driving ATVs on the cobblestone streets of San Miguel de Allende during an adventure with Guey Tours."
                  title="Experience Thrilling ATV Rentals in San Miguel de Allende with Guey Tours"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>


        {/* --- TERCERA SECCIÓN: Tarjeta Destacada Centrada y Estilizada (ATV Adventure) --- */}
          <div style={{
            marginTop: '5rem',
            background: 'linear-gradient(145deg, rgba(20, 20, 20, 0.9) 0%, rgba(35, 35, 35, 0.6) 100%)',
            border: '1px solid rgba(217, 119, 54, 0.25)',
            borderRadius: '20px',
            padding: '3.5rem 3rem',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
            textAlign: 'center'
          }}>
            {/* Elemento decorativo de fondo (resplandor sutil centrado) */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '250px',
              height: '150px',
              background: 'radial-gradient(circle, rgba(217,119,54,0.12) 0%, rgba(0,0,0,0) 70%)',
              zIndex: '1',
              pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', zIndex: '2', maxWidth: '850px', margin: '0 auto' }}>
              {/* Pequeña etiqueta superior estilo "Badge" */}
              <div style={{
                display: 'inline-block',
                background: 'rgba(217, 119, 54, 0.15)',
                color: 'var(--orange, #d97736)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '0.4rem 1rem',
                borderRadius: '50px',
                marginBottom: '1.5rem',
                border: '1px solid rgba(217, 119, 54, 0.3)'
              }}>
                {lang === 'es' ? '★ Experiencia Destacada' : '★ Featured Experience'}
              </div>

              {/* Título en color naranja y tipografía de encabezado */}
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                color: 'var(--orange, #d97736)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                margin: '0 0 1.8rem 0',
                lineHeight: 1.2
              }}>
                {lang === 'es' ? 'Explora San Miguel de Allende en un ATV' : 'Explore San Miguel de Allende on an ATV'}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: 1.8, fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)' }}>
                <p style={{ margin: 0 }}>
                  {lang === 'es' 
                    ? '¡Adiós a los autobuses turísticos abarrotados! Cuando rentas un ATV en San Miguel de Allende, descubres una cara totalmente nueva de la región.'
                    : 'Ditch the crowded tour buses! When you rent an ATV in San Miguel de Allende, you unlock a whole new side of the region.'}
                </p>

                <p style={{ margin: 0 }}>
                  {lang === 'es'
                    ? 'Recorre caminos de terracería rústica, cruza campos rurales abiertos y disfruta de vistas panorámicas increíbles de las montañas a las afueras del centro histórico.'
                    : 'Ride along rustic dirt paths, cross open rural fields, and take in scenic mountain backdrop views outside the historic downtown.'}
                </p>

                {/* Nuevo diseño para el último párrafo: Bloque limpio flotante y centrado */}
                <div style={{
                  marginTop: '1rem',
                  padding: '1.5rem 2rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px dashed rgba(217, 119, 54, 0.4)',
                  borderRadius: '12px',
                  color: '#fff',
                  fontWeight: '500'
                }}>
                  {lang === 'es' ? (
                    <>Es la alternativa dinámica perfecta frente a los estándar <a href="https://www.gueytours.com/san-miguel-de-allende-tours/" style={{ color: 'var(--orange)', textDecoration: 'none !important', fontWeight: 'bold' }}>San Miguel de Allende Tours</a>, dándote absoluta libertad para detenerte, tomar fotos y trazar tu propia aventura.</>
                  ) : (
                    <>It is the perfect dynamic alternative to standard <a href="https://www.gueytours.com/san-miguel-de-allende-tours/" style={{ color: 'var(--orange)', textDecoration: 'none !important', fontWeight: 'bold' }}>San Miguel de Allende Tours</a>, giving you absolute freedom to stop, take photos, and craft your own journey.</>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* --- FIN DE LA TERCERA SECCIÓN --- */}


         {/* --- CUARTA SECCIÓN: Tarjetas de Modelos / Flota Específica --- */}
<div style={{ marginTop: '6rem', width: '100%' }}>
  {/* Encabezado principal de la sección (H2) */}
  <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
    <h2 style={{
      fontFamily: 'var(--font-heading)',
      fontSize: '2.5rem',
      color: 'var(--orange, #d97736)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      margin: '0 0 0.8rem 0',
    }}>
      {lang === 'es' ? 'Nuestras Opciones de Renta de ATV' : 'Our ATV Rental Options'}
    </h2>
    <div style={{
      width: '100px',
      height: '2px',
      background: 'var(--orange, #d97736)',
      margin: '0 auto',
      boxShadow: '0 0 10px var(--orange, #d97736)'
    }} />
  </div>

  {/* Contenedor de Tarjetas (Diseñado para 3 columnas) */}
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
    justifyContent: 'center'
  }}>
    
    {/* --- TARJETA 1: Honda 150 Motorbike --- */}
    <div style={{
      background: '#000',
      border: '1px solid rgba(217, 119, 54, 0.3)',
      borderRadius: '16px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
    }}>
      <div style={{
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        background: '#000',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        borderBottom: '1px solid rgba(217, 119, 54, 0.15)'
      }}>
        <video
          src="/images/SEO/ATV Rentals Red Dirt Honda 150 Motorbike Ready for Adventure.mp4"
          autoPlay
          loop
          muted
          playsInline
          title="ATV Rentals: Red Dirt Honda 150 Motorbike Ready for Adventure"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>

      <div style={{
        padding: '1.8rem',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        gap: '1.2rem'
      }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.4rem',
          color: '#fff',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          margin: 0
        }}>
          {lang === 'es' ? 'Honda 150 Motocicleta' : 'Honda 150 Motorbike'}
        </h3>

        {/* Panel de Pestañas (Honda) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} id="card-honda">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '4px',
            background: 'rgba(255,255,255,0.05)',
            padding: '4px',
            borderRadius: '8px',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <button
              onClick={(e) => {
                const container = e.currentTarget.closest('#card-honda');
                container?.querySelectorAll('button').forEach(b => {
                  b.style.background = 'transparent';
                  b.style.color = 'rgba(255,255,255,0.7)';
                });
                e.currentTarget.style.background = 'var(--orange, #d97736)';
                e.currentTarget.style.color = '#fff';
                const content = container?.querySelector('.tab-content');
                if (content) content.textContent = lang === 'es' ? 'Ágil, ligera, fácil de manejar y perfecta para manejo individual o en pareja.' : 'Agile, lightweight, easy to handle, and perfect for solo or double riding.';
              }}
              style={{ background: 'var(--orange, #d97736)', color: '#fff', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              {lang === 'es' ? 'Info' : 'Info'}
            </button>
            <button
              onClick={(e) => {
                const container = e.currentTarget.closest('#card-honda');
                container?.querySelectorAll('button').forEach(b => {
                  b.style.background = 'transparent';
                  b.style.color = 'rgba(255,255,255,0.7)';
                });
                e.currentTarget.style.background = 'var(--orange, #d97736)';
                e.currentTarget.style.color = '#fff';
                const content = container?.querySelector('.tab-content');
                if (content) content.textContent = lang === 'es' ? 'Hasta 2 personas.' : 'Up to 2 people.';
              }}
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              {lang === 'es' ? 'Cupo' : 'Cap'}
            </button>
            <button
              onClick={(e) => {
                const container = e.currentTarget.closest('#card-honda');
                container?.querySelectorAll('button').forEach(b => {
                  b.style.background = 'transparent';
                  b.style.color = 'rgba(255,255,255,0.7)';
                });
                e.currentTarget.style.background = 'var(--orange, #d97736)';
                e.currentTarget.style.color = '#fff';
                const content = container?.querySelector('.tab-content');
                if (content) content.textContent = lang === 'es' ? 'Caminos ligeros, terracería y rutas urbanas pavimentadas.' : 'Light trails, dirt roads, and paved urban routes.';
              }}
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              {lang === 'es' ? 'Terreno' : 'Terrain'}
            </button>
            <button
              onClick={(e) => {
                const container = e.currentTarget.closest('#card-honda');
                container?.querySelectorAll('button').forEach(b => {
                  b.style.background = 'transparent';
                  b.style.color = 'rgba(255,255,255,0.7)';
                });
                e.currentTarget.style.background = 'var(--orange, #d97736)';
                e.currentTarget.style.color = '#fff';
                const content = container?.querySelector('.tab-content');
                if (content) content.textContent = '$500 MXN ' + (lang === 'es' ? 'por hora (Sujeto a disponibilidad).' : 'per hour (Request availability).');
              }}
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              {lang === 'es' ? 'Precio' : 'Rate'}
            </button>
          </div>

          <div className="tab-content" style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(217, 119, 54, 0.2)',
            borderRadius: '10px',
            padding: '1rem',
            minHeight: '85px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.5
          }}>
            {lang === 'es' ? 'Ágil, ligera, fácil de manejar y perfecta para manejo individual o en pareja.' : 'Agile, lightweight, easy to handle, and perfect for solo or double riding.'}
          </div>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '0.5rem', textAlign: 'center' }}>
          <a 
            href="https://www.gueytours.com/contact" 
            style={{
              display: 'inline-block',
              background: 'transparent',
              color: 'var(--orange, #d97736)',
              border: '2px solid var(--orange, #d97736)',
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              fontWeight: 'bold',
              fontFamily: 'var(--font-heading)',
              textDecoration: 'none !important',
              textTransform: 'uppercase',
              fontSize: '0.8rem',
              letterSpacing: '0.08em',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--orange, #d97736)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--orange, #d97736)'; }}
          >
            {lang === 'es' ? 'Contáctanos para solicitar nuestro Motorbike.' : 'Contact us to request our Motorbike.'}
          </a>
        </div>
      </div>
    </div>

    {/* --- TARJETA 2: ATV Quad --- */}
    <div style={{
      background: '#000',
      border: '1px solid rgba(217, 119, 54, 0.3)',
      borderRadius: '16px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
    }}>
      <div style={{
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        background: '#000',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        borderBottom: '1px solid rgba(217, 119, 54, 0.15)'
      }}>
        <video
          src="/images/SEO/Guey Tours Reliable quad options for your ATV rentals.mp4"
          autoPlay
          loop
          muted
          playsInline
          title="Guey Tours: Reliable quad options for your ATV rentals"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>

      <div style={{
        padding: '1.8rem',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        gap: '1.2rem'
      }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.4rem',
          color: '#fff',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          margin: 0
        }}>
          {lang === 'es' ? 'Cuatrimoto ATV' : 'ATV Quad'}
        </h3>

        {/* Panel de Pestañas (ATV Quad) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} id="card-quad">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '4px',
            background: 'rgba(255,255,255,0.05)',
            padding: '4px',
            borderRadius: '8px',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <button
              onClick={(e) => {
                const container = e.currentTarget.closest('#card-quad');
                container?.querySelectorAll('button').forEach(b => {
                  b.style.background = 'transparent';
                  b.style.color = 'rgba(255,255,255,0.7)';
                });
                e.currentTarget.style.background = 'var(--orange, #d97736)';
                e.currentTarget.style.color = '#fff';
                const content = container?.querySelector('.tab-content-quad');
                if (content) content.textContent = lang === 'es' ? 'Robusta, potente cuatrimoto todoterreno construida para estabilidad y diversión.' : 'Sturdy, powerful all-terrain four wheeler rental built for stability and fun.';
              }}
              style={{ background: 'var(--orange, #d97736)', color: '#fff', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              {lang === 'es' ? 'Info' : 'Info'}
            </button>
            <button
              onClick={(e) => {
                const container = e.currentTarget.closest('#card-quad');
                container?.querySelectorAll('button').forEach(b => {
                  b.style.background = 'transparent';
                  b.style.color = 'rgba(255,255,255,0.7)';
                });
                e.currentTarget.style.background = 'var(--orange, #d97736)';
                e.currentTarget.style.color = '#fff';
                const content = container?.querySelector('.tab-content-quad');
                if (content) content.textContent = lang === 'es' ? 'Hasta 2 personas.' : 'Up to 2 people.';
              }}
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              {lang === 'es' ? 'Cupo' : 'Cap'}
            </button>
            <button
              onClick={(e) => {
                const container = e.currentTarget.closest('#card-quad');
                container?.querySelectorAll('button').forEach(b => {
                  b.style.background = 'transparent';
                  b.style.color = 'rgba(255,255,255,0.7)';
                });
                e.currentTarget.style.background = 'var(--orange, #d97736)';
                e.currentTarget.style.color = '#fff';
                const content = container?.querySelector('.tab-content-quad');
                if (content) content.textContent = lang === 'es' ? 'Pistas de terracería ásperas, caminos polvorientos y rutas abiertas off-road.' : 'Rough dirt tracks, dusty paths, and open off-road routes.';
              }}
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              {lang === 'es' ? 'Terreno' : 'Terrain'}
            </button>
            <button
              onClick={(e) => {
                const container = e.currentTarget.closest('#card-quad');
                container?.querySelectorAll('button').forEach(b => {
                  b.style.background = 'transparent';
                  b.style.color = 'rgba(255,255,255,0.7)';
                });
                e.currentTarget.style.background = 'var(--orange, #d97736)';
                e.currentTarget.style.color = '#fff';
                const content = container?.querySelector('.tab-content-quad');
                if (content) content.textContent = '$850 MXN ' + (lang === 'es' ? 'por hora (Sujeto a disponibilidad).' : 'per hour (Request availability).');
              }}
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              {lang === 'es' ? 'Precio' : 'Rate'}
            </button>
          </div>

          <div className="tab-content-quad" style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(217, 119, 54, 0.2)',
            borderRadius: '10px',
            padding: '1rem',
            minHeight: '85px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.5
          }}>
            {lang === 'es' ? 'Robusta, potente cuatrimoto todoterreno construida para estabilidad y diversión.' : 'Sturdy, powerful all-terrain four wheeler rental built for stability and fun.'}
          </div>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '0.5rem', textAlign: 'center' }}>
          <a 
            href="https://www.gueytours.com/contact" 
            style={{
              display: 'inline-block',
              background: 'transparent',
              color: 'var(--orange, #d97736)',
              border: '2px solid var(--orange, #d97736)',
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              fontWeight: 'bold',
              fontFamily: 'var(--font-heading)',
              textDecoration: 'none !important',
              textTransform: 'uppercase',
              fontSize: '0.8rem',
              letterSpacing: '0.08em',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--orange, #d97736)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--orange, #d97736)'; }}
          >
            {lang === 'es' ? 'Contáctanos para solicitar nuestro ATV Quad.' : 'Contact us to request our ATV Quad.'}
          </a>
        </div>
      </div>
    </div>

    {/* --- TARJETA 3: Defender --- */}
    <div style={{
      background: '#000',
      border: '1px solid rgba(217, 119, 54, 0.3)',
      borderRadius: '16px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
    }}>
      <div style={{
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        background: '#000',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        borderBottom: '1px solid rgba(217, 119, 54, 0.15)'
      }}>
        <video
          src="/images/SEO/Guey Tours Defender ATV rentals for off-road group adventures.mp4"
          autoPlay
          loop
          muted
          playsInline
          title="Guey Tours: Defender ATV rentals for off-road group adventures"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>

      <div style={{
        padding: '1.8rem',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        gap: '1.2rem'
      }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.4rem',
          color: '#fff',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          margin: 0
        }}>
          {lang === 'es' ? 'Defender' : 'Defender'}
        </h3>

        {/* Panel de Pestañas (Defender) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} id="card-defender">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '4px',
            background: 'rgba(255,255,255,0.05)',
            padding: '4px',
            borderRadius: '8px',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <button
              onClick={(e) => {
                const container = e.currentTarget.closest('#card-defender');
                container?.querySelectorAll('button').forEach(b => {
                  b.style.background = 'transparent';
                  b.style.color = 'rgba(255,255,255,0.7)';
                });
                e.currentTarget.style.background = 'var(--orange, #d97736)';
                e.currentTarget.style.color = '#fff';
                const content = container?.querySelector('.tab-content-defender');
                if (content) content.textContent = lang === 'es' ? 'Vehículo todoterreno pesado tipo side-by-side con barra antivuelco y máxima potencia.' : 'Heavy-duty side-by-side off-road vehicle rental with roll-cage safety and maximum power.';
              }}
              style={{ background: 'var(--orange, #d97736)', color: '#fff', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              {lang === 'es' ? 'Info' : 'Info'}
            </button>
            <button
              onClick={(e) => {
                const container = e.currentTarget.closest('#card-defender');
                container?.querySelectorAll('button').forEach(b => {
                  b.style.background = 'transparent';
                  b.style.color = 'rgba(255,255,255,0.7)';
                });
                e.currentTarget.style.background = 'var(--orange, #d97736)';
                e.currentTarget.style.color = '#fff';
                const content = container?.querySelector('.tab-content-defender');
                if (content) content.textContent = lang === 'es' ? 'Hasta 6 personas.' : 'Up to 6 people.';
              }}
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              {lang === 'es' ? 'Cupo' : 'Cap'}
            </button>
            <button
              onClick={(e) => {
                const container = e.currentTarget.closest('#card-defender');
                container?.querySelectorAll('button').forEach(b => {
                  b.style.background = 'transparent';
                  b.style.color = 'rgba(255,255,255,0.7)';
                });
                e.currentTarget.style.background = 'var(--orange, #d97736)';
                e.currentTarget.style.color = '#fff';
                const content = container?.querySelector('.tab-content-defender');
                if (content) content.textContent = lang === 'es' ? 'Todos los terrenos off-road, campo agreste y excursiones en grupo.' : 'All off-road terrains, rugged countryside, and group excursions.';
              }}
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              {lang === 'es' ? 'Terreno' : 'Terrain'}
            </button>
            <button
              onClick={(e) => {
                const container = e.currentTarget.closest('#card-defender');
                container?.querySelectorAll('button').forEach(b => {
                  b.style.background = 'transparent';
                  b.style.color = 'rgba(255,255,255,0.7)';
                });
                e.currentTarget.style.background = 'var(--orange, #d97736)';
                e.currentTarget.style.color = '#fff';
                const content = container?.querySelector('.tab-content-defender');
                if (content) content.textContent = '$1,900 MXN ' + (lang === 'es' ? 'por hora (Sujeto a disponibilidad).' : 'per hour (Request availability).');
              }}
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              {lang === 'es' ? 'Precio' : 'Rate'}
            </button>
          </div>

          <div className="tab-content-defender" style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(217, 119, 54, 0.2)',
            borderRadius: '10px',
            padding: '1rem',
            minHeight: '85px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.5
          }}>
            {lang === 'es' ? 'Vehículo todoterreno pesado tipo side-by-side con barra antivuelco y máxima potencia.' : 'Heavy-duty side-by-side off-road vehicle rental with roll-cage safety and maximum power.'}
          </div>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '0.5rem', textAlign: 'center' }}>
          <a 
            href="https://www.gueytours.com/contact" 
            style={{
              display: 'inline-block',
              background: 'transparent',
              color: 'var(--orange, #d97736)',
              border: '2px solid var(--orange, #d97736)',
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              fontWeight: 'bold',
              fontFamily: 'var(--font-heading)',
              textDecoration: 'none !important',
              textTransform: 'uppercase',
              fontSize: '0.8rem',
              letterSpacing: '0.08em',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--orange, #d97736)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--orange, #d97736)'; }}
          >
            {lang === 'es' ? 'Contáctanos para solicitar nuestro Defender' : 'Contact us to request our Defender'}
          </a>
        </div>
      </div>
    </div>

  </div>

  {/* --- BOTÓN MAESTRO AL FINAL DE LAS TARJETAS --- */}
  <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
    <a 
      href="https://www.gueytours.com/contact" 
      style={{
        display: 'inline-block',
        background: 'transparent',
        color: 'var(--orange, #d97736)',
        border: '2px solid var(--orange, #d97736)',
        padding: '0.9rem 2.2rem',
        borderRadius: '50px',
        fontWeight: 'bold',
        fontFamily: 'var(--font-heading)',
        textDecoration: 'none !important',
        textTransform: 'uppercase',
        fontSize: '0.9rem',
        letterSpacing: '0.1em',
        transition: 'all 0.3s ease',
        boxShadow: '0 5px 20px rgba(0,0,0,0.4)',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--orange, #d97736)'; e.currentTarget.style.color = '#fff'; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--orange, #d97736)'; }}
    >
      {lang === 'es' ? 'Reserva tu ATV' : 'Book Your ATV'}
    </a>
  </div>

</div>
{/* --- FIN DE LA CUARTA SECCIÓN --- */}


        {/* --- QUINTA SECCIÓN: Grid Dinámico de Inclusiones (Opción B) --- */}
<div style={{ marginTop: '6rem', width: '100%', padding: '0 1rem' }}>
  
  {/* Encabezado principal de la sección */}
  <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
    <h2 style={{
      fontFamily: 'var(--font-heading)',
      fontSize: '2.5rem',
      color: 'var(--orange, #d97736)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      margin: '0 0 0.8rem 0',
    }}>
      {lang === 'es' ? '¿Qué Incluye Tu Renta de ATV?' : 'What Is Included With Your ATV Rental?'}
    </h2>
    <div style={{
      width: '100px',
      height: '2px',
      background: 'var(--orange, #d97736)',
      margin: '0 auto',
      boxShadow: '0 0 10px var(--orange, #d97736)'
    }} />
  </div>

  {/* Contenedor Grid de 4 columnas dinámicas */}
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
    maxWidth: '1200px',
    margin: '0 auto'
  }}>
    
    {/* Tarjeta 1 */}
    <div 
      style={{
        background: 'rgba(20, 20, 20, 0.8)',
        border: '1px solid rgba(217, 119, 54, 0.2)',
        borderRadius: '14px',
        padding: '2rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = 'var(--orange, #d97736)';
        e.currentTarget.style.boxShadow = '0 15px 35px rgba(217, 119, 54, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(217, 119, 54, 0.2)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
      }}
    >
      {/* Línea de luz superior decorativa */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'var(--orange, #d97736)',
        boxShadow: '0 0 10px var(--orange, #d97736)'
      }} />

      <div>
        <span style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.8rem',
          color: 'var(--orange, #d97736)',
          opacity: 0.8,
          display: 'block',
          marginBottom: '1rem'
        }}>
          01
        </span>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.1rem',
          color: '#fff',
          textTransform: 'uppercase',
          marginBottom: '0.8rem',
          letterSpacing: '0.05em'
        }}>
          {lang === 'es' ? 'Combustible Incluido' : 'Fuel Included'}
        </h3>
        <p style={{
          fontFamily: 'var(--font-body, sans-serif)',
          fontSize: '0.9rem',
          color: 'rgba(255, 255, 255, 0.75)',
          lineHeight: 1.5,
          margin: 0
        }}>
          {lang === 'es' ? 'Vehículo completamente preparado y con el tanque listo para la ruta.' : 'Fully prepared vehicle with a full tank ready for the trail.'}
        </p>
      </div>
    </div>

    {/* Tarjeta 2 */}
    <div 
      style={{
        background: 'rgba(20, 20, 20, 0.8)',
        border: '1px solid rgba(217, 119, 54, 0.2)',
        borderRadius: '14px',
        padding: '2rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = 'var(--orange, #d97736)';
        e.currentTarget.style.boxShadow = '0 15px 35px rgba(217, 119, 54, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(217, 119, 54, 0.2)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'var(--orange, #d97736)',
        boxShadow: '0 0 10px var(--orange, #d97736)'
      }} />

      <div>
        <span style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.8rem',
          color: 'var(--orange, #d97736)',
          opacity: 0.8,
          display: 'block',
          marginBottom: '1rem'
        }}>
          02
        </span>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.1rem',
          color: '#fff',
          textTransform: 'uppercase',
          marginBottom: '0.8rem',
          letterSpacing: '0.05em'
        }}>
          {lang === 'es' ? 'Equipo de Seguridad' : 'Safety Gear'}
        </h3>
        <p style={{
          fontFamily: 'var(--font-body, sans-serif)',
          fontSize: '0.9rem',
          color: 'rgba(255, 255, 255, 0.75)',
          lineHeight: 1.5,
          margin: 0
        }}>
          {lang === 'es' ? 'Cascos protectores de alta calidad incluidos para todos los pasajeros.' : 'High-quality protective helmets included for all riders.'}
        </p>
      </div>
    </div>

    {/* Tarjeta 3 */}
    <div 
      style={{
        background: 'rgba(20, 20, 20, 0.8)',
        border: '1px solid rgba(217, 119, 54, 0.2)',
        borderRadius: '14px',
        padding: '2rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = 'var(--orange, #d97736)';
        e.currentTarget.style.boxShadow = '0 15px 35px rgba(217, 119, 54, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(217, 119, 54, 0.2)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'var(--orange, #d97736)',
        boxShadow: '0 0 10px var(--orange, #d97736)'
      }} />

      <div>
        <span style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.8rem',
          color: 'var(--orange, #d97736)',
          opacity: 0.8,
          display: 'block',
          marginBottom: '1rem'
        }}>
          03
        </span>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.1rem',
          color: '#fff',
          textTransform: 'uppercase',
          marginBottom: '0.8rem',
          letterSpacing: '0.05em'
        }}>
          {lang === 'es' ? 'Instrucción Básica' : 'Basic Briefing'}
        </h3>
        <p style={{
          fontFamily: 'var(--font-body, sans-serif)',
          fontSize: '0.9rem',
          color: 'rgba(255, 255, 255, 0.75)',
          lineHeight: 1.5,
          margin: 0
        }}>
          {lang === 'es' ? 'Breve inducción de manejo y control antes de arrancar tu aventura.' : 'Quick handling and control instructions before you start.'}
        </p>
      </div>
    </div>

    {/* Tarjeta 4 */}
    <div 
      style={{
        background: 'rgba(20, 20, 20, 0.8)',
        border: '1px solid rgba(217, 119, 54, 0.2)',
        borderRadius: '14px',
        padding: '2rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = 'var(--orange, #d97736)';
        e.currentTarget.style.boxShadow = '0 15px 35px rgba(217, 119, 54, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(217, 119, 54, 0.2)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'var(--orange, #d97736)',
        boxShadow: '0 0 10px var(--orange, #d97736)'
      }} />

      <div>
        <span style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.8rem',
          color: 'var(--orange, #d97736)',
          opacity: 0.8,
          display: 'block',
          marginBottom: '1rem'
        }}>
          04
        </span>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.1rem',
          color: '#fff',
          textTransform: 'uppercase',
          marginBottom: '0.8rem',
          letterSpacing: '0.05em'
        }}>
          {lang === 'es' ? 'Soporte y Rutas' : 'Routes & Support'}
        </h3>
        <p style={{
          fontFamily: 'var(--font-body, sans-serif)',
          fontSize: '0.9rem',
          color: 'rgba(255, 255, 255, 0.75)',
          lineHeight: 1.5,
          margin: 0
        }}>
          {lang === 'es' ? 'Orientación sobre los mejores caminos y senderos en San Miguel.' : 'Guidance on the best trails and tracks around San Miguel.'}
        </p>
      </div>
    </div>

  </div>

</div>
{/* --- FIN DE LA QUINTA SECCIÓN --- */}


          {/* --- SEXTA SECCIÓN: Who Can Rent an ATV? (Completa y Corregida) --- */}
<div style={{ marginTop: '7rem', width: '100%', padding: '0 1rem' }}>
  
  <div style={{
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden',
    border: '1px solid rgba(217, 119, 54, 0.4)',
    boxShadow: '0 25px 50px rgba(0,0,0,0.8)',
    background: '#000',
    padding: '3rem 2rem'
  }}>
    
    {/* Imagen de fondo principal */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url("images/ATV Rentals Sightseeing in San Miguel de Allende.webp")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 1
    }} />

    {/* Etiqueta img oculta para cumplir con Alt y Title requeridos */}
    <img 
      src="images/ATV Rentals Sightseeing in San Miguel de Allende.webp" 
      alt="A person in a helmet and goggles rides a blue Yamaha ATV in front of the Parroquia de San Miguel Arcángel." 
      title="ATV Rentals Sightseeing in San Miguel de Allende"
      style={{ display: 'none' }}
    />

    {/* Contenido en la parte superior del fondo */}
    <div style={{ position: 'relative', zIndex: 2 }}>
      
      {/* Encabezado de la Sección (Centrado) */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '2.5rem',
          color: 'var(--orange, #d97736)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          margin: '0 0 0.8rem 0',
        }}>
          {lang === 'es' ? '¿Quién Puede Rentar un ATV?' : 'Who Can Rent an ATV?'}
        </h2>
        <p style={{
          fontFamily: 'var(--font-body, sans-serif)',
          fontSize: '1.05rem',
          color: 'rgba(255, 255, 255, 0.85)',
          maxWidth: '700px',
          margin: '0 auto 1.5rem auto',
          lineHeight: 1.6
        }}>
          {lang === 'es' 
            ? 'Nos aseguramos de que todos disfruten de una experiencia segura, emocionante y protegida:' 
            : 'We make sure everyone enjoys a safe, exciting, and secure experience:'}
        </p>
        <div style={{
          width: '100px',
          height: '2px',
          background: 'var(--orange, #d97736)',
          margin: '0 auto',
          boxShadow: '0 0 10px var(--orange, #d97736)'
        }} />
      </div>

      {/* Grid de Requisitos forzado a 2 columnas (2x2) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1.5rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        
        {/* Tarjeta 1: Edad */}
        <div style={{
          background: 'rgba(15, 15, 15, 0.75)',
          border: '1px solid rgba(217, 119, 54, 0.25)',
          borderRadius: '12px',
          padding: '1.8rem',
          backdropFilter: 'blur(6px)',
          textAlign: 'center'
        }}>
          <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.3rem', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>01</span>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.1rem', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
            {lang === 'es' ? 'Edad Mínima' : 'Minimum Age'}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            {lang === 'es' ? 'Los conductores deben ser mayores de 18 años.' : 'Drivers must be over 18 years old.'}
          </p>
        </div>

        {/* Tarjeta 2: Licencia */}
        <div style={{
          background: 'rgba(15, 15, 15, 0.75)',
          border: '1px solid rgba(217, 119, 54, 0.25)',
          borderRadius: '12px',
          padding: '1.8rem',
          backdropFilter: 'blur(6px)',
          textAlign: 'center'
        }}>
          <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.3rem', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>02</span>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.1rem', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
            {lang === 'es' ? 'Licencia de Conducir' : "Driver's License"}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            {lang === 'es' ? 'Se requiere una licencia de conducir vigente y válida.' : 'A valid and current driver\'s license is required.'}
          </p>
        </div>

        {/* Tarjeta 3: Experiencia */}
        <div style={{
          background: 'rgba(15, 15, 15, 0.75)',
          border: '1px solid rgba(217, 119, 54, 0.25)',
          borderRadius: '12px',
          padding: '1.8rem',
          backdropFilter: 'blur(6px)',
          textAlign: 'center'
        }}>
          <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.3rem', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>03</span>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.1rem', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
            {lang === 'es' ? 'Experiencia Previa' : 'Prior Experience'}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            {lang === 'es' ? '¡No se necesita experiencia previa! Instrucciones claras en el sitio.' : 'No previous experience needed! Clear driving instructions on-site.'}
          </p>
        </div>

        {/* Tarjeta 4: Seguridad */}
        <div style={{
          background: 'rgba(15, 15, 15, 0.75)',
          border: '1px solid rgba(217, 119, 54, 0.25)',
          borderRadius: '12px',
          padding: '1.8rem',
          backdropFilter: 'blur(6px)',
          textAlign: 'center'
        }}>
          <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.3rem', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>04</span>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.1rem', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
            {lang === 'es' ? 'Seguridad y Cobertura' : 'Safety & Coverage'}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            {lang === 'es' ? 'Casco, tanque lleno, orientación y seguro médico básico incluidos.' : 'Helmet, full tank of fuel, orientation, and basic medical insurance.'}
          </p>
        </div>

      </div>

      {/* Tarjeta Inferior: Capacidades y RSZ rentals (Centrada y sin subrayado en enlace) */}
      <div style={{
        marginTop: '1.8rem',
        background: 'rgba(20, 20, 20, 0.85)',
        border: '1px solid rgba(217, 119, 54, 0.4)',
        borderRadius: '12px',
        padding: '1.8rem',
        backdropFilter: 'blur(8px)',
        textAlign: 'center',
        maxWidth: '900px',
        marginInline: 'auto'
      }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--orange, #d97736)', fontSize: '1.1rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
          {lang === 'es' ? 'Capacidad de Pasajeros y Estándares' : 'Passenger Capacities & Standards'}
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
          {lang === 'es' ? 'Motos (2 pax), Cuatrimotos (2 pax) y Defender (6 pax). Alineamos estándares con proveedores confiables como' : 'Motorbikes (2 pax), Quads (2 pax), and Defender (6 pax). We align standards with trusted providers like'}{' '}
          <a 
            href="https://www.gueytours.com/rsz-rentals/" 
            style={{ 
              color: 'var(--orange, #d97736)', 
              textDecoration: 'none', 
              fontWeight: 'bold' 
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            RSZ rentals
          </a>{' '}
          {lang === 'es' ? 'para garantizar la máxima seguridad.' : 'to guarantee top safety.'}
        </p>
      </div>

    </div>

  </div>

</div>
{/* --- FIN DE LA SEXTA SECCIÓN --- */}


          {/* --- SÉPTIMA SECCIÓN: Why Rent an ATV With Guey Tours? (Cierre de Alto Impacto) --- */}
<div style={{ marginTop: '7rem', marginBottom: '5rem', width: '100%', padding: '0 1rem' }}>
  
  <div style={{
    maxWidth: '1200px',
    margin: '0 auto',
    background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%)',
    border: '1px solid rgba(217, 119, 54, 0.4)',
    borderRadius: '24px',
    boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
    padding: '3.5rem 2.5rem',
    position: 'relative',
    overflow: 'hidden'
  }}>

    {/* Línea de luz superior decorativa */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'var(--orange, #d97736)',
      boxShadow: '0 0 15px var(--orange, #d97736)'
    }} />

    {/* Encabezado y Descripción Principal */}
    <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3.5rem auto' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '2.5rem',
        color: 'var(--orange, #d97736)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        margin: '0 0 1rem 0',
        lineHeight: 1.2
      }}>
        {lang === 'es' ? '¿Por Qué Rentar un ATV Con Guey Tours?' : 'Why Rent an ATV With Guey Tours?'}
      </h2>
      <p style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '1.15rem',
        color: '#fff',
        marginBottom: '1rem',
        lineHeight: 1.4
      }}>
        {lang === 'es' 
          ? 'Elegir al compañero ideal para tu aventura todoterreno marca toda la diferencia al descubrir el corazón de Guanajuato.' 
          : 'Choosing the right partner for your off-road journey makes all the difference when discovering the heart of Guanajuato.'}
      </p>
      <p style={{
        fontFamily: 'var(--font-body, sans-serif)',
        fontSize: '0.98rem',
        color: 'rgba(255, 255, 255, 0.75)',
        lineHeight: 1.6,
        margin: 0
      }}>
        {lang === 'es' 
          ? 'Nos enorgullece ofrecer una experiencia inigualable basada en conocimiento local genuino, estándares de seguridad sin concesiones y equipos de primera categoría. Cada detalle está diseñado para brindarte tranquilidad mientras exploras.' 
          : 'We pride ourselves on delivering an unmatched experience built on genuine local insight, uncompromising safety standards, and top-tier equipment. Every detail of our service is designed to give you peace of mind while you explore.'}
      </p>
      <div style={{
        width: '100px',
        height: '2px',
        background: 'var(--orange, #d97736)',
        margin: '2rem auto 0 auto',
        boxShadow: '0 0 10px var(--orange, #d97736)'
      }} />
    </div>

    {/* Grid de 3 columnas para los 5 Beneficios */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
      marginBottom: '3.5rem'
    }}>
      
      {/* Beneficio 1 */}
      <div style={{
        background: 'rgba(15, 15, 15, 0.8)',
        border: '1px solid rgba(217, 119, 54, 0.25)',
        borderRadius: '16px',
        padding: '2rem 1.5rem',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
      }}>
        <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.5rem', fontWeight: 'bold', display: 'block', marginBottom: '0.8rem', fontFamily: 'var(--font-heading)' }}>01</span>
        <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.1rem', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
          {lang === 'es' ? 'Experiencia Local' : 'Local Experience'}
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
          {lang === 'es' ? 'Conocimiento profundo de los mejores senderos que rodean San Miguel de Allende.' : 'Deep knowledge of the best trails surrounding San Miguel de Allende.'}
        </p>
      </div>

      {/* Beneficio 2 */}
      <div style={{
        background: 'rgba(15, 15, 15, 0.8)',
        border: '1px solid rgba(217, 119, 54, 0.25)',
        borderRadius: '16px',
        padding: '2rem 1.5rem',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
      }}>
        <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.5rem', fontWeight: 'bold', display: 'block', marginBottom: '0.8rem', fontFamily: 'var(--font-heading)' }}>02</span>
        <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.1rem', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
          {lang === 'es' ? 'Seguridad Primero' : 'Safety First'}
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
          {lang === 'es' ? 'Cascos certificados, seguro médico e inducciones completas antes de partir.' : 'Certified helmets, medical insurance, and complete briefings before departing.'}
        </p>
      </div>

      {/* Beneficio 3 */}
      <div style={{
        background: 'rgba(15, 15, 15, 0.8)',
        border: '1px solid rgba(217, 119, 54, 0.25)',
        borderRadius: '16px',
        padding: '2rem 1.5rem',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
      }}>
        <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.5rem', fontWeight: 'bold', display: 'block', marginBottom: '0.8rem', fontFamily: 'var(--font-heading)' }}>03</span>
        <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.1rem', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
          {lang === 'es' ? 'Vehículos de Calidad' : 'Quality Vehicles'}
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
          {lang === 'es' ? 'Flotilla limpia, completamente inspeccionada y totalmente confiable.' : 'Clean, fully inspected, and reliable fleet.'}
        </p>
      </div>

      {/* Beneficio 4 */}
      <div style={{
        background: 'rgba(15, 15, 15, 0.8)',
        border: '1px solid rgba(217, 119, 54, 0.25)',
        borderRadius: '16px',
        padding: '2rem 1.5rem',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
      }}>
        <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.5rem', fontWeight: 'bold', display: 'block', marginBottom: '0.8rem', fontFamily: 'var(--font-heading)' }}>04</span>
        <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.1rem', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
          {lang === 'es' ? 'Asistencia en Inglés' : 'English-Speaking Assistance'}
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
          {lang === 'es' ? 'Comunicación clara y amigable para turistas internacionales.' : 'Clear, friendly communication for international tourists.'}
        </p>
      </div>

      {/* Beneficio 5 */}
      <div style={{
        background: 'rgba(15, 15, 15, 0.8)',
        border: '1px solid rgba(217, 119, 54, 0.25)',
        borderRadius: '16px',
        padding: '2rem 1.5rem',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
        gridColumn: '1 / -1',
        maxWidth: '450px',
        margin: '0 auto',
      }}>
        <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.5rem', fontWeight: 'bold', display: 'block', marginBottom: '0.8rem', fontFamily: 'var(--font-heading)' }}>05</span>
        <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.1rem', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
          {lang === 'es' ? 'Atención Personalizada' : 'Personalized Attention'}
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
          {lang === 'es' ? 'Adaptamos las recomendaciones directamente a tus planes de viaje.' : 'We tailor recommendations directly to your travel plans.'}
        </p>
      </div>

    </div>

    {/* Tarjeta de Llamado a la Acción (CTA) Final */}
    <div style={{
      background: 'rgba(217, 119, 54, 0.08)',
      border: '1px solid rgba(217, 119, 54, 0.5)',
      borderRadius: '16px',
      padding: '2.5rem',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.2rem'
    }}>
      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '1.6rem',
        color: '#fff',
        textTransform: 'uppercase',
        margin: 0,
        letterSpacing: '0.05em'
      }}>
        {lang === 'es' ? '¿Listo para recorrer los senderos?' : 'Ready to hit the trails?'}
      </h3>
      <p style={{
        fontFamily: 'var(--font-body, sans-serif)',
        fontSize: '1.05rem',
        color: 'rgba(255, 255, 255, 0.85)',
        maxWidth: '700px',
        margin: 0,
        lineHeight: 1.5
      }}>
        {lang === 'es' 
          ? '¡Contáctanos hoy para reservar tu vehículo y comienza a planear tu aventura todoterreno definitiva!' 
          : 'Contact us today to reserve your vehicle and start planning your ultimate off-road adventure!'}
      </p>

      {/* Botón de Contacto / Reserva */}
      <a 
        href="https://www.gueytours.com/contact" 
        style={{
          display: 'inline-block',
          background: 'var(--orange, #d97736)',
          color: '#fff',
          fontFamily: 'var(--font-heading)',
          fontSize: '1rem',
          textTransform: 'uppercase',
          padding: '0.9rem 2.2rem',
          borderRadius: '50px',
          textDecoration: 'none',
          letterSpacing: '0.08em',
          fontWeight: 'bold',
          boxShadow: '0 0 20px rgba(217, 119, 54, 0.4)',
          transition: 'all 0.3s ease',
          marginTop: '0.5rem'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 0 25px rgba(217, 119, 54, 0.7)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 0 20px rgba(217, 119, 54, 0.4)';
        }}
      >
        {lang === 'es' ? 'Reservar Ahora' : 'Book Now'}
      </a>
    </div>

  </div>

</div>
{/* --- FIN DE LA SÉPTIMA SECCIÓN --- */}

          {/* --- OCTAVA SECCIÓN: Preguntas Frecuentes (FAQ) --- */}
      <section
        id="faq"
        style={{
          background: 'var(--dark)',
          padding: '6rem 0 4rem 0',
          position: 'relative',
        }}
      >
        {/* Fondo con brillo sutil */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(232,84,26,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem' }}>

          {/* Encabezado */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--orange)',
              fontSize: '0.85rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}>
              ——— {lang === 'en' ? 'Got questions?' : '¿Tienes preguntas?'} ———
            </div>
            <h2 className="section-heading">
              {lang === 'en' ? 'FREQUENTLY ASKED QUESTIONS' : 'PREGUNTAS FRECUENTES'}
            </h2>
            <div className="section-divider" style={{ marginTop: '1rem' }} />
          </div>

          {/* Acordeón de Preguntas */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              {
                q_en: 'What is included in the ATV rentals service?',
                q_es: '¿Qué incluye el servicio de ATV rentals?',
                a_en: 'The ATV rentals service includes the rental of all-terrain vehicles to enjoy outdoor tours and adventures. At Guey Tours we offer you an exciting experience, with guidance so you can make the most of your trip.',
                a_es: 'El servicio de ATV rentals incluye el alquiler de vehículos todo terreno para disfrutar recorridos y aventuras al aire libre. En Guey Tours te ofrecemos una experiencia emocionante, con orientación para que aproveches al máximo tu recorrido.',
              },
              {
                q_en: 'Who can use the ATV rentals service?',
                q_es: '¿Quién puede utilizar el servicio de ATV rentals?',
                a_en: 'The ATV rentals service is aimed at people looking to explore natural terrains and live a different experience. Requirements may vary depending on the route. At Guey Tours we provide the necessary information before you start.',
                a_es: 'El servicio de ATV rentals está dirigido a personas que buscan explorar terrenos naturales y vivir una experiencia diferente. Los requisitos pueden variar según el recorrido. En Guey Tours te brindamos la información necesaria antes de comenzar.',
              },
              {
                q_en: 'Is it necessary to have experience to book ATV rentals?',
                q_es: '¿Es necesario tener experiencia para contratar ATV rentals?',
                a_en: 'Not necessarily. Depending on the route, the ATV rentals service can be suitable for people with different levels of experience. At Guey Tours we provide instructions before starting so you can enjoy the adventure responsibly.',
                a_es: 'No necesariamente. Dependiendo del recorrido, el servicio de ATV rentals puede ser adecuado para personas con diferentes niveles de experiencia. En Guey Tours te proporcionamos indicaciones antes de iniciar para que disfrutes la aventura de forma responsable.',
              },
              {
                q_en: 'Why choose Guey Tours for ATV rentals?',
                q_es: '¿Por qué elegir Guey Tours para ATV rentals?',
                a_en: 'At Guey Tours we want your ATV rentals experience to be fun, exciting, and memorable. We accompany you during the tour and guide you on the use of the vehicle so you can enjoy the adventure with greater confidence.',
                a_es: 'En Guey Tours buscamos que tu experiencia de ATV rentals sea divertida, emocionante y memorable. Te acompañamos durante el recorrido y te orientamos sobre el uso del vehículo para que puedas disfrutar la aventura con mayor confianza.',
              },
            ].map((faq, i) => {
              const isOpen = openIndex === i
              const question = lang === 'es' ? faq.q_es : faq.q_en
              const answer = lang === 'es' ? faq.a_es : faq.a_en

              return (
                <div
                  key={i}
                  style={{
                    background: isOpen ? 'rgba(232,84,26,0.06)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${isOpen ? 'rgba(232,84,26,0.35)' : 'rgba(255,255,255,0.07)'}`,
                    transition: 'background 0.3s, border-color 0.3s',
                  }}
                >
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '1.4rem 1.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      letterSpacing: '0.02em',
                      color: isOpen ? 'var(--orange)' : 'white',
                      transition: 'color 0.3s',
                      lineHeight: 1.4,
                    }}>
                      {question}
                    </span>

                    <span style={{
                      flexShrink: 0,
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      border: `1.5px solid ${isOpen ? 'var(--orange)' : 'rgba(255,255,255,0.25)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isOpen ? 'var(--orange)' : 'rgba(255,255,255,0.5)',
                      fontSize: '1.2rem',
                      lineHeight: 1,
                      transition: 'border-color 0.3s, color 0.3s, transform 0.3s',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      fontWeight: 300,
                    }}>
                      +
                    </span>
                  </button>

                  <div style={{
                    overflow: 'hidden',
                    maxHeight: isOpen ? '400px' : '0',
                    transition: 'max-height 0.4s ease',
                  }}>
                    <p style={{
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.95rem',
                      lineHeight: 1.75,
                      padding: '0 1.75rem 1.5rem',
                      margin: 0,
                      fontFamily: 'var(--font-body)',
                    }}>
                      {answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section> {/* <--- AQUÍ TERMINA EXACTAMENTE LA OCTAVA SECCIÓN */}

          {/* --- NOVENA SECCIÓN: Call to Action (CTA) --- */}
      <section
        style={{
          background: 'linear-gradient(180deg, #0b0b0b 0%, #141414 100%)',
          padding: '6rem 0',
          position: 'relative',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Elemento decorativo de fondo */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(217, 119, 54, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          
          <div style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--orange, #d97736)',
            fontSize: '0.85rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            ——— {lang === 'en' ? 'Ready for action?' : '¿Listo para la acción?'} ———
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#fff',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
          }}>
            {lang === 'en' ? 'Book your adventure today and live the experience' : 'Reserva tu aventura hoy y vive la experiencia'}
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.75)',
            lineHeight: 1.6,
            maxWidth: '650px',
            margin: '0 auto 2.5rem auto',
          }}>
            {lang === 'en' 
              ? 'Secure your spot now and explore the best off-road trails with professional guides and top-tier equipment.' 
              : 'Asegura tu lugar ahora y explora los mejores senderos todo terreno con guías profesionales y equipo de primera.'}
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=5214151090021&text=Hi%21+I%27d+like+to+reserve+the+Honda+150+Motorbike.+Could+you+let+me+know+availability%3F&type=phone_number&app_absent=0"
            style={{
              display: 'inline-block',
              background: 'var(--orange, #d97736)',
              color: '#fff',
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              textTransform: 'uppercase',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              textDecoration: 'none',
              letterSpacing: '0.08em',
              fontWeight: 'bold',
              boxShadow: '0 0 25px rgba(217, 119, 54, 0.4)',
              transition: 'transform 0.2s, background 0.2s',
            }}
          >
            {lang === 'en' ? 'Contact us on WhatsApp' : 'Contáctanos por WhatsApp'}
          </a>

        </div>
      </section> {/* <--- AQUÍ TERMINA EXACTAMENTE LA NOVENA SECCIÓN */}


          {/* --- DÉCIMA SECCIÓN: Formulario de Contacto / Reservación Oficial --- */}
      <section
        id="contacto"
        style={{
          background: 'var(--dark, #0b0b0b)',
          padding: '6rem 0 5rem 0',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>

          {/* Encabezado */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--orange, #d97736)',
              fontSize: '0.85rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}>
              ——— {lang === 'es' ? 'Ponte en contacto' : 'Get in touch'} ———
            </div>
            <h2 className="section-heading" style={{ color: '#fff', fontFamily: 'var(--font-heading)' }}>
              {lang === 'es' ? 'RESERVA TU AVENTURA' : 'BOOK YOUR ADVENTURE'}
            </h2>
            <div className="section-divider" style={{ marginTop: '1rem' }} />
          </div>

          {/* Contenedor del Formulario */}
          <div style={{
            background: 'rgba(15, 15, 15, 0.85)',
            border: '1px solid rgba(217, 119, 54, 0.3)',
            borderRadius: '20px',
            padding: '3rem 2.5rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
          }}>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert(lang === 'es' ? '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.' : 'Message sent successfully! We will get in touch soon.');
              }} 
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              {/* Nombre */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', textTransform: 'uppercase' }}>
                  {lang === 'es' ? 'Nombre' : 'Name'}
                </label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder={lang === 'es' ? 'Tu nombre' : 'Your name'}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '8px',
                    padding: '0.9rem 1rem',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    fontFamily: 'var(--font-body)',
                  }}
                />
              </div>

              {/* Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', textTransform: 'uppercase' }}>
                  {lang === 'es' ? 'Correo Electrónico' : 'Email'}
                </label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder={lang === 'es' ? 'tucorreo@email.com' : 'your@email.com'}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '8px',
                    padding: '0.9rem 1rem',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    fontFamily: 'var(--font-body)',
                  }}
                />
              </div>

              {/* Mensaje */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', textTransform: 'uppercase' }}>
                  {lang === 'es' ? 'Mensaje' : 'Message'}
                </label>
                <textarea 
                  name="message"
                  rows={4}
                  required
                  placeholder={lang === 'es' ? 'Escribe tu mensaje aquí...' : 'Write your message here...'}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '8px',
                    padding: '0.9rem 1rem',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    fontFamily: 'var(--font-body)',
                    resize: 'vertical',
                  }}
                />
              </div>

              {/* Botón */}
              <button 
                type="submit"
                style={{
                  background: 'var(--orange, #d97736)',
                  color: '#fff',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '0.08em',
                  fontWeight: 'bold',
                  boxShadow: '0 0 20px rgba(217, 119, 54, 0.4)',
                  marginTop: '1rem',
                }}
              >
                {lang === 'es' ? 'Enviar Mensaje' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </section>
      {/* --- FIN DE LA DÉCIMA SECCIÓN --- */}


          
          

          
        </div>
      </main>
      <Footer />
    </>
  )
}
