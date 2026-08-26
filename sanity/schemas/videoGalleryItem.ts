export default {
  name: 'videoGalleryItem',
  title: 'Video Gallery',
  type: 'document',
  orderings: [
    {
      title: 'Sort Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  fields: [
    {
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first',
    },
    {
      name: 'title_en',
      title: 'Title (English)',
      type: 'string',
      description: 'Shown on hover',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title_es',
      title: 'Title (Spanish)',
      type: 'string',
      description: 'Shown on hover',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'video_url',
      title: 'Video URL',
      type: 'url',
      description: 'Cloudflare R2 video URL (mp4 recommended)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Uncheck to hide this video without deleting it',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'title_en',
      subtitle: 'video_url',
    },
  },
}
