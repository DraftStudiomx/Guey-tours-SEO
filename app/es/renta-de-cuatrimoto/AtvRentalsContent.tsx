'use client'

import { useLang } from '@/lib/i18n'
import { useState } from 'react'
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Navbares from '@/components/Navbares'   // <-- NUEVO: Menú multilenguaje
import FooterEs from '@/components/FooterEs' // <-- NUEVO: Footer en español

export default function AtvRentalsContent() {
  const { lang } = useLang()

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (i: number) => setOpenIndex(prev => prev === i ? null : i)

  
  return (
    <>
      <Navbares 
        esHref="/es/tours-en-san-miguel-de-allende" 
        enHref="/san-miguel-de-allende-tours" 
        lang="es"
      />
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
              --- AVENTURA SOBRE RUEDAS ---
            </div>
            
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '3rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#fff',
              margin: '0 0 0.8rem 0',
            }}>
              Renta de cuatrimoto
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
  ¿Buscas una forma emocionante de explorar más allá de las clásicas calles empedradas? En <a href="https://www.gueytours.com/" style={{ color: 'var(--orange)', textDecoration: 'none !important', fontWeight: 'bold' }}>Guey Tours</a>, ofrecemos renta de ATVs premium para viajeros que buscan una experiencia al aire libre inolvidable.
</p>

            <p style={{ margin: 0 }}>
              Ya sea que quieras una rápida renta  de cuatrimotos o una aventura en cuatrimoto de día completo, nuestra flota confiable está lista para ti.
            </p>

            <p style={{ margin: 0 }}>
              Como una de las mejores opciones para visitantes internacionales, hacemos que sea muy fácil reservar la renta de tu vehículo todoterreno y disfrutar de la belleza del campo local.
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
              Contáctanos
            </a>
          </div>

          {/* Segunda sección: Dos columnas (Texto H2 + Imagen) */}
         <div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 'clamp(2rem, 4vw, 3rem)',
  marginTop: '3rem',
  background: 'rgba(255, 255, 255, 0.02)',
  padding: 'clamp(1.5rem, 4vw, 3rem)',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.08)'
}}>
  {/* Columna de Texto H2 */}
  <div style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
    <h2 style={{
      fontFamily: 'var(--font-heading)',
      fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
      color: 'var(--orange, #d97736)',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      margin: 0,
      lineHeight: 1.3
    }}>
      Renta de cuatrimoto en San Miguel de Allende
    </h2>

    <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
      Nuestro servicio de alquiler de cuatrimotos te da total libertad de rodar en tu propio horario.
    </p>

    <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
      Convenientemente ubicado cerca del centro de la ciudad, <a href="https://www.gueytours.com/" style={{ color: 'var(--orange)', textDecoration: 'none !important', fontWeight: 'bold' }}>Guey Tours</a> ofrece vehículos en excelente estado, equipo de seguridad completo y una reserva sencilla. Ya sea que necesites una cuatrimoto por unas horas o un día entero, tenemos gran disponibilidad y duraciones flexibles.
    </p>

    <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
      Si has estado buscando en línea una renta de cuatrimoto cerca de mí, nuestro punto céntrico es tu lugar de partida ideal.
    </p>
  </div>

  {/* Columna de la Imagen */}
  <div style={{ flex: '1', minWidth: '280px', width: '100%' }}>
    <div style={{
      width: '100%',
      height: 'clamp(240px, 50vw, 320px)',
      position: 'relative',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
    }}>
      <Image
        src="/images/SEO-ES/Familia que solicitó la renta de cuatrimoto para recorrer San Miguel de Allende.webp" 
        alt="Fotografia de una Familia que solicitó la renta de cuatrimoto para recorrer San Miguel de Allende"
        title="Familia que solicitó la renta de cuatrimoto para recorrer San Miguel de Allende"
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
      ★ Experiencia Destacada
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
      Explora San Miguel de Allende en un ATV
    </h3>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: 1.8, fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)' }}>
      <p style={{ margin: 0 }}>
        ¡Adiós a los autobuses turísticos abarrotados! Cuando rentas un ATV en San Miguel de Allende, descubres una cara totalmente nueva de la región.
      </p>

      <p style={{ margin: 0 }}>
        Recorre caminos de terracería rústica, cruza campos rurales abiertos y disfruta de vistas panorámicas increíbles de las montañas a las afueras del centro histórico.
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
        Es la alternativa dinámica perfecta frente a los estándar <a href="https://www.gueytours.com/san-miguel-de-allende-tours/" style={{ color: 'var(--orange)', textDecoration: 'none !important', fontWeight: 'bold' }}>San Miguel de Allende Tours</a>, dándote absoluta libertad para detenerte, tomar fotos y trazar tu propia aventura.
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
      Nuestras Opciones de Renta de ATV
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
          src="/images/SEO-ES/Honda 150 Motocicleta que forma parte de la renta de cuatrimoto de Guey Tours.mp4"
          autoPlay
          loop
          muted
          playsInline
          title="Honda 150 Motocicleta que forma parte de la renta de cuatrimoto de Guey Tours"
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
          Honda 150 Motocicleta
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
                if (content) content.textContent = 'Ágil, ligera, fácil de manejar y perfecta para manejo individual o en pareja.';
              }}
              style={{ background: 'var(--orange, #d97736)', color: '#fff', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              Info
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
                if (content) content.textContent = 'Hasta 2 personas.';
              }}
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              Cupo
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
                if (content) content.textContent = 'Caminos ligeros, terracería y rutas urbanas pavimentadas.';
              }}
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              Terreno
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
                if (content) content.textContent = '$500 MXN por hora (Sujeto a disponibilidad).';
              }}
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              Precio
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
            Ágil, ligera, fácil de manejar y perfecta para manejo individual o en pareja.
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
            Contáctanos para solicitar nuestro Motorbike.
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
          src="/images/SEO-ES/Cuatrimoto Roja para tours en cuatrimoto por Guey Tours.mp4"
          autoPlay
          loop
          muted
          playsInline
          title="Cuatrimoto roja que forma parte de la renta de cuatrimoto de Guey Tours"
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
          Cuatrimoto ATV
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
                if (content) content.textContent = 'Robusta, potente cuatrimoto todoterreno construida para estabilidad y diversión.';
              }}
              style={{ background: 'var(--orange, #d97736)', color: '#fff', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              Info
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
                if (content) content.textContent = 'Hasta 2 personas.';
              }}
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              Cupo
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
                if (content) content.textContent = 'Pistas de terracería ásperas, caminos polvorientos y rutas abiertas off-road.';
              }}
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              Terreno
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
                if (content) content.textContent = '$850 MXN por hora (Sujeto a disponibilidad).';
              }}
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              Precio
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
            Robusta, potente cuatrimoto todoterreno construida para estabilidad y diversión.
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
            Contáctanos para solicitar nuestro ATV Quad.
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
          src="/images/SEO-ES/Defender verde que forma parte de la renta de cuatrimoto de Guey tours.mp4"
          autoPlay
          loop
          muted
          playsInline
          title="Defender verde que forma parte de la renta de cuatrimoto de Guey tours"
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
          Defender
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
                if (content) content.textContent = 'Vehículo todoterreno pesado tipo side-by-side con barra antivuelco y máxima potencia.';
              }}
              style={{ background: 'var(--orange, #d97736)', color: '#fff', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              Info
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
                if (content) content.textContent = 'Hasta 6 personas.';
              }}
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              Cupo
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
                if (content) content.textContent = 'Todos los terrenos off-road, campo agreste y excursiones en grupo.';
              }}
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              Terreno
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
                if (content) content.textContent = '$1,900 MXN por hora (Sujeto a disponibilidad).';
              }}
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: 'none', padding: '0.4rem 0', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}
            >
              Precio
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
            Vehículo todoterreno pesado tipo side-by-side con barra antivuelco y máxima potencia.
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
            Contáctanos para solicitar nuestra Defender
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
      Reserva tu todoterreno
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
      fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
      color: 'var(--orange, #d97736)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      margin: '0 0 0.8rem 0',
    }}>
      ¿Qué Incluye Tu Renta de ATV?
    </h2>
    <div style={{
      width: '100px',
      height: '2px',
      background: 'var(--orange, #d97736)',
      margin: '0 auto',
      boxShadow: '0 0 10px var(--orange, #d97736)'
    }} />
  </div>

  {/* Contenedor Grid con clase única para forzar 2 columnas en escritorio */}
  <div className="include-grid-cards" style={{
    display: 'grid',
    gap: '1.5rem',
    maxWidth: '900px',
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
          Combustible Incluido
        </h3>
        <p style={{
          fontFamily: 'var(--font-body, sans-serif)',
          fontSize: '0.9rem',
          color: 'rgba(255, 255, 255, 0.75)',
          lineHeight: 1.5,
          margin: 0
        }}>
          Vehículo completamente preparado y con el tanque listo para la ruta.
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
          Equipo de Seguridad
        </h3>
        <p style={{
          fontFamily: 'var(--font-body, sans-serif)',
          fontSize: '0.9rem',
          color: 'rgba(255, 255, 255, 0.75)',
          lineHeight: 1.5,
          margin: 0
        }}>
          Cascos protectores de alta calidad incluidos para todos los pasajeros.
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
          Instrucción Básica
        </h3>
        <p style={{
          fontFamily: 'var(--font-body, sans-serif)',
          fontSize: '0.9rem',
          color: 'rgba(255, 255, 255, 0.75)',
          lineHeight: 1.5,
          margin: 0
        }}>
          Breve inducción de manejo y control antes de arrancar tu aventura.
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
          Soporte y Rutas
        </h3>
        <p style={{
          fontFamily: 'var(--font-body, sans-serif)',
          fontSize: '0.9rem',
          color: 'rgba(255, 255, 255, 0.75)',
          lineHeight: 1.5,
          margin: 0
        }}>
          Orientación sobre los mejores caminos y senderos en San Miguel.
        </p>
      </div>
    </div>

  </div>

  {/* Estilos exclusivos y aislados para esta sección */}
  <style jsx>{`
    .include-grid-cards {
      grid-template-columns: 1fr;
    }
    @media (min-width: 768px) {
      .include-grid-cards {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }
  `}</style>

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
    padding: 'clamp(1.5rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem)'
  }}>
    
    {/* Imagen de fondo principal */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url("/images/ATV Rentals Sightseeing in San Miguel de Allende.webp")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 1
    }} />

    {/* Etiqueta img oculta para cumplir con Alt y Title requeridos */}
    <img 
      src="/images/SEO-ES/San Miguel de Allende donde Guey Tours ofrece renta de cuatrimoto para recorridos.webp" 
      alt="Foto de una joven en San Miguel de Allende donde Guey Tours ofrece renta de cuatrimoto para recorridos" 
      title="San Miguel de Allende donde Guey Tours ofrece renta de cuatrimoto para recorridos"
      style={{ display: 'none' }}
    />

    {/* Contenido en la parte superior del fondo */}
    <div style={{ position: 'relative', zIndex: 2 }}>
      
      {/* Encabezado de la Sección (Centrado) */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          color: 'var(--orange, #d97736)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          margin: '0 0 0.8rem 0',
        }}>
          ¿Quién puede rentar una cuatrimoto?
        </h2>
        <p style={{
          fontFamily: 'var(--font-body, sans-serif)',
          fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
          color: 'rgba(255, 255, 255, 0.85)',
          maxWidth: '700px',
          margin: '0 auto 1.5rem auto',
          lineHeight: 1.6
        }}>
          Nos aseguramos de que todos disfruten de una experiencia segura, emocionante y protegida:
        </p>
        <div style={{
          width: '100px',
          height: '2px',
          background: 'var(--orange, #d97736)',
          margin: '0 auto',
          boxShadow: '0 0 10px var(--orange, #d97736)'
        }} />
      </div>

      {/* Grid de Requisitos con clase única para forzar rigurosamente 2x2 en escritorio */}
      <div className="requirements-grid-section" style={{
        display: 'grid',
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
            Edad Mínima
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            Los conductores deben ser mayores de 18 años.
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
            Licencia de Conducir
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            Se requiere una licencia de conducir vigente y válida.
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
            Experiencia Previa
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            ¡No se necesita experiencia previa! Instrucciones claras en el sitio.
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
            Seguridad y Cobertura
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            Casco, tanque lleno, orientación y seguro médico básico incluidos.
          </p>
        </div>

      </div>

      {/* Tarjeta Inferior: Capacidades y RSZ rentals */}
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
          Capacidad de Pasajeros y Estándares
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
          Motos (2 pax), Cuatrimotos (2 pax) y Defender (6 pax). Alineamos estándares con proveedores confiables como{' '}
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
          para garantizar la máxima seguridad.
        </p>
      </div>

    </div>

  </div>

  {/* Estilos exclusivos y aislados para asegurar el formato 2x2 en escritorio */}
  <style jsx>{`
    .requirements-grid-section {
      grid-template-columns: 1fr;
    }
    @media (min-width: 768px) {
      .requirements-grid-section {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }
  `}</style>

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
    padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1rem, 3vw, 2.5rem)',
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
        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
        color: 'var(--orange, #d97736)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        margin: '0 0 1rem 0',
        lineHeight: 1.2
      }}>
        ¿Por qué rentar una cuatrimoto con Guey Tours?
      </h2>
      <p style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(1rem, 2vw, 1.15rem)',
        color: '#fff',
        marginBottom: '1rem',
        lineHeight: 1.4
      }}>
        Elegir al compañero ideal para tu aventura todoterreno marca toda la diferencia al descubrir el corazón de Guanajuato.
      </p>
      <p style={{
        fontFamily: 'var(--font-body, sans-serif)',
        fontSize: 'clamp(0.9rem, 1.5vw, 0.98rem)',
        color: 'rgba(255, 255, 255, 0.75)',
        lineHeight: 1.6,
        margin: 0
      }}>
        Nos enorgullece ofrecer una experiencia inigualable basada en conocimiento local genuino, estándares de seguridad sin concesiones y equipos de primera categoría. Cada detalle está diseñado para brindarte tranquilidad mientras exploras.
      </p>
      <div style={{
        width: '100px',
        height: '2px',
        background: 'var(--orange, #d97736)',
        margin: '2rem auto 0 auto',
        boxShadow: '0 0 10px var(--orange, #d97736)'
      }} />
    </div>

    {/* Grid de Beneficios con clase única para controlar distribución simétrica */}
    <div className="why-choose-grid-section" style={{
      display: 'grid',
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
          Experiencia Local
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
          Conocimiento profundo de los mejores senderos que rodean San Miguel de Allende.
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
          Seguridad Primero
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
          Cascos certificados, seguro médico e inducciones completas antes de partir.
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
          Vehículos de Calidad
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
          Flotilla limpia, completamente inspeccionada y totalmente confiable.
        </p>
      </div>

      {/* Beneficio 4 */}
      <div className="benefit-item-4" style={{
        background: 'rgba(15, 15, 15, 0.8)',
        border: '1px solid rgba(217, 119, 54, 0.25)',
        borderRadius: '16px',
        padding: '2rem 1.5rem',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
      }}>
        <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.5rem', fontWeight: 'bold', display: 'block', marginBottom: '0.8rem', fontFamily: 'var(--font-heading)' }}>04</span>
        <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.1rem', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
          Asistencia en Inglés
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
          Comunicación clara y amigable para turistas internacionales.
        </p>
      </div>

      {/* Beneficio 5 */}
      <div className="benefit-item-5" style={{
        background: 'rgba(15, 15, 15, 0.8)',
        border: '1px solid rgba(217, 119, 54, 0.25)',
        borderRadius: '16px',
        padding: '2rem 1.5rem',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
      }}>
        <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.5rem', fontWeight: 'bold', display: 'block', marginBottom: '0.8rem', fontFamily: 'var(--font-heading)' }}>05</span>
        <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.1rem', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
          Atención Personalizada
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
          Adaptamos las recomendaciones directamente a tus planes de viaje.
        </p>
      </div>

    </div>

    {/* Tarjeta de Llamado a la Acción (CTA) Final */}
    <div style={{
      background: 'rgba(217, 119, 54, 0.08)',
      border: '1px solid rgba(217, 119, 54, 0.5)',
      borderRadius: '16px',
      padding: '2.5rem 1.5rem',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.2rem'
    }}>
      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
        color: '#fff',
        textTransform: 'uppercase',
        margin: 0,
        letterSpacing: '0.05em'
      }}>
        ¿Listo para recorrer los senderos?
      </h3>
      <p style={{
        fontFamily: 'var(--font-body, sans-serif)',
        fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
        color: 'rgba(255, 255, 255, 0.85)',
        maxWidth: '700px',
        margin: 0,
        lineHeight: 1.5
      }}>
        ¡Contáctanos hoy para reservar tu vehículo y comienza a planear tu aventura todoterreno definitiva!
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
        Reservar Ahora
      </a>
    </div>

  </div>

  {/* Estilos aislados para distribución perfecta: 3 arriba y 2 abajo centradas en escritorio */}
  <style jsx>{`
    .why-choose-grid-section {
      grid-template-columns: 1fr;
    }
    @media (min-width: 768px) {
      .why-choose-grid-section {
        grid-template-columns: repeat(3, 1fr) !important;
      }
      .benefit-item-4 {
        grid-column: 1 / 2;
      }
      .benefit-item-5 {
        grid-column: 2 / 3;
      }
    }
  `}</style>

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
        ——— ¿Tienes preguntas? ———
      </div>
      <h2 className="section-heading">
        PREGUNTAS FRECUENTES
      </h2>
      <div className="section-divider" style={{ marginTop: '1rem' }} />
    </div>

    {/* Acordeón de Preguntas */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {[
        {
          q_es: '¿Qué incluye el servicio de ATV rentals?',
          a_es: 'El servicio de ATV rentals incluye el alquiler de vehículos todo terreno para disfrutar recorridos y aventuras al aire libre. En Guey Tours te ofrecemos una experiencia emocionante, con orientación para que aproveches al máximo tu recorrido.',
        },
        {
          q_es: '¿Quién puede utilizar el servicio de ATV rentals?',
          a_es: 'El servicio de ATV rentals está dirigido a personas que buscan explorar terrenos naturales y vivir una experiencia diferente. Los requisitos pueden variar según el recorrido. En Guey Tours te brindamos la información necesaria antes de comenzar.',
        },
        {
          q_es: '¿Es necesario tener experiencia para contratar ATV rentals?',
          a_es: 'No necesariamente. Dependiendo del recorrido, el servicio de ATV rentals puede ser adecuado para personas con diferentes niveles de experiencia. En Guey Tours te proporcionamos indicaciones antes de iniciar para que disfrutes la aventura de forma responsable.',
        },
        {
          q_es: '¿Por qué elegir Guey Tours para ATV rentals?',
          a_es: 'En Guey Tours buscamos que tu experiencia de ATV rentals sea divertida, emocionante y memorable. Te acompañamos durante el recorrido y te orientamos sobre el uso del vehículo para que puedas disfrutar la aventura con mayor confianza.',
        },
      ].map((faq, i) => {
        const isOpen = openIndex === i
        const question = faq.q_es
        const answer = faq.a_es

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
      ——— ¿Listo para la acción? ———
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
      Reserva tu aventura hoy y vive la experiencia
    </h2>

    <p style={{
      fontFamily: 'var(--font-body)',
      fontSize: '1.1rem',
      color: 'rgba(255, 255, 255, 0.75)',
      lineHeight: 1.6,
      maxWidth: '650px',
      margin: '0 auto 2.5rem auto',
    }}>
      Asegura tu lugar ahora y explora los mejores senderos todo terreno con guías profesionales y equipo de primera.
    </p>

    <a
      href="https://api.whatsapp.com/send/?phone=5214151090021&text=Hola%21+Me+gustaría+reservar+el+Honda+150+Motorbike.+¿Podrían+darme+información+sobre+disponibilidad%3F&type=phone_number&app_absent=0"
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
      Contáctanos por WhatsApp
    </a>

  </div>
</section> {/* <--- AQUÍ TERMINA EXACTAMENTE LA NOVENA SECCIÓN */}


          {/* --- DÉCIMA SECCIÓN: Contacto y Formulario --- */}
      <section
  id="contact"
  style={{
    background: 'var(--dark, #0b0b0b)',
    padding: '6rem 0',
    position: 'relative',
  }}
>
  <div style={{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, transparent, var(--orange, #d97736), transparent)',
  }} />

  <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 2rem' }}>
    {/* Header */}
    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
      <h2 className="section-heading" style={{ color: '#fff', fontFamily: 'var(--font-heading)' }}>
        Contáctanos
      </h2>
      <div className="section-divider" style={{ marginTop: '1rem' }} />
    </div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '5rem',
      alignItems: 'start',
    }}
    className="contact-grid"
    >
      {/* Info side */}
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
          {[
            {
              icon: MapPin,
              label: 'Calle Refugio Sur #52, Colonia San Antonio, San Miguel de Allende, Guanajuato, Mexico',
            },
            {
              icon: Mail,
              label: 'gueycuatritours@gmail.com',
              href: 'mailto:gueycuatritours@gmail.com',
            },
            {
              icon: Phone,
              label: '+52 1 415 109 0021',
              href: 'tel:+5214151090021',
            },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  background: 'var(--orange, #d97736)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '0.1rem',
                  borderRadius: '4px',
                }}>
                  <Icon size={18} color="white" />
                </div>
                {item.href ? (
                  <a href={item.href} style={{
                    color: 'rgba(255,255,255,0.75)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    lineHeight: 1.5,
                    paddingTop: '0.6rem',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.color = 'var(--orange, #d97736)' }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.75)' }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span style={{
                    color: 'rgba(255,255,255,0.75)',
                    fontSize: '0.95rem',
                    lineHeight: 1.5,
                    paddingTop: '0.6rem',
                  }}>
                    {item.label}
                  </span>
                )}
              </div>
            )
          })}

          <a
            href="https://www.google.com/maps/place/Tours+en+cuatrimoto+ATV+San+Miguel+Allende+Guey+Tours/@20.9073889,-100.7531316,17z/data=!3m1!4b1!4m6!3m5!1s0x842b51bb20a11cff:0x815817733a05fa9b!8m2!3d20.9073889!4d-100.7531316!16s%2Fg%2F11lhjy63cg?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ 
              marginTop: '1rem', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              width: 'fit-content',
              padding: '0.75rem 1.5rem',
              color: '#fff',
              border: '1px solid var(--orange, #d97736)',
              borderRadius: '4px',
              textDecoration: 'none',
              fontFamily: 'var(--font-heading)'
            }}
          >
            Ver en Google Maps <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Form side */}
      <div>
        {sent ? (
          <div style={{
            background: 'rgba(232,84,26,0.1)',
            border: '1px solid var(--orange, #d97736)',
            padding: '2rem',
            textAlign: 'center',
            borderRadius: '8px',
          }}>
            <div style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              ✓ ¡Mensaje enviado!
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
              Nos pondremos en contacto contigo en menos de 24 horas.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <input
              type="text"
              placeholder="Tu nombre"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
              style={{
                width: '100%',
                padding: '0.9rem 1rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                outline: 'none',
                borderRadius: '2px',
              }}
              onFocus={e => { (e.target as HTMLElement).style.borderColor = 'var(--orange, #d97736)' }}
              onBlur={e => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)' }}
            />
            <input
              type="email"
              placeholder="Tu correo electrónico"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
              style={{
                width: '100%',
                padding: '0.9rem 1rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                outline: 'none',
                borderRadius: '2px',
              }}
              onFocus={e => { (e.target as HTMLElement).style.borderColor = 'var(--orange, #d97736)' }}
              onBlur={e => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)' }}
            />
            <textarea
              placeholder="Tu mensaje"
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              style={{
                width: '100%',
                padding: '0.9rem 1rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                outline: 'none',
                borderRadius: '2px',
                resize: 'vertical',
              }}
              onFocus={e => { (e.target as HTMLElement).style.borderColor = 'var(--orange, #d97736)' }}
              onBlur={e => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)' }}
            />
            <button type="submit" className="btn-orange" style={{ cursor: 'pointer', border: 'none', width: '100%', textAlign: 'center', padding: '1rem', borderRadius: '4px', fontWeight: 'bold' }}>
              Enviar Mensaje
            </button>
          </form>
        )}
      </div>
    </div>
  </div>

  <style jsx>{`
    @media (max-width: 768px) {
      .contact-grid {
        grid-template-columns: 1fr !important;
        gap: 3rem !important;
      }
    }
  `}</style>
</section>
      {/* --- FIN DE LA DÉCIMA SECCIÓN --- */}

{/* --- DATOS ESTRUCTURADOS (SEO: FAQPage) --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Qué incluye el servicio de ATV rentals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El servicio de ATV rentals incluye el alquiler de vehículos todo terreno para disfrutar recorridos y aventuras al aire libre. En Guey Tours te ofrecemos una experiencia emocionante, con orientación para que aproveches al máximo tu recorrido."
                }
              },
              {
                "@type": "Question",
                "name": "¿Quién puede utilizar el servicio de ATV rentals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El servicio de ATV rentals está dirigido a personas que buscan explorar terrenos naturales y vivir una experiencia diferente. Los requisitos pueden variar según el recorrido. En Guey Tours te brindamos la información necesaria antes de comenzar."
                }
              },
              {
                "@type": "Question",
                "name": "¿Es necesario tener experiencia para contratar ATV rentals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No necesariamente. Dependiendo del recorrido, el servicio de ATV rentals puede ser adecuado para personas con diferentes niveles de experiencia. En Guey Tours te proporcionamos indicaciones antes de iniciar para que disfrutes la aventura de forma responsable."
                }
              },
              {
                "@type": "Question",
                "name": "¿Por qué elegir Guey Tours para ATV rentals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "En Guey Tours buscamos que tu experiencia de ATV rentals sea divertida, emocionante y memorable. Te acompañamos durante el recorrido y te orientamos sobre el uso del vehículo para que puedas disfrutar la aventura con mayor confianza."
                }
              }
            ]
          })
        }}
      />

          

          {/* Aquí puedes seguir pegando los demás scripts de FAQPage, Breadcrumb, etc. con el mismo formato */}
          
          

          
        </div>
      </main>
      <FooterEs />
    </>
  )
}
