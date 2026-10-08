
import type { Metadata } from 'next'
import UtvContent from './UtvContent'

export const metadata: Metadata = {
  title: 'UTV Tours in San Miguel de Allende | Guey Tours',
  description: 'UTV tour: Explore San Miguel de Allende with Guey Tours. Rent 4x4 side-by-sides, conquer off-road routes, and book your ultimate outdoor adventure!',
  keywords: ['UTV'],
}

export default function Page() {
  return <UtvContent />
}
