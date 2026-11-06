import type { Metadata } from 'next'
import RzrRentalContenido from './RzrRentalContenido'

export const metadata: Metadata = {
  title: 'RZR Rentals in San Miguel de Allende | Guey Tours',
  description: 'Rent a RZR in San Miguel de Allende and explore off-road trails, rural roads and natural landscapes. Book your RZR adventure with Guey Tours. Book your experience!',
  keywords: ['Rzr rentals'],
  alternates: {
    canonical: 'https://gueytours.com/rsz-rentals',
    languages: {
      'en': 'https://gueytours.com/rsz-rentals',
      'es': 'https://gueytours.com/es/renta-de-rzr',
      'x-default': 'https://gueytours.com/rsz-rentals',
    },
  },
}

export default function Page() {
  return <RzrRentalContenido />
}
