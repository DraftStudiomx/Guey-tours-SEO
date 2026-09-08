import { client } from '@/lib/sanity'
import { galleryAllQuery } from '@/lib/queries'
import Gallery from '@/components/Gallery'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GalleryHeroText from '@/components/GalleryHeroText'

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
        
        {/* Componente que maneja los textos y el idioma */}
        <GalleryHeroText />

        {/* Galería de imágenes con los datos reales de Sanity */}
        <Gallery images={images} showSeeAll={false} showHeader={false} />
      </main>
      <Footer />
    </>
  )
}
