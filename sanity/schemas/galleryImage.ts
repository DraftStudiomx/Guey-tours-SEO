export default {
  name: 'galleryImage',
  title: 'Gallery',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'alt_en',
      title: 'Alt Text (English)',
      type: 'string',
      description: 'Brief description of the image for accessibility',
    },
    {
      name: 'alt_es',
      title: 'Alt Text (Spanish)',
      type: 'string',
    },
    {
      name: 'span',
      title: 'Image Size',
      type: 'string',
      options: {
        list: [
          { title: 'Normal', value: 'normal' },
          { title: 'Wide (spans 2 columns)', value: 'wide' },
        ],
        layout: 'radio',
      },
      initialValue: 'normal',
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Uncheck to hide without deleting',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'alt_en',
      media: 'image',
      subtitle: 'span',
    },
    prepare({ title, media, subtitle }: any) {
      return {
        title: title || 'Gallery Image',
        subtitle: subtitle === 'wide' ? 'Wide' : 'Normal',
        media,
      }
    },
  },
}
