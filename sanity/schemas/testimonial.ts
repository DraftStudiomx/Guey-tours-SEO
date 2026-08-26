export default {
  name: 'testimonial',
  title: 'Testimonials',
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
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'e.g. July 31, 2023',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'text_en',
      title: 'Review (English)',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'text_es',
      title: 'Review (Spanish)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'stars',
      title: 'Stars',
      type: 'number',
      description: '1–5',
      initialValue: 5,
      validation: (Rule: any) => Rule.required().min(1).max(5),
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
      title: 'name',
      subtitle: 'date',
    },
  },
}
