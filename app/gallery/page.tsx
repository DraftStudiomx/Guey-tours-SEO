import { client } from '@/lib/sanity'
import { galleryAllQuery } from '@/lib/queries'
import Gallery from '@/components/Gallery'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Gallery | Guey Tours San Miguel de Allende',
  description: 'Explore our photo gallery featuring RZR rentals, ATV tours, and off-road adventures in San Miguel de Allende.',
  alternates: {
    canonical: 'https://www.gueytours.com/gallery',
  },
}

export default async function GalleryPage() {
  const images = await client.fetch(galleryAllQuery)

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '120px', background: 'var(--charcoal)', minHeight: '100vh', paddingBottom: '6rem' }}>
        
        {/* Contenedor de tus textos y tu único H1 */}
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

          {/* Tu único H1 deseado */}
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
            Get a closer look at the <strong style={{ color: 'white' }}>Guey Tours</strong> experience through our gallery of photos and videos. Discover the excitement of ATV and RZR adventures, explore breathtaking landscapes, and see what it is like to experience <strong style={{ color: 'white' }}>San Miguel de Allende beyond the city center</strong>.
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

          {/* Botón de llamada a la acción estilizado */}
          <Link 
            href="/contact" 
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-heading)',
              backgroundColor: 'var(--orange)',
              color: '#1a1a1a',
              fontWeight: 700,
              padding: '0.8rem 2rem',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '0.95rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
              transition: 'background-color 0.3s, transform 0.2s',
            }}
          >
            Start planning your adventure
          </Link>
        </div>

        {/* Galería de imágenes */}
        <Gallery images={images} showSeeAll={false} />
      </main>
      <Footer />
    </>
  )
}
