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


          {/* --- QUINTA SECCIÓN: What Is Included With Your ATV Rental? --- */}
<div style={{ marginTop: '6rem', width: '100%' }}>
  
  {/* Encabezado principal de la sección */}
  <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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

  {/* Contenedor tipo tarjeta principal para la lista de inclusión */}
  <div style={{
    background: '#000',
    border: '1px solid rgba(217, 119, 54, 0.3)',
    borderRadius: '16px',
    padding: '2.5rem',
    boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>
    <p style={{
      fontFamily: 'var(--font-body, sans-serif)',
      fontSize: '1.05rem',
      color: 'rgba(255, 255, 255, 0.9)',
      lineHeight: 1.6,
      textAlign: 'center',
      margin: '0 0 1rem 0'
    }}>
      {lang === 'es' 
        ? 'Cuando reservas una renta de ATV en San Miguel de Allende con nosotros, obtienes una experiencia completa y sin complicaciones:' 
        : 'When you reserve an ATV rental in San Miguel de Allende with us, you receive a complete turnkey experience:'}
    </p>

    {/* Lista de elementos con estilo limpio */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.2rem'
    }}>
      
      {/* Elemento 1 */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(217, 119, 54, 0.2)',
        borderRadius: '10px',
        padding: '1.2rem',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem'
      }}>
        <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.2rem', fontWeight: 'bold' }}>✓</span>
        <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: 1.5 }}>
          {lang === 'es' ? 'Vehículo completamente preparado con combustible incluido.' : 'Fully prepared vehicle with fuel included.'}
        </span>
      </div>

      {/* Elemento 2 */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(217, 119, 54, 0.2)',
        borderRadius: '10px',
        padding: '1.2rem',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem'
      }}>
        <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.2rem', fontWeight: 'bold' }}>✓</span>
        <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: 1.5 }}>
          {lang === 'es' ? 'Equipo de seguridad, incluyendo cascos protectores.' : 'Safety equipment, including protective helmets.'}
        </span>
      </div>

      {/* Elemento 3 */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(217, 119, 54, 0.2)',
        borderRadius: '10px',
        padding: '1.2rem',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem'
      }}>
        <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.2rem', fontWeight: 'bold' }}>✓</span>
        <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: 1.5 }}>
          {lang === 'es' ? 'Instrucciones básicas de manejo antes de salir.' : 'Basic driving instructions before you head out.'}
        </span>
      </div>

      {/* Elemento 4 */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(217, 119, 54, 0.2)',
        borderRadius: '10px',
        padding: '1.2rem',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem'
      }}>
        <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.2rem', fontWeight: 'bold' }}>✓</span>
        <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: 1.5 }}>
          {lang === 'es' ? 'Condiciones de renta claras para un recorrido sin contratiempos.' : 'Clear rental conditions for a hassle-free ride.'}
        </span>
      </div>

    </div>
  </div>

</div>
{/* --- FIN DE LA QUINTA SECCIÓN --- */}


          

          
        </div>
      </main>
      <Footer />
    </>
  )
}
