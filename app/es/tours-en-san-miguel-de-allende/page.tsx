import type { Metadata } from 'next'
import SanMiguelContent from './SanMiguelContent'

export const metadata: Metadata = {
  title: 'Tours en San Miguel de Allende con ATV y RZR | Guey Tours',
  description: 'Tours en San Miguel de Allende: Disfruta de aventuras únicas en ATV, RZR, todoterreno y privadas con guías locales bilingües ¡Reserva ya!',
  other: {
    keywords: ['tours en san miguel de allende'],
  },
  alternates: {
    canonical: 'https://gueytours.com/es/tours-en-san-miguel-de-allende',
    languages: {
      'en': 'https://gueytours.com/san-miguel-de-allende-tours',
      'es': 'https://gueytours.com/es/tours-en-san-miguel-de-allende',
      'x-default': 'https://gueytours.com/san-miguel-de-allende-tours',
    },
  },
}

export default function Page() {
  return <SanMiguelContent />
}
