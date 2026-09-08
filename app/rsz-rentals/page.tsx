import type { Metadata } from 'next'
import RzrRentalsContent from './RzrRentalsContent' // Ajusta el nombre del componente según corresponda

export const metadata: Metadata = {
  title: 'RZR Rentals in San Miguel de Allende | Book with Guey Tours',
  description: 'Experience the thrill of off-road driving with our powerful RZR rentals in San Miguel de Allende. Premium UTVs, expert guides, and safe trails. Reserve today!',
  keywords: 'rzr rentals, utv rentals san miguel de grande, off road tours san miguel de allende',
}

export default function Page() {
  return <RzrRentalsContent />
}
