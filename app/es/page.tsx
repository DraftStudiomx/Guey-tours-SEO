import type { Metadata } from 'next'
import Navbares from '@/components/Navbares'
import HeroEs from '@/components/HeroEs'
import AboutEs from '@/components/AboutEs'
import ToursEs from '@/components/ToursEs' // <--- Cambiado de Tours a ToursEs
import Vehicles from '@/components/Vehicles'
import WhyChooseUsEs from '@/components/WhyChooseUsEs'
import MediaTabsViewer from '@/components/MediaTabsViewer'
import TourMapFAQEs from '@/components/TourMapFAQEs'
import Testimonials from '@/components/Testimonials'
import ContactEs from '@/components/ContactEs'
import FooterEs from '@/components/FooterEs'
import Chatbot from '@/components/ChatWidget'
import { client } from '@/lib/sanity'
import { toursQuery, vehiclesQuery, galleryPreviewQuery, testimonialsQuery, videoGalleryQuery } from '@/lib/queries'

export const revalidate = 0

export const metadata: Metadata = {
  title: 'Tours en Cuatrimoto y RZR en San Miguel de Allende | Guey Tours',
  description: 'Descubre los mejores tours en cuatrimotos, ATV y UTV en San Miguel de Allende y Guanajuato. ¡Reserva tu aventura off-road con Guey Tours!',
  keywords: ['Tours Guanajuato', 'Renta de cuatrimotos San Miguel de Allende', 'Tours RZR Guanajuato', 'Guey Tours'],
  alternates: {
    canonical: 'https://gueytours.com/es',
    languages: {
      'en': 'https://gueytours.com',
      'es': 'https://gueytours.com/es',
      'x-default': 'https://gueytours.com',
    },
  },
}

export default async function EspanolHomePage() {
  const [tours, vehicles, images, testimonials, videos] = await Promise.all([
    client.fetch(toursQuery),
    client.fetch(vehiclesQuery),
    client.fetch(galleryPreviewQuery),
    client.fetch(testimonialsQuery),
    client.fetch(videoGalleryQuery),
  ])

  return (
    <>
      {/* Script SEO Schema.org para Google en Español */}
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

      {/* Menú multilingüe en Español */}
      <Navbares enHref="/" esHref="/es" lang="es" />

      <main>
        <HeroEs />
        <AboutEs />
        <ToursEs />
        <Vehicles />
        <WhyChooseUsEs />
        <Testimonials testimonials={testimonials} />
        <MediaTabsViewer videos={videos} images={images} />
        <TourMapFAQEs />
        <ContactEs />
      </main>

      <FooterEs />
      <Chatbot />
    </>
  )
}
