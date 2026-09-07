import type { Metadata } from 'next'
import AtvRentalsContent from './AtvRentalsContent'

export const metadata: Metadata = {
  title: 'ATV Rentals in San Miguel de Allende | Guey Tours',
  description: 'Rent top-quality ATVs in San Miguel de Allende. Explore scenic trails and historic surroundings safely and at your own pace with Guey Tours.',
  keywords: 'atv rentals, rent an atv, san miguel de allende atv, off road rentals, guey tours',
}

export default function Page() {
  return <AtvRentalsContent />
}
