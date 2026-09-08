import { client } from '@/lib/sanity'
import { galleryAllQuery } from '@/lib/queries'
import Gallery from '@/components/Gallery'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Gallery | Guey Tours San Miguel de Allende',
  description:
    'Explore our photo gallery featuring RZR rentals, ATV tours, and off-road adventures in San Miguel de Allende.',
  alternates: {
    canonical: 'https://www.gueytours.com/gallery',
  },
}

export default async function GalleryPage() {
  const images = await client.fetch(galleryAllQuery)

  return (
    <>
      <Navbar />

      <main
        style={{
          paddingTop: '120px',
          background: 'var(--charcoal)',
          minHeight: '100vh',
          paddingBottom: '6rem',
        }}
      >
        {/* ENCABEZADO */}
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            padding: '0 2rem 4rem 2rem',
            textAlign: 'center',
          }}
        >
          {/* TEXTO SUPERIOR */}
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--orange)',
              fontSize: '0.85rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}
          >
            ——— GUEY TOURS EXPERIENCE ———
          </div>

          {/* TU NUEVO H1 */}
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              fontWeight: 800,
              color: 'white',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            Explore the Guey Tours Gallery
          </h1>

          {/* LÍNEA DECORATIVA */}
          <div
            style={{
              width: '60px',
              height: '3px',
              backgroundColor: 'var(--orange)',
              margin: '0 auto 2rem auto',
            }}
          />

          {/* PRIMER PÁRRAFO */}
          <p
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '1.05rem',
              lineHeight: 1.75,
              marginBottom: '1.2rem',
              fontFamily: 'var(--font-body)',
            }}
          >
            Get a closer look at{' '}
            <strong style={{ color: 'white' }}>Guey Tours</strong> experience
            through our gallery of photos and videos. Discover the excitement
            of ATV and RZR adventures, explore breathtaking landscapes, and see
            what it is like to experience{' '}
            <strong style={{ color: 'white' }}>
              San Miguel de Allende beyond the city center
            </strong>
            .
          </p>

          {/* SEGUNDO PÁRRAFO */}
          <p
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '1rem',
              lineHeight: 1.75,
              marginBottom: '2rem',
              fontFamily: 'var(--font-body)',
            }}
          >
            Our gallery showcases real moments from our tours, outdoor
            adventures, off-road trails, and unforgettable experiences with
            travelers from around the world. Whether you are planning your
            first adventure or looking for inspiration for your next visit,
            these images and videos will give you a glimpse of what awaits.
          </p>

          {/* BOTÓN / CTA */}
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-heading)',
              color: 'var(--orange)',
              fontWeight: 700,
              textDecoration: 'underline',
              fontSize: '1rem',
              letterSpacing: '0.05em',
              transition: 'opacity 0.3s',
            }}
          >
            Start planning your adventure with Guey Tours.
          </Link>
        </div>

        {/* GALERÍA DE IMÁGENES */}
        <Gallery
          images={images}
          showSeeAll={false}
          showTitle={false}
        />
      </main>

      <Footer />
    </>
  )
}
