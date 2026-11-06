import type { Metadata } from 'next'
import SanMiguelContent from './SanMiguelContent'

export const metadata: Metadata = {
  title: 'San Miguel de Allende Tours. ATV, RZR & | Guey Tours',
  description: 'Discover San Miguel de Allende tours with Guey Tours. Enjoy ATV, RZR, off-road and private adventures with local English-speaking guides. Book your experience here!',
  keywords: 'San Miguel de allende tours',
  alternates: {
    canonical: 'https://www.gueytours.com/san-miguel-de-allende-tours',
    languages: {
      'en': 'https://www.gueytours.com/san-miguel-de-allende-tours',
      'es': 'https://www.gueytours.com/es/tours-en-san-miguel-de-allende',
      'x-default': 'https://www.gueytours.com/san-miguel-de-allende-tours',
    },
  },
}

export default function Page() {
  return <SanMiguelContent />
}
