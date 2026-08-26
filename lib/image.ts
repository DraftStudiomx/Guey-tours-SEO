import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/lib/client'

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)