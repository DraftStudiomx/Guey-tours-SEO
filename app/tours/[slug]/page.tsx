import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import { tourDetailQuery, allTourSlugsQuery, tourPageVehiclesQuery } from '@/lib/queries'
import TourDetailPage from '@/components/TourDetailPage'

interface Props {
  params: Promise<{ slug: string }>
}

export const revalidate = 60
export const dynamicParams = true

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(allTourSlugsQuery)
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const data = await client.fetch(tourDetailQuery, { slug })
  if (!data) return {}
  return {
    title: data.seo_title_en ?? `${data.tour.name_en} — Guey Tours`,
    description: data.seo_description_en ?? data.tour.description_en,
    openGraph: {
      title: data.seo_title_en ?? data.tour.name_en,
      description: data.seo_description_en ?? data.tour.description_en,
    },
  }
}

export default async function TourPage({ params }: Props) {
  const { slug } = await params
  const [data, vehicles] = await Promise.all([
    client.fetch(tourDetailQuery, { slug }),
    client.fetch(tourPageVehiclesQuery),
  ])
  if (!data) notFound()
  return <TourDetailPage data={data} vehicles={vehicles ?? []} />
}
