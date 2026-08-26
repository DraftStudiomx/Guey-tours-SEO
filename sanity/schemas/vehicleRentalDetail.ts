export default {
  name: 'vehicleRentalDetail',
  title: 'Vehicle Rental Pages',
  type: 'document',
  fields: [
    {
      name: 'vehicle',
      title: 'Vehicle',
      type: 'reference',
      to: [{ type: 'vehicle' }],
      description: 'Link to the main vehicle entry',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'vehicle.name_en', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'hero_image',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Used as fallback if gallery is empty, and for SEO/social sharing',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tagline_en',
      title: 'Tagline (English)',
      type: 'string',
      description: 'Short line shown below the vehicle name',
    },
    {
      name: 'tagline_es',
      title: 'Tagline (Spanish)',
      type: 'string',
    },
    {
      name: 'long_description_en',
      title: 'Description (English)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text shown in the About This Vehicle section',
    },
    {
      name: 'long_description_es',
      title: 'Description (Spanish)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    // ─── Rental Rates ──────────────────────────────────────────────
    {
      name: 'rental_rates_en',
      title: 'Rental Rates (English)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. "1 hour — $650 MXN", "Half day — $2,500 MXN"',
    },
    {
      name: 'rental_rates_es',
      title: 'Rental Rates (Spanish)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'p. ej. "1 hora — $650 MXN", "Medio día — $2,500 MXN"',
    },
    // ─── What's Included ───────────────────────────────────────────
    {
      name: 'whats_included_en',
      title: "What's Included (English)",
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet points — helmets, fuel, insurance, etc.',
    },
    {
      name: 'whats_included_es',
      title: "What's Included (Spanish)",
      type: 'array',
      of: [{ type: 'string' }],
    },
    // ─── Rental Requirements ───────────────────────────────────────
    {
      name: 'requirements_en',
      title: 'Rental Requirements (English)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet points — minimum age, valid license, deposit, etc.',
    },
    {
      name: 'requirements_es',
      title: 'Rental Requirements (Spanish)',
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
      title: 'vehicle.name_en',
      subtitle: 'slug.current',
      media: 'hero_image',
    },
  },
}
