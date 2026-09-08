import type { Metadata } from 'next'
import RzrRentalContenido from './rzrRentalContenido'

export const metadata: Metadata = {
  title: 'RZR Rentals in San Miguel de Allende | Guey Tours',
  description: 'Rent a RZR in San Miguel de Allende and explore off-road trails, rural roads and natural landscapes. Book your RZR adventure with Guey Tours. Book your experience!',
  keywords: ['Rzr rentals'],
}

export default function Page() {
  return <RzrRentalContenido />
}
