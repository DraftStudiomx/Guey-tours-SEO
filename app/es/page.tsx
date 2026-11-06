import type { Metadata } from 'next'
import Navbares from '@/components/Navbares'
import HeroEs from '@/components/HeroEs'
import AboutEs from '@/components/AboutEs'
import ToursEs from '@/components/ToursEs'
import VehiclesEs from '@/components/VehiclesEs'
import WhyChooseUsEs from '@/components/WhyChooseUsEs'
import MediaTabsViewer from '@/components/MediaTabsViewer'
import TourMapFAQEs from '@/components/TourMapFAQEs'
import TestimonialsEs from '@/components/TestimonialsEs'
import ContactEs from '@/components/ContactEs'
import FooterEs from '@/components/FooterEs'
import Chatbot from '@/components/ChatWidget'
import { client } from '@/lib/sanity'
import { toursQuery, vehiclesQuery, galleryPreviewQuery, testimonialsQuery, videoGalleryQuery } from '@/lib/queries'

export const revalidate = 0

// ==========================================
// 🚀 METADATOS Y OPEN GRAPH ESPECÍFICOS PARA ESPAÑOL
// ==========================================
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
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://www.gueytours.com/es',
    siteName: 'Guey Tours',
    title: 'Tours en Cuatrimoto y RZR en San Miguel de Allende | Guey Tours',
    description: 'Descubre los mejores tours en cuatrimotos, ATV y UTV en San Miguel de Allende y Guanajuato. ¡Reserva tu aventura off-road!',
    images: [
      {
        url: '/guey-logo.png',
        width: 384,
        height: 384,
        alt: 'Guey Tours - Tours en Cuatrimoto en San Miguel de Allende',
      },
    ],
  },
}

// ==========================================
// 🚀 ESQUEMA JSON-LD (FAQPage)
// ==========================================
const faqSchemaEs = {
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
    {
      '@type': 'Question',
      name: '¿Dónde puedo reservar tours en cuatrimoto en San Miguel de Allende?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En Guey Tours puedes solicitar información y reservar tours en cuatrimoto para explorar los paisajes y atractivos de San Miguel de Allende. Consulta las opciones disponibles, horarios y requisitos para elegir la experiencia que mejor se adapte a ti.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta un tour en cuatrimoto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El precio de un tour en cuatrimoto depende de la duración del recorrido, la ruta y el tipo de experiencia. En Guey Tours puedes consultar las opciones disponibles y solicitar información para conocer el costo de tu recorrido.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué incluyen los tours de aventura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los tours en cuatrimoto pueden incluir el uso de la unidad, recorrido guiado y recomendaciones de seguridad antes de comenzar. Los servicios específicos varían según la experiencia contratada, por lo que conviene confirmar qué contempla cada recorrido.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito experiencia previa para manejar una cuatrimoto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No necesariamente. Algunas experiencias están diseñadas para principiantes e incluyen indicaciones básicas antes del recorrido. En Guey Tours puedes consultar los requisitos de edad, conducción y seguridad para participar en los tours en cuatrimoto.',
      },
    },
  ],
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
      {/* Inyección del Script SERP FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaEs) }}
      />

      <Navbares enHref="/" esHref="/es" lang="es" />

      <main>
        <HeroEs />
        <AboutEs />
        <ToursEs />
        <VehiclesEs />
        <WhyChooseUsEs />
        <TestimonialsEs testimonials={testimonials} />
        <MediaTabsViewer videos={videos} images={images} />
        <TourMapFAQEs />
        <ContactEs />
      </main>

      <FooterEs />
      <Chatbot />
    </>
  )
}
