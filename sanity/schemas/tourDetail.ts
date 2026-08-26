export default {
  name: 'tourDetail',
  title: 'Tour Detail Pages',
  type: 'document',
  fields: [
    {
      name: 'tour',
      title: 'Tour',
      type: 'reference',
      to: [{ type: 'tour' }],
      description: 'Link to the main tour entry',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'tour.name_en', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'hero_image',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Full-width banner image at the top of the page',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'hero_video',
      title: 'Hero Video URL',
      type: 'url',
      description: 'Optional. Cloudflare R2 video URL (mp4 recommended). If set, this video appears as the first item in the gallery, before any photos.',
    },
    {
      name: 'subtitle_en',
      title: 'Subtitle (English)',
      type: 'string',
      description: 'Short tagline shown below the tour name',
    },
    {
      name: 'subtitle_es',
      title: 'Subtitle (Spanish)',
      type: 'string',
    },
    {
      name: 'long_description_en',
      title: 'Full Description (English)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text description shown in the What to Expect section',
    },
    {
      name: 'long_description_es',
      title: 'Full Description (Spanish)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    // ─── What's Included ───────────────────────────────────────────
    {
      name: 'whats_included_en',
      title: "What's Included (English)",
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet points — what is included in the tour price',
    },
    {
      name: 'whats_included_es',
      title: "What's Included (Spanish)",
      type: 'array',
      of: [{ type: 'string' }],
    },
    // ─── What to Expect ────────────────────────────────────────────
    {
      name: 'what_to_expect_bullets_en',
      title: 'What to Expect — Bullets (English)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet points shown below the description in the What to Expect section',
    },
    {
      name: 'what_to_expect_bullets_es',
      title: 'What to Expect — Bullets (Spanish)',
      type: 'array',
      of: [{ type: 'string' }],
    },
    // ─── Insurance ─────────────────────────────────────────────────
    {
      name: 'insurance_en',
      title: 'Insurance Information (English)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Shown in the Insurance Information accordion',
    },
    {
      name: 'insurance_es',
      title: 'Insurance Information (Spanish)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    // ─── Cancellation ──────────────────────────────────────────────
    {
      name: 'cancellation_en',
      title: 'Cancellation Policy (English)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Shown in the Cancellation Policy accordion',
    },
    {
      name: 'cancellation_es',
      title: 'Cancellation Policy (Spanish)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    // ─── Gallery ───────────────────────────────────────────────────
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt_en', title: 'Alt text (English)', type: 'string' },
            { name: 'alt_es', title: 'Alt text (Spanish)', type: 'string' },
          ],
        },
      ],
    },
    // ─── Reviews ───────────────────────────────────────────────────
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'location',
              title: 'Location',
              type: 'string',
              description: 'e.g. Austin, Texas',
            },
            {
              name: 'quote_en',
              title: 'Review (English)',
              type: 'text',
              rows: 3,
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'quote_es',
              title: 'Review (Spanish)',
              type: 'text',
              rows: 3,
            },
            {
              name: 'rating',
              title: 'Rating',
              type: 'number',
              description: '1–5',
              validation: (Rule: any) => Rule.min(1).max(5),
            },
          ],
          preview: {
            select: { title: 'name', subtitle: 'quote_en' },
          },
        },
      ],
    },
    // ─── Vehicle Prices ────────────────────────────────────────────
    {
      name: 'vehicle_prices',
      title: 'Vehicle Prices',
      type: 'array',
      description: 'One entry per vehicle — sets the price line shown beneath each vehicle card on this tour page.',
      of: [
        {
          type: 'object',
          title: 'Vehicle Price',
          fields: [
            {
              name: 'vehicle',
              title: 'Vehicle',
              type: 'reference',
              to: [{ type: 'vehicle' }],
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'price_label',
              title: 'Price Label',
              type: 'string',
              description: 'e.g. "$1,250 MXN / vehicle" or "From $1,950 MXN"',
              validation: (Rule: any) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'vehicle.name_en',
              subtitle: 'price_label',
            },
          },
        },
      ],
    },
    // ─── SEO ───────────────────────────────────────────────────────
    {
      name: 'seo_title_en',
      title: 'SEO Title (English)',
      type: 'string',
    },
    {
      name: 'seo_title_es',
      title: 'SEO Title (Spanish)',
      type: 'string',
    },
    {
      name: 'seo_description_en',
      title: 'SEO Description (English)',
      type: 'text',
      rows: 2,
    },
    {
      name: 'seo_description_es',
      title: 'SEO Description (Spanish)',
      type: 'text',
      rows: 2,
    },
  ],
  preview: {
    select: {
      title: 'tour.name_en',
      subtitle: 'slug.current',
      media: 'hero_image',
    },
  },
}
