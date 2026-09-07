import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact Guey Tours. San Miguel de Allende Adventures',
  description: 'Contact Guey Tours to book ATV and RZR tours, rentals, and outdoor adventures in San Miguel de Allende. Plan your next adventure with local guides. Contact us!',
  keywords: 'Pagina de Contacto',
}

export default function Page() {
  return <ContactContent />
}
