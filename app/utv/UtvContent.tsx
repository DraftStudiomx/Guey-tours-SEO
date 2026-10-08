'use client'

import { useLang } from '@/lib/i18n'
import { useState } from 'react'
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function UtvContent() {
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
    src="/images/SEO/Group riding all-terrain vehicles during guided outdoor UTV tours.webp" 
    alt="Group of people wearing safety helmets driving off-road vehicles down a narrow stone street during UTV tours." 
    title=" Group riding all-terrain vehicles during guided outdoor UTV tours"
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
    {lang === 'es' ? 'UTV Adventures: Excursiones inolvidables en San Miguel de Allende' : 'UTV Adventures: Unforgettable San Miguel de Allende tours'}
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
      <>Bienvenidos a San Miguel de Allende, un destino de fama mundial reconocido por su impresionante arquitectura colonial y su rica cultura. En <a href="https://www.gueytours.com/" style={{ color: 'var(--orange, #d97736)', textDecoration: 'none', fontWeight: 'bold' }}>Guey Tours,</a> llevamos sus vacaciones más allá con emocionantes actividades al aire libre que le permiten explorar Guanajuato más allá de las calles del centro histórico.</>
    ) : (
      <>Welcome to San Miguel de Allende, a world-famous destination renowned for its stunning colonial architecture and rich culture. At <a href="https://www.gueytours.com/" style={{ color: 'var(--orange, #d97736)', textDecoration: 'none', fontWeight: 'bold' }}>Guey Tours,</a> we take your vacation further with thrilling outdoor activities that let you explore Guanajuato beyond the historic downtown streets.  </>
    )}
  </p>

  <p style={{ margin: 0, wordBreak: 'break-word' }}>
    {lang === 'es' ? (
      <>Ya sea que viajes en pareja, en familia o con un grupo de amigos, ¡tenemos la aventura al aire libre perfecta para ti! ¡Prepárate para maravillarte con paisajes que nunca imaginaste!</>
    ) : (
      <>Whether you are traveling as a couple, with family, or alongside a group of friends, we have the perfect outdoor adventure ready for you! Prepare to be amazed by landscapes you never imagined!</>
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
      {lang === 'es' ? 'Explora San Miguel de Allende con Guey Tours' : 'Explore San Miguel de Allende with Guey Tours'}
    </h2>

    {/* NUEVO PÁRRAFO ABAJO DEL H2 */}
    <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', wordBreak: 'break-word' }}>
      {lang === 'es' ? (
        <>En <a href="https://www.gueytours.com/san-miguel-de-allende-tours" style={{ color: 'var(--orange, #d97736)', textDecoration: 'none', fontWeight: 'bold' }}>Guey Tours,</a> creamos experiencias únicas diseñadas para que descubras San Miguel de Allende desde una perspectiva totalmente nueva. Mientras que los recorridos turísticos tradicionales te mantienen en calles pavimentadas, nuestras excursiones guiadas te sumergen directamente en la naturaleza virgen, en paisajes montañosos y en senderos agrestes entre cañones.</>
      ) : (
        <>At <a href="https://www.gueytours.com/san-miguel-de-allende-tours" style={{ color: 'var(--orange, #d97736)', textDecoration: 'none', fontWeight: 'bold' }}>Guey Tours,</a> we craft unique experiences designed to help you discover San Miguel de Allende from a whole new perspective. While traditional sightseeing trips keep you on paved streets, our guided journeys plunge you directly into raw nature, mountain vistas, and rugged canyon trails.</>
      )}
    </p>

    {/* TUS 3 PÁRRAFOS ORIGINALES */}
    <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', wordBreak: 'break-word' }}>
      {lang === 'es' 
        ? 'Guiada por expertos conductores locales, cada excursión todoterreno combina una emoción intensa con un profundo conocimiento de la zona. Elegirnos significa alejarse del turismo convencional para disfrutar de una experiencia de conducción auténtica y potente a través de paisajes impresionantes.'
        : 'Guided by expert local drivers, every off-road tour blends high-energy excitement with deep local knowledge. Choosing us means stepping away from conventional sightseeing to enjoy an authentic, high-powered driving experience across breathtaking scenery.'}
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
        src="/images/SEO/Happy riders enjoying guided UTV Tours through historic city street.webp" 
        alt=" Cheerful tourists wearing helmets and goggles posing on an all-terrain vehicle near a church during UTV Tours."
        title="Happy riders enjoying guided UTV Tours through historic city street"
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  </div>
</div>


        
        {/* INICIO SECTION - 5 TARJETAS PERFECTAS RESPONSIVAS */}
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
    @media (min-width: 768px) {
      .c5_desktop_grid {
        display: grid !important;
        grid-template-columns: repeat(6, 1fr) !important;
      }
      .c5_card_1 { grid-column: span 2 !important; }
      .c5_card_2 { grid-column: span 2 !important; }
      .c5_card_3 { grid-column: span 2 !important; }
      .c5_card_4 { grid-column: 2 / span 2 !important; }
      .c5_card_5 { grid-column: span 2 !important; }
    }
    @media (max-width: 767px) {
      .c5_desktop_grid {
        display: flex !important;
        flex-direction: column !important;
        gap: 1.5rem !important;
      }
    }
  `}</style>

  <div style={{ maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}>
    
    {/* Título H2 y Párrafo Corto Introductorio */}
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
        {lang === 'es' ? 'Nuestros recorridos en San Miguel de Allende' : 'Our tours in San Miguel de Allende'}
      </h2>
      <div style={{
        width: '80px',
        height: '3px',
        background: 'var(--orange, #d97736)',
        margin: '0 auto 2rem auto',
        boxShadow: '0 0 12px var(--orange, #d97736)'
      }} />
      
    </div>

    {/* Contenedor Grid Unificado con control responsive */}
    <div className="c5_desktop_grid" style={{
      gap: '2rem',
      maxWidth: '1160px',
      margin: '0 auto',
      boxSizing: 'border-box'
    }}>
      
      {/* --- TARJETA 1: City Tour --- */}
      <div className="c5_card_1" style={{
        background: '#1a1a1a',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        boxSizing: 'border-box',
        width: '100%'
      }}>
        <div style={{ width: '100%', height: '220px', background: '#000', overflow: 'hidden' }}>
          <img
            src="/images/SEO/Exciting City tour adventure with happy group joining UTV tours.webp"
            alt={lang === 'es' ? 'Jóvenes turistas felices con casco haciendo el signo de la paz mientras conducen un vehículo todoterreno (UTV) durante un recorrido por la ciudad.' : 'Happy young tourists in helmets making peace signs while riding an all-terrain vehicle on a City tour, UTV tours.'}
            title={lang === 'es' ? 'Una emocionante aventura de recorrido por la ciudad con un grupo alegre que participa en excursiones en UTV.' : 'Exciting City tour adventure with happy group joining UTV tours'}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', gap: '1.5rem', boxSizing: 'border-box' }}>
          <div>
            <div style={{
              display: 'inline-block',
              background: 'rgba(217, 119, 54, 0.15)',
              color: 'var(--orange, #d97736)',
              padding: '0.25rem 0.75rem',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              marginBottom: '0.75rem',
              border: '1px solid rgba(217, 119, 54, 0.3)'
            }}>
              {lang === 'es' ? '⏱ Duración: 1 Hora' : '⏱ Duration: 1 Hr.'}
            </div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              color: '#fff',
              textTransform: 'uppercase',
              margin: '0 0 0.75rem 0',
              wordBreak: 'break-word'
            }}>
              {lang === 'es' ? 'Recorrido por la ciudad' : 'City Tour'}
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
                ? 'Descubre el corazón histórico y las afueras vibrantes de la ciudad en una ruta accesible que combina la cultura local con un manejo ligero y panorámico. Perfecto para una introducción rápida y envolvente al aire libre.'
                : 'Discover the historic heart and vibrant outskirts of the city on an accessible route that blends local culture with light, scenic riding. Perfect for a quick, immersive outdoor introduction.'}
            </p>
          </div>
          <div>
            <a
              href="https://www.gueytours.com/tours/tour-el-centro-san-miguel"
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

      {/* --- TARJETA 2: San Miguel Buggy Tour --- */}
      <div className="c5_card_2" style={{
        background: '#1a1a1a',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        boxSizing: 'border-box',
        width: '100%'
      }}>
        <div style={{ width: '100%', height: '220px', background: '#000', overflow: 'hidden' }}>
          <img
            src="/images/SEO/Historic ruin landmark visit on San Miguel Buggy Tour, UTV tours.webp"
            alt={lang === 'es' ? 'Dos mujeres posan bajo un antiguo arco de piedra durante una parada al aire libre de un recorrido guiado en buggy por San Miguel.' : 'Two women posing under an old stone archway during a guided San Miguel Buggy Tour outdoor stop with UTV tours.'}
            title={lang === 'es' ? 'Visita a ruinas históricas en el recorrido en buggy y UTV por San Miguel' : 'Historic ruin landmark visit on San Miguel Buggy Tour, UTV tours'}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', gap: '1.5rem', boxSizing: 'border-box' }}>
          <div>
            <div style={{
              display: 'inline-block',
              background: 'rgba(217, 119, 54, 0.15)',
              color: 'var(--orange, #d97736)',
              padding: '0.25rem 0.75rem',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              marginBottom: '0.75rem',
              border: '1px solid rgba(217, 119, 54, 0.3)'
            }}>
              {lang === 'es' ? '⏱ Duración: 2 Horas' : '⏱ Duration: 2 Hrs.'}
            </div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              color: '#fff',
              textTransform: 'uppercase',
              margin: '0 0 0.75rem 0',
              wordBreak: 'break-word'
            }}>
              {lang === 'es' ? 'Tour en buggy por San Miguel' : 'San Miguel Buggy Tour'}
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
                ? 'Experimenta la emoción de un recorrido en buggy todo terreno a través de senderos abiertos. Este tour ofrece una forma cómoda pero atrevida de navegar por caminos polvorientos y espacios panorámicos muy amplios.'
                : 'Experience the thrill of a rugged buggy ride across open trails. This tour offers a comfortable yet daring way to navigate dusty paths and wide-open scenic spaces.'}
            </p>
          </div>
          <div>
            <a
              href="https://www.gueytours.com/tours/san-miguel-viejo"
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

      {/* --- TARJETA 3: Atotonilco ATV Tour --- */}
      <div className="c5_card_3" style={{
        background: '#1a1a1a',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        boxSizing: 'border-box',
        width: '100%'
      }}>
        <div style={{ width: '100%', height: '220px', background: '#000', overflow: 'hidden' }}>
          <img
            src="/images/SEO/Historic church stop on Atotonilco ATV Tour during UTV Tours trip.webp"
            alt={lang === 'es' ? 'Vehículo todoterreno estacionado cerca de la fachada de una histórica iglesia blanca durante una excursión al aire libre en cuatrimoto (ATV) o vehículo utilitario (UTV) en Atotonilco.' : 'All-terrain vehicle parked near a historic white church facade during an outdoor Atotonilco ATV Tour, UTV Tours.'}
            title={lang === 'es' ? 'Parada en una iglesia histórica durante el recorrido en cuatrimoto (ATV) por Atotonilco, en el marco de la excursión en UTV.' : 'Historic church stop on Atotonilco ATV Tour during UTV Tours trip'}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', gap: '1.5rem', boxSizing: 'border-box' }}>
          <div>
            <div style={{
              display: 'inline-block',
              background: 'rgba(217, 119, 54, 0.15)',
              color: 'var(--orange, #d97736)',
              padding: '0.25rem 0.75rem',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              marginBottom: '0.75rem',
              border: '1px solid rgba(217, 119, 54, 0.3)'
            }}>
              {lang === 'es' ? '⏱ Duración: 2 Horas' : '⏱ Duration: 2 Hrs.'}
            </div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              color: '#fff',
              textTransform: 'uppercase',
              margin: '0 0 0.75rem 0',
              wordBreak: 'break-word'
            }}>
              {lang === 'es' ? 'Tour en cuatrimoto por Atotonilco' : 'Atotonilco ATV Tour'}
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
                ? 'Pasea hacia el icónico santuario de Atotonilco. Esta ruta ofrece una mezcla única de puntos de referencia históricos y terrenos dinámicos que mantienen tu energía al máximo.'
                : 'Ride out toward the iconic sanctuary of Atotonilco. This route delivers a unique mix of historical landmarks and dynamic terrain that keeps your energy high.'}
            </p>
          </div>
          <div>
            <a
              href="https://www.gueytours.com/tours/atotonilco"
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

      {/* --- TARJETA 4: Atascadero ATV Tour --- */}
      <div className="c5_card_4" style={{
        background: '#1a1a1a',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        boxSizing: 'border-box',
        width: '100%'
      }}>
        <div style={{ width: '100%', height: '220px', background: '#000', overflow: 'hidden' }}>
          <img
            src="/images/SEO/Guided group on Atascadero UTV tour along historic colonial streets.webp"
            alt={lang === 'es' ? 'Conductores de cuatrimotos recorren una calle empedrada cerca de edificios coloniales durante una excursión en UTV al aire libre en Atascadero.' : 'Riders on quads driving along a cobblestone street near colonial buildings during an outdoor Atascadero UTV tour.'}
            title={lang === 'es' ? 'Grupo guiado en un recorrido en UTV por Atascadero, a través de históricas calles coloniales.' : 'Guided group on Atascadero UTV tour along historic colonial streets'}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', gap: '1.5rem', boxSizing: 'border-box' }}>
          <div>
            <div style={{
              display: 'inline-block',
              background: 'rgba(217, 119, 54, 0.15)',
              color: 'var(--orange, #d97736)',
              padding: '0.25rem 0.75rem',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              marginBottom: '0.75rem',
              border: '1px solid rgba(217, 119, 54, 0.3)'
            }}>
              {lang === 'es' ? '⏱ Duración: 2 Horas' : '⏱ Duration: 2 Hrs.'}
            </div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              color: '#fff',
              textTransform: 'uppercase',
              margin: '0 0 0.75rem 0',
              wordBreak: 'break-word'
            }}>
              {lang === 'es' ? 'Excursión en cuatrimoto en Atascadero' : 'Atascadero ATV Tour'}
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
                ? 'Navega a través de encantadoras calles históricas y tradicionales caminos empedrados. Esta ruta combina la arquitectura colonial local con un paseo atractivo y dinámico por barrios urbanos pintorescos.'
                : 'Navigate through charming historic streets and traditional cobblestone paths just like this. This route blends local colonial architecture with an engaging, dynamic ride through scenic urban neighborhoods.'}
            </p>
          </div>
          <div>
            <a
              href="https://www.gueytours.com/tours/atascadero"
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

      {/* --- TARJETA 5: Agua Espinosa ATV Tour --- */}
      <div className="c5_card_5" style={{
        background: '#1a1a1a',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        boxSizing: 'border-box',
        width: '100%'
      }}>
        <div style={{ width: '100%', height: '220px', background: '#000', overflow: 'hidden' }}>
          <img
            src="/images/SEO/Outdoor group riding on Agua Espinosa UTV Tour through countryside.webp"
            alt={lang === 'es' ? 'Grupo de conductores en cuatrimotos todoterreno explorando un sendero rural durante una aventura guiada en UTV por Agua Espinosa.' : 'Group of riders on all-terrain quads exploring countryside trail during an guided Agua Espinosa UTV Tour adventure.'}
            title={lang === 'es' ? 'Paseo grupal al aire libre por el campo en el tour en UTV Agua Espinosa.' : 'Outdoor group riding on Agua Espinosa UTV Tour through countryside'}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', gap: '1.5rem', boxSizing: 'border-box' }}>
          <div>
            <div style={{
              display: 'inline-block',
              background: 'rgba(217, 119, 54, 0.15)',
              color: 'var(--orange, #d97736)',
              padding: '0.25rem 0.75rem',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              marginBottom: '0.75rem',
              border: '1px solid rgba(217, 119, 54, 0.3)'
            }}>
              {lang === 'es' ? '⏱ Duración: 2 Horas' : '⏱ Duration: 2 Hrs.'}
            </div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              color: '#fff',
              textTransform: 'uppercase',
              margin: '0 0 0.75rem 0',
              wordBreak: 'break-word'
            }}>
              {lang === 'es' ? 'Tour en cuatrimoto por Agua Espinosa' : 'Agua Espinosa ATV Tour'}
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
                ? 'Sumérgete en paisajes exuberantes moldeados por el agua. Este sendero panorámico te obsequia terrenos diversos, vegetación rica y miradores naturales sumamente gratificantes.'
                : 'Immerse yourself in lush, water-carved landscapes. This scenic path treats you to diverse terrain, rich vegetation, and rewarding nature viewpoints.'}
            </p>
          </div>
          <div>
            <a
              href="https://www.gueytours.com/tours/agua-espinoza"
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

    {/* --- BOTÓN GLOBAL INFERIOR --- */}
    <div style={{ textAlign: 'center', marginTop: '4rem', boxSizing: 'border-box' }}>
      <a
        href="https://www.gueytours.com/#tours"
        style={{
          display: 'inline-block',
          background: 'var(--orange, #d97736)',
          color: '#fff',
          padding: '1rem 2.5rem',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontFamily: 'var(--font-heading)',
          textDecoration: 'none',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          boxShadow: '0 10px 25px rgba(217, 119, 54, 0.3)',
          transition: 'opacity 0.3s ease'
        }}
      >
        {lang === 'es' ? 'Ver todos nuestros tours' : 'View our tours'}
      </a>
    </div>

  </div>
</section>
{/* FIN SECTION - 5 TARJETAS PERFECTAS */}


          
          
          
{/* Inicio de section wild (Descubre San Miguel más allá del centro) */}
<section style={{
  padding: '6rem 1.5rem',
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
    .wild_content_box {
      max-width: 900px;
      margin: 0 auto;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(217, 119, 54, 0.06) 100%);
      border: 1px solid rgba(217, 119, 54, 0.3);
      borderRadius: 20px;
      padding: clamp(2rem, 4vw, 4rem) clamp(1.5rem, 3vw, 3rem);
      box-shadow: 0 15px 35px rgba(0,0,0,0.5);
      backdrop-filter: blur(10px);
      box-sizing: border-box;
      width: 100%;
    }
  `}</style>

  <div style={{
    maxWidth: '1100px',
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box'
  }}>
    
    {/* Título H2 */}
    <div style={{ textAlign: 'center', marginBottom: '3rem', boxSizing: 'border-box' }}>
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
          ? 'Descubre San Miguel más allá del centro de la ciudad' 
          : 'Discover San Miguel beyond the City Center'}
      </h2>
      <div style={{
        width: '80px',
        height: '3px',
        background: 'var(--orange, #d97736)',
        margin: '0 auto',
        boxShadow: '0 0 12px var(--orange, #d97736)'
      }} />
    </div>

    {/* Contenedor Principal de Párrafos */}
    <div className="wild_content_box">
      
      {/* Párrafo Destacado / Introductorio */}
      <p style={{
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: '500',
        color: '#fff',
        fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
        lineHeight: 1.7,
        margin: '0 0 1.5rem 0',
        wordBreak: 'break-word',
        borderLeft: '4px solid var(--orange, #d97736)',
        paddingLeft: '1rem'
      }}>
        {lang === 'es'
          ? 'Sal de los caminos habituales y descubre el campo salvaje que rodea San Miguel.'
          : 'Step off the beaten path and unlock the wild countryside surrounding San Miguel.'}
      </p>

      {/* Segundo Párrafo */}
      <p style={{
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.85)',
        fontSize: '17px',
        lineHeight: '29px',
        margin: '0 0 1.5rem 0',
        wordBreak: 'break-word'
      }}>
        {lang === 'es'
          ? 'Conducir un potente UTV te brinda acceso a rutas rurales ocultas, cruces de ríos y miradores imponentes en las montañas a los que los autobuses turísticos estándar simplemente no pueden llegar.'
          : 'Driving a powerful UTV gives you access to hidden rural routes, river crossings, and sweeping mountain lookouts that standard tourist buses simply cannot reach.'}
      </p>

      {/* Tercer Párrafo */}
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
          ? 'Navegar por estas pintorescas rutas en UTV te pone cara a cara con auténticas comunidades rurales, cañones dramáticos y vistas inolvidables, mostrándote un lado de México que la mayoría de los visitantes nunca llegan a ver.'
          : 'Navigating these scenic UTV routes brings you face-to-face with authentic rural communities, dramatic canyons, and unforgettable vistas, showing you a side of Mexico most visitors never get to see.'}
      </p>

    </div>

  </div>
</section>
{/* Fin de section wild */}


          
    
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
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      box-sizing: border-box;
      width: 100%;
    }
    @media (min-width: 992px) {
      .exp_grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .exp_card {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(217, 119, 54, 0.05) 100%);
      border: 1px solid rgba(217, 119, 54, 0.3);
      borderRadius: 16px;
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
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box'
  }}>
    
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
          ? 'Experiencias de aventura en San Miguel de Allende' 
          : 'Adventure experiences in San Miguel de Allende'}
      </h2>
      <div style={{
        width: '80px',
        height: '3px',
        background: 'var(--orange, #d97736)',
        margin: '0 auto',
        boxShadow: '0 0 12px var(--orange, #d97736)'
      }} />
    </div>

    {/* Cuadrícula de 3 Tarjetas */}
    <div className="exp_grid">
      
      {/* Tarjeta 1: ATV Adventures */}
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
            {lang === 'es' ? 'Cuatrimotos' : 'ATV'}
          </span>
          <h3 style={{
            color: '#fff',
            fontSize: '1.35rem',
            margin: '0 0 1rem 0',
            fontFamily: 'var(--font-heading)',
            wordBreak: 'break-word',
            textTransform: 'uppercase'
          }}>
            {lang === 'es' ? 'Aventuras en ATV' : 'ATV Adventures'}
          </h3>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1rem',
            lineHeight: 1.7,
            margin: 0,
            wordBreak: 'break-word'
          }}>
            {lang === 'es' ? (
              <>
                Si quieres un control total sobre máquinas ágiles en senderos de tierra accidentados, nuestras cuatrimotos ofrecen pura diversión en terrenos naturales. Conoce nuestras opciones de <a href="https://www.gueytours.com/atv-rentals" className="exp_link">alquiler de ATV</a> para elegir entre alquileres de un solo vehículo o excursiones guiadas por senderos.
              </>
            ) : (
              <>
                If you want total control over agile machines on rugged dirt paths, our quad bikes deliver pure fun across natural terrain. Check out our options for <a href="https://www.gueytours.com/atv-rentals" className="exp_link">ATV rentals</a> to choose between single-vehicle rentals or fully guided trail trips.
              </>
            )}
          </p>
        </div>
      </div>

      {/* Tarjeta 2: RZR Adventures */}
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
            {lang === 'es' ? 'RZR / UTV' : 'RZR'}
          </span>
          <h3 style={{
            color: '#fff',
            fontSize: '1.35rem',
            margin: '0 0 1rem 0',
            fontFamily: 'var(--font-heading)',
            wordBreak: 'break-word',
            textTransform: 'uppercase'
          }}>
            {lang === 'es' ? 'Aventuras en RZR' : 'RZR Adventures'}
          </h3>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1rem',
            lineHeight: 1.7,
            margin: 0,
            wordBreak: 'break-word'
          }}>
            {lang === 'es' ? (
              <>
                Para potencia de servicio pesado y emoción a alta velocidad, súbete a un vehículo utilitario premium diseñado para enfrentar terrenos extremos. Descubre nuestros <a href="https://www.gueytours.com/rsz-rentals" className="exp_link">alquileres de RZR </a> especializados y domina los senderos de montaña en un vehículo 4x4 imparable.
              </>
            ) : (
              <>
                For heavy-duty power and high-speed excitement, step inside a premium side-by-side vehicle engineered to tackle extreme terrain. Discover our specialized <a href="https://www.gueytours.com/rsz-rentals" className="exp_link"> RZR rentals</a> and master the mountain trails in an unstoppable 4x4 vehicle.
              </>
            )}
          </p>
        </div>
      </div>

      {/* Tarjeta 3: Private Experiences */}
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
            {lang === 'es' ? 'Privado' : 'Private'}
          </span>
          <h3 style={{
            color: '#fff',
            fontSize: '1.35rem',
            margin: '0 0 1rem 0',
            fontFamily: 'var(--font-heading)',
            wordBreak: 'break-word',
            textTransform: 'uppercase'
          }}>
            {lang === 'es' ? 'Experiencias Privadas' : 'Private Experiences'}
          </h3>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1rem',
            lineHeight: 1.7,
            margin: 0,
            wordBreak: 'break-word'
          }}>
            {lang === 'es' ? (
              <>
                ¿Buscas un viaje exclusivo hecho a tu medida? Diseñamos tours privados personalizados para parejas, familias o grupos que buscan un ritmo personal. Reserva un tour privado en UTV con guías dedicados visitando nuestra página de Tours Privados.
              </>
            ) : (
              <>
                Looking for an exclusive journey tailored just for you? We design custom private tours for couples, families, or private groups seeking a personal pace. Book a private UTV tour with dedicated guides by visiting our Private Tours page.
              </>
            )}
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
        {lang === 'es' ? '¿Por qué elegir Guey Tours?' : 'Why Choose Guey Tours?'}
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
            En <a href="https://www.gueytours.com/" style={{ color: 'var(--orange, #d97736)', textDecoration: 'none' }}>Guey Tours,</a> nos enfocamos en ofrecer experiencias inolvidables y emocionantes:
          </>
        ) : (
          <>
            At <a href="https://www.gueytours.com/" style={{ color: 'var(--orange, #d97736)', textDecoration: 'none' }}>Guey Tours,</a> we focus on delivering unforgettable and exciting experiences:
          </>
        )}
      </p>
    </div>

    {/* Contenedor de Tarjetas (Grid) */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '2rem',
      justifyContent: 'center',
      marginBottom: '4rem'
    }}>
      
      {/* --- TARJETA 1: Local Knowledge --- */}
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
          {lang === 'es' ? 'Conocimiento local' : 'Local Knowledge'}
        </h3>
        <p style={{
          color: 'rgba(255, 255, 255, 0.85)',
          fontSize: '16px',
          lineHeight: 1.6,
          margin: 0
        }}>
          {lang === 'es'
            ? 'Guías locales apasionados que conocen cada sendero secreto y rincón histórico.'
            : 'Passionate local guides who know every secret trail and historic spot.'}
        </p>
      </div>

      {/* --- TARJETA 2: English-Speaking Staff --- */}
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
          {lang === 'es' ? 'Personal bilingüe' : 'English-Speaking Staff'}
        </h3>
        <p style={{
          color: 'rgba(255, 255, 255, 0.85)',
          fontSize: '16px',
          lineHeight: 1.6,
          margin: 0
        }}>
          {lang === 'es'
            ? 'Comunicación clara, amigable y atención personalizada para viajeros internacionales.'
            : 'Clear, friendly communication and personalized attention for international travelers.'}
        </p>
      </div>

      {/* --- TARJETA 3: Safety-Focused --- */}
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
          {lang === 'es' ? 'Enfoque en la seguridad' : 'Safety-Focused'}
        </h3>
        <p style={{
          color: 'rgba(255, 255, 255, 0.85)',
          fontSize: '16px',
          lineHeight: 1.6,
          margin: 0
        }}>
          {lang === 'es'
            ? 'Equipo de protección de primera calidad, orientaciones completas y asistencia constante en los senderos.'
            : 'Top-quality safety gear, full orientations, and constant trail support.'}
        </p>
      </div>

      {/* --- TARJETA 4: Quality Vehicles --- */}
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
          {lang === 'es' ? 'Vehículos de calidad' : 'Quality Vehicles'}
        </h3>
        <p style={{
          color: 'rgba(255, 255, 255, 0.85)',
          fontSize: '16px',
          lineHeight: 1.6,
          margin: 0
        }}>
          {lang === 'es'
            ? 'Vehículos recreativos meticulosamente mantenidos y modelos de vehículos utilitarios listos para la conducción off-road.'
            : 'Meticulously maintained recreational vehicles and off-road utility vehicle models ready for off-road driving.'}
        </p>
      </div>

      {/* --- TARJETA 5: Pure Thrills (Ocupa espacio o se alinea) --- */}
      <div style={{
        background: '#000',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '16px',
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
        boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
        gridColumn: '1 / -1',
        maxWidth: '650px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
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
          {lang === 'es' ? 'Emociones puras' : 'Pure Thrills'}
        </h3>
        <p style={{
          color: 'rgba(255, 255, 255, 0.85)',
          fontSize: '16px',
          lineHeight: 1.6,
          margin: 0
        }}>
          {lang === 'es'
            ? 'Itinerarios hechos a la medida diseñados en torno a una auténtica aventura en UTV de alta energía.'
            : 'Tailor-made itineraries built around genuine, high-energy UTV adventure.'}
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
        {lang === 'es' ? 'Planifica tu aventura' : 'Plan your adventure'}
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
              {lang === 'en' ? 'FAQs about our tours in Guanajuato' : 'Preguntas frecuentes sobre nuestros tours en Guanajuato'}
            </h2>
            <div className="section-divider" style={{ marginTop: '1rem' }} />
          </div>

          {/* Acordeón de Preguntas */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              {
                q_en: 'What is included in your Tours Guanajuato packages?',
                q_es: '¿Qué incluyen sus paquetes de Tours Guanajuato?',
                a_en: 'Our Tours Guanajuato include high-performance all-terrain vehicles, protective safety gear (helmets and goggles), expert bilingual guides, fuel, and a comprehensive safety orientation before hitting the trails.',
                a_es: 'Nuestros Tours Guanajuato incluyen vehículos todoterreno de alto rendimiento, equipo de protección de seguridad (cascos y gafas), guías bilingües expertos, combustible y una orientación de seguridad completa antes de salir a los senderos.',
              },
              {
                q_en: 'Are your Guanajuato tours suitable for beginners with no off-road experience?',
                q_es: '¿Sus tours en Guanajuato son adecuados para principiantes sin experiencia previa todoterreno?',
                a_en: 'Yes, absolutely! Our professional guides provide hands-on instructions so drivers of all skill levels can safely enjoy our tours and navigate all-terrain paths with confidence.',
                a_es: '¡Sí, absolutamente! Nuestros guías profesionales proporcionan instrucciones prácticas para que conductores de todos los niveles puedan disfrutar con seguridad de nuestros tours y recorrer los caminos todoterreno con total confianza.',
              },
              {
                q_en: 'What should I bring for outdoor activities in San Miguel de Allende and Guanajuato?',
                q_es: '¿Qué debo llevar para las actividades al aire libre en San Miguel de Allende y Guanajuato?',
                a_en: 'We recommend wearing comfortable long pants, closed-toe shoes, sunblock, and sunglasses. Bringing a light jacket and a camera to capture the stunning scenery is also recommended.',
                a_es: 'Recomendamos usar pantalones largos y cómodos, calzado cerrado, protector solar y gafas de sol. También se recomienda llevar una chaqueta ligera y una cámara para capturar los impresionantes paisajes.',
              },
              {
                q_en: 'How far in advance should I book my Tours in Guanajuato?',
                q_es: '¿Con cuánta anticipación debo reservar mis Tours en Guanajuato?',
                a_en: 'Because our Tours Guanajuato and all-terrain rentals are highly popular among international travelers, we recommend booking at least 48 hours in advance to secure your preferred date and vehicle model.',
                a_es: 'Debido a que nuestros Tours Guanajuato y alquileres todoterreno son muy populares entre los viajeros internacionales, recomendamos reservar con al menos 48 horas de anticipación para asegurar tu fecha preferida y el modelo de vehículo.',
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
          "name": "What is included in your Tours Guanajuato packages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Tours Guanajuato include high-performance all-terrain vehicles, protective safety gear (helmets and goggles), expert bilingual guides, fuel, and a comprehensive safety orientation before hitting the trails."
          }
        },
        {
          "@type": "Question",
          "name": "Are your Guanajuato tours suitable for beginners with no off-road experience?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, absolutely! Our professional guides provide hands-on instructions so drivers of all skill levels can safely enjoy our tours and navigate all-terrain paths with confidence."
          }
        },
        {
          "@type": "Question",
          "name": "What should I bring for outdoor activities in San Miguel de Allende and Guanajuato?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend wearing comfortable long pants, closed-toe shoes, sunblock, and sunglasses. Bringing a light jacket and a camera to capture the stunning scenery is also recommended."
          }
        },
        {
          "@type": "Question",
          "name": "How far in advance should I book my Tours in Guanajuato?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because our Tours Guanajuato and all-terrain rentals are highly popular among international travelers, we recommend booking at least 48 hours in advance to secure your preferred date and vehicle model."
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
