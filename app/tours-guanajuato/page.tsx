
import type { Metadata } from 'next'
import ToursGuanajuatoContent from './ToursGuanajuatoContent'

export const metadata: Metadata = {
  title: 'Tours Guanajuato: ATV & Off-Road Adventures | Guey Tours',
  description: 'Tours Guanajuato: Discover the best places with Guey Tours. Explore San Miguel de Allende on ATVs and UTVs. Book your ultimate outdoor adventure!',
  keywords: ['Tours Guanajuato'],
}

export default function Page() {
  return <ToursGuanajuatoContent />
}
