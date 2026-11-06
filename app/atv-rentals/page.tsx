import type { Metadata } from 'next'
import AtvRentalsContent from './AtvRentalsContent'

export const metadata: Metadata = {
  title: 'ATV Rentals in San Miguel de Allende | Book with Guey Tours',
  description: 'Explore San Miguel de Allende with top-rated ATV rentals! Premium quads, motorbikes & Defenders with English assistance. Reserve your adventure today!',
  keywords: 'atv rentals',
  alternates: {
    canonical: 'https://gueytours.com/atv-rentals',
    languages: {
      'en': 'https://gueytours.com/atv-rentals',
      'es': 'https://gueytours.com/es/renta-de-cuatrimoto',
      'x-default': 'https://gueytours.com/atv-rentals',
    },
  },
}

export default function Page() {
  return <AtvRentalsContent />
}
