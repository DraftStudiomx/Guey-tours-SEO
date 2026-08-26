export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Single document
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'e.g. +52 415 123 4567',
    },
    {
      name: 'whatsapp',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Include country code, no spaces e.g. 524151234567',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    },
    {
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
    },
    {
      name: 'address_en',
      title: 'Address (English)',
      type: 'string',
    },
    {
      name: 'address_es',
      title: 'Address (Spanish)',
      type: 'string',
    },
  ],
  preview: {
    select: { title: 'phone' },
    prepare() {
      return { title: 'Site Settings' }
    },
  },
}
