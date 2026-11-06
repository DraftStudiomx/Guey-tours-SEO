import type { Metadata } from 'next'
import RzrRentalContenido from './RzrRentalContenido'

export const metadata: Metadata = {
  title: 'Renta de RZR en San Miguel de Allende | Guey Tours',
  description: 'Renta un RZR en San Miguel de Allende y explora senderos todoterreno, caminos rurales y paisajes naturales. Reserva tu aventura en RZR con Guey Tours.',
  keywords: ['renta de rzr'],
  alternates: {
    canonical: 'https://gueytours.com/es/renta-de-rzr',
    languages: {
      'en': 'https://gueytours.com/rzr-rental',
      'es': 'https://gueytours.com/es/renta-de-rzr',
      'x-default': 'https://gueytours.com/renta-de-rzr',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://www.gueytours.com/es/rzr-rental',
    siteName: 'Guey Tours',
    title: 'Renta de RZR en San Miguel de Allende | Guey Tours',
    description: 'Renta un RZR en San Miguel de Allende y explora caminos off-road, rutas rurales y paisajes naturales. ¡Reserva tu aventura!',
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
  return <RzrRentalContenido />
}
