export default {
  name: 'post',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    {
      name: 'title_en',
      title: 'Title (English)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title_es',
      title: 'Title (Spanish)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title_en', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'excerpt_en',
      title: 'Excerpt (English)',
      type: 'text',
      rows: 3,
      description: 'Short summary shown on the blog listing page',
    },
    {
      name: 'excerpt_es',
      title: 'Excerpt (Spanish)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'body_en',
      title: 'Body (English)',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'body_es',
      title: 'Body (Spanish)',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'active',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'title_en',
      subtitle: 'publishedAt',
      media: 'coverImage',
    },
    prepare({ title, subtitle, media }: any) {
      return {
        title,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : 'No date',
        media,
      }
    },
  },
}
