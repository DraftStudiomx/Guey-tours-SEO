
import type { Metadata } from 'next'
import SanMiguelContent from './rzrRentalContenido'

export const metadata: Metadata = {
  title: 'San Miguel de Allende Tours: ATV, RZR & More | Guey Tours',
  description: 'Discover San Miguel de Allende tours with Guey Tours. Enjoy ATV, RZR, off-road and private adventures with local English-speaking guides. Book your experience here!',
  keywords: ['San Miguel de allende tours'],
}

export default function Page() {
  return <SanMiguelContent />
}
