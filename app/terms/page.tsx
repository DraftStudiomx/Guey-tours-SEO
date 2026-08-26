'use client'

import { useLang } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const content = {
  en: {
    title: 'Terms & Conditions',
    updated: 'Last updated: April 2026',
    sections: [
      {
        heading: '1. Agreement to Terms',
        body: `By accessing our website or making a booking with Guey Tours, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services. These terms apply to all customers, visitors, and users of our website and services.`,
      },
      {
        heading: '2. Our Services',
        body: `Guey Tours provides ATV and off-road tour experiences in and around San Miguel de Allende, Guanajuato, Mexico. All tours are subject to availability, weather conditions, and operational decisions made by Guey Tours. We reserve the right to modify, suspend, or discontinue any tour or service at any time.`,
      },
      {
        heading: '3. Bookings and Payment',
        body: `Bookings are confirmed upon receipt of full payment via our online booking system. Prices are displayed in Mexican Pesos (MXN) and include applicable taxes unless stated otherwise. All payments are processed securely through Stripe. Your booking is not confirmed until you receive a confirmation email from us.`,
      },
      {
        heading: '4. Cancellation Policy',
        body: `[Cancellation terms to be added by Guey Tours]`,
      },
      {
        heading: '5. Safety Requirements',
        body: `All participants must be at least 18 years of age to operate a vehicle. Children may ride as passengers with a responsible adult. Participants must wear closed-toe shoes at all times. Helmets are provided and must be worn throughout the tour. Guey Tours reserves the right to refuse participation to any person who appears to be under the influence of alcohol or drugs, or who poses a safety risk to themselves or others.`,
      },
      {
        heading: '6. Health and Fitness',
        body: `Participants are responsible for ensuring they are in suitable physical health to participate in ATV and off-road activities. Guey Tours is not liable for any pre-existing medical conditions that may be aggravated by participation. If you have any health concerns, please consult your doctor before booking.`,
      },
      {
        heading: '7. Liability Waiver',
        body: `Participation in ATV and off-road tours involves inherent risks including but not limited to falls, collisions, and vehicle rollovers. By booking and participating in a Guey Tours experience, you acknowledge these risks and agree that Guey Tours, its staff, and agents are not liable for personal injury, death, or loss of property arising from participation, except in cases of gross negligence or wilful misconduct on the part of Guey Tours.`,
      },
      {
        heading: '8. Damage to Vehicles',
        body: `Participants are responsible for any damage caused to vehicles through reckless or negligent operation. Guey Tours staff will conduct a vehicle inspection before and after each tour. Any damage beyond normal wear and tear may be charged to the participant.`,
      },
      {
        heading: '9. Photography and Media',
        body: `Guey Tours may take photographs or video footage during tours for marketing purposes. By participating, you consent to the use of such media on our website and social media channels. If you do not wish to be photographed, please inform your guide before the tour begins.`,
      },
      {
        heading: '10. Force Majeure',
        body: `Guey Tours is not liable for any failure to perform its obligations due to circumstances beyond its reasonable control, including but not limited to extreme weather, natural disasters, government restrictions, or other unforeseen events. In such cases, we will make reasonable efforts to reschedule or refund affected bookings.`,
      },
      {
        heading: '11. Intellectual Property',
        body: `All content on this website, including text, images, logos, and videos, is the property of Guey Tours and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without our prior written permission.`,
      },
      {
        heading: '12. Governing Law',
        body: `These Terms and Conditions are governed by and construed in accordance with the laws of the United Mexican States and the State of Guanajuato. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of San Miguel de Allende, Guanajuato, Mexico.`,
      },
      {
        heading: '13. Changes to These Terms',
        body: `Guey Tours reserves the right to update these Terms and Conditions at any time. Changes will be posted on this page with an updated date. Continued use of our services following any changes constitutes acceptance of the revised terms.`,
      },
      {
        heading: '14. Contact',
        body: `For any questions regarding these Terms and Conditions, please contact us at gueycuatritours@gmail.com.`,
      },
    ],
  },
  es: {
    title: 'Términos y Condiciones',
    updated: 'Última actualización: Abril 2026',
    sections: [
      {
        heading: '1. Aceptación de los Términos',
        body: `Al acceder a nuestro sitio web o realizar una reserva con Guey Tours, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, le rogamos que no utilice nuestros servicios. Estos términos se aplican a todos los clientes, visitantes y usuarios de nuestro sitio web y servicios.`,
      },
      {
        heading: '2. Nuestros Servicios',
        body: `Guey Tours ofrece experiencias de tours en ATV y todoterreno en San Miguel de Allende, Guanajuato, México y sus alrededores. Todos los tours están sujetos a disponibilidad, condiciones climáticas y decisiones operativas de Guey Tours. Nos reservamos el derecho de modificar, suspender o discontinuar cualquier tour o servicio en cualquier momento.`,
      },
      {
        heading: '3. Reservas y Pago',
        body: `Las reservas se confirman al recibir el pago completo a través de nuestro sistema de reservas en línea. Los precios se muestran en Pesos Mexicanos (MXN) e incluyen los impuestos aplicables salvo indicación contraria. Todos los pagos se procesan de forma segura a través de Stripe. Su reserva no está confirmada hasta que reciba un correo electrónico de confirmación de nuestra parte.`,
      },
      {
        heading: '4. Política de Cancelación',
        body: `[Términos de cancelación a añadir por Guey Tours]`,
      },
      {
        heading: '5. Requisitos de Seguridad',
        body: `Todos los participantes deben tener al menos 18 años para operar un vehículo. Los menores pueden viajar como pasajeros con un adulto responsable. Los participantes deben usar calzado cerrado en todo momento. Se proporcionan cascos que deben usarse durante todo el tour. Guey Tours se reserva el derecho de negar la participación a cualquier persona que parezca estar bajo la influencia del alcohol o drogas, o que represente un riesgo para su seguridad o la de otros.`,
      },
      {
        heading: '6. Salud y Condición Física',
        body: `Los participantes son responsables de asegurarse de estar en condiciones físicas adecuadas para participar en actividades de ATV y todoterreno. Guey Tours no se hace responsable de condiciones médicas preexistentes que puedan agravarse con la participación. Si tiene alguna preocupación de salud, consulte a su médico antes de reservar.`,
      },
      {
        heading: '7. Exención de Responsabilidad',
        body: `La participación en tours de ATV y todoterreno conlleva riesgos inherentes que incluyen, entre otros, caídas, colisiones y volcaduras de vehículos. Al reservar y participar en una experiencia de Guey Tours, usted reconoce estos riesgos y acepta que Guey Tours, su personal y agentes no son responsables de lesiones personales, muerte o pérdida de bienes derivados de la participación, salvo en casos de negligencia grave o conducta dolosa por parte de Guey Tours.`,
      },
      {
        heading: '8. Daños a los Vehículos',
        body: `Los participantes son responsables de cualquier daño causado a los vehículos por operación imprudente o negligente. El personal de Guey Tours realizará una inspección del vehículo antes y después de cada tour. Cualquier daño más allá del desgaste normal podrá ser cobrado al participante.`,
      },
      {
        heading: '9. Fotografía y Medios',
        body: `Guey Tours puede tomar fotografías o videos durante los tours con fines de marketing. Al participar, usted consiente el uso de dichos medios en nuestro sitio web y canales de redes sociales. Si no desea ser fotografiado, informe a su guía antes de que comience el tour.`,
      },
      {
        heading: '10. Fuerza Mayor',
        body: `Guey Tours no es responsable de ningún incumplimiento de sus obligaciones debido a circunstancias fuera de su control razonable, incluyendo pero no limitado a clima extremo, desastres naturales, restricciones gubernamentales u otros eventos imprevistos. En tales casos, haremos esfuerzos razonables para reprogramar o reembolsar las reservas afectadas.`,
      },
      {
        heading: '11. Propiedad Intelectual',
        body: `Todo el contenido de este sitio web, incluyendo textos, imágenes, logotipos y videos, es propiedad de Guey Tours y está protegido por las leyes de propiedad intelectual aplicables. No puede reproducir, distribuir ni utilizar ningún contenido sin nuestro permiso previo por escrito.`,
      },
      {
        heading: '12. Legislación Aplicable',
        body: `Estos Términos y Condiciones se rigen e interpretan de conformidad con las leyes de los Estados Unidos Mexicanos y del Estado de Guanajuato. Cualquier disputa derivada de estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de San Miguel de Allende, Guanajuato, México.`,
      },
      {
        heading: '13. Cambios a Estos Términos',
        body: `Guey Tours se reserva el derecho de actualizar estos Términos y Condiciones en cualquier momento. Los cambios se publicarán en esta página con una fecha actualizada. El uso continuado de nuestros servicios tras cualquier cambio constituye la aceptación de los términos revisados.`,
      },
      {
        heading: '14. Contacto',
        body: `Para cualquier pregunta sobre estos Términos y Condiciones, contáctenos en gueycuatritours@gmail.com.`,
      },
    ],
  },
}

export default function TermsPage() {
  const { lang, setLang } = useLang()
  const c = content[lang]

  return (
    <main style={{ background: 'var(--charcoal)', minHeight: '100vh', color: '#fff' }}>
      <Navbar />

      <div style={{ maxWidth: 800, margin: '0 auto', padding: '4rem 2rem 6rem' }}>

        {/* Lang toggle */}
        <div style={{ display: 'flex', gap: 4, marginBottom: '2rem' }}>
          {(['en', 'es'] as const).map((l) => (
            <button key={l} onClick={() => setLang(l)} style={{
              padding: '0.3rem 0.8rem', borderRadius: 4, cursor: 'pointer', fontSize: 12, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.1em',
              background: lang === l ? 'var(--orange)' : 'none',
              color: '#fff',
              border: lang === l ? 'none' : '1px solid rgba(255,255,255,0.2)',
            }}>{l}</button>
          ))}
        </div>

        <h1 style={{
          fontFamily: 'var(--font-heading)', fontWeight: 800,
          fontSize: 'clamp(2rem, 5vw, 3rem)', textTransform: 'uppercase',
          letterSpacing: '0.03em', color: '#fff', marginBottom: '0.5rem',
        }}>
          {c.title}
        </h1>

        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '3rem' }}>
          {c.updated}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {c.sections.map((s, i) => (
            <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}>
              <h2 style={{
                fontFamily: 'var(--font-heading)', fontWeight: 700,
                fontSize: '1.1rem', textTransform: 'uppercase',
                letterSpacing: '0.05em', color: 'var(--orange)', marginBottom: '0.75rem',
              }}>
                {s.heading}
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.75)', margin: 0 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '2rem' }}>
          <Link href="/" style={{ color: 'var(--orange)', fontSize: '0.9rem', fontFamily: 'var(--font-heading)', textDecoration: 'none', letterSpacing: '0.05em' }}>
            ← {lang === 'es' ? 'Volver al inicio' : 'Back to home'}
          </Link>
          <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', fontFamily: 'var(--font-heading)', textDecoration: 'none', letterSpacing: '0.05em' }}>
            {lang === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
          </Link>
        </div>
      </div>
    </main>
  )
}
