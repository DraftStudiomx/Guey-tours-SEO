import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import { vehicleRentalDetailQuery, allVehicleRentalSlugsQuery } from '@/lib/queries'
import VehicleRentalPage from '@/components/VehicleRentalPage'

interface Props {
  params: Promise<{ slug: string }>
}
export const revalidate = 60
export const dynamicParams = true

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(allVehicleRentalSlugsQuery)
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const data = await client.fetch(vehicleRentalDetailQuery, { slug })
  if (!data) return {}
  return {
    title: data.seo_title_en ?? `${data.vehicle.name_en} — Guey Tours`,
    description: data.seo_description_en ?? data.vehicle.description_en,
    openGraph: {
      title: data.seo_title_en ?? data.vehicle.name_en,
      description: data.seo_description_en ?? data.vehicle.description_en,
    },
  }
}

export default async function RentalPage({ params }: Props) {
  const { slug } = await params
  const data = await client.fetch(vehicleRentalDetailQuery, { slug })
  if (!data) notFound()
  return <VehicleRentalPage data={data} />
  
}
