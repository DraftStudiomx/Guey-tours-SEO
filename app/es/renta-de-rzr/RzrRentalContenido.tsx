'use client'

import { useLang } from '@/lib/i18n'
import { useState } from 'react'
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Navbares from '@/components/Navbares'   // <-- NUEVO: Menú multilenguaje
import FooterEs from '@/components/FooterEs' // <-- NUEVO: Footer en español

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
      <Navbares 
        esHref="/es/renta-de-rzr" 
        enHref="/rzr-rental" 
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
    src="/images/SEO-ES/Recorrido por las históricas calles empedradas de México con renta de Rzr..webp" 
    alt="Vehículo de renta Rzr gris conduciendo por una estrecha calle empedrada flanqueada por coloridos edificios coloniales." 
    title="Recorrido por las históricas calles empedradas de México con renta de Rzr."
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
             Renta de RZR en San Miguel de Allende
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
              Explora San Miguel de Allende más allá del centro de la ciudad con la renta de RZR de Guey Tours. Disfruta de senderos todoterreno, caminos rurales y paisajes naturales mientras experimentas la libertad de conducir un potente vehículo utilitario (UTV). 
              San Miguel de Allende es famoso por su arquitectura colonial, sus calles históricas y su vibrante cultura, pero la región también ofrece emocionantes experiencias al aire libre. 

            </p>

            <p style={{ margin: 0 }}>
              Con la renta de RZR en San Miguel de Allende, puedes descubrir una faceta diferente del destino y disfrutar de una aventura con tu pareja, familia o grupo de amigos.
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
              Contáctanos
            </a>
          </div>




         {/* Segunda sección: Dos columnas (Texto H2 + Imagen) */}
<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '2rem',
  marginTop: '3.5rem',
  background: 'rgba(255, 255, 255, 0.02)',
  padding: 'clamp(1.5rem, 4vw, 3rem)',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.08)'
}}>
  {/* Columna de Texto H2 */}
  <div style={{ flex: '1 1 280px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
    <h2 style={{
      fontFamily: 'var(--font-heading)',
      fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
      color: 'var(--orange, #d97736)',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      margin: 0
    }}>
      Renta de RZR en San Miguel de Allende
    </h2>

    <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem' }}>
      Un RZR es un tipo de vehículo utilitario (UTV) diseñado para la conducción todoterreno. A diferencia de un auto tradicional, un RZR está construido para soportar terrenos irregulares, caminos de terracería y senderos al aire libre, ofreciendo una experiencia de manejo lado a lado.
    </p>

    <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem' }}>
      Guey Tours ofrece alquiler de RZR para viajeros que quieren explorar los alrededores de <a href="https://www.gueytours.com/es/san-miguel-de-allende-tours" style={{ color: 'var(--orange)', textDecoration: 'none', fontWeight: 'bold' }}>San Miguel de Allende</a> a su propio ritmo.
    </p>

    <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem' }}>
      El proceso de renta está diseñado para que tu experiencia sea sencilla. Antes de conducir, puedes recibir información sobre el vehículo, instrucciones básicas de operación, recomendaciones de seguridad y las condiciones de renta.
    </p>
  </div>

  {/* Columna de la Imagen */}
  <div style={{ flex: '1 1 280px', width: '100%', minWidth: 0 }}>
    <div style={{
      width: '100%',
      height: 'clamp(220px, 35vw, 320px)',
      position: 'relative',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
    }}>
      <Image
        src="/images/SEO-ES/Cuatrimoto de la renta de RZR de Guey Tours por San Miguel de Allende.webp" 
        alt=" Fotografía de una persona sobre una cuatrimoto de la renta de RZR de Guey Tours por San Miguel de Allende"
        title="Cuatrimoto de la renta de RZR de Guey Tours por San Miguel de Allende"
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  </div>
</div>
          {/* Inicio de segunda section */}


        {/* Inicio de section tres */}
<section style={{
  padding: 'clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 2rem)',
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
    
    {/* Encabezado H2 */}
    <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(1.8rem, 4vw, 3rem)',
        color: 'var(--orange, #d97736)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        margin: '0 0 1rem 0',
        lineHeight: 1.2
      }}>
        Explora los senderos todoterreno de San Miguel en RZR
      </h2>
      <div style={{
        width: '80px',
        height: '3px',
        background: 'var(--orange, #d97736)',
        margin: '0 auto',
        boxShadow: '0 0 12px var(--orange, #d97736)'
      }} />
    </div>

    {/* Bloque introductorio destacado */}
    <div style={{
      background: 'rgba(255, 255, 255, 0.02)',
      borderLeft: '4px solid var(--orange, #d97736)',
      borderRadius: '0 16px 16px 0',
      padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(1.2rem, 4vw, 3rem)',
      marginBottom: '3.5rem',
      boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
      backdropFilter: 'blur(10px)'
    }}>
      <p style={{
        fontFamily: 'sans-serif',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.85)',
        fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
        lineHeight: 1.8,
        margin: '0 0 1.5rem 0'
      }}>
        Una renta de RZR te da la oportunidad de dejar atrás las rutas turísticas tradicionales y explorar caminos rurales, paisajes naturales y terrenos todoterreno alrededor de San Miguel de Allende.
      </p>
      <p style={{
        fontFamily: 'sans-serif',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.85)',
        fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
        lineHeight: 1.8,
        margin: 0
      }}>
        En lugar de pasar todo tu viaje en la ciudad, puedes experimentar la región circundante desde el asiento del conductor.
      </p>
    </div>

    {/* Subtítulo H3 */}
    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
        color: 'rgba(255, 255, 255, 0.9)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        margin: 0
      }}>
        Las aventuras en RZR son ideales para
      </h3>
    </div>

    {/* Primeras 3 tarjetas de la lista */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
      gap: '1.5rem',
      marginBottom: '1.5rem'
    }}>
      {[
        'Parejas que buscan una experiencia al aire libre',
        'Familias que quieren explorar juntas',
        'Grupos de amigos que buscan aventura'
      ].map((item, index) => (
        <div key={index} style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(217, 119, 54, 0.03) 100%)',
          border: '1px solid rgba(217, 119, 54, 0.25)',
          borderRadius: '14px',
          padding: 'clamp(1.2rem, 3vw, 2rem) clamp(1rem, 3vw, 1.8rem)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '1.2rem'
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
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
            lineHeight: 1.4
          }}>
            {item}
          </span>
        </div>
      ))}
    </div>

    {/* Últimas 2 tarjetas centradas */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
      gap: '1.5rem',
      marginBottom: '3.5rem',
      justifyContent: 'center',
      maxWidth: '750px',
      marginInline: 'auto'
    }}>
      {[
        'Viajeros interesados en la conducción todoterreno',
        'Visitantes que quieren descubrir paisajes más allá del centro histórico'
      ].map((item, index) => (
        <div key={index + 3} style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(217, 119, 54, 0.03) 100%)',
          border: '1px solid rgba(217, 119, 54, 0.25)',
          borderRadius: '14px',
          padding: 'clamp(1.2rem, 3vw, 2rem) clamp(1rem, 3vw, 1.8rem)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '1.2rem'
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
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
            lineHeight: 1.4
          }}>
            {item}
          </span>
        </div>
      ))}
    </div>

    {/* Tarjeta de La ventaja de Guey Tours */}
    <div style={{
      background: 'rgba(217, 119, 54, 0.07)',
      border: '1px solid rgba(217, 119, 54, 0.4)',
      borderRadius: '16px',
      padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(1.2rem, 4vw, 3rem)',
      boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
      textAlign: 'center'
    }}>
      <p style={{
        fontFamily: 'sans-serif',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.85)',
        fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
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
          La ventaja de Guey Tours
        </strong>
        Una de las ventajas de elegir a Guey Tours es el conocimiento local de la zona. Comprender los caminos y los paisajes circundantes puede ayudar a que tu experiencia todoterreno sea más agradable y memorable.
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
        Elige tu experiencia en RZR
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
        Guey Tours ofrece diferentes opciones de RZR según la disponibilidad. Cada renta puede variar en modelo, capacidad, características, duración y precio.
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
          src="/images/SEO-ES/Grupo de cuatrimotos de la renta de RZR de Guey Tours.webp"
          alt="Foto de turistas en grupo de cuatrimotos de la renta de RZR de Guey Tours en San Miguel de Allende."
          title="Grupo de cuatrimotos de la renta de RZR de Guey Tours"
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
          Opciones de RZR
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
          <div><strong>Modelo:</strong> Los modelos disponibles varían</div>
<div><strong>Capacidad:</strong> Dependiendo del RZR seleccionado</div>
<div><strong>Experiencia:</strong> Aventura todoterreno</div>
<div><strong>Características:</strong> Diseño side-by-side y capacidades off-road</div>
<div><strong>Disponibilidad:</strong> Sujeta a fecha y disponibilidad de vehículos</div>
<div><strong>Precio:</strong> Contacta a Guey Tours para conocer los precios actuales</div>
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
            RENTAR UN RZR
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
        ¿Por qué elegir un RZR para tu aventura?
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
        Elegir entre un RZR y un ATV depende del tipo de aventura que buscas.
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
  <span>Mayor capacidad de pasajeros.</span>
</li>
<li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
  <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
  <span>Diseñado para una experiencia lado a lado (side-by-side).</span>
</li>
<li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
  <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
  <span>Más adecuado para parejas, familias o grupos.</span>
</li>
<li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
  <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
  <span>Mayor estabilidad para aventuras todoterreno compartidas.</span>
</li>
<li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
  <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
  <span>Permite a los pasajeros disfrutar de la experiencia juntos.</span>
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
  <span>Diseñado habitualmente para conducción individual.</span>
</li>
<li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
  <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontWeight: 'bold' }}>•</span>
  <span>Conexión más directa entre el conductor y el vehículo.</span>
</li>
<li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
  <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontWeight: 'bold' }}>•</span>
  <span>Más ligero y compacto.</span>
</li>
<li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
  <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontWeight: 'bold' }}>•</span>
  <span>Proporciona una experiencia de conducción más individual.</span>
</li>
<li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
  <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontWeight: 'bold' }}>•</span>
  <span>Ideal para viajeros que buscan un tipo diferente de aventura todoterreno.</span>
</li>
        </ul>
      </div>

    </div>

  </div>
</section>
{/* FIN SECTION 5 */}



        {/* INICIO SECTION - What's Included With Your RZR Rental */}
<section style={{
  padding: 'clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 2rem)',
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, #0b0b0b 100%)',
  color: '#fff',
  fontFamily: 'sans-serif',
  position: 'relative'
}}>
  <div style={{ maxWidth: '900px', margin: '0 auto' }}>
    
    {/* Título H2 y Párrafo Introductorio */}
    <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
        color: 'var(--orange, #d97736)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        margin: '0 0 1rem 0',
        lineHeight: 1.2
      }}>
        ¿Qué incluye tu renta de RZR?
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
        fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
        lineHeight: 1.8,
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        Las inclusiones exactas dependen de la renta seleccionada y de las condiciones actuales. Antes de reservar, Guey Tours puede proporcionarte información sobre lo que incluye tu experiencia.
      </p>
    </div>

    {/* Tarjeta Contenedora de Inclusiones */}
    <div style={{
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(217, 119, 54, 0.06) 100%)',
      border: '1px solid rgba(217, 119, 54, 0.35)',
      borderRadius: '16px',
      padding: 'clamp(1.5rem, 4vw, 3rem)',
      boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      
      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
        color: 'var(--orange, #d97736)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        margin: 0,
        textAlign: 'center'
      }}>
        Según la renta, esto puede incluir:
      </h3>

      {/* Lista de Inclusiones en Cuadrícula Responsiva */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
        gap: '1rem 2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '2rem 0'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.9)', fontSize: '16px' }}>
          <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
          <span>Vehículo RZR</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.9)', fontSize: '16px' }}>
          <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
          <span>Equipo de seguridad</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.9)', fontSize: '16px' }}>
          <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
          <span>Casco, cuando corresponda</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.9)', fontSize: '16px' }}>
          <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
          <span>Instrucciones básicas de operación</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.9)', fontSize: '16px' }}>
          <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
          <span>Orientación previa al manejo</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.9)', fontSize: '16px' }}>
          <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
          <span>Información sobre los requisitos de renta</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.9)', fontSize: '16px', gridColumn: '1 / -1' }}>
          <span style={{ color: 'var(--orange, #d97736)', fontWeight: 'bold' }}>✓</span>
          <span>Términos y condiciones de renta</span>
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
          Antes de tu aventura, asegúrate de comprender las instrucciones de operación, los requisitos de seguridad y las políticas de renta.
        </p>
      </div>

    </div>

  </div>
</section>
{/* FIN SECTION - What's Included With Your RZR Rental */}

          

          {/* --- SÉPTIMA SECCIÓN: Why Rent a RZR With Guey Tours? --- */}
<div style={{ marginTop: 'clamp(3.5rem, 6vw, 7rem)', width: '100%', padding: '0 clamp(0.75rem, 3vw, 1rem)' }}>
  
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
    
    {/* Imagen de fondo principal */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url("/images/happy-child-on-atv-rzr-rentals.webp")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 1
    }} />

    {/* Etiqueta img SEO oculta */}
    <img 
      src="/images/SEO-ES/happy-child-on-atv-rzr-rentals.webp" 
      alt="Niño feliz usando casco y gafas multicolores en una cuatrimoto ATV roja, sonriendo y saludando en una calle colonial." 
      title="Experiencia de aventura familiar con renta de RZR y paseo en ATV."
      style={{ display: 'none' }}
    />

    {/* Contenido principal */}
    <div style={{ position: 'relative', zIndex: 2 }}>
      
      {/* Encabezado */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
          color: 'var(--orange, #d97736)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          margin: '0 0 0.8rem 0',
          lineHeight: 1.25
        }}>
          ¿Por Qué Rentar un RZR Con Guey Tours?
        </h2>
        <p style={{
          fontFamily: 'var(--font-body, sans-serif)',
          fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
          color: 'rgba(255, 255, 255, 0.85)',
          maxWidth: '800px',
          margin: '0 auto 1.5rem auto',
          lineHeight: 1.6
        }}>
          Elegir la compañía de renta correcta es una parte importante de tu aventura. Guey Tours combina vehículos de calidad, conocimiento local y asistencia personalizada para ayudar a los viajeros internacionales a disfrutar de su experiencia en RZR en San Miguel de Allende.
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
        fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        marginBottom: '2rem'
      }}>
        Con Guey Tours puedes esperar:
      </p>

      {/* Grid de Beneficios */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
        gap: '1.25rem',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        
        {/* Tarjeta 1 */}
        <div style={{
          background: 'rgba(15, 15, 15, 0.75)',
          border: '1px solid rgba(217, 119, 54, 0.25)',
          borderRadius: '12px',
          padding: 'clamp(1.2rem, 3vw, 1.8rem)',
          backdropFilter: 'blur(6px)',
          textAlign: 'center'
        }}>
          <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.3rem', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>01</span>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.05rem', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
            Vehículos en Óptimas Condiciones
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            Unidades cuidadas y listas para el camino.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div style={{
          background: 'rgba(15, 15, 15, 0.75)',
          border: '1px solid rgba(217, 119, 54, 0.25)',
          borderRadius: '12px',
          padding: 'clamp(1.2rem, 3vw, 1.8rem)',
          backdropFilter: 'blur(6px)',
          textAlign: 'center'
        }}>
          <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.3rem', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>02</span>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.05rem', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
            Enfoque en Seguridad
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            Experiencias diseñadas priorizando tu protección.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div style={{
          background: 'rgba(15, 15, 15, 0.75)',
          border: '1px solid rgba(217, 119, 54, 0.25)',
          borderRadius: '12px',
          padding: 'clamp(1.2rem, 3vw, 1.8rem)',
          backdropFilter: 'blur(6px)',
          textAlign: 'center'
        }}>
          <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.3rem', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>03</span>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.05rem', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
            Conocimiento Local
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            Conocimiento experto de San Miguel de Allende.
          </p>
        </div>

        {/* Tarjeta 4 */}
        <div style={{
          background: 'rgba(15, 15, 15, 0.75)',
          border: '1px solid rgba(217, 119, 54, 0.25)',
          borderRadius: '12px',
          padding: 'clamp(1.2rem, 3vw, 1.8rem)',
          backdropFilter: 'blur(6px)',
          textAlign: 'center'
        }}>
          <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.3rem', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>04</span>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.05rem', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
            Asistencia en Inglés
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            Atención especializada para visitantes extranjeros.
          </p>
        </div>

        {/* Tarjeta 5 */}
        <div style={{
          background: 'rgba(15, 15, 15, 0.75)',
          border: '1px solid rgba(217, 119, 54, 0.25)',
          borderRadius: '12px',
          padding: 'clamp(1.2rem, 3vw, 1.8rem)',
          backdropFilter: 'blur(6px)',
          textAlign: 'center'
        }}>
          <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.3rem', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>05</span>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.05rem', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
            Servicio Personalizado
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            Trato cercano adaptado a lo que buscas.
          </p>
        </div>

        {/* Tarjeta 6 */}
        <div style={{
          background: 'rgba(15, 15, 15, 0.75)',
          border: '1px solid rgba(217, 119, 54, 0.25)',
          borderRadius: '12px',
          padding: 'clamp(1.2rem, 3vw, 1.8rem)',
          backdropFilter: 'blur(6px)',
          textAlign: 'center'
        }}>
          <span style={{ color: 'var(--orange, #d97736)', fontSize: '1.3rem', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>06</span>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.05rem', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
            Soporte Integral
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            Soporte antes y durante tu renta.
          </p>
        </div>

      </div>

      {/* Tarjeta Inferior */}
      <div style={{
        background: 'rgba(20, 20, 20, 0.85)',
        border: '1px solid rgba(217, 119, 54, 0.4)',
        borderRadius: '12px',
        padding: 'clamp(1.2rem, 3vw, 1.8rem)',
        backdropFilter: 'blur(8px)',
        textAlign: 'center',
        maxWidth: '1000px',
        margin: '1.8rem auto 0 auto'
      }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--orange, #d97736)', fontSize: '1.1rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
          Aventura Local Auténtica
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
          Vive una experiencia genuina explorando los paisajes y caminos alrededor de San Miguel de Allende.
        </p>
      </div>

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
          q: '¿Qué es un RZR y cómo funciona?',
          a: 'Un RZR es un vehículo todoterreno (UTV) diseñado para la conducción off-road. Su configuración lado a lado permite que dos o más pasajeros, según el modelo, disfruten juntos de senderos, caminos rurales y paisajes naturales.',
        },
        {
          q: '¿Dónde puedo rentar un RZR en San Miguel de Allende?',
          a: 'Puedes rentar un RZR con Guey Tours en San Miguel de Allende. La disponibilidad, las opciones de vehículos, la duración de la renta y los precios pueden variar, por lo que se recomienda contactar al equipo antes de reservar.',
        },
        {
          q: '¿Cuánto cuesta rentar un RZR en San Miguel de Allende?',
          a: 'El precio de las rentas de RZR en San Miguel de Allende depende de factores como el vehículo, la duración de la renta y la disponibilidad. Contacta a Guey Tours para conocer los precios actuales y las opciones disponibles para tus fechas de viaje.',
        },
        {
          q: '¿Necesito licencia de conducir para rentar un RZR?',
          a: 'Los requisitos para el conductor pueden variar según las condiciones de renta y el vehículo. Antes de reservar, consulta con Guey Tours sobre la edad mínima, los requisitos de licencia de conducir y otras condiciones para operar un RZR.',
        },
      ].map((faq, i) => {
        const isOpen = openIndex === i

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
                {faq.q}
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
                {faq.a}
              </p>
            </div>
          </div>
        )
      })}
    </div>

  </div>
</section>

          {/* --- OCTAVA SECCIÓN: Preguntas Frecuentes (FAQ) --- */}

          

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
            --- ¿Listo para la acción? ---
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
           Si estás listo para explorar más allá del centro histórico, reserva tu RZR y descubre un lado más aventurero de San Miguel de Allende.
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
           CONTÁCTANOS
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
          "name": "¿Qué es un RZR y cómo funciona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un RZR es un vehículo todoterreno (UTV) diseñado para la conducción off-road. Su configuración lado a lado permite que dos o más pasajeros, según el modelo, disfruten juntos de senderos, caminos rurales y paisajes naturales."
          }
        },
        {
          "@type": "Question",
          "name": "¿Dónde puedo rentar un RZR en San Miguel de Allende?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Puedes rentar un RZR con Guey Tours en San Miguel de Allende. La disponibilidad, las opciones de vehículos, la duración de la renta y los precios pueden variar, por lo que se recomienda contactar al equipo antes de reservar."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuánto cuesta rentar un RZR en San Miguel de Allende?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El precio de las rentas de RZR en San Miguel de Allende depende de factores como el vehículo, la duración de la renta y la disponibilidad. Contacta a Guey Tours para conocer los precios actuales y las opciones disponibles para tus fechas de viaje."
          }
        },
        {
          "@type": "Question",
          "name": "¿Necesito licencia de conducir para rentar un RZR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Los requisitos para el conductor pueden variar según las condiciones de renta y el vehículo. Antes de reservar, consulta con Guey Tours sobre la edad mínima, los requisitos de licencia de conducir y otras condiciones para operar un RZR."
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
