
import type { Metadata } from 'next'
import SanMiguelContent from './SanMiguelContent'

export const metadata: Metadata = {
  title: 'San Miguel de Allende Tours | ATV & RZR Adventures | Guey Tours',
  description: 'Explore the best ATV and RZR tours in San Miguel de Allende. Unforgettable off-road adventures, scenic trails, and expert local guides. Book your tour today!',
  keywords: ['san miguel de allende tours', 'atv tours san miguel de allende', 'rzr tours', 'guey tours'],
}

export default function Page() {
  return <SanMiguelContent />
}
