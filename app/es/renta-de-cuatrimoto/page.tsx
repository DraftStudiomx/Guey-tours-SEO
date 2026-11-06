import type { Metadata } from 'next'
import AtvRentalsContent from './AtvRentalsContent'

export const metadata: Metadata = {
  title: 'Renta de cuatrimoto por San Miguel de Allende | Guey Tours',
  description: 'Renta de cuatrimoto: Explora San Miguel de Allende con vehículos premium y asistentes bilingües para tu recorrido. ¡Reserva ahora tu próxima aventura!',
  keywords: ['renta de cuatrimoto'],
  alternates: {
    canonical: 'https://gueytours.com/es/renta-de-cuatrimoto',
    languages: {
      'en': 'https://gueytours.com/atv-rentals',
      'es': 'https://gueytours.com/es/renta-de-cuatrimoto',
      'x-default': 'https://gueytours.com/atv-rentals',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://www.gueytours.com/es/renta-de-cuatrimoto',
    siteName: 'Guey Tours',
    title: 'Renta de cuatrimoto por San Miguel de Allende | Guey Tours',
    description: 'Renta de cuatrimoto: Explora San Miguel de Allende con vehículos premium y asistentes bilingües para tu recorrido. ¡Reserva ahora tu próxima aventura!',
    images: [
      {
        url: '/guey-logo.png',
        width: 384,
        height: 384,
        alt: 'Guey Tours - Renta de RZR en San Miguel de Allende',
      },
    ],
  },
}

export default function Page() {
  return <AtvRentalsContent />
}