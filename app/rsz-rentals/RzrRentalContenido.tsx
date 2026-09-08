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
    src="/images/SEO/rzr-rentals-mexico-colonial-street.webp" 
    alt="Front view of a gray UTV Rzr rentals vehicle driving up a narrow cobblestone street flanked by colorful pastel colonial buildings in a historic Mexican town." 
    title="Touring the historic cobblestone streets of Mexico with Rzr rentals."
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
              {lang === 'es' ? 'Alquiler de RZR en San Miguel de Allende' : 'RZR Rentals in San Miguel de Allende'}
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
                <>Explora San Miguel de Allende más allá del centro de la ciudad con la renta de un RZR de Guey Tours. Disfruta de senderos todoterreno, caminos rurales y paisajes naturales mientras experimentas la libertad de conducir un potente vehículo utilitario (UTV).</>
              ) : (
                <>Explore San Miguel de Allende beyond the city center with a RZR rental from Guey Tours. Experience off-road trails, rural roads and natural landscapes while enjoying the freedom of driving a powerful side-by-side vehicle.</>
              )}
            </p>

            <p style={{ margin: 0 }}>
              {lang === 'es' ? (
                <>San Miguel de Allende es famoso por su arquitectura colonial, sus calles históricas y su vibrante cultura, pero la región también ofrece emocionantes experiencias al aire libre. Con la renta de RZR en San Miguel de Allende, puedes descubrir una faceta diferente del destino y disfrutar de una aventura con tu pareja, familia o grupo de amigos.</>
              ) : (
                <>San Miguel de Allende is famous for its colonial architecture, historic streets and vibrant culture, but the region also offers exciting outdoor experiences. With RZR rentals in San Miguel de Allende, you can discover a different side of the destination and enjoy an adventure with your partner, family or group of friends.</>
              )}
            </p>
          </div>

          {/* Botón de contacto al final de la primera sección */}
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <a 
              href="https://api.whatsapp.com/send/?phone=5214151090021&text=Hi%21+I%27d+like+to+reserve+the+Honda+150+Motorbike.+Could+you+let+me+know+availability%3F&type=phone_number&app_absent=0" 
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
      {lang === 'es' ? 'Renta de RZR en San Miguel de Allende' : 'RZR Rental in San Miguel de Allende'}
    </h2>

    <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem' }}>
      {lang === 'es' 
        ? 'Un RZR es un tipo de vehículo utilitario (UTV) diseñado para la conducción todoterreno. A diferencia de un auto tradicional, un RZR está construido para soportar terrenos irregulares, caminos de terracería y senderos al aire libre, ofreciendo una experiencia de manejo lado a lado.'
        : 'A RZR is a type of UTV (Utility Terrain Vehicle) designed for off-road driving. Unlike a traditional car, a RZR is built to handle uneven terrain, dirt roads and outdoor trails while providing a side-by-side driving experience.'}
    </p>

    <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem' }}>
      {lang === 'es' ? (
        <>Guey Tours ofrece rentas de RZR para viajeros que quieren explorar los alrededores de <a href="https://www.gueytours.com/san-miguel-de-allende-tours" style={{ color: 'var(--orange)', textDecoration: 'none !important', fontWeight: 'bold' }}>San Miguel de Allende</a> a su propio ritmo.</>
      ) : (
        <>Guey Tours offers RZR rentals for travelers who want to explore the surroundings of <a href="https://www.gueytours.com/san-miguel-de-allende-tours" style={{ color: 'var(--orange)', textDecoration: 'none !important', fontWeight: 'bold' }}>San Miguel de Allende</a> at their own pace.</>
      )}
    </p>

    <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem' }}>
      {lang === 'es'
        ? 'El proceso de renta está diseñado para que tu experiencia sea sencilla. Antes de conducir, puedes recibir información sobre el vehículo, instrucciones básicas de operación, recomendaciones de seguridad y las condiciones de renta.'
        : 'The rental process is designed to make your experience simple. Before driving, you can receive information about the vehicle, basic operating instructions, safety recommendations and the rental conditions.'}
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
        src="/images/atv-tour-magic-town-CONTACT-GUEY-TOURS.webp" 
        alt="RZR tour adventure in the magic town of San Miguel de Allende with Guey Tours."
        title="RZR Rentals in San Miguel de Allende - Guey Tours"
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  </div>
</div>
          {/* Inicio de segunda section */}


        {/* Inicio de section tres */}
<section style={{
  padding: '6rem 2rem 6rem 2rem',
  marginTop: '3rem',
  background: 'linear-gradient(180deg, #0b0b0b 0%, rgba(217, 119, 54, 0.04) 100%)',
  color: '#fff',
  fontFamily: 'sans-serif',
  position: 'relative'
}}>
  <div style={{
    maxWidth: '1100px',
    margin: '0 auto'
  }}>
    
    {/* Título H2 en color naranja cobrizo exacto */}
    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(2.2rem, 4vw, 3rem)',
        color: 'var(--orange, #d97736)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        margin: '0 0 1rem 0',
        lineHeight: 1.2
      }}>
        {lang === 'es' 
          ? 'Explora los senderos todoterreno de San Miguel en RZR' 
          : "Explore San Miguel's Off-Road Trails by RZR"}
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
      padding: '2.5rem 3rem',
      marginBottom: '3.5rem',
      boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
      backdropFilter: 'blur(10px)'
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
          ? 'Una renta de RZR te da la oportunidad de dejar atrás las rutas turísticas tradicionales y explorar caminos rurales, paisajes naturales y terrenos todoterreno alrededor de San Miguel de Allende.'
          : 'A RZR rental gives you the opportunity to leave the traditional tourist routes behind and explore rural roads, natural landscapes and off-road terrain around San Miguel de Allende.'}
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
          ? 'En lugar de pasar todo tu viaje en la ciudad, puedes experimentar la región circundante desde el asiento del conductor.'
          : 'Instead of spending your entire trip in the city, you can experience the surrounding region from behind the wheel.'}
      </p>
    </div>

    {/* Subtítulo para la sección de ideales */}
    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '1.4rem',
        color: 'rgba(255, 255, 255, 0.9)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        margin: 0
      }}>
        {lang === 'es' ? 'Las aventuras en RZR son ideales para:' : 'RZR adventures are ideal for:'}
      </h3>
    </div>

    {/* Cuadrícula de tarjetas con las 5 opciones (primeras 3 en diseño normal) */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
      marginBottom: '1.5rem'
    }}>
      {[
        {
          es: 'Parejas que buscan una experiencia al aire libre',
          en: 'Couples looking for an outdoor experience.'
        },
        {
          es: 'Familias que quieren explorar juntas',
          en: 'Families who want to explore together.'
        },
        {
          es: 'Grupos de amigos que buscan aventura',
          en: 'Groups of friends seeking adventure.'
        }
      ].map((item, index) => (
        <div key={index} style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(217, 119, 54, 0.03) 100%)',
          border: '1px solid rgba(217, 119, 54, 0.25)',
          borderRadius: '14px',
          padding: '2rem 1.8rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '1.2rem',
          transition: 'transform 0.3s ease, border-color 0.3s ease'
        }}>
          <div style={{
            minWidth: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'rgba(217, 119, 54, 0.15)',
            color: 'var(--orange, #d97736)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            border: '1px solid rgba(217, 119, 54, 0.4)'
          }}>
            0{index + 1}
          </div>
          <span style={{
            fontFamily: 'sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '18px',
            lineHeight: 1.4
          }}>
            {lang === 'es' ? item.es : item.en}
          </span>
        </div>
      ))}
    </div>

    {/* Cuadrícula inferior para las últimas 2 tarjetas centradas automáticamente */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
      marginBottom: '3.5rem',
      justifyContent: 'center',
      maxWidth: '750px',
      marginInline: 'auto'
    }}>
      {[
        {
          es: 'Viajeros interesados en la conducción todoterreno',
          en: 'Travelers interested in off-road driving.'
        },
        {
          es: 'Visitantes que quieren descubrir paisajes más allá del centro histórico',
          en: 'Visitors who want to discover landscapes beyond the historic center.'
        }
      ].map((item, index) => (
        <div key={index + 3} style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(217, 119, 54, 0.03) 100%)',
          border: '1px solid rgba(217, 119, 54, 0.25)',
          borderRadius: '14px',
          padding: '2rem 1.8rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '1.2rem',
          transition: 'transform 0.3s ease, border-color 0.3s ease'
        }}>
          <div style={{
            minWidth: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'rgba(217, 119, 54, 0.15)',
            color: 'var(--orange, #d97736)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            border: '1px solid rgba(217, 119, 54, 0.4)'
          }}>
            0{index + 4}
          </div>
          <span style={{
            fontFamily: 'sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '18px',
            lineHeight: 1.4
          }}>
            {lang === 'es' ? item.es : item.en}
          </span>
        </div>
      ))}
    </div>

    {/* Tarjeta de cierre sobre la ventaja de Guey Tours */}
    <div style={{
      background: 'rgba(217, 119, 54, 0.07)',
      border: '1px solid rgba(217, 119, 54, 0.4)',
      borderRadius: '16px',
      padding: '2.5rem 3rem',
      boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
      textAlign: 'center'
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
          ? 'Una de las ventajas de elegir a Guey Tours es el conocimiento local de la zona. Comprender los caminos y los paisajes circundantes puede ayudar a que tu experiencia todoterreno sea más agradable y memorable.'
          : 'One of the advantages of choosing Guey Tours is the local knowledge of the area. Understanding the roads and surrounding landscapes can help make your off-road experience more enjoyable and memorable.'}
      </p>
    </div>

  </div>
</section>
{/* Fin de section tres */}


          

          {/* INICIO SECTION 4 */}
<section style={{
  padding: '6rem 2rem',
  background: 'linear-gradient(180deg, #0b0b0b 0%, rgba(217, 119, 54, 0.04) 100%)',
  color: '#fff',
  fontFamily: 'sans-serif',
  position: 'relative'
}}>
  <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
    
    {/* Título H2 y Párrafo Actualizado */}
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
        {lang === 'es' ? 'Elige tu experiencia en RZR' : 'Choose Your RZR Experience'}
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
          ? 'Guey Tours ofrece diferentes opciones de RZR según la disponibilidad. Cada renta puede variar en modelo, capacidad, características, duración y precio.'
          : 'Guey Tours can offer different RZR options depending on availability. Each rental can vary in model, capacity, features, duration and pricing.'}
      </p>
    </div>

    {/* Tarjeta Única Centralizada con Imagen */}
    <div style={{
      background: '#000',
      border: '1px solid rgba(217, 119, 54, 0.3)',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
      maxWidth: '800px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Contenedor de la Imagen */}
      <div style={{
        width: '100%',
        height: '260px',
        overflow: 'hidden',
        background: '#000',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid rgba(217, 119, 54, 0.15)'
      }}>
        <img
          src="/images/SEO/atv-and-rzr-rentals-group.webp"
          alt="Close-up of a group of smiling people wearing helmets and safety goggles, standing next to a row of parked ATVs and Rzr rentals vehicles."
          title="Getting ready for the ultimate adventure with Rzr rentals and ATVs."
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* Contenido de la Tarjeta */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(217, 119, 54, 0.05) 100%)',
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.4rem',
          color: 'var(--orange, #d97736)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          margin: 0
        }}>
          {lang === 'es' ? 'Opciones de RZR' : 'RZR Options'}
        </h3>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.6rem', 
          fontSize: '16px', 
          color: 'rgba(255,255,255,0.85)', 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          borderBottom: '1px solid rgba(255,255,255,0.1)', 
          padding: '1.5rem 0',
          textAlign: 'left',
          maxWidth: '500px',
          margin: '0 auto',
          width: '100%'
        }}>
          <div><strong>{lang === 'es' ? 'Modelo:' : 'Model:'}</strong> {lang === 'es' ? 'Los modelos disponibles varían' : 'Available models vary'}</div>
          <div><strong>{lang === 'es' ? 'Capacidad:' : 'Capacity:'}</strong> {lang === 'es' ? 'Dependiendo del RZR seleccionado' : 'Depending on the selected RZR'}</div>
          <div><strong>{lang === 'es' ? 'Experiencia:' : 'Experience:'}</strong> {lang === 'es' ? 'Aventura todoterreno' : 'Off-road adventure'}</div>
          <div><strong>{lang === 'es' ? 'Características:' : 'Features:'}</strong> {lang === 'es' ? 'Diseño side-by-side y capacidades off-road' : 'Side-by-side design and off-road capabilities'}</div>
          <div><strong>{lang === 'es' ? 'Disponibilidad:' : 'Availability:'}</strong> {lang === 'es' ? 'Sujeta a fecha y disponibilidad de vehículos' : 'Subject to date and vehicle availability'}</div>
          <div><strong>{lang === 'es' ? 'Precio:' : 'Price:'}</strong> {lang === 'es' ? 'Contacta a Guey Tours para conocer los precios actuales' : 'Contact Guey Tours for current pricing'}</div>
        </div>

        <div style={{ paddingTop: '0.5rem' }}>
          <a href="https://www.gueytours.com/contact" style={{
            display: 'inline-block',
            background: 'transparent',
            color: 'var(--orange, #d97736)',
            border: '2px solid var(--orange, #d97736)',
            padding: '0.75rem 2rem',
            borderRadius: '50px',
            fontWeight: 'bold',
            fontFamily: 'var(--font-heading)',
            textDecoration: 'none',
            textTransform: 'uppercase',
            fontSize: '0.8rem',
            letterSpacing: '0.08em',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--orange, #d97736)'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--orange, #d97736)'; }}
          >
            {lang === 'es' ? 'RENTAR UN RZR' : 'RENT A RZR'}
          </a>
        </div>
      </div>
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
        {lang === 'es' ? '¿Por qué elegir un RZR para tu aventura?' : 'Why Choose a RZR for Your Adventure?'}
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
          ? 'Elegir entre un RZR y un ATV depende del tipo de aventura que buscas.'
          : 'Choosing between a RZR and an ATV depends on the type of adventure you want.'}
      </p>
    </div>

    {/* Contenedor de Comparación (Grid de 2 Columnas) */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '2rem',
      justifyContent: 'center'
    }}>
      
      {/* --- TARJETA RZR (Destacada) --- */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(217, 119, 54, 0.08) 100%)',
        border: '1px solid rgba(217, 119, 54, 0.4)',
        borderRadius: '16px',
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        boxShadow: '0 15px 35px rgba(0,0,0,0.6)'
      }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.6rem',
          color: 'var(--orange, #d97736)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          margin: 0,
          borderBottom: '1px solid rgba(217, 119, 54, 0.2)',
          paddingBottom: '1rem'
        }}>
          RZR
        </h3>
        <ul style={{
          listStyleType: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          color: 'rgba(255, 255, 255, 0.85)',
          fontSize: '16px',
          lineHeight: 1.6
        }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
            <span>{lang === 'es' ? 'Mayor capacidad de pasajeros.' : 'Greater passenger capacity.'}</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
            <span>{lang === 'es' ? 'Diseñado para una experiencia lado a lado (side-by-side).' : 'Designed for a side-by-side experience.'}</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
            <span>{lang === 'es' ? 'Más adecuado para parejas, familias o grupos.' : 'More suitable for couples, families or groups.'}</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
            <span>{lang === 'es' ? 'Mayor estabilidad para aventuras todoterreno compartidas.' : 'Greater stability for shared off-road adventures.'}</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
            <span>{lang === 'es' ? 'Permite a los pasajeros disfrutar de la experiencia juntos.' : 'Allows passengers to enjoy the experience together.'}</span>
          </li>
        </ul>
      </div>

      {/* --- TARJETA ATV --- */}
      <div style={{
        background: '#000',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '16px',
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        boxShadow: '0 15px 35px rgba(0,0,0,0.6)'
      }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.6rem',
          color: '#fff',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          margin: 0,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          paddingBottom: '1rem'
        }}>
          ATV
        </h3>
        <ul style={{
          listStyleType: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          color: 'rgba(255, 255, 255, 0.85)',
          fontSize: '16px',
          lineHeight: 1.6
        }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontWeight: 'bold' }}>•</span>
            <span>{lang === 'es' ? 'Diseñado habitualmente para conducción individual.' : 'Usually designed for individual riding.'}</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontWeight: 'bold' }}>•</span>
            <span>{lang === 'es' ? 'Conexión más directa entre el conductor y el vehículo.' : 'More direct connection between rider and vehicle.'}</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontWeight: 'bold' }}>•</span>
            <span>{lang === 'es' ? 'Más ligero y compacto.' : 'Lighter and more compact.'}</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontWeight: 'bold' }}>•</span>
            <span>{lang === 'es' ? 'Proporciona una experiencia de conducción más individual.' : 'Provides a more individual riding experience.'}</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontWeight: 'bold' }}>•</span>
            <span>{lang === 'es' ? 'Ideal para viajeros que buscan un tipo diferente de aventura todoterreno.' : 'Ideal for travelers looking for a different type of off-road adventure.'}</span>
          </li>
        </ul>
      </div>

    </div>

  </div>
</section>
{/* FIN SECTION 5 */}



        {/* INICIO SECTION - What's Included With Your RZR Rental */}
<section style={{
  padding: '6rem 2rem',
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, #0b0b0b 100%)',
  color: '#fff',
  fontFamily: 'sans-serif',
  position: 'relative'
}}>
  <div style={{ maxWidth: '900px', margin: '0 auto' }}>
    
    {/* Título H2 y Párrafo Introductorio */}
    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
        color: 'var(--orange, #d97736)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        margin: '0 0 1rem 0',
        lineHeight: 1.2
      }}>
        {lang === 'es' ? '¿Qué incluye tu renta de RZR?' : "What's Included With Your RZR Rental?"}
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
          ? 'Las inclusiones exactas dependen de la renta seleccionada y de las condiciones actuales. Antes de reservar, Guey Tours puede proporcionarte información sobre lo que incluye tu experiencia.'
          : 'The exact inclusions depend on the selected rental and current conditions. Before booking, Guey Tours can provide information about what is included with your experience.'}
      </p>
    </div>

    {/* Tarjeta Contenedora de Inclusiones */}
    <div style={{
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(217, 119, 54, 0.06) 100%)',
      border: '1px solid rgba(217, 119, 54, 0.35)',
      borderRadius: '16px',
      padding: '3rem',
      boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      
      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '1.3rem',
        color: 'var(--orange, #d97736)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        margin: 0,
        textAlign: 'center'
      }}>
        {lang === 'es' ? 'Según la renta, esto puede incluir:' : 'Depending on the rental, this may include:'}
      </h3>

      {/* Lista de Inclusiones en Cuadrícula de 2 Columnas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1rem 2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '2rem 0'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.9)', fontSize: '16px' }}>
          <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
          <span>{lang === 'es' ? 'Vehículo RZR' : 'RZR vehicle'}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.9)', fontSize: '16px' }}>
          <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
          <span>{lang === 'es' ? 'Equipo de seguridad' : 'Safety equipment'}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.9)', fontSize: '16px' }}>
          <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
          <span>{lang === 'es' ? 'Casco, cuando corresponda' : 'Helmet, when applicable'}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.9)', fontSize: '16px' }}>
          <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
          <span>{lang === 'es' ? 'Instrucciones básicas de operación' : 'Basic operating instructions'}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.9)', fontSize: '16px' }}>
          <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
          <span>{lang === 'es' ? 'Orientación previa al manejo' : 'Pre-drive orientation'}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.9)', fontSize: '16px' }}>
          <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
          <span>{lang === 'es' ? 'Información sobre los requisitos de renta' : 'Information about rental requirements'}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.9)', fontSize: '16px', gridColumn: '1 / -1' }}>
          <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
          <span>{lang === 'es' ? 'Términos y condiciones de renta' : 'Rental terms and conditions'}</span>
        </div>
      </div>

      {/* Mensaje de Nota / Aviso al Final */}
      <div style={{
        background: 'rgba(217, 119, 54, 0.08)',
        borderLeft: '4px solid var(--orange, #d97736)',
        padding: '1rem 1.25rem',
        borderRadius: '0 8px 8px 0'
      }}>
        <p style={{
          fontFamily: 'sans-serif',
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '15px',
          lineHeight: 1.6,
          margin: 0,
          fontStyle: 'italic'
        }}>
          {lang === 'es'
            ? 'Antes de tu aventura, asegúrate de comprender las instrucciones de operación, los requisitos de seguridad y las políticas de renta.'
            : 'Before your adventure, make sure you understand the operating instructions, safety requirements and rental policies.'}
        </p>
      </div>

    </div>

  </div>
</section>
{/* FIN SECTION - What's Included With Your RZR Rental */}

          

          {/* --- SÉPTIMA SECCIÓN: Why Rent a RZR With Guey Tours? --- */}
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
    padding: 'clamp(2rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem)'
  }}>
    
    {/* Imagen de fondo principal actualizada */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url("images/happy-child-on-atv-rzr-rentals.webp")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 1
    }} />

    {/* Etiqueta img oculta con Alt y Title actualizados */}
    <img 
      src="/images/happy-child-on-atv-rzr-rentals.webp" 
      alt="A happy child wearing a helmet and colorful goggles on a red ATV, smiling and waving both hands at the camera while riding behind a gray Rzr rentals vehicle on a colonial street." 
      title="Family adventure experience with Rzr rentals and ATV riding."
      style={{ display: 'none' }}
    />

    {/* Contenido en la parte superior del fondo */}
    <div style={{ position: 'relative', zIndex: 2 }}>
      
      {/* Encabezado de la Sección (Centrado) */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 3vw, 2.5rem)',
          color: 'var(--orange, #d97736)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          margin: '0 0 0.8rem 0',
        }}>
          {lang === 'es' ? '¿Por Qué Rentar un RZR Con Guey Tours?' : 'Why Rent a RZR With Guey Tours?'}
        </h2>
        <p style={{
          fontFamily: 'var(--font-body, sans-serif)',
          fontSize: '1.05rem',
          color: 'rgba(255, 255, 255, 0.85)',
          maxWidth: '800px',
          margin: '0 auto 1.5rem auto',
          lineHeight: 1.6
        }}>
          {lang === 'es' 
            ? 'Elegir la compañía de renta correcta es una parte importante de tu aventura. Guey Tours combina vehículos de calidad, conocimiento local y asistencia personalizada para ayudar a los viajeros internacionales a disfrutar de su experiencia en RZR en San Miguel de Allende.' 
            : 'Choosing the right rental company is an important part of your adventure. Guey Tours combines quality vehicles, local knowledge and personalized assistance to help international travelers enjoy their RZR experience in San Miguel de Allende.'}
        </p>
        <div style={{
          width: '100px',
          height: '2px',
          background: 'var(--orange, #d97736)',
          margin: '0 auto',
          boxShadow: '0 0 10px var(--orange, #d97736)'
        }} />
      </div>

      <p style={{
        textAlign: 'center',
        fontFamily: 'var(--font-heading)',
        fontSize: '1.15rem',
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        marginBottom: '2rem'
      }}>
        {lang === 'es' ? 'Con Guey Tours puedes esperar:' : 'With Guey Tours, you can expect:'}
      </p>

      {/* Grid de Beneficios (6 elementos distribuidos en columnas) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        
        {/* Tarjeta 1: Vehículos en excelente estado */}
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
            {lang === 'es' ? 'Vehículos en Óptimas Condiciones' : 'Well-maintained Vehicles'}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            {lang === 'es' ? 'Unidades cuidadas y listas para el camino.' : 'Well-maintained vehicles.'}
          </p>
        </div>

        {/* Tarjeta 2: Experiencias enfocadas en la seguridad */}
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
            {lang === 'es' ? 'Enfoque en Seguridad' : 'Safety-Focused Experiences'}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            {lang === 'es' ? 'Experiencias diseñadas priorizando tu protección.' : 'Safety-focused experiences.'}
          </p>
        </div>

        {/* Tarjeta 3: Conocimiento local */}
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
            {lang === 'es' ? 'Conocimiento Local' : 'Local Knowledge'}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            {lang === 'es' ? 'Conocimiento experto de San Miguel de Allende.' : 'Local knowledge of San Miguel de Allende.'}
          </p>
        </div>

        {/* Tarjeta 4: Asistencia en inglés */}
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
            {lang === 'es' ? 'Asistencia en Inglés' : 'English-Speaking Assistance'}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            {lang === 'es' ? 'Atención especializada para visitantes extranjeros.' : 'English-speaking assistance.'}
          </p>
        </div>

        {/* Tarjeta 5: Servicio personalizado */}
        <div style={{
          background: 'rgba(15, 15, 15, 0.75)',
          border: '1px solid rgba(217, 119, 54, 0.25)',
          borderRadius: '12px',
          padding: '1.8rem',
          backdropFilter: 'blur(6px)',
          textAlign: 'center'
        }}>
          <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.3rem', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>05</span>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.1rem', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
            {lang === 'es' ? 'Servicio Personalizado' : 'Personalized Service'}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            {lang === 'es' ? 'Trato cercano adaptado a lo que buscas.' : 'Personalized service.'}
          </p>
        </div>

        {/* Tarjeta 6: Soporte antes y durante */}
        <div style={{
          background: 'rgba(15, 15, 15, 0.75)',
          border: '1px solid rgba(217, 119, 54, 0.25)',
          borderRadius: '12px',
          padding: '1.8rem',
          backdropFilter: 'blur(6px)',
          textAlign: 'center'
        }}>
          <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.3rem', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>06</span>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.1rem', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
            {lang === 'es' ? 'Soporte Integral' : 'Support Before & During'}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            {lang === 'es' ? 'Soporte antes y durante tu renta.' : 'Support before and during your rental.'}
          </p>
        </div>

      </div>

      {/* Tarjeta Inferior: Aventura local auténtica */}
      <div style={{
        marginTop: '1.8rem',
        background: 'rgba(20, 20, 20, 0.85)',
        border: '1px solid rgba(217, 119, 54, 0.4)',
        borderRadius: '12px',
        padding: '1.8rem',
        backdropFilter: 'blur(8px)',
        textAlign: 'center',
        maxWidth: '1000px',
        margin: '1.8rem auto 0 auto'
      }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--orange, #d97736)', fontSize: '1.1rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
          {lang === 'es' ? 'Aventura Local Auténtica' : 'An Authentic Local Adventure'}
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
          {lang === 'es' 
            ? 'Vive una experiencia genuina explorando los paisajes y caminos alrededor de San Miguel de Allende.' 
            : 'Enjoy a genuine experience exploring the landscapes and trails around San Miguel de Allende.'}
        </p>
      </div>

    </div>

  </div>

</div>
{/* --- FIN DE LA SÉPTIMA SECCIÓN --- */}
          



          {/* --- SEPTIMA SECCIÓN: Preguntas Frecuentes (FAQ) --- */}
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
                q_en: 'What are the best tours to take in San Miguel de Allende?',
                q_es: '¿Cuáles son los mejores tours para hacer en San Miguel de Allende?',
                a_en: 'Some of the best San Miguel de Allende tours include cultural experiences, ATV adventures, RZR tours, off-road experiences, and private tours. Guey Tours focuses on outdoor adventures that allow travelers to explore the city’s surroundings beyond the traditional tourist areas.',
                a_es: 'Algunos de los mejores tours en San Miguel de Allende incluyen experiencias culturales, aventuras en ATV, tours en RZR, experiencias todo terreno y tours privados. Guey Tours se enfoca en aventuras al aire libre que permiten a los viajeros explorar los alrededores de la ciudad más allá de las zonas turísticas tradicionales.',
              },
              {
                q_en: 'What are the best San Miguel de Allende tours for international travelers?',
                q_es: '¿Cuáles son los mejores tours en San Miguel de Allende para viajeros internacionales?',
                a_en: 'The best tour depends on your interests. For international travelers looking for adventure, nature, and outdoor activities, ATV and RZR experiences are great options. Private tours are also ideal for couples, families, and groups looking for a personalized experience.',
                a_es: 'El mejor tour depende de tus intereses. Para los viajeros internacionales que buscan aventura, naturaleza y actividades al aire libre, las experiencias en ATV y RZR son excelentes opciones. Los tours privados también son ideales para parejas, familias y grupos que buscan una experiencia personalizada.',
              },
              {
                q_en: 'Can I take an ATV tour in San Miguel de Allende?',
                q_es: '¿Puedo hacer un tour en ATV en San Miguel de Allende?',
                a_en: 'Yes. ATV tours are an exciting way to explore the natural landscapes, rural roads, and off-road trails around San Miguel de Allende. Guey Tours offers experiences designed for travelers who want to combine adventure with local exploration.',
                a_es: 'Sí. Los tours en ATV son una forma emocionante de explorar los paisajes naturales, caminos rurales y senderos todo terreno alrededor de San Miguel de Allende. Guey Tours ofrece experiencias diseñadas para viajeros que desean combinar la aventura con la exploración local.',
              },
              {
                q_en: 'What is the difference between an ATV rental and an ATV tour?',
                q_es: '¿Cuál es la diferencia entre una renta de ATV y un tour en ATV?',
                a_en: 'An ATV rental gives you more independence to plan your own route, while an ATV tour typically includes a guided experience along selected trails. A guided tour is a good option if you want local knowledge and a structured adventure.',
                a_es: 'Una renta de ATV te brinda mayor independencia para planear tu propia ruta, mientras que un tour en ATV generalmente incluye una experiencia guiada a lo largo de senderos seleccionados. Un tour guiado es una buena opción si deseas conocimiento local y una aventura estructurada.',
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
      </section> {/* <--- AQUÍ TERMINA EXACTAMENTE LA SEPTIMA SECCIÓN */}

          {/* --- OCTAVA SECCIÓN: Call to Action (CTA) --- */}
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
              ? 'If youre ready to explore beyond the historic center, reserve your RZR and discover a more adventurous side of San Miguel de Allende.' 
              : 'Si estás listo para explorar más allá del centro histórico, reserva tu RZR y descubre un lado más aventurero de San Miguel de Allende.  '}
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
            {lang === 'en' ? 'CONTACT US' : 'CONTACTANOS'}
          </a>

        </div>
      </section> {/* <--- AQUÍ TERMINA EXACTAMENTE LA OCTAVA SECCIÓN */}


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
          "name": lang === 'es' ? '¿Cuáles son los mejores tours para hacer en San Miguel de Allende?' : 'What are the best tours to take in San Miguel de Allende?',
          "acceptedAnswer": {
            "@type": "Answer",
            "text": lang === 'es' ? 'Algunos de los mejores tours en San Miguel de Allende incluyen experiencias culturales, aventuras en ATV, tours en RZR, experiencias todo terreno y tours privados. Guey Tours se enfoca en aventuras al aire libre que permiten a los viajeros explorar los alrededores de la ciudad más allá de las zonas turísticas tradicionales.' : 'Some of the best San Miguel de Allende tours include cultural experiences, ATV adventures, RZR tours, off-road experiences, and private tours. Guey Tours focuses on outdoor adventures that allow travelers to explore the city’s surroundings beyond the traditional tourist areas.'
          }
        },
        {
          "@type": "Question",
          "name": lang === 'es' ? '¿Cuáles son los mejores tours en San Miguel de Allende para viajeros internacionales?' : 'What are the best San Miguel de Allende tours for international travelers?',
          "acceptedAnswer": {
            "@type": "Answer",
            "text": lang === 'es' ? 'El mejor tour depende de tus intereses. Para los viajeros internacionales que buscan aventura, naturaleza y actividades al aire libre, las experiencias en ATV y RZR son excelentes opciones. Los tours privados también son ideales para parejas, familias y grupos que buscan una experiencia personalizada.' : 'The best tour depends on your interests. For international travelers looking for adventure, nature, and outdoor activities, ATV and RZR experiences are great options. Private tours are also ideal for couples, families, and groups looking for a personalized experience.'
          }
        },
        {
          "@type": "Question",
          "name": lang === 'es' ? '¿Puedo hacer un tour en ATV en San Miguel de Allende?' : 'Can I take an ATV tour in San Miguel de Allende?',
          "acceptedAnswer": {
            "@type": "Answer",
            "text": lang === 'es' ? 'Sí. Los tours en ATV son una forma emocionante de explorar los paisajes naturales, caminos rurales y senderos todo terreno alrededor de San Miguel de Allende. Guey Tours ofrece experiencias diseñadas para viajeros que desean combinar la aventura con la exploración local.' : 'Yes. ATV tours are an exciting way to explore the natural landscapes, rural roads, and off-road trails around San Miguel de Allende. Guey Tours offers experiences designed for travelers who want to combine adventure with local exploration.'
          }
        },
        {
          "@type": "Question",
          "name": lang === 'es' ? '¿Cuál es la diferencia entre una renta de ATV y un tour en ATV?' : 'What is the difference between an ATV rental and an ATV tour?',
          "acceptedAnswer": {
            "@type": "Answer",
            "text": lang === 'es' ? 'Una renta de ATV te brinda mayor independencia para planear tu propia ruta, mientras que un tour en ATV generalmente incluye una experiencia guiada a lo largo de senderos seleccionados. Un tour guiado es una buena opción si deseas conocimiento local y una aventura estructurada.' : 'An ATV rental gives you more independence to plan your own route, while an ATV tour typically includes a guided experience along selected trails. A guided tour is a good option if you want local knowledge and a structured adventure.'
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
