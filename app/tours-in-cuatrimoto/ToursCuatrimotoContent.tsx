'use client'

import { useLang } from '@/lib/i18n'
import { useState } from 'react'
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ToursCuatrimotoContent() {
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
    src="/images/SEO/Fleet of colorful quad bikes lined up for guided outdoor ATV tours.webp" 
    alt="Group of tourists wearing safety helmets ready on a fleet of blue and red quad bikes during outdoor ATV tours." 
    title=" Fleet of colorful quad bikes lined up for guided outdoor ATV tours"
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
    --- {lang === 'es' ? 'Aventura en San Miguel de Allende' : 'Adventure in San Miguel de Allende'} ---
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
    {lang === 'es' ? 'Excursiones en cuatrimoto: Aventura en San Miguel de Allende' : 'ATV Tours: Adventure in San Miguel de Allende'}
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
      <>¡Bienvenidos a <a href="https://www.gueytours.com/" style={{ color: 'var(--orange, #d97736)', textDecoration: 'none', fontWeight: 'bold' }}>Guey Tours!</a> Te llevamos a vivir la experiencia definitiva en recorridos en cuatrimoto (ATV) a través de los impresionantes paisajes de San Miguel de Allende. Si buscas una forma emocionante de explorar más allá de las calles del centro histórico, conducir nuestras cuatrimotos te permitirá descubrir caminos de terracería y vistas panorámicas inigualables.</>
    ) : (
      <>Welcome to <a href="https://www.gueytours.com/" style={{ color: 'var(--orange, #d97736)', textDecoration: 'none', fontWeight: 'bold' }}>Guey Tours!</a> We take you on the ultimate ATV tours through the breathtaking landscapes of San Miguel de Allende. If you are looking for an exciting way to explore beyond the historic downtown streets, riding our quad bikes allows you to discover rugged dirt roads and scenic views like nowhere else.</>
    )}
  </p>

  <p style={{ margin: 0, wordBreak: 'break-word' }}>
    {lang === 'es' ? (
      <>¡Reserva tu viaje hoy mismo y prepárate para una descarga de adrenalina!</>
    ) : (
      <>Book your ride today and get ready for an adrenaline rush!</>
    )}
  </p>
</div>

{/* Botón de contacto */}
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
      {lang === 'es' ? 'Vive la experiencia de San Miguel de Allende en cuatrimoto.' : 'Experience San Miguel de Allende on an ATV'}
    </h2>

    {/* NUEVO PÁRRAFO ABAJO DEL H2 */}
    <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', wordBreak: 'break-word' }}>
      {lang === 'es' ? (
        <>Conducir nuestros vehículos todoterreno (ATV) de alto rendimiento en San Miguel de Allende te permite acceder a rutas y senderos ocultos a los que los autobuses turísticos convencionales simplemente no pueden llegar.</>
      ) : (
        <>Riding our high-performance ATVs in San Miguel de Allende gives you access to hidden trail routes that traditional tourist buses simply cannot reach.</>
      )}
    </p>

    {/* TUS 3 PÁRRAFOS ORIGINALES */}
    <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', wordBreak: 'break-word' }}>
      {lang === 'es' 
        ? 'Este emocionante recorrido en cuatrimoto te sumerge en un entorno natural agreste, llevándote a través de cañones espectaculares y senderos montañosos históricos. Es una auténtica experiencia al aire libre, diseñada para viajeros que buscan emociones intensas, contacto con la naturaleza y recuerdos inolvidables.'
        : 'This thrilling ATV ride immerses you in raw natural surroundings, taking you through dramatic canyons and historic mountain tracks. It is a genuine outdoor experience designed for travelers seeking hands-on excitement, nature, and unforgettable memories.'}
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
        src="/images/SEO/Single rider driving green quad through city street on ATV tours.webp" 
        alt=" Person wearing a helmet riding a green quad down a narrow cobblestone street past colonial buildings on ATV tours."
        title="Single rider driving green quad through city street on ATV tours"
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  </div>
</div>


        
        {/* INICIO SECTION - 4 TARJETAS ATV TOUR (2x2 sin imágenes) */}
<section style={{
  padding: '6rem 2rem',
  background: '#0b0b0b',
  color: '#fff',
  fontFamily: 'sans-serif',
  position: 'relative',
  boxSizing: 'border-box',
  width: '100%'
}}>
  <style>{`
    .atv4_grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      max-width: 1000px;
      margin: 0 auto;
      box-sizing: border-box;
      width: 100%;
    }
    @media (min-width: 768px) {
      .atv4_grid {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }
    .atv4_card {
      background: #1a1a1a;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 2.5rem 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      box-sizing: border-box;
      width: 100%;
    }
    .atv4_link {
      color: var(--orange, #d97736);
      text-decoration: none;
      font-weight: 600;
      transition: opacity 0.3s ease;
    }
    .atv4_link:hover {
      opacity: 0.8;
    }
  `}</style>

  <div style={{ maxWidth: '1100px', margin: '0 auto', boxSizing: 'border-box' }}>
    
    {/* Título H2 y Párrafo Introductorio */}
    <div style={{ textAlign: 'center', marginBottom: '4rem', boxSizing: 'border-box' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(2.2rem, 4vw, 3rem)',
        color: 'var(--orange, #d97736)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        margin: '0 0 1rem 0',
        lineHeight: 1.2,
        wordBreak: 'break-word'
      }}>
        {lang === 'es' ? 'Tour en cuatrimoto en San Miguel de Allende' : 'ATV tour in San Miguel de Allende'}
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
        fontSize: '17px',
        lineHeight: '29px',
        maxWidth: '850px',
        margin: '0 auto',
        wordBreak: 'break-word'
      }}>
        {lang === 'es'
          ? 'Nuestro recorrido guiado en cuatrimoto por San Miguel de Allende ofrece una experiencia completa de 2 a 3 horas llena de acción y descubrimientos:'
          : 'Our guided ATV tour San Miguel de Allende delivers a complete 2 to 3-hour journey packed with action and discovery:'}
      </p>
    </div>

    {/* Cuadrícula 2x2 de Tarjetas */}
    <div className="atv4_grid">
      
      {/* Tarjeta 1 */}
      <div className="atv4_card">
        <div>
          <div style={{
            display: 'inline-block',
            background: 'rgba(217, 119, 54, 0.15)',
            color: 'var(--orange, #d97736)',
            padding: '0.25rem 0.75rem',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            border: '1px solid rgba(217, 119, 54, 0.3)'
          }}>
            {lang === 'es' ? 'Equipo' : 'Equipment'}
          </div>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.35rem',
            color: '#fff',
            textTransform: 'uppercase',
            margin: '0 0 1rem 0',
            wordBreak: 'break-word'
          }}>
            {lang === 'es' ? 'Equipo incluido y características' : 'Included Equipment & Features'}
          </h3>
          <p style={{
            fontFamily: 'sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '17px',
            lineHeight: '29px',
            margin: 0,
            wordBreak: 'break-word'
          }}>
            {lang === 'es'
              ? 'Equipo de seguridad completo, combustible y acceso a rutas privadas de ATV.'
              : 'Full safety gear, fuel, and access to private ATV routes.'}
          </p>
        </div>
      </div>

      {/* Tarjeta 2 */}
      <div className="atv4_card">
        <div>
          <div style={{
            display: 'inline-block',
            background: 'rgba(217, 119, 54, 0.15)',
            color: 'var(--orange, #d97736)',
            padding: '0.25rem 0.75rem',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            border: '1px solid rgba(217, 119, 54, 0.3)'
          }}>
            {lang === 'es' ? 'Guías' : 'Guides'}
          </div>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.35rem',
            color: '#fff',
            textTransform: 'uppercase',
            margin: '0 0 1rem 0',
            wordBreak: 'break-word'
          }}>
            {lang === 'es' ? 'Acompañamiento experto' : 'Expert Escort'}
          </h3>
          <p style={{
            fontFamily: 'sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '17px',
            lineHeight: '29px',
            margin: 0,
            wordBreak: 'break-word'
          }}>
            {lang === 'es'
              ? 'Guías amigables y bilingües que te acompañan durante todo el recorrido.'
              : 'Friendly, English-speaking guides accompanying you throughout the entire trip.'}
          </p>
        </div>
      </div>

      {/* Tarjeta 3 */}
      <div className="atv4_card">
        <div>
          <div style={{
            display: 'inline-block',
            background: 'rgba(217, 119, 54, 0.15)',
            color: 'var(--orange, #d97736)',
            padding: '0.25rem 0.75rem',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            border: '1px solid rgba(217, 119, 54, 0.3)'
          }}>
            {lang === 'es' ? 'Ruta' : 'Itinerary'}
          </div>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.35rem',
            color: '#fff',
            textTransform: 'uppercase',
            margin: '0 0 1rem 0',
            wordBreak: 'break-word'
          }}>
            {lang === 'es' ? 'Itinerario panorámico' : 'Scenic Itinerary'}
          </h3>
          <p style={{
            fontFamily: 'sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '17px',
            lineHeight: '29px',
            margin: 0,
            wordBreak: 'break-word'
          }}>
            {lang === 'es'
              ? 'Una combinación equilibrada de senderos de terracería técnicos, cruces de cañones y miradores panorámicos.'
              : 'A balanced mix of technical dirt paths, canyon crossings, and panoramic lookouts.'}
          </p>
        </div>
      </div>

      {/* Tarjeta 4 */}
      <div className="atv4_card">
        <div>
          <div style={{
            display: 'inline-block',
            background: 'rgba(217, 119, 54, 0.15)',
            color: 'var(--orange, #d97736)',
            padding: '0.25rem 0.75rem',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            border: '1px solid rgba(217, 119, 54, 0.3)'
          }}>
            {lang === 'es' ? 'Requisitos' : 'Requirements'}
          </div>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.35rem',
            color: '#fff',
            textTransform: 'uppercase',
            margin: '0 0 1rem 0',
            wordBreak: 'break-word'
          }}>
            {lang === 'es' ? 'Requisitos' : 'Requirements'}
          </h3>
          <p style={{
            fontFamily: 'sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '17px',
            lineHeight: '29px',
            margin: 0,
            wordBreak: 'break-word'
          }}>
            {lang === 'es'
              ? 'Licencia de conducir vigente para los operadores y muchas ganas de vivir una emocionante aventura.'
              : "A valid driver's license for operators and a passion for exciting adventure activities."}
          </p>
        </div>
      </div>

    </div>

    {/* Párrafo Final con URL integrada */}
    <div style={{ textAlign: 'center', marginTop: '3.5rem', boxSizing: 'border-box' }}>
      <p style={{
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.85)',
        fontSize: '17px',
        lineHeight: '29px',
        maxWidth: '850px',
        margin: '0 auto',
        wordBreak: 'break-word'
      }}>
        {lang === 'es' ? (
          <>
            Unirte a nuestro equipo es una de las mejores experiencias en <a href="https://www.gueytours.com/san-miguel-de-allende-tours" className="atv4_link">San Miguel de Allende</a> para visitantes internacionales que buscan un día lleno de acción al aire libre.
          </>
        ) : (
          <>
            Joining our team is one of the top-rated <a href="https://www.gueytours.com/san-miguel-de-allende-tours" className="atv4_link">San Miguel de Allende Tours</a> for international visitors looking for an action-packed day outdoors.
          </>
        )}
      </p>
    </div>

  </div>
</section>
{/* FIN SECTION - 4 TARJETAS ATV TOUR */}



          

          
          
          
          
{/* Inicio de section rent (ATV rentals in San Miguel de Allende) */}
<section style={{
  padding: '7rem 1.5rem',
  marginTop: '3rem',
  background: 'linear-gradient(180deg, rgba(217, 119, 54, 0.03) 0%, #0b0b0b 100%)',
  color: '#fff',
  fontFamily: 'sans-serif',
  position: 'relative',
  boxSizing: 'border-box',
  overflow: 'hidden',
  width: '100%'
}}>
  <style>{`
    .rent_container {
      max-width: 1100px;
      margin: 0 auto;
      box-sizing: border-box;
      width: 100%;
    }
    .rent_card_main {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(217, 119, 54, 0.05) 100%);
      border: 1px solid rgba(217, 119, 54, 0.25);
      border-radius: 24px;
      padding: clamp(2.5rem, 5vw, 4rem);
      box-shadow: 0 20px 40px rgba(0,0,0,0.6);
      backdrop-filter: blur(12px);
      box-sizing: border-box;
      width: 100%;
    }
    .rent_grid_options {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin: 2.5rem 0;
    }
    @media (min-width: 768px) {
      .rent_grid_options {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    .rent_option_box {
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-left: 4px solid var(--orange, #d97736);
      border-radius: 14px;
      padding: 1.75rem;
      transition: transform 0.3s ease, border-color 0.3s ease;
    }
    .rent_option_box:hover {
      transform: translateY(-4px);
      border-color: rgba(217, 119, 54, 0.5);
    }
    .rent_link {
      color: var(--orange, #d97736);
      text-decoration: none;
      font-weight: 600;
      transition: opacity 0.3s ease;
    }
    .rent_link:hover {
      opacity: 0.8;
    }
    .rent_btn {
      display: inline-block;
      background: var(--orange, #d97736);
      color: #fff;
      padding: 1rem 2.5rem;
      border-radius: 50px;
      font-weight: 700;
      font-family: var(--font-heading);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      box-shadow: 0 10px 25px rgba(217, 119, 54, 0.4);
      transition: all 0.3s ease;
    }
    .rent_btn:hover {
      opacity: 0.95;
      transform: translateY(-2px);
    }
  `}</style>

  <div className="rent_container">
    
    {/* Título H2 */}
    <div style={{ textAlign: 'center', marginBottom: '4rem', boxSizing: 'border-box' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        color: 'var(--orange, #d97736)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        margin: '0 0 1rem 0',
        lineHeight: 1.2,
        wordBreak: 'break-word'
      }}>
        {lang === 'es' 
          ? 'Alquiler de cuatrimotos (ATV) en San Miguel de Allende' 
          : 'ATV rentals in San Miguel de Allende'}
      </h2>
      <div style={{
        width: '80px',
        height: '3px',
        background: 'var(--orange, #d97736)',
        margin: '0 auto',
        boxShadow: '0 0 12px var(--orange, #d97736)'
      }} />
    </div>

    {/* Contenedor Principal (Tarjeta Estilizada) */}
    <div className="rent_card_main">
      
      {/* Párrafo Introductorio */}
      <p style={{
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: '17px',
        lineHeight: '29px',
        margin: '0 0 2rem 0',
        wordBreak: 'break-word',
        textAlign: 'center'
      }}>
        {lang === 'es' ? (
          <>
            Si prefieres conducir de forma independiente o deseas mayor flexibilidad durante tu estancia, ofrecemos opciones especializadas para el <a href="https://www.gueytours.com/atv-rentals" className="rent_link">alquiler de ATV </a> en San Miguel de Allende:
          </>
        ) : (
          <>
            If you prefer driving independently or want extra flexibility during your stay, we offer specialized options for <a href="https://www.gueytours.com/atv-rentals" className="rent_link">ATV rentals</a> San Miguel de Allende:
          </>
        )}
      </p>

      {/* Grid de Opciones (Tarjetas Modernas) */}
      <div className="rent_grid_options">
        
        {/* Opción 1: Autoguiado */}
        <div className="rent_option_box">
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.2rem',
            color: '#fff',
            margin: '0 0 0.75rem 0',
            textTransform: 'uppercase'
          }}>
            {lang === 'es' ? 'Alquiler de ATV autoguiado' : 'Self-Guided ATV Rentals'}
          </h3>
          <p style={{
            fontFamily: 'sans-serif',
            fontSize: '15px',
            lineHeight: '24px',
            color: 'rgba(255, 255, 255, 0.8)',
            margin: 0
          }}>
            {lang === 'es' 
              ? 'Ideal para conductores experimentados que desean explorar senderos designados a su propio ritmo.' 
              : 'Ideal for experienced riders who want to explore designated trails at their own speed.'}
          </p>
        </div>

        {/* Opción 2: Guiado */}
        <div className="rent_option_box">
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.2rem',
            color: '#fff',
            margin: '0 0 0.75rem 0',
            textTransform: 'uppercase'
          }}>
            {lang === 'es' ? 'Aventura guiada en ATV' : 'Guided ATV Adventure'}
          </h3>
          <p style={{
            fontFamily: 'sans-serif',
            fontSize: '15px',
            lineHeight: '24px',
            color: 'rgba(255, 255, 255, 0.8)',
            margin: 0
          }}>
            {lang === 'es' 
              ? 'La elección perfecta si quieres que un guía local experimentado abra el camino mientras comparte historia y lugares secretos.' 
              : 'The perfect choice if you want an experienced local guide to lead the way while sharing local history and secret spots.'}
          </p>
        </div>

      </div>

      {/* Párrafo Intermedio y Final Integrados */}
      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <p style={{
          fontFamily: 'sans-serif',
          fontStyle: 'normal',
          fontWeight: '400',
          color: 'rgba(255, 255, 255, 0.85)',
          fontSize: '17px',
          lineHeight: '29px',
          margin: '0 0 1rem 0',
          wordBreak: 'break-word'
        }}>
          {lang === 'es'
            ? 'Todos nuestros vehículos todo terreno reciben un mantenimiento riguroso para garantizar potencia, seguridad y un manejo óptimo en cualquier terreno.'
            : 'All our all-terrain vehicles receive rigorous maintenance to guarantee power, safety, and optimal handling across all terrains.'}
        </p>

        <p style={{
          fontFamily: 'sans-serif',
          fontStyle: 'normal',
          fontWeight: '400',
          color: 'rgba(255, 255, 255, 0.85)',
          fontSize: '17px',
          lineHeight: '29px',
          margin: 0,
          wordBreak: 'break-word'
        }}>
          {lang === 'es'
            ? 'Contáctanos para conocer más sobre nuestros paquetes de alquiler de ATV.'
            : 'Contact us to learn more about our ATV rentals packages.'}
        </p>
      </div>

    </div>

    {/* Botón Global Inferior */}
    <div style={{ textAlign: 'center', marginTop: '4rem', boxSizing: 'border-box' }}>
      <a
        href="https://api.whatsapp.com/send/?phone=5214151090021&text=Hi%21+I%27d+like+to+reserve+the+Honda+150+Motorbike.+Could+you+let+me+know+availability%3F&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="rent_btn"
      >
        {lang === 'es' ? 'Contacta con nosotros' : 'Contact us'}
      </a>
    </div>

  </div>
</section>
{/* Fin de section rent */}

          
    
    {/* Inicio de section exp (Experiencias de Aventura / Adventure experiences) */}
<section style={{
  padding: '6rem 1.5rem',
  marginTop: '3rem',
  background: 'linear-gradient(180deg, #0b0b0b 0%, rgba(217, 119, 54, 0.04) 100%)',
  color: '#fff',
  fontFamily: 'sans-serif',
  position: 'relative',
  boxSizing: 'border-box',
  overflow: 'hidden',
  width: '100%'
}}>
  <style>{`
    .exp_grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      max-width: 1000px;
      margin: 0 auto;
      box-sizing: border-box;
      width: 100%;
    }
    @media (min-width: 768px) {
      .exp_grid {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }
    .exp_card {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(217, 119, 54, 0.05) 100%);
      border: 1px solid rgba(217, 119, 54, 0.3);
      border-radius: 16px;
      padding: 2.5rem 2rem;
      box-shadow: 0 10px 30px rgba(0,0,0,0.4);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
      width: 100%;
      transition: transform 0.3s ease, border-color 0.3s ease;
    }
    .exp_card:hover {
      transform: translateY(-5px);
      border-color: rgba(217, 119, 54, 0.6);
    }
    .exp_link {
      color: var(--orange, #d97736);
      text-decoration: none;
      font-weight: 600;
      transition: opacity 0.3s ease;
    }
    .exp_link:hover {
      opacity: 0.8;
    }
  `}</style>

  <div style={{
    maxWidth: '1100px',
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box'
  }}>
    
    {/* Título H2 y Párrafo Introductorio */}
    <div style={{ textAlign: 'center', marginBottom: '4rem', boxSizing: 'border-box' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        color: 'var(--orange, #d97736)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        margin: '0 0 1rem 0',
        lineHeight: 1.2,
        wordBreak: 'break-word'
      }}>
        {lang === 'es' 
          ? '¿Qué necesitas para un tour en ATV?' 
          : 'What do you need for an ATV tour?'}
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
        fontSize: '17px',
        lineHeight: '29px',
        maxWidth: '850px',
        margin: '0 auto',
        wordBreak: 'break-word'
      }}>
        {lang === 'es'
          ? 'Para garantizar una aventura en cuatrimoto fluida y cómoda, ten en cuenta estas recomendaciones clave antes de salir:'
          : 'To ensure a smooth and comfortable ATV adventure, keep these key recommendations in mind before heading out:'}
      </p>
    </div>

    {/* Cuadrícula de 4 Tarjetas en 2x2 */}
    <div className="exp_grid">
      
      {/* Tarjeta 1: Minimum Age & License */}
      <div className="exp_card">
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
            {lang === 'es' ? 'Edad y Licencia' : 'Age & License'}
          </span>
          <h3 style={{
            color: '#fff',
            fontSize: '1.35rem',
            margin: '0 0 1rem 0',
            fontFamily: 'var(--font-heading)',
            wordBreak: 'break-word',
            textTransform: 'uppercase'
          }}>
            {lang === 'es' ? 'Edad mínima y licencia' : 'Minimum Age & License'}
          </h3>
          <p style={{
            fontFamily: 'sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '17px',
            lineHeight: '29px',
            margin: 0,
            wordBreak: 'break-word'
          }}>
            {lang === 'es'
              ? 'Los conductores deben tener al menos 18 años y contar con una licencia de conducir vigente. Los pasajeros son bienvenidos según la capacidad del vehículo.'
              : 'Drivers must be at least 18 years old with a valid driver’s license. Passengers are welcome based on vehicle capacity.'}
          </p>
        </div>
      </div>

      {/* Tarjeta 2: Safety Gear */}
      <div className="exp_card">
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
            {lang === 'es' ? 'Seguridad' : 'Safety Gear'}
          </span>
          <h3 style={{
            color: '#fff',
            fontSize: '1.35rem',
            margin: '0 0 1rem 0',
            fontFamily: 'var(--font-heading)',
            wordBreak: 'break-word',
            textTransform: 'uppercase'
          }}>
            {lang === 'es' ? 'Equipo de seguridad' : 'Safety Gear'}
          </h3>
          <p style={{
            fontFamily: 'sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '17px',
            lineHeight: '29px',
            margin: 0,
            wordBreak: 'break-word'
          }}>
            {lang === 'es'
              ? 'Se proporcionan cascos y gafas protectoras, siendo de uso obligatorio para todos los participantes.'
              : 'Helmets and protective goggles are provided and mandatory for all participants.'}
          </p>
        </div>
      </div>

      {/* Tarjeta 3: Recommended Attire */}
      <div className="exp_card">
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
            {lang === 'es' ? 'Vestimenta' : 'Attire'}
          </span>
          <h3 style={{
            color: '#fff',
            fontSize: '1.35rem',
            margin: '0 0 1rem 0',
            fontFamily: 'var(--font-heading)',
            wordBreak: 'break-word',
            textTransform: 'uppercase'
          }}>
            {lang === 'es' ? 'Atuendo recomendado' : 'Recommended Attire'}
          </h3>
          <p style={{
            fontFamily: 'sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '17px',
            lineHeight: '29px',
            margin: 0,
            wordBreak: 'break-word'
          }}>
            {lang === 'es'
              ? 'Usa ropa cómoda que no te importe que se ensucie con polvo, pantalón largo, calzado cerrado y protector solar.'
              : 'Wear comfortable clothes you don\'t mind getting dusty, long pants, closed-toe shoes, and sunblock.'}
          </p>
        </div>
      </div>

      {/* Tarjeta 4: Pre-Ride Briefing */}
      <div className="exp_card">
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
            {lang === 'es' ? 'Práctica' : 'Briefing'}
          </span>
          <h3 style={{
            color: '#fff',
            fontSize: '1.35rem',
            margin: '0 0 1rem 0',
            fontFamily: 'var(--font-heading)',
            wordBreak: 'break-word',
            textTransform: 'uppercase'
          }}>
            {lang === 'es' ? 'Instrucción previa al recorrido' : 'Pre-Ride Briefing'}
          </h3>
          <p style={{
            fontFamily: 'sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '17px',
            lineHeight: '29px',
            margin: 0,
            wordBreak: 'break-word'
          }}>
            {lang === 'es'
              ? 'Cada tour en ATV comienza con una orientación práctica de seguridad y una prueba de manejo.'
              : 'Every ATV tour starts with a hands-on safety orientation and practice test.'}
          </p>
        </div>
      </div>

    </div>

  </div>
</section>
{/* Fin de section exp */}


          

          

          

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
        {lang === 'es' ? '¿Por qué hacer un tour en ATV con Guey Tours?' : 'Why take an ATV tour with Guey Tours?'}
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
        margin: '0 auto',
        wordBreak: 'break-word'
      }}>
        {lang === 'es' ? (
          <>
            En <a href="https://www.gueytours.com/" style={{ color: 'var(--orange, #d97736)', textDecoration: 'none' }}>Guey Tours,</a> te ofrecemos la mejor experiencia todoterreno:
          </>
        ) : (
          <>
            At <a href="https://www.gueytours.com/" style={{ color: 'var(--orange, #d97736)', textDecoration: 'none' }}>Guey Tours,</a> we bring you the ultimate off-road experience:
          </>
        )}
      </p>
    </div>

    {/* Contenedor de Tarjetas (Grid 2x2 simétrico) */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '2rem',
      justifyContent: 'center',
      marginBottom: '4rem'
    }}>
      
      {/* --- TARJETA 1: Deep Trail Knowledge --- */}
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
          {lang === 'es' ? 'Conocimiento profundo de los senderos' : 'Deep Trail Knowledge'}
        </h3>
        <p style={{
          color: 'rgba(255, 255, 255, 0.85)',
          fontSize: '16px',
          lineHeight: 1.6,
          margin: 0
        }}>
          {lang === 'es'
            ? 'Conocemos los caminos más seguros y panorámicos de toda la región.'
            : 'We know the safest, most scenic paths across the region.'}
        </p>
      </div>

      {/* --- TARJETA 2: Bilingual & Experienced Guides --- */}
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
          {lang === 'es' ? 'Guías bilingües y experimentados' : 'Bilingual & Experienced Guides'}
        </h3>
        <p style={{
          color: 'rgba(255, 255, 255, 0.85)',
          fontSize: '16px',
          lineHeight: 1.6,
          margin: 0
        }}>
          {lang === 'es'
            ? 'Personal dedicado de habla inglesa que brinda asistencia continua durante el recorrido.'
            : 'Dedicated English-speaking staff providing continuous support.'}
        </p>
      </div>

      {/* --- TARJETA 3: Top-Tier Fleet --- */}
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
          {lang === 'es' ? 'Flota de primer nivel' : 'Top-Tier Fleet'}
        </h3>
        <p style={{
          color: 'rgba(255, 255, 255, 0.85)',
          fontSize: '16px',
          lineHeight: 1.6,
          margin: 0
        }}>
          {lang === 'es'
            ? 'Vehículos modernos y en excelente estado, diseñados para dominar terrenos difíciles.'
            : 'Modern, well-maintained vehicles built to master rugged terrain.'}
        </p>
      </div>

      {/* --- TARJETA 4: Safety First --- */}
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
          {lang === 'es' ? 'La seguridad primero' : 'Safety First'}
        </h3>
        <p style={{
          color: 'rgba(255, 255, 255, 0.85)',
          fontSize: '16px',
          lineHeight: 1.6,
          margin: 0
        }}>
          {lang === 'es'
            ? 'Protocolos de seguridad integrales para que puedas concentrarte por completo en divertirte.'
            : 'Comprehensive safety protocols so you can focus entirely on having fun.'}
        </p>
      </div>

    </div>

    {/* Botón de Llamado a la Acción (CTA) */}
    <div style={{ textAlign: 'center' }}>
      <a
        href="https://api.whatsapp.com/send/?phone=5214151090021&text=Hi%21+I%27d+like+to+reserve+an+ATV+tour.+Could+you+let+me+know+availability%3F&type=phone_number&app_absent=0"
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
        {lang === 'es' ? 'Reserva tu tour en ATV' : 'Book your ATV tour'}
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
              {lang === 'en' ? 'FAQs about ATV tours' : 'Preguntas frecuentes sobre recorridos en ATV'}
            </h2>
            <div className="section-divider" style={{ marginTop: '1rem' }} />
          </div>

          {/* Acordeón de Preguntas */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              {
                q_en: 'Do I need prior riding experience to join your ATV tours?',
                q_es: '¿Necesito experiencia previa de manejo para unirme a sus tours en ATV?',
                a_en: 'No prior experience is necessary! Before every tour, our bilingual guides provide a full safety briefing and hands-on riding instruction so you feel confident operating the vehicle.',
                a_es: '¡No se necesita experiencia previa! Antes de cada tour, nuestros guías bilingües ofrecen una sesión informativa completa de seguridad y una instrucción práctica de manejo para que te sientas seguro operando el vehículo.',
              },
              {
                q_en: 'What is included in your ATV rentals San Miguel de Allende?',
                q_es: '¿Qué se incluye en sus alquileres de ATV en San Miguel de Allende?',
                a_en: 'Our ATV rentals include a fully prepped all-terrain vehicle, a full tank of fuel, protective helmets, goggles, and an orientation on local trail routes.',
                a_es: 'Nuestros alquileres de ATV incluyen un vehículo todoterreno totalmente preparado, tanque lleno de combustible, cascos protectores, gafas y una orientación sobre las rutas de los senderos locales.',
              },
              {
                q_en: 'What is the minimum age required to drive on an ATV tour San Miguel de Allende?',
                q_es: '¿Cuál es la edad mínima requerida para conducir en un tour en ATV en San Miguel de Allende?',
                a_en: 'Drivers must be 18 years or older with a valid driver\'s license. Younger family members can participate as passengers when accompanied by an adult.',
                a_es: 'Los conductores deben tener 18 años o más y contar con una licencia de conducir vigente. Los miembros más jóvenes de la familia pueden participar como pasajeros cuando estén acompañados por un adulto.',
              },
              {
                q_en: 'What should I wear for an outdoor ATV adventure?',
                q_es: '¿Qué debo vestir para una aventura al aire libre en ATV?',
                a_en: 'We recommend wearing closed-toe shoes (sneakers or boots), long pants, sunglasses, and comfortable clothing that you don\'t mind getting a little dusty on the trail.',
                a_es: 'Recomendamos usar calzado cerrado (tenis o botas), pantalón largo, gafas de sol y ropa cómoda que no te importe que se ensucie un poco con polvo en el sendero.',
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
     {/* SCRIPT DE DATOS ESTRUCTURADOS JSON-LD PARA PREGUNTAS FRECUENTES (SEO FAQ SCHEMA) */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do I need prior riding experience to join your ATV tours?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No prior experience is necessary! Before every tour, our bilingual guides provide a full safety briefing and hands-on riding instruction so you feel confident operating the vehicle."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in your ATV rentals San Miguel de Allende?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our ATV rentals include a fully prepped all-terrain vehicle, a full tank of fuel, protective helmets, goggles, and an orientation on local trail routes."
          }
        },
        {
          "@type": "Question",
          "name": "What is the minimum age required to drive on an ATV tour San Miguel de Allende?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Drivers must be 18 years or older with a valid driver's license. Younger family members can participate as passengers when accompanied by an adult."
          }
        },
        {
          "@type": "Question",
          "name": "What should I wear for an outdoor ATV adventure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend wearing closed-toe shoes (sneakers or boots), long pants, sunglasses, and comfortable clothing that you don't mind getting a little dusty on the trail."
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
