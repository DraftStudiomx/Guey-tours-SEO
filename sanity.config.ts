import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'
import { TranslateToSpanishAction } from './sanity/actions/translatePost'

export default defineConfig({
  name: 'guey-tours',
  title: 'Guey Tours',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton: Hero
            S.listItem()
              .title('Hero Section')
              .id('hero')
              .child(
                S.document()
                  .schemaType('hero')
                  .documentId('hero')
              ),
            // Singleton: Site Settings
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            // Regular document lists
            S.documentTypeListItem('tour').title('Tours'),
            S.documentTypeListItem('tourDetail').title('Tour Detail Pages'),
            S.documentTypeListItem('videoGalleryItem').title('Video Gallery'),
            S.documentTypeListItem('galleryImage').title('Gallery'),
            S.documentTypeListItem('post').title('Blog Posts'),
            S.documentTypeListItem('vehicle').title('Vehicles'),
            S.documentTypeListItem('vehicleRentalDetail').title('Vehicle Rental Pages'),
            S.documentTypeListItem('testimonial').title('Testimonials'),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  // ─── Document actions ──────────────────────────────────────────────────────
  // Append the translate action to the default set for 'post' documents
  document: {
    actions: (prev, context) => {
      if (context.schemaType === 'post') {
        return [...prev, TranslateToSpanishAction]
      }
      return prev
    },
  },
})
