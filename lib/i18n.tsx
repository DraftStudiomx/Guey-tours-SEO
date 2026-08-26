'use client'

import React, { createContext, useContext, useState } from 'react'

export type Lang = 'en' | 'es'

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  'nav.tours': { en: 'TOURS', es: 'TOURS' },
  'nav.about': { en: 'ABOUT US', es: 'NOSOTROS' },
  'nav.testimonials': { en: 'TESTIMONIALS', es: 'TESTIMONIOS' },
  'nav.gallery': { en: 'GALLERY', es: 'GALERÍA' },
  'nav.contact': { en: 'CONTACT', es: 'CONTACTO' },
  'nav.blog': { en: 'BLOG', es: 'BLOG' },

  // Hero
  'hero.tagline': { en: 'Best ATV Tours in San Miguel de Allende', es: 'Tours en Cuatrimoto y RZR en San Miguel de Allende' },
  'hero.sub': { en: 'Tours in San Miguel de Allende ATV and RZR', es: 'Tours en San Miguel de Allende Cuatrimoto y RZR' },
  'hero.cta': { en: 'Book Your Tour', es: 'Reserva Tu Tour' },
  'hero.cta2': { en: 'View All Tours', es: 'Ver Todos los Tours' },

  // Tours section
  'tours.title': { en: 'Explore San Miguel Off-Road', es: 'Explora San Miguel fuera de la carretera' },
  'tours.subtitle': { en: 'Choose your adventure', es: 'Elige tu aventura' },
  'tours.bookNow': { en: 'Book Now', es: 'Reservar' },
  'tours.duration': { en: 'Duration', es: 'Duración' },
  'tours.from': { en: 'From', es: 'Desde' },
  'tours.moreInfo': { en: 'More Info', es: 'Más Información' },

  // Tour names
  'tours.centro.name': { en: 'City Tour', es: 'San Miguel Centro' },
  'tours.centro.desc': { en: 'Explore the heart of the city and its iconic colonial architecture on an exciting ATV ride through historic streets.', es: 'Explora el corazón de la ciudad y su icónica arquitectura colonial en un emocionante recorrido en ATV.' },
  'tours.centro.duration': { en: '2 hours', es: '2 horas' },

  'tours.viejo.name': { en: 'San Miguel Viejo', es: 'San Miguel Viejo' },
  'tours.viejo.desc': { en: 'Discover the original founding site of San Miguel, rich in history, with stunning views of the Allende Dam.', es: 'Descubre el sitio de fundación original de San Miguel, rico en historia, con impresionantes vistas de la Presa Allende.' },
  'tours.viejo.duration': { en: '3 hours', es: '3 horas' },

  'tours.puente.name': { en: 'Puente Roto', es: 'Puente Roto' },
  'tours.puente.desc': { en: 'Race across open terrain to the legendary Broken Bridge, a natural wonder carved by centuries of flowing river water.', es: 'Cruza terrenos abiertos hasta el legendario Puente Roto, una maravilla natural tallada por siglos de agua.' },
  'tours.puente.duration': { en: '3.5 hours', es: '3.5 horas' },

  'tours.atotonilco.name': { en: 'Atotonilco', es: 'Atotonilco' },
  'tours.atotonilco.desc': { en: 'Journey to the UNESCO World Heritage site of Atotonilco, the "Sistine Chapel of Mexico", and its sacred sanctuary.', es: 'Viaja al sitio Patrimonio de la UNESCO de Atotonilco, la "Capilla Sixtina de México" y su sagrado santuario.' },
  'tours.atotonilco.duration': { en: '4 hours', es: '4 horas' },

  // About
  'about.title': { en: 'ABOUT US', es: 'NOSOTROS' },
  'about.subtitle': { en: 'Your adventure specialists in SMA', es: 'Tus especialistas en aventura en SMA' },
  'about.p1': { en: 'We are a tourism services company focused on adventure experiences in San Miguel de Allende and its surroundings — committed to your safety, comfort, and fun!', es: 'Somos una empresa de servicios turísticos enfocada en experiencias de aventura en San Miguel de Allende y sus alrededores — comprometidos con tu seguridad, comodidad y diversión.' },
  'about.p2': { en: 'Our guided ATV tours take you to the most breathtaking places in the region — from the Allende Dam to ancient ruins most tourists never discover. All vehicles are late-model, fully maintained, and include helmets and safety equipment.', es: 'Nuestros tours guiados en ATV te llevan a los lugares más impresionantes de la región, desde la Presa Allende hasta ruinas antiguas que la mayoría de los turistas nunca descubren.' },
  'about.p3': { en: 'Every tour includes complimentary photos taken by your guide, medical expense insurance, and guides with deep local knowledge in both English and Spanish.', es: 'Cada tour incluye fotos gratuitas tomadas por tu guía, seguro de gastos médicos y guías bilingües con profundo conocimiento local.' },
  'about.readmore': { en: 'Learn More', es: 'Saber Más' },

  // Why us
  'why.title': { en: 'Why Choose Guey Tours', es: 'Por Qué Elegir Guey Tours' },
  'why.safety': { en: 'Safety First', es: 'Seguridad Primero' },
  'why.safety.desc': { en: 'Medical insurance on every tour, brand new equipment, and certified guides.', es: 'Seguro médico en cada tour, equipo nuevo y guías certificados.' },
  'why.bilingual': { en: 'Bilingual Guides', es: 'Guías Bilingües' },
  'why.bilingual.desc': { en: 'All guides speak English and Spanish fluently.', es: 'Todos los guías hablan inglés y español con fluidez.' },
  'why.photos': { en: 'Free Photos', es: 'Fotos Gratis' },
  'why.photos.desc': { en: 'Your guide photographs the entire tour — yours to keep.', es: 'Tu guía fotografía todo el tour — tuyas para siempre.' },
  'why.vehicles': { en: 'Latest Model ATVs', es: 'ATVs Último Modelo' },
  'why.vehicles.desc': { en: 'Constantly renewed fleet of ATVs and motorcycles, always in perfect condition.', es: 'Flota constantemente renovada de ATVs y motos, siempre en perfecto estado.' },

  // Testimonials
  'testimonials.title': { en: 'TESTIMONIALS', es: 'TESTIMONIOS' },
  'testimonials.subtitle': { en: 'What our adventurers say', es: 'Lo que dicen nuestros aventureros' },
  'testimonials.rating': { en: 'Excellent — based on 140 reviews', es: 'Excelente — basado en 140 reseñas' },

  // Gallery
  'gallery.title': { en: 'PHOTO GALLERY', es: 'GALERÍA DE FOTOS' },
  'gallery.subtitle': { en: 'Moments from the trail', es: 'Momentos del sendero' },

  // Contact
  'contact.title': { en: 'CONTACT US', es: 'CONTÁCTANOS' },
  'contact.name': { en: 'Your Name', es: 'Tu Nombre' },
  'contact.email': { en: 'Email Address', es: 'Correo Electrónico' },
  'contact.message': { en: 'Message', es: 'Mensaje' },
  'contact.send': { en: 'Send Message', es: 'Enviar Mensaje' },
  'contact.address': { en: 'Calle Refugio Sur #52, Colonia San Antonio,San Miguel de Allende, Guanajuato, Mexico', es: 'Calle Refugio Sur #52, Colonia San Antonio,San Miguel de Allende, Guanajuato, Mexico' },
  'contact.maps': { en: 'View on Google Maps', es: 'Ver en Google Maps' },

  // Footer
  'footer.cancel': { en: 'Cancellation Policy', es: 'Política de Cancelación' },
  'footer.rights': { en: '© 2026 Guey ATV Tours. All rights reserved.', es: '© 2026 Guey ATV Tours. Todos los derechos reservados.' },

  // Chatbot
  'chat.greeting': { en: "Hi! 👋 I'm your Guey ATV Tours assistant. Ask me anything about our tours, pricing, or how to book!", es: '¡Hola! 👋 Soy tu asistente de Guey ATV Tours. ¡Pregúntame lo que quieras sobre nuestros tours, precios o cómo reservar!' },
  'chat.placeholder': { en: 'Ask about tours, prices, booking...', es: 'Pregunta sobre tours, precios, reservas...' },
  'chat.send': { en: 'Send', es: 'Enviar' },
  'chat.title': { en: 'ATV Tours Assistant', es: 'Asistente de Tours ATV' },
  'chat.online': { en: 'Online', es: 'En línea' },

  // ─── BOOKING WIDGET ──────────────────────────────────────────────────────
  'booking.loading': { en: 'Loading tours…', es: 'Cargando tours…' },

  // Step 1
  'booking.step1.title': { en: 'Choose your tour', es: 'Elige tu tour' },

  // Step 2
  'booking.step2.title': { en: 'Pick a date & time', es: 'Elige fecha y hora' },
  'booking.step2.selectTime': { en: 'Select a start time', es: 'Selecciona una hora de inicio' },

  // Step 3
  'booking.step3.title': { en: 'How many people?', es: '¿Cuántas personas?' },
  'booking.step3.numGuests': { en: 'Number of guests', es: 'Número de personas' },
  'booking.step3.peopleSuffix': { en: 'people', es: 'personas' },
  'booking.step3.max': { en: 'Maximum 12 people per booking.', es: 'Máximo 12 personas por reserva.' },

  // Step 4
  'booking.step4.title': { en: 'Choose your vehicles', es: 'Elige tus vehículos' },
  'booking.step4.intro_one': { en: 'Select vehicles to carry 1 person. You can mix types.', es: 'Selecciona vehículos para 1 persona. Puedes mezclar tipos.' },
  'booking.step4.intro_other': { en: 'Select vehicles to carry {n} people. You can mix types.', es: 'Selecciona vehículos para {n} personas. Puedes mezclar tipos.' },
  'booking.step4.seats': { en: 'Seats', es: 'Plazas' },
  'booking.step4.available': { en: 'vehicles available', es: 'vehículos disponibles' },
  'booking.step4.from': { en: 'from', es: 'desde' },

  // Capacity bar
  'booking.capacity.selected_one': { en: '1 seat selected for {p} {noun}', es: '1 plaza seleccionada para {p} {noun}' },
  'booking.capacity.selected_other': { en: '{s} seats selected for {p} {noun}', es: '{s} plazas seleccionadas para {p} {noun}' },
  'booking.capacity.needMore_one': { en: 'Need 1 more seat — add another vehicle.', es: 'Necesitas 1 plaza más — añade otro vehículo.' },
  'booking.capacity.needMore_other': { en: 'Need {n} more seats — add another vehicle.', es: 'Necesitas {n} plazas más — añade otro vehículo.' },

  // Step 5
  'booking.step5.title': { en: 'Your details', es: 'Tus datos' },
  'booking.summary.tour': { en: 'Tour', es: 'Tour' },
  'booking.summary.date': { en: 'Date', es: 'Fecha' },
  'booking.summary.guests': { en: 'Guests', es: 'Personas' },
  'booking.summary.total': { en: 'Total (Inc. Taxes)', es: 'Total (Inc. Impuestos)' },
  'booking.form.firstName': { en: 'First name', es: 'Nombre' },
  'booking.form.lastName': { en: 'Last name', es: 'Apellido' },
  'booking.form.email': { en: 'Email', es: 'Correo electrónico' },
  'booking.form.phone': { en: 'Phone', es: 'Teléfono' },
  'booking.form.firstNamePh': { en: 'Ana', es: 'Ana' },
  'booking.form.lastNamePh': { en: 'García', es: 'García' },
  'booking.form.emailPh': { en: 'ana@email.com', es: 'ana@email.com' },
  'booking.form.phonePh': { en: '+52 415 000 0000', es: '+52 415 000 0000' },

  // Buttons
  'booking.btn.next': { en: 'Next →', es: 'Siguiente →' },
  'booking.btn.confirm': { en: 'Confirm & Pay →', es: 'Confirmar y Pagar →' },
  'booking.btn.redirecting': { en: 'Redirecting to payment…', es: 'Redirigiendo al pago…' },

  // Errors
  'booking.error.nameEmail': { en: 'Please fill in your name and email.', es: 'Por favor ingresa tu nombre y correo electrónico.' },
  'booking.error.generic': { en: 'Something went wrong', es: 'Algo salió mal' },

  // Hours label
  'booking.hour': { en: 'hr', es: 'hr' },
  'booking.hours': { en: 'hrs', es: 'hrs' },

  // Months & days for date formatting
  'booking.months.0':  { en: 'January',   es: 'Enero' },
  'booking.months.1':  { en: 'February',  es: 'Febrero' },
  'booking.months.2':  { en: 'March',     es: 'Marzo' },
  'booking.months.3':  { en: 'April',     es: 'Abril' },
  'booking.months.4':  { en: 'May',       es: 'Mayo' },
  'booking.months.5':  { en: 'June',      es: 'Junio' },
  'booking.months.6':  { en: 'July',      es: 'Julio' },
  'booking.months.7':  { en: 'August',    es: 'Agosto' },
  'booking.months.8':  { en: 'September', es: 'Septiembre' },
  'booking.months.9':  { en: 'October',   es: 'Octubre' },
  'booking.months.10': { en: 'November',  es: 'Noviembre' },
  'booking.months.11': { en: 'December',  es: 'Diciembre' },

  'booking.monthsShort.0':  { en: 'Jan', es: 'Ene' },
  'booking.monthsShort.1':  { en: 'Feb', es: 'Feb' },
  'booking.monthsShort.2':  { en: 'Mar', es: 'Mar' },
  'booking.monthsShort.3':  { en: 'Apr', es: 'Abr' },
  'booking.monthsShort.4':  { en: 'May', es: 'May' },
  'booking.monthsShort.5':  { en: 'Jun', es: 'Jun' },
  'booking.monthsShort.6':  { en: 'Jul', es: 'Jul' },
  'booking.monthsShort.7':  { en: 'Aug', es: 'Ago' },
  'booking.monthsShort.8':  { en: 'Sep', es: 'Sep' },
  'booking.monthsShort.9':  { en: 'Oct', es: 'Oct' },
  'booking.monthsShort.10': { en: 'Nov', es: 'Nov' },
  'booking.monthsShort.11': { en: 'Dec', es: 'Dic' },

  'booking.days.0': { en: 'Su', es: 'Do' },
  'booking.days.1': { en: 'Mo', es: 'Lu' },
  'booking.days.2': { en: 'Tu', es: 'Ma' },
  'booking.days.3': { en: 'We', es: 'Mi' },
  'booking.days.4': { en: 'Th', es: 'Ju' },
  'booking.days.5': { en: 'Fr', es: 'Vi' },
  'booking.days.6': { en: 'Sa', es: 'Sa' },

  // ─── ADD THESE KEYS to the existing translations object in lib/i18n.tsx ───
// Paste them alongside the other booking.* keys

  // Step 6 — Additional details
  'booking.step6.title': { en: 'Additional details', es: 'Detalles adicionales' },
  'booking.step6.intro': { en: 'Just a few more things to complete your booking.', es: 'Solo unos datos más para completar tu reserva.' },

  // Form labels
  'booking.form.dob': { en: 'Date of birth', es: 'Fecha de nacimiento' },
  'booking.form.gender': { en: 'Gender', es: 'Género' },
  'booking.form.homeAddress': { en: 'Home address', es: 'Dirección de casa' },
  'booking.form.homeAddressPh': { en: 'Street, city, country', es: 'Calle, ciudad, país' },
  'booking.form.accommodation': { en: 'Where are you staying? (hotel or Airbnb)', es: '¿Dónde te hospedas? (hotel o Airbnb)' },
  'booking.form.accommodationPh': { en: 'e.g. Hotel Matilda, or your Airbnb address', es: 'ej. Hotel Matilda, o tu dirección de Airbnb' },
  'booking.form.referral': { en: 'How did you find us?', es: '¿Cómo nos encontraste?' },

  // Required / optional labels
  'booking.form.required': { en: '(required)', es: '(obligatorio)' },
  'booking.form.optional': { en: '(optional)', es: '(opcional)' },

  // Gender options
  'booking.gender.select': { en: 'Select…', es: 'Selecciona…' },
  'booking.gender.male': { en: 'Male', es: 'Masculino' },
  'booking.gender.female': { en: 'Female', es: 'Femenino' },
  'booking.gender.preferNot': { en: 'Prefer not to say', es: 'Prefiero no decir' },

  // Referral source options
  'booking.referral.select': { en: 'Select…', es: 'Selecciona…' },
  'booking.referral.google': { en: 'Google', es: 'Google' },
  'booking.referral.facebook': { en: 'Facebook', es: 'Facebook' },
  'booking.referral.instagram': { en: 'Instagram', es: 'Instagram' },
  'booking.referral.tiktok': { en: 'TikTok', es: 'TikTok' },
  'booking.referral.friend': { en: 'Friend / word of mouth', es: 'Amigo / recomendación' },
  'booking.referral.hotel': { en: 'Hotel / concierge', es: 'Hotel / conserje' },
  'booking.referral.travel_site': { en: 'Travel site (TripAdvisor etc.)', es: 'Sitio de viajes (TripAdvisor, etc.)' },
  'booking.referral.walking_by': { en: 'Walking by', es: 'Pasando por ahí' },
  'booking.referral.other': { en: 'Other', es: 'Otro' },

  // Errors for step 6
  'booking.error.dobRequired': { en: 'Please enter your date of birth.', es: 'Por favor ingresa tu fecha de nacimiento.' },
  'booking.error.addressRequired': { en: 'Please enter your home address.', es: 'Por favor ingresa tu dirección de casa.' },
  'booking.error.mustBe18': { en: 'You must be 18 or older to book.', es: 'Debes tener 18 años o más para reservar.' },


}



const LangContext = createContext<LangContextType | null>(null)

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be inside LangProvider')
  return ctx
}
