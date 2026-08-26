import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Tours from '@/components/Tours'
import Vehicles from '@/components/Vehicles'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Chatbot from '@/components/ChatWidget'
import { client } from '@/lib/sanity'
import VideoGallery from '@/components/VideoGallery'
import { toursQuery, vehiclesQuery, galleryPreviewQuery, testimonialsQuery, videoGalleryQuery } from '@/lib/queries'
import FAQ from '@/components/FAQ'

export const revalidate = 0
export default async function HomePage() {
  const [tours, vehicles, images, testimonials, videos] = await Promise.all([
    client.fetch(toursQuery),
    client.fetch(vehiclesQuery),
    client.fetch(galleryPreviewQuery),
    client.fetch(testimonialsQuery),
    client.fetch(videoGalleryQuery),
  ])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tours tours={tours} />
        <Vehicles vehicles={vehicles} />
        <About />
        <Testimonials testimonials={testimonials} />
        <VideoGallery videos={videos} />
        <Gallery images={images} />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
