
import type { Metadata } from 'next'
import Offroad from './Offroad'

export const metadata: Metadata = {
  title: 'Off-Road Tours in San Miguel de Allende | Guey Tours',
  description: 'Off-road adventure: Experience Guanajuato. Rent ATVs and Side-by-Sides with Guey Tours and explore hidden trails. Book your tour today!',
  keywords: ['off-road'],
}

export default function Page() {
  return <Offroad />
}
