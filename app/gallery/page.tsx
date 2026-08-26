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
      <main style={{ paddingTop: '80px', background: 'var(--charcoal)', minHeight: '100vh' }}>
        <Gallery images={images} showSeeAll={false} />
      </main>
      <Footer />
    </>
  )
}
