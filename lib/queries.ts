import { groq } from 'next-sanity'

// ─── Tours ────────────────────────────────────────────────────────────────────

export const toursQuery = groq`
  *[_type == "tour" && active == true] | order(order asc) {
    _id,
    name_en,
    name_es,
    description_en,
    description_es,
    duration_en,
    duration_es,
    price_en,
    price_es,
    image,
    "slug": *[_type == "tourDetail" && references(^._id)][0].slug.current
  }
`

export const tourDetailQuery = groq`
  *[_type == "tourDetail" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    hero_image,
    hero_video,
    subtitle_en,
    subtitle_es,
    long_description_en,
    long_description_es,
    whats_included_en,
    whats_included_es,
    what_to_expect_bullets_en,
    what_to_expect_bullets_es,
    insurance_en,
    insurance_es,
    cancellation_en,
    cancellation_es,
    gallery,
    reviews,
    vehicle_prices[] {
      price_label,
      vehicle-> {
        _id,
        name_en,
        name_es,
        video_url
      }
    },
    seo_title_en,
    seo_title_es,
    seo_description_en,
    seo_description_es,
    tour-> {
      _id,
      name_en,
      name_es,
      description_en,
      description_es,
      duration_en,
      duration_es,
      price_en,
      price_es,
      image
    }
  }
`

export const allTourSlugsQuery = groq`
  *[_type == "tourDetail" && defined(slug.current)][].slug.current
`

// ─── Vehicles ─────────────────────────────────────────────────────────────────

// Homepage RENTAL section — only those marked available_for_rental
export const vehiclesQuery = groq`
  *[_type == "vehicle" && active == true && available_for_rental == true] | order(order asc) {
    _id,
    name_en,
    name_es,
    description_en,
    description_es,
    tour_page_description_en,
    tour_page_description_es,
    price,
    video_url,
    "slug": *[_type == "vehicleRentalDetail" && references(^._id)][0].slug.current
  }
`

// Tour detail page card strip — only those marked available_for_tours
export const tourPageVehiclesQuery = groq`
  *[_type == "vehicle" && active == true && available_for_tours == true] | order(order asc) {
    _id,
    name_en,
    name_es,
    description_en,
    description_es,
    tour_page_description_en,
    tour_page_description_es,
    price,
    video_url,
    "slug": *[_type == "vehicleRentalDetail" && references(^._id)][0].slug.current
  }
`

export const vehicleRentalDetailQuery = groq`
  *[_type == "vehicleRentalDetail" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    hero_image,
    tagline_en,
    tagline_es,
    long_description_en,
    long_description_es,
    rental_rates_en,
    rental_rates_es,
    whats_included_en,
    whats_included_es,
    requirements_en,
    requirements_es,
    insurance_en,
    insurance_es,
    cancellation_en,
    cancellation_es,
    gallery,
    seo_title_en,
    seo_title_es,
    seo_description_en,
    seo_description_es,
    vehicle-> {
      _id,
      name_en,
      name_es,
      description_en,
      description_es,
      price,
      video_url
    }
  }
`

export const allVehicleRentalSlugsQuery = groq`
  *[_type == "vehicleRentalDetail" && defined(slug.current)][].slug.current
`

// ─── Gallery ──────────────────────────────────────────────────────────────────

export const galleryAllQuery = groq`
  *[_type == "galleryImage" && active == true] | order(order asc) {
    _id,
    order,
    image,
    alt_en,
    alt_es,
    span
  }
`

export const galleryPreviewQuery = groq`
  *[_type == "galleryImage" && active == true] | order(order asc) [0...6] {
    _id,
    order,
    image,
    alt_en,
    alt_es,
    span
  }
`

// ─── Video Gallery ────────────────────────────────────────────────────────────

export const videoGalleryQuery = groq`
  *[_type == "videoGalleryItem" && active == true] | order(order asc) {
    _id,
    order,
    title_en,
    title_es,
    video_url
  }
`

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonialsQuery = groq`
  *[_type == "testimonial" && active == true] | order(order asc) {
    _id,
    order,
    name,
    date,
    text_en,
    text_es,
    stars
  }
`

// ─── Blog ─────────────────────────────────────────────────────────────────────

export const allPostsQuery = groq`
  *[_type == "post" && active == true] | order(publishedAt desc) {
    _id,
    title_en,
    title_es,
    "slug": slug.current,
    publishedAt,
    coverImage,
    excerpt_en,
    excerpt_es
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug && active == true][0] {
    _id,
    title_en,
    title_es,
    "slug": slug.current,
    publishedAt,
    coverImage,
    excerpt_en,
    excerpt_es,
    body_en,
    body_es
  }
`

export const allPostSlugsQuery = groq`
  *[_type == "post" && active == true && defined(slug.current)][].slug.current
`
