import dotenv from 'dotenv'
import path from 'path'

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

import { createClient } from '@sanity/client'
import fs from 'fs'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_WRITE_TOKEN!,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Drop your images into a folder called 'gallery-upload' in your project root
const UPLOAD_FOLDER = path.resolve(process.cwd(), 'gallery-upload')

// Change this if you want all images to start as 'wide' or use a naming convention
// Files named with '-wide' suffix e.g. 'photo-001-wide.jpg' will be set as wide
function getSpan(filename: string): 'normal' | 'wide' {
  return filename.toLowerCase().includes('-wide') ? 'wide' : 'normal'
}

async function upload() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    console.error('❌ Missing NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local')
    process.exit(1)
  }
  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ Missing SANITY_WRITE_TOKEN in .env.local')
    process.exit(1)
  }
  if (!fs.existsSync(UPLOAD_FOLDER)) {
    console.error(`❌ Upload folder not found: ${UPLOAD_FOLDER}`)
    console.error('Create a folder called "gallery-upload" in your project root and drop your images in it.')
    process.exit(1)
  }

  const files = fs.readdirSync(UPLOAD_FOLDER).filter(f =>
    /\.(jpg|jpeg|png|webp)$/i.test(f)
  )

  if (files.length === 0) {
    console.error('❌ No images found in gallery-upload folder')
    process.exit(1)
  }

  console.log(`\n🚀 Found ${files.length} image(s) to upload...\n`)

  // Get current highest order value so new images are appended
  const existing = await client.fetch(
    `*[_type == "galleryImage"] | order(order desc)[0].order`
  )
  let orderStart = (existing ?? 0) + 1

  for (let i = 0; i < files.length; i++) {
    const filename = files[i]
    const filePath = path.join(UPLOAD_FOLDER, filename)
    const fileBuffer = fs.readFileSync(filePath)
    const nameWithoutExt = filename.replace(/\.[^/.]+$/, '')
    const span = getSpan(filename)

    try {
      process.stdout.write(`Uploading ${filename}... `)

      const asset = await client.assets.upload('image', fileBuffer, {
        filename,
      })

      await client.create({
        _type: 'galleryImage',
        image: {
          _type: 'image',
          asset: { _type: 'reference', _ref: asset._id },
        },
        alt_en: nameWithoutExt,
        alt_es: nameWithoutExt,
        span,
        active: true,
        order: orderStart + i,
      })

      console.log(`✓ (${span})`)
    } catch (err) {
      console.error(`\n❌ Failed to upload ${filename}:`, err)
    }
  }

  console.log(`\n✅ Done! ${files.length} image(s) uploaded to Sanity.\n`)
}

upload()
