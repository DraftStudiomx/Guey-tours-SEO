import { client, urlFor } from '@/lib/sanity'
import { postBySlugQuery, allPostSlugsQuery } from '@/lib/queries'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import BlogPostClient from './BlogPostClient'

export const revalidate = 60

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(allPostSlugsQuery)
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = await client.fetch(postBySlugQuery, { slug })
  if (!post) return {}
  return {
    title: post.title_en,
    description: post.excerpt_en ?? '',
    openGraph: {
      images: post.coverImage ? [urlFor(post.coverImage).width(1200).height(630).url()] : [],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await client.fetch(postBySlugQuery, { slug })

  if (!post) notFound()

  const coverImageUrl = post.coverImage
    ? urlFor(post.coverImage).width(1400).height(700).url()
    : null

  return (
    <>
      <Navbar />
      <BlogPostClient post={{ ...post, coverImageUrl }} />
    </>
  )
}
