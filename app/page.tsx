import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Tours from '@/components/Tours'
import Vehicles from '@/components/Vehicles'
import WhyChooseUs from '@/components/WhyChooseUs'
import MediaTabsViewer from '@/components/MediaTabsViewer'
import TourMapFAQ from '@/components/TourMapFAQ'
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
     {/* Script SEO de Preguntas Frecuentes para Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Dónde puedo rentar una cuatrimoto o RZR en San Miguel de Allende?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'En Guey Tours ofrecemos renta y tours guiados en cuatrimotos, ATV y RZR en San Miguel de Allende. Contamos con rutas off-road y recorridos panorámicos.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuánto cuesta un tour en cuatrimoto en San Miguel de Allende?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Los precios comienzan desde $625 MXN por persona según el vehículo y duración. Ofrecemos tours cortos, rutas al atardecer y experiencias privadas.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué incluyen las experiencias de Guey Tours?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Nuestros tours incluyen la cuatrimoto, guía profesional, equipo de seguridad, paradas panorámicas y fotos o contenido para redes sociales.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Se necesita licencia para manejar una cuatrimoto o RZR?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sí, recomendamos traer identificación oficial o licencia. Es esencial saber manejar vehículos automáticos y seguir las instrucciones del guía.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuáles son los mejores tours en cuatrimoto en San Miguel de Allende?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Las rutas populares incluyen caminos off-road entre mezquites, cactus de garambullo, miradores naturales y aventuras en terracería.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Es seguro manejar ATV o RZR durante los tours?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sí, la seguridad es nuestra prioridad. Damos instrucciones de manejo, equipo de protección y un guía profesional te acompaña todo el tiempo.',
                },
              },
            ],
          }),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About /> {/* <--- Este debe ser el segundo elemento */}
        <Tours />
        <Vehicles />
        <WhyChooseUs />
        <Testimonials testimonials={testimonials} />
        <MediaTabsViewer videos={videos} images={images} />
        <TourMapFAQ />
       {/* <VideoGallery videos={videos} /> */}
       {/* <Gallery images={images} /> */}
       {/* <FAQ /> */}
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
