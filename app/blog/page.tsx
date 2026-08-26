import { client, urlFor } from '@/lib/sanity'
import { allPostsQuery } from '@/lib/queries'
import BlogIndexClient from './BlogIndexClient'
import Navbar from '@/components/Navbar'

export const revalidate = 60

interface Post {
  _id: string
  title_en: string
  title_es: string
  slug: string
  publishedAt: string
  coverImage: any
  excerpt_en?: string
  excerpt_es?: string
}

export default async function BlogIndexPage() {
  const posts: Post[] = await client.fetch(allPostsQuery)

  const postsWithImages = posts.map(post => ({
    ...post,
    coverImageUrl: post.coverImage ? urlFor(post.coverImage).width(800).height(500).url() : null,
  }))

  return (
    <>
      <Navbar />
      <BlogIndexClient posts={postsWithImages} />
    </>
  )
}
