import { client } from '@/lib/sanity'
import { galleryAllQuery } from '@/lib/queries'
import Gallery from '@/components/Gallery'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default async function GalleryPage() {
  const images = await client.fetch(galleryAllQuery)

  return (
    <>
      <Navbar />

      <main
        style={{
          paddingTop: '80px',
          background: 'var(--charcoal)',
          minHeight: '100vh',
        }}
      >
        {/* INTRODUCTION */}
        <section
          style={{
            maxWidth: '950px',
            margin: '0 auto',
            padding: '60px 24px 20px',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <p
            style={{
              color: '#e66a1f',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              marginBottom: '18px',
            }}
          >
            Gallery Experience
          </p>

          <h1
            style={{
              color: '#fff',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              textTransform: 'uppercase',
              margin: '0 0 30px',
              lineHeight: 1.05,
            }}
          >
            Explore the Guey Tours Gallery
          </h1>

          <div
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              maxWidth: '850px',
              margin: '0 auto',
            }}
          >
            <p style={{ marginBottom: '20px' }}>
              Get a closer look at the Guey Tours experience through our
              gallery of photos and videos. Discover the excitement of ATV and
              RZR adventures, explore breathtaking landscapes, and see what it
              is like to experience San Miguel de Allende beyond the city
              center.
            </p>

            <p style={{ marginBottom: '0' }}>
              Our gallery showcases real moments from our tours, outdoor
              adventures, off-road trails, and unforgettable experiences with
              travelers from around the world. Whether you are planning your
              first adventure or looking for inspiration for your next visit,
              these images and videos will give you a glimpse of what awaits.
            </p>
          </div>

          {/* CONTACT BUTTON */}
          <a
            href="https://www.gueytours.com/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '195px',
              padding: '16px 32px',
              marginTop: '35px',
              marginBottom: '45px',
              border: '2px solid #e66a1f',
              borderRadius: '999px',
              backgroundColor: 'transparent',
              color: '#e66a1f',
              fontSize: '16px',
              fontWeight: 700,
              textTransform: 'uppercase',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e66a1f'
              e.currentTarget.style.color = '#111111'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#e66a1f'
            }}
          >
            Start Planning Your Adventure
          </a>
        </section>

        {/* GALLERY */}
        <Gallery images={images} showSeeAll={false} />
      </main>

      <Footer />
    </>
  )
}
