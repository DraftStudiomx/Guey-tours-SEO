'use client'

import { useLang } from '@/lib/i18n'
import { useState } from 'react'
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Navbares from '@/components/Navbares'   // <-- NUEVO: Menú multilenguaje
import FooterEs from '@/components/FooterEs' // <-- NUEVO: Footer en español

export default function SanMiguelContent() {
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
    src="/images/SEO-ES/Grupo familiar que vivió la experiencia de los tours en San Miguel de Allende.webp" 
    alt="Fotografía de un grupo familiar que vivió la experiencia de los tours en San Miguel de Allende con Guey Tours" 
    title="Grupo familiar que vivió la experiencia de los tours en San Miguel de Allende"
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
              Tours en San Miguel de Allende
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
              Descubre San Miguel de Allende desde una perspectiva diferente con Guey Tours. Ve más allá de la experiencia turística tradicional y explora paisajes naturales, caminos rurales, miradores panorámicos y aventuras al aire libre con guías locales que conocen el destino desde adentro.
            </p>

            <p style={{ margin: 0 }}>
              San Miguel de Allende es uno de los destinos más cautivadores de México, conocido por su colorida arquitectura colonial, sus calles empedradas, su vibrante escena cultural y su encanto histórico, pero hay mucho más por descubrir más allá del centro de la ciudad.
            </p>

            <p style={{ margin: 0 }}>
              Con los tours en San Miguel de Allende de Guey Tours, los viajeros pueden combinar el turismo con la aventura, la naturaleza y experiencias locales auténticas.
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


         {/* Inicio de section dos */}
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
    
    {/* Título H2 */}
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
        Explora San Miguel de Allende con Guey Tours
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
      padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(1.2rem, 4vw, 3rem)',
      marginBottom: '3.5rem',
      boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
      backdropFilter: 'blur(10px)'
    }}>
      <p style={{
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.85)',
        fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
        lineHeight: 1.8,
        margin: '0 0 1.5rem 0'
      }}>
        Un viaje a San Miguel de Allende puede ser mucho más que caminar por sus calles históricas. Guey Tours ofrece experiencias diseñadas para ayudar a viajeros internacionales a descubrir los paisajes y alrededores de San Miguel a través de la aventura y la exploración.
      </p>
      <p style={{
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.85)',
        fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
        lineHeight: 1.8,
        margin: 0
      }}>
        En lugar de seguir solo las rutas turísticas convencionales, estas experiencias guiadas te llevan a zonas donde puedes experimentar:
      </p>
    </div>

    {/* Cuadrícula de tarjetas con las 6 experiencias */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
      gap: '1.5rem',
      marginBottom: '3.5rem'
    }}>
      {[
        'Naturaleza y paisajes abiertos',
        'Caminos rurales y rutas off-road',
        'Miradores panorámicos',
        'Actividades de aventura',
        'Comunidades locales y áreas circundantes',
        'Perspectivas únicas de la región'
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
            border: '1px solid rgba(217, 119, 54, 0.4)',
            flexShrink: 0
          }}>
            0{index + 1}
          </div>
          <span style={{
            fontFamily: 'sans-serif',
            fontStyle: 'normal',
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

    {/* Tarjeta de cierre sobre los guías locales */}
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
        fontStyle: 'normal',
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
          La Diferencia Local
        </strong>
        La diferencia es el conocimiento local de los guías. Ellos conocen los caminos, paisajes y experiencias que pueden ayudar a los viajeros a descubrir otro lado del destino.
      </p>
    </div>

  </div>
</section>
{/* Fin de section dos */}


          

          {/* INICIO SECTION 3 */}
<section style={{
  padding: '6rem 2rem',
  background: 'linear-gradient(180deg, #0b0b0b 0%, rgba(217, 119, 54, 0.04) 100%)',
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
        Nuestros tours en San Miguel de Allende
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
        Elige la experiencia que mejor se adapte a tu estilo de viaje. Ya sea que busques una aventura al aire libre, una experiencia privada o una forma emocionante de explorar los alrededores, Guey Tours ofrece diferentes maneras de vivir San Miguel de Allende.
      </p>
    </div>

    {/* Contenedor de las 2 tarjetas superiores con imagen */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '2rem',
      marginBottom: '2rem',
      justifyContent: 'center'
    }}>
      
      {/* --- TARJETA 1 (ATV Adventures) --- */}
      <div style={{
        background: '#000',
        border: '1px solid rgba(217, 119, 54, 0.3)',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 15px 35px rgba(0,0,0,0.6)'
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
          <img
            src="/images/SEO-ES/Tours en San Miguel de Allende mediante cuatrimotos.webp"
            alt="Fotografía de los Tours en San Miguel de Allende mediante cuatrimotos que ofrecemos en Guey Tours"
            title="Tours en San Miguel de Allende mediante cuatrimotos"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '1.2rem' }}>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.4rem',
            color: '#fff',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            margin: 0
          }}>
            Aventuras en cuatrimoto (ATV)
          </h3>
          <p style={{
            fontFamily: 'sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '16px',
            lineHeight: 1.6,
            margin: 0
          }}>
            Explora senderos y paisajes naturales en un ATV. Estas experiencias son ideales para viajeros que buscan aventura, exploración off-road y diversión al aire libre.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '14px', color: 'rgba(255,255,255,0.7)', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
            <div><strong>Duración:</strong> Varía según la experiencia</div>
<div><strong>Experiencia:</strong> Aventura y off-road</div>
<div><strong>Destacados:</strong> Senderos, paisajes y rutas panorámicas</div>
          </div>
          <div style={{ marginTop: 'auto', paddingTop: '1rem', textAlign: 'center' }}>
            <a href="https://www.gueytours.com/es/renta-de-rzr" style={{
              display: 'inline-block',
              background: 'transparent',
              color: 'var(--orange, #d97736)',
              border: '2px solid var(--orange, #d97736)',
              padding: '0.75rem 1.5rem',
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
              Ver Tour
            </a>
          </div>
        </div>
      </div>

      {/* --- TARJETA 2 (RZR Adventures) --- */}
      <div style={{
        background: '#000',
        border: '1px solid rgba(217, 119, 54, 0.3)',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 15px 35px rgba(0,0,0,0.6)'
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
          <img
            src="/images/SEO-ES/Tours en San Miguel de Allende con cuatrimotos RZR.webp"
            alt="Fotografía de turistas realizando Tours en San Miguel de Allende con cuatrimotos RZR gracias a Guey Tours."
            title="Tours en San Miguel de Allende con cuatrimotos RZR"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '1.2rem' }}>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.4rem',
            color: '#fff',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            margin: 0
          }}>
            Aventuras en RZR
          </h3>
          <p style={{
            fontFamily: 'sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '16px',
            lineHeight: 1.6,
            margin: 0
          }}>
            Lleva tu exploración más allá con una experiencia en RZR. Disfruta de la libertad de rodar por senderos todoterreno y entornos naturales mientras descubres áreas que van más allá de las rutas turísticas tradicionales.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '14px', color: 'rgba(255,255,255,0.7)', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
            <div><strong>Duración:</strong> Varía según la experiencia</div>
<div><strong>Experiencia:</strong> Aventura todoterreno</div>
<div><strong>Destacados:</strong> Senderos, naturaleza y paisajes panorámicos</div>
          </div>
          <div style={{ marginTop: 'auto', paddingTop: '1rem', textAlign: 'center' }}>
            <a href="https://www.gueytours.com/es/renta-de-rzr" style={{
              display: 'inline-block',
              background: 'transparent',
              color: 'var(--orange, #d97736)',
              border: '2px solid var(--orange, #d97736)',
              padding: '0.75rem 1.5rem',
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
              Ver Tour
            </a>
          </div>
        </div>
      </div>

    </div>

    {/* --- TARJETA 3 INFERIOR (Puro texto, dos párrafos, sin imagen, centrada y estilizada) --- */}
    <div style={{
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(217, 119, 54, 0.05) 100%)',
      border: '1px solid rgba(217, 119, 54, 0.3)',
      borderRadius: '16px',
      padding: '2.5rem',
      boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
      maxWidth: '800px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.2rem',
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
        Experiencias privadas
      </h3>
      <p style={{
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.85)',
        fontSize: '16px',
        lineHeight: 1.6,
        margin: 0
      }}>
        ¿Buscas una aventura más personalizada? Los tours privados son una excelente opción para parejas, familias y grupos que desean disfrutar de San Miguel a su propio ritmo.
      </p>
      <p style={{
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.85)',
        fontSize: '16px',
        lineHeight: 1.6,
        margin: 0
      }}>
        Estas experiencias ofrecen un itinerario más personalizado y la flexibilidad de enfocarse en las actividades y lugares que más le interesan a tu grupo.
      </p>
      <div style={{ paddingTop: '0.5rem' }}>
        <a href="https://www.gueytours.com/es/renta-de-rzr" style={{
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
          Ver Tour
        </a>
      </div>
    </div>

  </div>
</section>
{/* FIN SECTION 3 */}


          

          {/* Cuarta sección: Diseño apilado (Imagen arriba o banner lateral limpio con texto completo) */}
<div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  marginTop: '5rem',
  background: 'rgba(255, 255, 255, 0.02)',
  padding: '3rem 2rem',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  maxWidth: '900px',
  marginInline: 'auto'
}}>
  {/* Título H2 Centrado o Arriba */}
  <div style={{ textAlign: 'center' }}>
    <h2 style={{
      fontFamily: 'var(--font-heading)',
      fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
      color: 'var(--orange, #d97736)',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      lineHeight: 1.3,
      margin: 0
    }}>
      Descubre San Miguel más allá del centro histórico
    </h2>
    <div style={{
      width: '60px',
      height: '3px',
      background: 'var(--orange, #d97736)',
      margin: '1rem auto 0 auto',
      boxShadow: '0 0 10px var(--orange, #d97736)'
    }} />
  </div>

  {/* Imagen destacada en formato panorámico/horizontal para que luzca bien */}
  <div style={{
    width: '100%',
    height: '350px',
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid rgba(217, 119, 54, 0.3)',
    boxShadow: '0 15px 35px rgba(0,0,0,0.6)'
  }}>
    <Image
      src="/images/SEO-ES/Amigos viviendo los tours en San Miguel de Allende.webp" 
      alt="Fotografía de un grupo de amigos viviendo los tours en San Miguel de Allende gracias a Guey Tours."
      title="Amigos viviendo los tours en San Miguel de Allende"
      fill
      style={{ objectFit: 'cover' }}
    />
  </div>

  {/* Contenedor de tus párrafos exactos con excelente legibilidad */}
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
    color: 'rgba(255,255,255,0.85)',
    fontSize: '1.05rem',
    lineHeight: 1.8
  }}>
    <p style={{ margin: 0 }}>
      El centro histórico de San Miguel de Allende es una parte esencial de cualquier visita, pero la región circundante ofrece una experiencia completamente diferente.
    </p>

    <p style={{ margin: 0 }}>
  Con <a href="https://www.gueytours.com/" style={{ color: 'var(--orange)', textDecoration: 'none', fontWeight: 'bold' }}>Guey Tours</a>, los viajeros pueden explorar áreas rurales, caminos todoterreno, miradores panorámicos y paisajes naturales que a menudo quedan fuera de los itinerarios turísticos convencionales.
</p>

    <p style={{ margin: 0 }}>
      Estas experiencias te permiten ver el destino desde una nueva perspectiva mientras disfrutas de la libertad al aire libre.
    </p>

    <p style={{ margin: 0 }}>
      Para los visitantes internacionales, esta puede ser una excelente manera de combinar la cultura y la arquitectura de San Miguel de Allende con la belleza natural y las oportunidades de aventura de la región.
    </p>
  </div>
</div>
          {/* Cuarta sección: Diseño apilado (Imagen arriba o banner lateral limpio con texto completo) */}



        {/* Quinta sección: 3 columnas horizontales compactas con botones simétricos */}
<div style={{
  marginTop: '6rem',
  padding: '2rem 0',
  borderTop: '1px solid rgba(255, 255, 255, 0.08)'
}}>
  {/* Título Principal Centrado Arriba */}
  <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
    <h2 style={{
      fontFamily: 'var(--font-heading)',
      fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
      color: 'var(--orange, #d97736)',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      lineHeight: 1.2,
      margin: 0
    }}>
     Experiencias de aventura en San Miguel de Allende
    </h2>
  </div>

  {/* Contenedor de 3 Columnas */}
  <div style={{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '2.5rem',
    justifyContent: 'space-between'
  }}>
    
    {/* Columna 1: ATV Adventures */}
    <div style={{ 
      flex: '1 1 30%', 
      minWidth: '280px', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '0.8rem', 
      borderLeft: '2px solid var(--orange, #d97736)', 
      paddingLeft: '1.2rem' 
    }}>
      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '1.2rem',
        color: 'var(--orange, #d97736)',
        margin: 0
      }}>
        Aventuras en cuatrimotos (ATV)
      </h3>
      <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>
        Las experiencias en cuatrimotos están diseñadas para viajeros que quieren explorar el aire libre mientras disfrutan de una emocionante aventura todoterreno.
      </p>
      <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>
        Si prefieres rentar una cuatrimoto y explorar según tus propios planes, también puedes conocer más sobre la renta de ATV en San Miguel de Allende.
      </p>
      
      {/* Botón de ATV Rentals */}
      <div style={{ paddingTop: '0.3rem' }}>
        <a href="https://www.gueytours.com/es/renta-de-rzr" style={{
          display: 'inline-block',
          background: 'transparent',
          color: 'var(--orange, #d97736)',
          border: '2px solid var(--orange, #d97736)',
          padding: '0.5rem 1.2rem',
          borderRadius: '50px',
          fontWeight: 'bold',
          fontFamily: 'var(--font-heading)',
          textDecoration: 'none',
          textTransform: 'uppercase',
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--orange, #d97736)'; e.currentTarget.style.color = '#fff'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--orange, #d97736)'; }}
        >
          Renta de ATV
        </a>
      </div>
    </div>

    {/* Columna 2: RZR Adventures */}
    <div style={{ 
      flex: '1 1 30%', 
      minWidth: '280px', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '0.8rem', 
      borderLeft: '2px solid rgba(255,255,255,0.2)', 
      paddingLeft: '1.2rem' 
    }}>
      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '1.2rem',
        color: 'var(--orange, #d97736)',
        margin: 0
      }}>
        Aventuras en RZR
      </h3>
      <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>
        Las experiencias en RZR ofrecen otra forma emocionante de explorar la región. Con un vehículo todoterreno potente y rutas rodeadas de naturaleza, puedes experimentar los paisajes de San Miguel más allá de la ciudad.
      </p>
      <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>
        Si buscas específicamente opciones de renta de vehículos, explora las rentas de RZR disponibles en San Miguel de Allende.
      </p>
      
      {/* Botón de RZR Rentals */}
      <div style={{ paddingTop: '0.3rem' }}>
        <a href="https://www.gueytours.com/es/renta-de-rzr" style={{
          display: 'inline-block',
          background: 'transparent',
          color: 'var(--orange, #d97736)',
          border: '2px solid var(--orange, #d97736)',
          padding: '0.5rem 1.2rem',
          borderRadius: '50px',
          fontWeight: 'bold',
          fontFamily: 'var(--font-heading)',
          textDecoration: 'none',
          textTransform: 'uppercase',
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--orange, #d97736)'; e.currentTarget.style.color = '#fff'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--orange, #d97736)'; }}
        >
          Renta de RZR
        </a>
      </div>
    </div>

    {/* Columna 3: Private Experiences */}
    <div style={{ 
      flex: '1 1 30%', 
      minWidth: '280px', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '0.8rem', 
      borderLeft: '2px solid rgba(255,255,255,0.2)', 
      paddingLeft: '1.2rem' 
    }}>
      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '1.2rem',
        color: 'var(--orange, #d97736)',
        margin: 0
      }}>
        Experiencias Privadas
      </h3>
      <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>
        Las experiencias privadas son ideales cuando quieres disfrutar de una aventura con tu propio grupo. Parejas, familias, amigos y grupos privados pueden elegir una experiencia que se adapte mejor a sus intereses y horarios.
      </p>
      <p style={{ margin: 0, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>
        Con un servicio personalizado y guías locales, tu aventura puede convertirse en una parte más memorable de tu viaje a San Miguel de Allende.
      </p>

      {/* Botón de Private Experiences */}
      <div style={{ paddingTop: '0.3rem' }}>
        <a href="https://www.gueytours.com/" style={{
          display: 'inline-block',
          background: 'transparent',
          color: 'var(--orange, #d97736)',
          border: '2px solid var(--orange, #d97736)',
          padding: '0.5rem 1.2rem',
          borderRadius: '50px',
          fontWeight: 'bold',
          fontFamily: 'var(--font-heading)',
          textDecoration: 'none',
          textTransform: 'uppercase',
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--orange, #d97736)'; e.currentTarget.style.color = '#fff'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--orange, #d97736)'; }}
        >
          Tours privados
        </a>
      </div>
    </div>

  </div>
</div>
          {/* Quinta sección: 3 columnas horizontales compactas con botones simétricos */}

          

          {/* --- SEXTA SECCIÓN: Why Choose Guey Tours? --- */}
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
    
    {/* Imagen de fondo principal */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url("/images/historic-streets-san-miguel-de-allende-tours.webp")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 1
    }} />

    {/* Etiqueta img oculta */}
    <img 
      src="/images/historic-streets-san-miguel-de-allende-tours.webp" 
      alt="Vibrant colored colonial building facades and a cobblestone street during San Miguel de allende tours" 
      title="Walking through colonial alleyways with San Miguel de allende tours"
      style={{ display: 'none' }}
    />

    {/* Contenido en la parte superior del fondo */}
    <div style={{ position: 'relative', zIndex: 2 }}>
      
      {/* Encabezado de la Sección */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 3vw, 2.5rem)',
          color: 'var(--orange, #d97736)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          margin: '0 0 0.8rem 0',
        }}>
          ¿Por qué elegir Guey Tours?
        </h2>
        <p style={{
          fontFamily: 'var(--font-body, sans-serif)',
          fontSize: '1.05rem',
          color: 'rgba(255, 255, 255, 0.85)',
          maxWidth: '800px',
          margin: '0 auto 1.5rem auto',
          lineHeight: 1.6
        }}>
          Elegir el tour correcto puede marcar una gran diferencia al explorar un destino. Guey Tours combina la aventura con el conocimiento local y un servicio personalizado para crear experiencias para viajeros que quieren más que un tour convencional por la ciudad.
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
        Con Guey Tours puedes esperar:
      </p>

      {/* Grid de Beneficios */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
        gap: '1.5rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        
        {/* Tarjeta 1: Guías locales */}
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
            Guías Locales
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            Guías locales con profundo conocimiento de la región.
          </p>
        </div>

        {/* Tarjeta 2: Atención Bilingüe */}
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
            Atención Bilingüe
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            Guías de habla inglesa para viajeros internacionales.
          </p>
        </div>

        {/* Tarjeta 3: Seguridad */}
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
            Enfoque en Seguridad
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            Experiencias diseñadas priorizando tu seguridad.
          </p>
        </div>

        {/* Tarjeta 4: Vehículos de calidad */}
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
            Vehículos de Calidad
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            Equipos y vehículos en óptimas condiciones para la ruta.
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
            Servicio Personalizado
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            Atención cercana adaptada a lo que necesitas.
          </p>
        </div>

        {/* Tarjeta 6: Aventura al aire libre */}
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
            Aventura al Aire Libre
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
            Actividades enfocadas en la aventura y la naturaleza.
          </p>
        </div>

      </div>

      {/* Tarjeta Inferior */}
      <div style={{
        marginTop: '1.8rem',
        background: 'rgba(20, 20, 20, 0.85)',
        border: '1px solid rgba(217, 119, 54, 0.4)',
        borderRadius: '12px',
        padding: '1.8rem',
        backdropFilter: 'blur(8px)',
        textAlign: 'center',
        maxWidth: '900px',
        margin: '1.8rem auto 0 auto'
      }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--orange, #d97736)', fontSize: '1.1rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
          Más Allá de lo Convencional
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
          Disfruta de experiencias que van más allá de las zonas turísticas tradicionales, descubriendo la verdadera esencia de San Miguel.
        </p>
      </div>

    </div>

  </div>

</div>
{/* --- FIN DE LA SEXTA SECCIÓN --- */}
          



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
          q: '¿Cuáles son los mejores tours para hacer en San Miguel de Allende?',
          a: 'Algunos de los mejores tours en San Miguel de Allende incluyen experiencias culturales, aventuras en ATV, tours en RZR, experiencias todo terreno y tours privados. Guey Tours se enfoca en aventuras al aire libre que permiten a los viajeros explorar los alrededores de la ciudad más allá de las zonas turísticas tradicionales.',
        },
        {
          q: '¿Cuáles son los mejores tours en San Miguel de Allende para viajeros internacionales?',
          a: 'El mejor tour depende de tus intereses. Para los viajeros internacionales que buscan aventura, naturaleza y actividades al aire libre, las experiencias en ATV y RZR son excelentes opciones. Los tours privados también son ideales para parejas, familias y grupos que buscan una experiencia personalizada.',
        },
        {
          q: '¿Puedo hacer un tour en ATV en San Miguel de Allende?',
          a: 'Sí. Los tours en ATV son una forma emocionante de explorar los paisajes naturales, caminos rurales y senderos todo terreno alrededor de San Miguel de Allende. Guey Tours ofrece experiencias diseñadas para viajeros que desean combinar la aventura con la exploración local.',
        },
        {
          q: '¿Cuál es la diferencia entre una renta de ATV y un tour en ATV?',
          a: 'Una renta de ATV te brinda mayor independencia para planear tu propia ruta, mientras que un tour en ATV generalmente incluye una experiencia guiada a lo largo de senderos seleccionados. Un tour guiado es una buena opción si deseas conocimiento local y una aventura estructurada.',
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
      Ya sea que visites San Miguel por primera vez o regreses para descubrir algo nuevo, los tours por San Miguel de Allende con Guey Tours pueden ayudarte a experimentar el destino más allá de lo esperado.
    </p>

    <a
      href="https://www.gueytours.com/contact"
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
      PLANEA TU AVENTURA
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
          "name": "¿Cuáles son los mejores tours para hacer en San Miguel de Allende?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Algunos de los mejores tours en San Miguel de Allende incluyen experiencias culturales, aventuras en ATV, tours en RZR, experiencias todo terreno y tours privados. Guey Tours se enfoca en aventuras al aire libre que permiten a los viajeros explorar los alrededores de la ciudad más allá de las zonas turísticas tradicionales."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuáles son los mejores tours en San Miguel de Allende para viajeros internacionales?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El mejor tour depende de tus intereses. Para los viajeros internacionales que buscan aventura, naturaleza y actividades al aire libre, las experiencias en ATV y RZR son excelentes opciones. Los tours privados también son ideales para parejas, familias y grupos que buscan una experiencia personalizada."
          }
        },
        {
          "@type": "Question",
          "name": "¿Puedo hacer un tour en ATV en San Miguel de Allende?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Los tours en ATV son una forma emocionante de explorar los paisajes naturales, caminos rurales y senderos todo terreno alrededor de San Miguel de Allende. Guey Tours ofrece experiencias diseñadas para viajeros que desean combinar la aventura con la exploración local."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuál es la diferencia entre una renta de ATV y un tour en ATV?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Una renta de ATV te brinda mayor independencia para planear tu propia ruta, mientras que un tour en ATV generalmente incluye una experiencia guiada a lo largo de senderos seleccionados. Un tour guiado es una buena opción si deseas conocimiento local y una aventura estructurada."
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