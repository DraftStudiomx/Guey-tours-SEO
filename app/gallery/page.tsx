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
        <section
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '60px 24px 40px',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              marginBottom: '24px',
              fontWeight: 700,
            }}
          >
            Explore the Guey Tours Gallery
          </h1>

          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              marginBottom: '20px',
              opacity: 0.9,
            }}
          >
            Get a closer look at the Guey Tours experience through our gallery
            of photos and videos. Discover the excitement of ATV and RZR
            adventures, explore breathtaking landscapes, and see what it is
            like to experience San Miguel de Allende beyond the city center.
          </p>

          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              marginBottom: '20px',
              opacity: 0.9,
            }}
          >
            Our gallery showcases real moments from our tours, outdoor
            adventures, off-road trails, and unforgettable experiences with
            travelers from around the world. Whether you are planning your
            first adventure or looking for inspiration for your next visit,
            these images and videos will give you a glimpse of what awaits.
          </p>

          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: 1.8,
              fontWeight: 600,
              marginTop: '30px',
            }}
          >
            Start planning your adventure with Guey Tours.
          </p>
        </section>

        <Gallery images={images} showSeeAll={false} />
      </main>

      <Footer />
    </>
  )
}
