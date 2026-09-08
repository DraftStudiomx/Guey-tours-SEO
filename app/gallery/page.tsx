import { client } from '@/lib/sanity'
import { galleryAllQuery } from '@/lib/queries'
import Gallery from '@/components/Gallery'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Guey Tours Gallery. ATV & RZR Adventures in San Miguel',
  description: 'Explore the Guey Tours gallery and discover photos and videos of ATV, RZR, off-road adventures and unforgettable experiences in San Miguel de Allende.',
  keywords: ['ATV tours San Miguel de Allende', 'RZR rentals gallery', 'off-road adventures photo gallery', 'Guey Tours pictures'],
  alternates: {
    canonical: 'https://www.gueytours.com/gallery',
  },
}

export default async function GalleryPage() {
  const images = await client.fetch(galleryAllQuery)

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '200px', background: 'var(--charcoal)', minHeight: '100vh', paddingBottom: '6rem' }}>
        
        {/* Contenido en Inglés */}
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem 4rem 2rem', textAlign: 'center' }}>
          
          <div style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--orange)',
            fontSize: '0.85rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}>
            ——— GUEY TOURS EXPERIENCE ———
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            fontWeight: 800,
            color: 'white',
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            Explore the Guey Tours Gallery
          </h1>

          <div style={{
            width: '60px',
            height: '3px',
            backgroundColor: 'var(--orange)',
            margin: '0 auto 2rem auto',
          }} />

          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.05rem',
            lineHeight: 1.75,
            marginBottom: '1.2rem',
            fontFamily: 'var(--font-body)',
          }}>
            Get a closer look at the <Link href="https://www.gueytours.com/" style={{ color: 'var(--orange)', fontWeight: 600, textDecoration: 'none !important' }}><span style={{ textDecoration: 'none' }}>Guey Tours</span></Link> experience through our gallery of photos and videos. Discover the excitement of ATV and RZR adventures, explore breathtaking landscapes, and see what it is like to experience <strong style={{ color: 'white' }}>San Miguel de Allende beyond the city center</strong>.
          </p>

          <p style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '1rem',
            lineHeight: 1.75,
            marginBottom: '2.5rem',
            fontFamily: 'var(--font-body)',
          }}>
            Our gallery showcases real moments from our tours, outdoor adventures, off-road trails, and unforgettable experiences with travelers from around the world. Whether you are planning your first adventure or looking for inspiration for your next visit, these images and videos will give you a glimpse of what awaits.
          </p>

          <Link 
            href="/contact" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--orange)',
              color: 'white',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '0.9rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '0.9rem 2rem',
              borderRadius: '999px',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
          >
            Start planning your adventure <ArrowRight size={16} />
          </Link>
        </div>

        {/* Separador elegante entre idiomas */}
        <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(255,255,255,0.15)', margin: '0 auto 4rem auto' }} />

        {/* Contenido en Español */}
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem 4rem 2rem', textAlign: 'center' }}>
          
          <div style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--orange)',
            fontSize: '0.85rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}>
            ——— EXPERIENCIA GUEY TOURS ———
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 800,
            color: 'white',
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            Explora la Galería de Guey Tours
          </h2>

          <div style={{
            width: '60px',
            height: '3px',
            backgroundColor: 'var(--orange)',
            margin: '0 auto 2rem auto',
          }} />

          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.05rem',
            lineHeight: 1.75,
            marginBottom: '1.2rem',
            fontFamily: 'var(--font-body)',
          }}>
            Echa un vistazo más de cerca a la experiencia de <Link href="https://www.gueytours.com/" style={{ color: 'var(--orange)', fontWeight: 600, textDecoration: 'none !important' }}><span style={{ textDecoration: 'none' }}>Guey Tours</span></Link> a través de nuestra galería de fotos y videos. Descubre la emoción de los tours en cuatrimoto y RZR, explora paisajes impresionantes y vive la experiencia de <strong style={{ color: 'white' }}>San Miguel de Allende más allá del centro de la ciudad</strong>.
          </p>

          <p style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '1rem',
            lineHeight: 1.75,
            marginBottom: '2.5rem',
            fontFamily: 'var(--font-body)',
          }}>
            Nuestra galería muestra momentos reales de nuestros tours, aventuras al aire libre, rutas todoterreno y experiencias inolvidables con viajeros de todo el mundo. Ya sea que estés planeando tu primera aventura o busques inspiración para tu próxima visita, estas imágenes y videos te darán una probadita de lo que te espera.
          </p>

          <Link 
            href="/contact" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--orange)',
              color: 'white',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '0.9rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '0.9rem 2rem',
              borderRadius: '999px',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
          >
            Comienza a planear tu aventura <ArrowRight size={16} />
          </Link>
        </div>

        {/* Galería de imágenes limpia */}
        <Gallery images={images} showSeeAll={false} showHeader={false} />
      </main>
      <Footer />
    </>
  )
}
