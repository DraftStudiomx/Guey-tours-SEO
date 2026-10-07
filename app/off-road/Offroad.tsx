'use client'

import { useLang } from '@/lib/i18n'
import { useState } from 'react'
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RzrRentalContenido() {
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

          <div style={{
  position: 'relative',
  width: '100vw',
  left: '50%',
  right: '50%',
  marginLeft: '-50vw',
  marginRight: '-50vw',
  height: '75vh',
  minHeight: '450px',
  marginBottom: '4rem',
  overflow: 'hidden'
}}>
  <img 
    src="/images/SEO/Exciting off-road vehicle tour through colorful streets of Mexico.webp" 
    alt="Tourists driving off-road ATVs and utility vehicles along a narrow cobblestone street past colonial buildings." 
    title="Exciting off-road vehicle tour through colorful streets of Mexico"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }}
  />
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
    zIndex: 1
  }} />
</div>
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
    --- {lang === 'es' ? '¡Prepárate para el viaje de tu vida!' : 'Get ready for the ultimate ride of your life!'} ---
  </div>
  
  <h1 style={{
    fontFamily: 'var(--font-heading)',
    fontSize: 'clamp(1.8rem, 4vw, 3rem)',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#fff',
    margin: '0 0 0.8rem 0',
    wordBreak: 'break-word',
  }}>
    {lang === 'es' ? 'Off-Road: Vive una aventura todoterreno en Guanajuato.' : 'Off-Road: Live an All-Terrain adventure in Guanajuato'}
  </h1>

  <div style={{
    width: '120px',
    height: '2px',
    background: 'var(--orange, #d97736)',
    margin: '0 auto',
    boxShadow: '0 0 10px var(--orange, #d97736)'
  }} />
</div>

{/* Sección de texto unificada y optimizada para móviles */}
<div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', lineHeight: 1.7, fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)' }}>
  <p style={{ margin: 0, wordBreak: 'break-word' }}>
    {lang === 'es' ? (
      <>En Guey Tours, te ofrecemos una experiencia todoterreno inolvidable a través del impresionante campo de Guanajuato. Si buscas una aventura al aire libre que combine adrenalina, libertad y paisajes impresionantes, nuestros tours te llevarán mucho más allá de los caminos turísticos habituales.</>
    ) : (
      <>At Guey Tours, we bring you an unforgettable off-road experience through the stunning countryside of Guanajuato. If you are looking for an outdoor adventure that combines adrenaline, freedom, and breathtaking landscapes, our tours will take you way beyond the typical tourist paths.</>
    )}
  </p>

  <p style={{ margin: 0, wordBreak: 'break-word' }}>
    {lang === 'es' ? (
      <>¡Ponte al volante y explora la rica herencia de México desde una perspectiva completamente nueva!</>
    ) : (
      <>Get behind the wheel and explore Mexico’s rich heritage from a whole new perspective!</>
    )}
  </p>
</div>

{/* Botón de contacto */}
<div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
  <a 
    href="https://www.gueytours.com/contacto/" 
    style={{
      display: 'inline-block',
      background: 'transparent',
      color: 'var(--orange, #d97736)',
      border: '2px solid var(--orange, #d97736)',
      padding: '0.75rem 2.5rem',
      borderRadius: '50px',
      fontWeight: 'bold',
      fontFamily: 'var(--font-heading)',
      textDecoration: 'none',
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



          {/* Segunda sección: Tres tarjetas (Videos con Alt/Title + Títulos + Botones) */}
<div style={{ marginTop: '4rem' }}>
  {/* Título de la sección */}
  <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
    <h2 style={{
      fontFamily: 'var(--font-heading)',
      fontSize: 'clamp(2rem, 4vw, 2.5rem)',
      textTransform: 'uppercase',
      color: '#fff',
      letterSpacing: '0.05em',
      marginBottom: '0.5rem',
      wordBreak: 'break-word',
    }}>
      {lang === 'es' ? 'Nuestras Experiencias y Vehículos' : 'Our Experiences & Vehicles'}
    </h2>
    <div style={{
      width: '80px',
      height: '2px',
      background: 'var(--orange, #d97736)',
      margin: '0 auto',
      boxShadow: '0 0 8px var(--orange, #d97736)'
    }} />
  </div>

  {/* Contenedor de las 3 Tarjetas (Responsive Grid) */}
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    padding: '0 1rem',
    maxWidth: '1200px',
    margin: '0 auto'
  }}>
    
    {/* --- TARJETA 1: Video Motorcycle --- */}
    <div style={{
      background: '#1a1a1a',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
    }}>
      <div style={{ width: '100%', height: '220px', background: '#000', position: 'relative' }}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          title={lang === 'es' ? 'Alquiler de motos todoterreno de Guey Tours' : 'Guey Tours Motorcycle Rentals for Off-Road'}
          aria-label={lang === 'es' ? 'Imagen de las motocicletas todoterreno de alquiler de Guey Tours sobre fondo negro.' : 'Image of Guey Tours Motorcycle Rentals for off-road with a black background'}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/images/SEO/Guey Tours Motorcycle Rentals for Off-Road.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      </div>

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.4rem',
          color: '#fff',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          wordBreak: 'break-word'
        }}>
          {lang === 'es' ? 'Renta de Motorcycle' : 'Motorcycle rentals'}
        </h3>

        <div>
          <a 
            href="https://www.gueytours.com/rentals/moto" 
            style={{
              display: 'block',
              textAlign: 'center',
              background: 'var(--orange, #d97736)',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontFamily: 'var(--font-heading)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'opacity 0.3s ease'
            }}
          >
            {lang === 'es' ? 'Ver Más' : 'View More'}
          </a>
        </div>
      </div>
    </div>


    {/* --- TARJETA 2: Video ATV --- */}
    <div style={{
      background: '#1a1a1a',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
    }}>
      <div style={{ width: '100%', height: '220px', background: '#000', position: 'relative' }}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          title={lang === 'es' ? 'Alquiler de cuatrimotos (ATV) de Guey Tours para rutas todoterreno' : 'ATV Rentals from Guey Tours for off-road '}
          aria-label={lang === 'es' ? 'Imagen de los vehículos todoterreno (ATV) de alquiler de Guey Tours para conducción fuera de carretera, con fondo negro.' : 'Image of the ATV Rentals from Guey Tours for off-road with a black background'}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/images/SEO/ATV Rentals from Guey Tours for off-road.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      </div>

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.4rem',
          color: '#fff',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          wordBreak: 'break-word'
        }}>
          {lang === 'es' ? 'Renta un ATV' : 'ATV rentals'}
        </h3>

        <div>
          <a 
            href="https://www.gueytours.com/rentals/atv" 
            style={{
              display: 'block',
              textAlign: 'center',
              background: 'var(--orange, #d97736)',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontFamily: 'var(--font-heading)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'opacity 0.3s ease'
            }}
          >
            {lang === 'es' ? 'Ver Más' : 'View More'}
          </a>
        </div>
      </div>
    </div>


    {/* --- TARJETA 3: Video RZR --- */}
    <div style={{
      background: '#1a1a1a',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
    }}>
      <div style={{ width: '100%', height: '220px', background: '#000', position: 'relative' }}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          title={lang === 'es' ? 'Alquiler de RZR de Guey Tours para rutas todoterreno' : 'RZR Rentals from Guey Tours for off-road'}
          aria-label={lang === 'es' ? 'Imagen de los RZR de alquiler de Guey Tours para conducción todoterreno, con fondo negro.' : 'Image of the RZR Rentals from Guey Tours for off-road with a black background'}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/images/SEO/RZR Rentals from Guey Tours for off-road.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      </div>

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.4rem',
          color: '#fff',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          wordBreak: 'break-word'
        }}>
          {lang === 'es' ? 'Renta un RZR' : 'RZR rentals'}
        </h3>

        <div>
          <a 
            href="https://www.gueytours.com/rentals/defender" 
            style={{
              display: 'block',
              textAlign: 'center',
              background: 'var(--orange, #d97736)',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontFamily: 'var(--font-heading)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'opacity 0.3s ease'
            }}
          >
            {lang === 'es' ? 'Ver Más' : 'View More'}
          </a>
        </div>
      </div>
    </div>

  </div>
</div>
{/* Segunda sección: Tres tarjetas (Videos + Títulos + Botones) */}
          
          

          
          


         {/* Segunda sección: Dos columnas responsivas (Texto H2 + Imagen) */}
<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '2.5rem',
  marginTop: '5rem',
  background: 'rgba(255, 255, 255, 0.02)',
  padding: 'clamp(1.5rem, 4vw, 3rem)', // Se adapta en móviles para no desbordar
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  boxSizing: 'border-box',
  width: '100%',
  overflow: 'hidden'
}}>
  {/* Columna de Texto H2 y Párrafos */}
  <div style={{ 
    flex: '1 1 280px', 
    minWidth: 0, // Evita desbordamientos en grid/flex con textos largos
    display: 'flex', 
    flexDirection: 'column', 
    gap: '1.2rem' 
  }}>
    <h2 style={{
      fontFamily: 'var(--font-heading)',
      fontSize: 'clamp(1.5rem, 3vw, 1.8rem)',
      color: 'var(--orange, #d97736)',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      margin: 0,
      wordBreak: 'break-word'
    }}>
      {lang === 'es' ? '¿Qué es una experiencia todoterreno?' : 'What is an off-road experience?'}
    </h2>

    {/* NUEVO PÁRRAFO ABAJO DEL H2 */}
    <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', wordBreak: 'break-word' }}>
      {lang === 'es'
        ? 'Una experiencia todoterreno consiste en dejar atrás las carreteras pavimentadas para conquistar paisajes naturales e impredecibles.'
        : 'An off-road experience is all about leaving paved highways behind to conquer natural, unpredictable landscapes. '}
    </p>

    {/* TUS 3 PÁRRAFOS ORIGINALES */}
    <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', wordBreak: 'break-word' }}>
      {lang === 'es' 
        ? 'A diferencia de la conducción urbana cotidiana, conducir en terrenos difíciles pone a prueba tus habilidades y despierta tu espíritu aventurero mientras te desplazas por tierra, barro, rocas y pendientes pronunciadas.'
        : 'Unlike everyday city driving, driving on challenging terrain tests your skills and sparks your sense of adventure as you navigate dirt, mud, rocks, and steep hills.'}
    </p>

    <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', wordBreak: 'break-word' }}>
      {lang === 'es' ? (
        <>Al unirte a nosotros, pilotarás vehículos recreativos de alto rendimiento diseñados para dominar terrenos abruptos.</>
      ) : (
        <>When you join us, you will pilot high-performance recreational vehicles designed to master rugged paths. </>
      )}
    </p>

    <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', wordBreak: 'break-word' }}>
      {lang === 'es'
        ? 'Recorrerás caminos de tierra, cauces de ríos y senderos ocultos por donde los automóviles convencionales simplemente no pueden pasar. No es solo un paseo; es una emocionante experiencia todoterreno diseñada para viajeros que buscan una emoción auténtica.'
        : 'You will traverse dirt roads, riverbeds, and hidden trails where standard cars simply cannot go. It is not just a ride; it is a thrilling off-road experience created for travelers seeking genuine excitement.'}
    </p>
  </div>

  {/* Columna de la Imagen (Adaptada y fluida para móviles) */}
  <div style={{ flex: '1 1 280px', minWidth: 0, width: '100%' }}>
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
        src="/images/SEO/Guided off-road ATV quad tour group exploring picturesque streets.webp" 
        alt="Group of tourists wearing helmets riding all-terrain off-road quads together on a sunny outdoor guided adventure."
        title="Guided off-road ATV quad tour group exploring picturesque streets"
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  </div>
</div>
          


        {/* Inicio de section tres */}
<section style={{
  padding: '6rem 1.5rem 6rem 1.5rem',
  marginTop: '3rem',
  background: 'linear-gradient(180deg, #0b0b0b 0%, rgba(217, 119, 54, 0.04) 100%)',
  color: '#fff',
  fontFamily: 'sans-serif',
  position: 'relative',
  boxSizing: 'border-box',
  overflow: 'hidden',
  width: '100%'
}}>
  <div style={{
    maxWidth: '1100px',
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box'
  }}>
    
    {/* Título H2 en color naranja cobrizo exacto */}
    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        color: 'var(--orange, #d97736)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        margin: '0 0 1rem 0',
        lineHeight: 1.2
      }}>
        {lang === 'es' 
          ? 'Alquiler de vehículos todoterreno para explorar Guanajuato' 
          : "Off road vehicle rental to explore Guanajuato"}
      </h2>
      <div style={{
        width: '80px',
        height: '3px',
        background: 'var(--orange, #d97736)',
        margin: '0 auto',
        boxShadow: '0 0 12px var(--orange, #d97736)'
      }} />
    </div>

    {/* Párrafo introductorio con bloque destacado */}
    <div style={{
      background: 'rgba(255, 255, 255, 0.02)',
      borderLeft: '4px solid var(--orange, #d97736)',
      borderRadius: '0 16px 16px 0',
      padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1.2rem, 2.5vw, 3rem)',
      marginBottom: '3.5rem',
      boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
      backdropFilter: 'blur(10px)',
      boxSizing: 'border-box'
    }}>
      <p style={{
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.85)',
        fontSize: '18px',
        lineHeight: 1.8,
        margin: '0 0 1.5rem 0'
      }}>
        {lang === 'es'
          ? 'Para brindarle total libertad en la ruta, ofrecemos opciones premium de alquiler de vehículos todoterreno adaptadas a sus preferencias de conducción.'
          : 'To give you complete freedom on the trail, we offer premium Off Road Vehicle Rental options tailored to your driving preferences.'}
      </p>
      <p style={{
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.85)',
        fontSize: '18px',
        lineHeight: 1.8,
        margin: 0
      }}>
        {lang === 'es'
          ? 'Ya sea que quieras conducir solo, en pareja o con un grupo de amigos, tenemos la máquina ideal para tu viaje:'
          : 'Whether you want to drive solo, as a couple, or with a group of friends, we have the ideal machine for your journey:'}
      </p>
    </div>

    {/* Cuadrícula de opciones rediseñada con botones y mejor estructura */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      marginBottom: '4rem',
      boxSizing: 'border-box',
      width: '100%'
    }}>
      
      {/* Tarjeta 1: ATV rentals (Con botón Ver más) */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(217, 119, 54, 0.05) 100%)',
        border: '1px solid rgba(217, 119, 54, 0.3)',
        borderRadius: '16px',
        padding: '2.5rem 2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
        boxSizing: 'border-box'
      }}>
        <div>
          <span style={{
            display: 'inline-block',
            padding: '0.3rem 0.8rem',
            background: 'rgba(217, 119, 54, 0.15)',
            color: 'var(--orange, #d97736)',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '1rem',
            border: '1px solid rgba(217, 119, 54, 0.4)'
          }}>
            {lang === 'es' ? 'Opción 01' : 'Option 01'}
          </span>
          <h3 style={{
            color: '#fff',
            fontSize: '1.35rem',
            margin: '0 0 1rem 0',
            fontFamily: 'var(--font-heading)'
          }}>
            {lang === 'es' ? 'Renta de ATV' : 'ATV rentals'}
          </h3>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1rem',
            lineHeight: 1.6,
            margin: '0 0 2rem 0'
          }}>
            {lang === 'es' 
              ? 'Perfecto para conductores solitarios o parejas que quieren un paseo ágil, potente y receptivo en los senderos.' 
              : 'Perfect for solo riders or couples who want a nimble, powerful, and responsive ride on the trails.'}
          </p>
        </div>
        <a href="https://www.gueytours.com/atv-rentals" style={{
          display: 'inline-block',
          textAlign: 'center',
          background: 'transparent',
          color: 'var(--orange, #d97736)',
          border: '1px solid var(--orange, #d97736)',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '0.95rem',
          transition: 'all 0.3s ease'
        }}>
          {lang === 'es' ? 'Ver más' : 'Learn more'}
        </a>
      </div>

      {/* Tarjeta 2: Side by Side (Con botón Contáctanos) */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(217, 119, 54, 0.05) 100%)',
        border: '1px solid rgba(217, 119, 54, 0.3)',
        borderRadius: '16px',
        padding: '2.5rem 2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
        boxSizing: 'border-box'
      }}>
        <div>
          <span style={{
            display: 'inline-block',
            padding: '0.3rem 0.8rem',
            background: 'rgba(217, 119, 54, 0.15)',
            color: 'var(--orange, #d97736)',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '1rem',
            border: '1px solid rgba(217, 119, 54, 0.4)'
          }}>
            {lang === 'es' ? 'Opción 02' : 'Option 02'}
          </span>
          <h3 style={{
            color: '#fff',
            fontSize: '1.35rem',
            margin: '0 0 1rem 0',
            fontFamily: 'var(--font-heading)'
          }}>
            {lang === 'es' ? 'Vehículos Side by Side' : 'Side by Side vehicles'}
          </h3>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1rem',
            lineHeight: 1.6,
            margin: '0 0 2rem 0'
          }}>
            {lang === 'es' 
              ? 'Ideal para familias y grupos que quieren compartir la adrenalina juntos en un equipo cómodo y de alto rendimiento.' 
              : 'Ideal for families and groups who want to share the adrenaline together in a high-powered, comfortable rig.'}
          </p>
        </div>
        <a href="https://www.gueytours.com/contact" style={{
          display: 'inline-block',
          textAlign: 'center',
          background: 'var(--orange, #d97736)',
          color: '#fff',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '0.95rem',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(217, 119, 54, 0.4)'
        }}>
          {lang === 'es' ? 'Contáctanos' : 'Contact Us'}
        </a>
      </div>

      {/* Tarjeta 3: RSZ rentals (Con botón Ver más) */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(217, 119, 54, 0.05) 100%)',
        border: '1px solid rgba(217, 119, 54, 0.3)',
        borderRadius: '16px',
        padding: '2.5rem 2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
        boxSizing: 'border-box'
      }}>
        <div>
          <span style={{
            display: 'inline-block',
            padding: '0.3rem 0.8rem',
            background: 'rgba(217, 119, 54, 0.15)',
            color: 'var(--orange, #d97736)',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '1rem',
            border: '1px solid rgba(217, 119, 54, 0.4)'
          }}>
            {lang === 'es' ? 'Opción 03' : 'Option 03'}
          </span>
          <h3 style={{
            color: '#fff',
            fontSize: '1.35rem',
            margin: '0 0 1rem 0',
            fontFamily: 'var(--font-heading)'
          }}>
            {lang === 'es' ? 'Renta de RSZ' : 'RSZ rentals'}
          </h3>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1rem',
            lineHeight: 1.6,
            margin: '0 0 2rem 0'
          }}>
            {lang === 'es' 
              ? 'Construido para la velocidad, estabilidad y manejo de los caminos todo terreno más difíciles con facilidad.' 
              : 'Built for speed, stability, and handling the toughest all-terrain paths with ease.'}
          </p>
        </div>
        <a href="https://www.gueytours.com/rsz-rentals" style={{
          display: 'inline-block',
          textAlign: 'center',
          background: 'transparent',
          color: 'var(--orange, #d97736)',
          border: '1px solid var(--orange, #d97736)',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '0.95rem',
          transition: 'all 0.3s ease'
        }}>
          {lang === 'es' ? 'Ver más' : 'Learn more'}
        </a>
      </div>

    </div>

    {/* Tarjeta de cierre sobre la ventaja de Guey Tours */}
    <div style={{
      background: 'rgba(217, 119, 54, 0.07)',
      border: '1px solid rgba(217, 119, 54, 0.4)',
      borderRadius: '16px',
      padding: '2.5rem 3rem',
      boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
      textAlign: 'center',
      boxSizing: 'border-box'
    }}>
      <p style={{
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.85)',
        fontSize: '18px',
        lineHeight: 1.8,
        margin: 0
      }}>
        <strong style={{ 
          color: 'var(--orange, #d97736)', 
          textTransform: 'uppercase', 
          display: 'block', 
          marginBottom: '0.8rem', 
          letterSpacing: '0.08em', 
          fontSize: '0.95rem' 
        }}>
          {lang === 'es' ? 'La Ventaja de Guey Tours' : 'The Guey Tours Advantage'}
        </strong>
        {lang === 'es'
          ? 'Nuestro servicio de alquiler incluye equipo de seguridad de primera calidad, una explicación detallada sobre el funcionamiento y vehículos todoterreno perfectamente preparados para enfrentarse a la naturaleza.'
          : 'Our rental service includes top-tier safety gear, a detailed operational briefing, and fully prepped off-road vehicles ready to take on the wilderness.'}
      </p>
    </div>

  </div>
</section>
{/* Fin de section tres */}


          

          {/* INICIO SECTION 4 */}
<section style={{
  padding: '6rem 1.5rem',
  background: 'linear-gradient(180deg, #0b0b0b 0%, rgba(217, 119, 54, 0.04) 100%)',
  color: '#fff',
  fontFamily: 'sans-serif',
  position: 'relative',
  boxSizing: 'border-box',
  overflow: 'hidden',
  width: '100%'
}}>
  <div style={{
    maxWidth: '900px',
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box'
  }}>
    
    {/* Título H2 */}
    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        color: 'var(--orange, #d97736)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        margin: '0 0 1rem 0',
        lineHeight: 1.2
      }}>
        {lang === 'es' 
          ? 'Descubre Guanajuato desde una perspectiva diferente' 
          : 'Discover Guanajuato from a different perspective'}
      </h2>
      <div style={{
        width: '80px',
        height: '3px',
        background: 'var(--orange, #d97736)',
        margin: '0 auto',
        boxShadow: '0 0 12px var(--orange, #d97736)'
      }} />
    </div>

    {/* Contenedor fluido con diseño sofisticado para los párrafos */}
    <div style={{
      background: 'rgba(255, 255, 255, 0.02)',
      borderLeft: '4px solid var(--orange, #d97736)',
      borderRadius: '0 16px 16px 0',
      padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 3vw, 3rem)',
      boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
      backdropFilter: 'blur(10px)',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.8rem'
    }}>
      {/* Párrafo 1 */}
      <p style={{
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.85)',
        fontSize: '18px',
        lineHeight: 1.8,
        margin: 0
      }}>
        {lang === 'es'
          ? 'Aléjate de los autobuses turísticos llenos de gente y adéntrate de lleno en el lado salvaje de Guanajuato.'
          : 'Step away from the crowded tour buses and dive straight into the wild side of Guanajuato.'}
      </p>

      {/* Párrafo 2 (Con el enlace en la frase solicitada) */}
      <p style={{
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.85)',
        fontSize: '18px',
        lineHeight: 1.8,
        margin: 0
      }}>
        {lang === 'es' ? (
          <>
            Nuestros <a href="https://www.gueytours.com/san-miguel-de-allende-tours/" style={{ color: 'var(--orange, #d97736)', textDecoration: 'none', fontWeight: 'bold' }}>Tours por San Miguel de Allende</a> te guían a través de cañones panorámicos, senderos montañosos históricos y antiguos pueblos rurales que pocos visitantes llegan a ver.
          </>
        ) : (
          <>
            Our <a href="https://www.gueytours.com/san-miguel-de-allende-tours/" style={{ color: 'var(--orange, #d97736)', textDecoration: 'none', fontWeight: 'bold' }}>San Miguel de Allende Tours</a> lead you through scenic canyons, historical mountain trails, and ancient rural villages that few visitors ever get to see.
          </>
        )}
      </p>

      {/* Párrafo 3 */}
      <p style={{
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.85)',
        fontSize: '18px',
        lineHeight: 1.8,
        margin: 0
      }}>
        {lang === 'es'
          ? 'Esta aventura todoterreno te permite detenerte en miradores impresionantes, tomar fotografías increíbles y compartir momentos inolvidables con tus compañeros de viaje mientras navegas por paisajes históricos.'
          : 'This off-road adventure lets you stop at breathtaking viewpoints, take amazing photos, and share unforgettable moments with your travel companions while navigating historic landscapes.'}
      </p>
    </div>

  </div>
</section>
{/* FIN SECTION 4 */}


          

        {/* INICIO SECTION 5 */}
<section style={{
  padding: '6rem 2rem',
  background: '#0b0b0b',
  color: '#fff',
  fontFamily: 'sans-serif',
  position: 'relative'
}}>
  <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
    
    {/* Título H2 y Párrafo Introductorio */}
    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(2.2rem, 4vw, 3rem)',
        color: 'var(--orange, #d97736)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        margin: '0 0 1rem 0',
        lineHeight: 1.2
      }}>
        {lang === 'es' ? '¿Por qué tomar un tour todoterreno con Guey Tours?' : 'Why take an Off-Road tour with Guey Tours?'}
      </h2>
      <div style={{
        width: '80px',
        height: '3px',
        background: 'var(--orange, #d97736)',
        margin: '0 auto 2rem auto',
        boxShadow: '0 0 12px var(--orange, #d97736)'
      }} />
      <p style={{
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.85)',
        fontSize: '18px',
        lineHeight: 1.8,
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {lang === 'es'
          ? 'Elegirnos significa reservar con expertos locales que ponen tu seguridad y diversión en primer lugar:'
          : 'Choosing us means booking with local experts who put your safety and enjoyment first:'}
      </p>
    </div>

    {/* Contenedor de Tarjetas (Grid de 2x2) */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '2rem',
      justifyContent: 'center',
      marginBottom: '4rem'
    }}>
      
      {/* --- TARJETA 1: Local expertise (Destacada Color Naranja) --- */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(217, 119, 54, 0.08) 100%)',
        border: '1px solid rgba(217, 119, 54, 0.4)',
        borderRadius: '16px',
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
        boxShadow: '0 15px 35px rgba(0,0,0,0.6)'
      }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.4rem',
          color: 'var(--orange, #d97736)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          margin: 0,
          borderBottom: '1px solid rgba(217, 119, 54, 0.2)',
          paddingBottom: '0.8rem'
        }}>
          {lang === 'es' ? 'Experiencia local' : 'Local expertise'}
        </h3>
        <p style={{
          color: 'rgba(255, 255, 255, 0.85)',
          fontSize: '16px',
          lineHeight: 1.6,
          margin: 0
        }}>
          {lang === 'es'
            ? 'Nuestros guías conocen cada rincón de estas rutas todoterreno, garantizando un itinerario seguro y emocionante.'
            : 'Our guides know every corner of these off-road routes, ensuring a safe and exciting itinerary.'}
        </p>
      </div>

      {/* --- TARJETA 2: Top-tier fleet (Negra) --- */}
      <div style={{
        background: '#000',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '16px',
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
        boxShadow: '0 15px 35px rgba(0,0,0,0.6)'
      }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.4rem',
          color: '#fff',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          margin: 0,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          paddingBottom: '0.8rem'
        }}>
          {lang === 'es' ? 'Flota de primer nivel' : 'Top-tier fleet'}
        </h3>
        <p style={{
          color: 'rgba(255, 255, 255, 0.85)',
          fontSize: '16px',
          lineHeight: 1.6,
          margin: 0
        }}>
          {lang === 'es'
            ? 'Mantenemos nuestros vehículos todo terreno con los más altos estándares mecánicos para un rendimiento óptimo.'
            : 'We maintain our all-terrain vehicles to the highest mechanical standards for peak performance.'}
        </p>
      </div>

      {/* --- TARJETA 3: Full support (Negra) --- */}
      <div style={{
        background: '#000',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '16px',
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
        boxShadow: '0 15px 35px rgba(0,0,0,0.6)'
      }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.4rem',
          color: '#fff',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          margin: 0,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          paddingBottom: '0.8rem'
        }}>
          {lang === 'es' ? 'Soporte completo' : 'Full support'}
        </h3>
        <p style={{
          color: 'rgba(255, 255, 255, 0.85)',
          fontSize: '16px',
          lineHeight: 1.6,
          margin: 0
        }}>
          {lang === 'es'
            ? 'Brindamos orientación y asistencia continua durante todos tus tours de aventura.'
            : 'We provide continuous guidance and assistance throughout your whole adventure tours.'}
        </p>
      </div>

      {/* --- TARJETA 4: Personalized attention (Destacada Color Naranja) --- */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(217, 119, 54, 0.08) 100%)',
        border: '1px solid rgba(217, 119, 54, 0.4)',
        borderRadius: '16px',
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
        boxShadow: '0 15px 35px rgba(0,0,0,0.6)'
      }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.4rem',
          color: 'var(--orange, #d97736)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          margin: 0,
          borderBottom: '1px solid rgba(217, 119, 54, 0.2)',
          paddingBottom: '0.8rem'
        }}>
          {lang === 'es' ? 'Atención personalizada' : 'Personalized attention'}
        </h3>
        <p style={{
          color: 'rgba(255, 255, 255, 0.85)',
          fontSize: '16px',
          lineHeight: 1.6,
          margin: 0
        }}>
          {lang === 'es'
            ? 'Servicio amigable y bilingüe adaptado a viajeros internacionales que buscan diversión de alta calidad.'
            : 'Friendly, bilingual service tailored to international travelers looking for high-quality fun.'}
        </p>
      </div>

    </div>

    {/* Botón de Llamado a la Acción (CTA) */}
    <div style={{ textAlign: 'center' }}>
      <a
        href="https://api.whatsapp.com/send/?phone=5214151090021&text=Hi%21+I%27d+like+to+reserve+the+Honda+150+Motorbike.+Could+you+let+me+know+availability%3F&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          background: 'var(--orange, #d97736)',
          color: '#ffffff',
          fontFamily: 'var(--font-heading)',
          fontSize: '1.1rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontWeight: '700',
          padding: '1rem 2.5rem',
          borderRadius: '50px',
          textDecoration: 'none',
          boxShadow: '0 8px 20px rgba(217, 119, 54, 0.4)',
          transition: 'all 0.3s ease'
        }}
      >
        {lang === 'es' ? 'Reserva tu experiencia todoterreno ahora' : 'Book Your Off-Road Experience Now'}
      </a>
    </div>

  </div>
</section>
{/* FIN SECTION 5 */}


          



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
                q_en: 'Do I need prior driving experience to join an off-road tour?',
                q_es: '¿Necesito experiencia previa en conducción para participar en una excursión todoterreno?',
                a_en: 'No previous experience is required! Before starting the tour, our expert guides provide a comprehensive safety briefing and hands-on instructions so you can handle our off-road vehicles with complete confidence.',
                a_es: '¡No se requiere experiencia previa! Antes de comenzar el recorrido, nuestros guías expertos ofrecen una charla de seguridad completa e instrucciones prácticas para que puedas manejar nuestros vehículos todoterreno con total confianza.',
              },
              {
                q_en: 'What should I wear for an off-road adventure in San Miguel de Allende?',
                q_es: '¿Qué debería ponerme para una aventura todoterreno en San Miguel de Allende?',
                a_en: 'We recommend wearing comfortable long pants, closed-toe shoes (like sneakers or hiking boots), and sunglasses. Dust and mud are part of the fun, so bring clothes you dont mind getting a little dirty!',
                a_es: 'Recomendamos usar pantalones largos y cómodos, calzado cerrado (como zapatillas deportivas o botas de senderismo) y gafas de sol. El polvo y el barro son parte de la diversión, ¡así que trae ropa que no te importe ensuciar un poco!',
              },
              {
                q_en: 'Are your ATV rentals and tour routes safe for international tourists?',
                q_es: '¿Son seguros para los turistas internacionales sus servicios de alquiler de vehículos todoterreno (ATV) y sus rutas de excursión?',
                a_en: 'Absolutely. Safety is our top priority at Guey Tours. All our vehicles undergo strict maintenance inspections, and we provide certified helmets, goggles, and full guide support along every route.',
                a_es: 'Por supuesto. La seguridad es nuestra máxima prioridad en Guey Tours. Todos nuestros vehículos se someten a estrictas revisiones de mantenimiento y proporcionamos cascos y gafas certificados, además de contar con el acompañamiento completo de un guía en todas las rutas.',
              },
              {
                q_en: 'Can I drive a SIDE BY SIDE vehicle with my family?',
                q_es: '¿Puedo conducir un vehículo tipo «side-by-side» con mi familia?',
                a_en: 'Yes! Our SIDE BY SIDE vehicles are designed for multi-passenger comfort and safety, making them the perfect choice for families or groups of friends who want to enjoy an off-road tour together.',
                a_es: '¡Sí! Nuestros vehículos SIDE BY SIDE están diseñados para la comodidad y seguridad de varios pasajeros, lo que los convierte en la opción perfecta para familias o grupos de amigos que quieren disfrutar juntos de un recorrido todoterreno.',
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
      </section>

          {/* --- OCTAVA SECCIÓN: Preguntas Frecuentes (FAQ) --- */}

          

         

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
              {lang === 'es' ? 'Contáctanos' : 'Get in touch'}
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
                    label: lang === 'es' ? 'Calle Refugio Sur #52, Colonia San Antonio, San Miguel de Allende, Guanajuato, Mexico' : 'Calle Refugio Sur #52, Colonia San Antonio, San Miguel de Allende, Guanajuato, Mexico',
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
                  {lang === 'es' ? 'Ver en Google Maps' : 'View on Google Maps'} <ExternalLink size={14} />
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
                    ✓ {lang === 'es' ? '¡Mensaje enviado!' : 'Message sent!'}
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                    {lang === 'es' ? 'Nos pondremos en contacto contigo en menos de 24 horas.' : "We'll get back to you within 24 hours."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <input
                    type="text"
                    placeholder={lang === 'es' ? 'Tu nombre' : 'Your Name'}
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
                    placeholder={lang === 'es' ? 'Tu correo electrónico' : 'Your Email'}
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
                    placeholder={lang === 'es' ? 'Tu mensaje' : 'Your Message'}
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
                    {lang === 'es' ? 'Enviar Mensaje' : 'Send Message'}
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
                "name": lang === 'es' ? '¿Qué es un RZR y cómo funciona?' : 'What is a RZR and how does it work?',
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": lang === 'es' 
                    ? 'Un RZR es un vehículo todoterreno (UTV) diseñado para la conducción off-road. Su configuración lado a lado permite que dos o más pasajeros, según el modelo, disfruten juntos de senderos, caminos rurales y paisajes naturales.' 
                    : 'A RZR is a type of UTV (Utility Terrain Vehicle) designed for off-road driving. Its side-by-side configuration allows two or more passengers, depending on the model, to enjoy trails, rural roads and natural landscapes together.'
                }
              },
              {
                "@type": "Question",
                "name": lang === 'es' ? '¿Dónde puedo rentar un RZR en San Miguel de Allende?' : 'Where can I rent a RZR in San Miguel de Allende?',
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": lang === 'es' 
                    ? 'Puedes rentar un RZR con Guey Tours en San Miguel de Allende. La disponibilidad, las opciones de vehículos, la duración de la renta y los precios pueden variar, por lo que se recomienda contactar al equipo antes de reservar.' 
                    : 'You can rent a RZR with Guey Tours in San Miguel de Allende. Availability, vehicle options, rental duration and pricing may vary, so it is recommended to contact the team before booking.'
                }
              },
              {
                "@type": "Question",
                "name": lang === 'es' ? '¿Cuánto cuesta rentar un RZR en San Miguel de Allende?' : 'How much does it cost to rent a RZR in San Miguel de Allende?',
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": lang === 'es' 
                    ? 'El precio de las rentas de RZR en San Miguel de Allende depende de factores como el vehículo, la duración de la renta y la disponibilidad. Contacta a Guey Tours para conocer los precios actuales y las opciones disponibles para tus fechas de viaje.' 
                    : 'The price of RZR rentals in San Miguel de Allende depends on factors such as the vehicle, rental duration and availability. Contact Guey Tours for current pricing and available options for your travel dates.'
                }
              },
              {
                "@type": "Question",
                "name": lang === 'es' ? '¿Necesito licencia de conducir para rentar un RZR?' : 'Do I need a driver\'s license to rent a RZR?',
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": lang === 'es' 
                    ? 'Los requisitos para el conductor pueden variar según las condiciones de renta y el vehículo. Antes de reservar, consulta con Guey Tours sobre la edad mínima, los requisitos de licencia de conducir y otras condiciones para operar un RZR.' 
                    : 'Driver requirements can vary depending on the rental conditions and vehicle. Before booking, ask Guey Tours about minimum age, driver\'s license requirements and other conditions for operating a RZR.'
                }
              }
            ]
          })
        }}
      />

          

          {/* Aquí puedes seguir pegando los demás scripts de FAQPage, Breadcrumb, etc. con el mismo formato */}
          
          

          
        </div>
      </main>
      <Footer />
    </>
  )
}
