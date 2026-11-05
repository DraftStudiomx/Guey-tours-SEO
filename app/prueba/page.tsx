import type { Metadata } from 'next'
import Navbares from '@/components/Navbares'
import PruebaContent from './PruebaContent'

export const metadata: Metadata = {
  title: 'Test Page: ATV & Off-Road Adventures | Guey Tours',
  description: 'Test page description for Guey Tours. Explore Guanajuato and San Miguel de Allende on ATVs and UTVs.',
  keywords: ['Tours Guanajuato', 'Test Page'],
  alternates: {
    canonical: 'https://gueytours.com/prueba',
    languages: {
      'en': 'https://gueytours.com/prueba',
      'es': 'https://gueytours.com/es/prueba',
      'x-default': 'https://gueytours.com/prueba',
    },
  },
}

export default function Page() {
  return (
    <>
      <Navbares 
        enHref="/prueba" 
        esHref="/es/prueba" 
        lang="en" 
      />
      <main>
        <PruebaContent />
      </main>
    </>
  )
}
