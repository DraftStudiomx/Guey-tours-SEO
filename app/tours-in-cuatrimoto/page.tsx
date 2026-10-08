
import type { Metadata } from 'next'
import ToursCuatrimotoContent from './ToursCuatrimotoContent'

export const metadata: Metadata = {
  title: 'ATV Tours in San Miguel de Allende | Guey Tours',
  description: 'ATV tours: Explore San Miguel de Allende. Explore off-road routes, rent top ATVs, and book your ultimate outdoor adventure with Guey Tours today!',
  keywords: ['ATV tours'],
}

export default function Page() {
  return <ToursCuatrimotoContent />
}
