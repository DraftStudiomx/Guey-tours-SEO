export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  // Single document — only one hero
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'tagline_en',
      title: 'Tagline (English)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tagline_es',
      title: 'Tagline (Spanish)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subheading_en',
      title: 'Subheading (English)',
      type: 'text',
      rows: 2,
    },
    {
      name: 'subheading_es',
      title: 'Subheading (Spanish)',
      type: 'text',
      rows: 2,
    },
    {
      name: 'videoUrl',
      title: 'Background Video URL',
      type: 'url',
      description: 'Paste your Cloudflare R2 video URL here',
    },
    {
      name: 'fallbackImage',
      title: 'Fallback Image (shown if video fails)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'cta_en',
      title: 'Primary Button Text (English)',
      type: 'string',
      initialValue: 'Book Now',
    },
    {
      name: 'cta_es',
      title: 'Primary Button Text (Spanish)',
      type: 'string',
      initialValue: 'Reserva Ahora',
    },
  ],
  preview: {
    select: { title: 'tagline_en' },
  },
}
