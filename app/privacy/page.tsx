'use client'

import { useLang } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const content = {
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: April 2026',
    sections: [
      {
        heading: '1. Who We Are',
        body: `Guey Tours operates ATV and off-road tour experiences in San Miguel de Allende, Guanajuato, Mexico. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website or make a booking. For any privacy-related questions, contact us at gueycuatritours@gmail.com.`,
      },
      {
        heading: '2. Information We Collect',
        body: `When you make a booking, we collect your first and last name, email address, phone number, and payment information processed securely through Stripe. We do not store your card details directly. We also collect information automatically when you visit our site, including your IP address, browser type, pages visited, and time spent on the site through cookies and analytics tools.`,
      },
      {
        heading: '3. How We Use Your Information',
        body: `We use your personal information to process and confirm bookings, send booking confirmations and tour information, respond to your enquiries, improve our website and services, and comply with our legal obligations under Mexican law. We do not sell your personal data to third parties.`,
      },
      {
        heading: '4. Cookies and Analytics',
        body: `Our website uses cookies — small text files stored on your device — to remember your preferences, analyse site traffic, and improve your experience. We use analytics tools to understand how visitors interact with our site. You can disable cookies in your browser settings, though this may affect some site functionality. By continuing to use our site, you consent to our use of cookies.`,
      },
      {
        heading: '5. Payment Processing',
        body: `All payments are processed by Stripe, a secure third-party payment provider. Guey Tours does not store your credit or debit card information. Stripe's privacy policy governs the handling of your payment data. We receive only a booking confirmation and transaction reference.`,
      },
      {
        heading: '6. Data Retention',
        body: `We retain your booking information for as long as necessary to fulfil the services you have requested and to comply with our legal and tax obligations under Mexican law. You may request deletion of your personal data at any time by contacting us at gueycuatritours@gmail.com.`,
      },
      {
        heading: '7. Your Rights',
        body: `Under the Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), you have the right to access, correct, cancel, or oppose the processing of your personal data (known as ARCO rights). To exercise these rights, please contact us at gueycuatritours@gmail.com with your request. We will respond within 20 business days.`,
      },
      {
        heading: '8. Third-Party Links',
        body: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies independently.`,
      },
      {
        heading: '9. Changes to This Policy',
        body: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this policy periodically.`,
      },
      {
        heading: '10. Contact',
        body: `For any questions about this Privacy Policy or to exercise your data rights, please contact us at gueycuatritours@gmail.com.`,
      },
    ],
  },
  es: {
    title: 'Política de Privacidad',
    updated: 'Última actualización: Abril 2026',
    sections: [
      {
        heading: '1. Quiénes Somos',
        body: `Guey Tours opera experiencias de tours en ATV y todoterreno en San Miguel de Allende, Guanajuato, México. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos su información personal cuando utiliza nuestro sitio web o realiza una reserva. Para cualquier pregunta relacionada con privacidad, contáctenos en gueycuatritours@gmail.com.`,
      },
      {
        heading: '2. Información que Recopilamos',
        body: `Cuando realiza una reserva, recopilamos su nombre y apellido, dirección de correo electrónico, número de teléfono e información de pago procesada de forma segura a través de Stripe. No almacenamos sus datos de tarjeta directamente. También recopilamos información automáticamente cuando visita nuestro sitio, incluyendo su dirección IP, tipo de navegador, páginas visitadas y tiempo en el sitio, a través de cookies y herramientas de análisis.`,
      },
      {
        heading: '3. Cómo Usamos su Información',
        body: `Utilizamos su información personal para procesar y confirmar reservas, enviar confirmaciones de reserva e información del tour, responder a sus consultas, mejorar nuestro sitio web y servicios, y cumplir con nuestras obligaciones legales conforme a la ley mexicana. No vendemos sus datos personales a terceros.`,
      },
      {
        heading: '4. Cookies y Análisis',
        body: `Nuestro sitio web utiliza cookies — pequeños archivos de texto almacenados en su dispositivo — para recordar sus preferencias, analizar el tráfico del sitio y mejorar su experiencia. Utilizamos herramientas de análisis para entender cómo los visitantes interactúan con nuestro sitio. Puede desactivar las cookies en la configuración de su navegador, aunque esto puede afectar algunas funcionalidades. Al continuar usando nuestro sitio, usted consiente el uso de cookies.`,
      },
      {
        heading: '5. Procesamiento de Pagos',
        body: `Todos los pagos son procesados por Stripe, un proveedor de pagos externo seguro. Guey Tours no almacena información de su tarjeta de crédito o débito. La política de privacidad de Stripe rige el manejo de sus datos de pago. Solo recibimos una confirmación de reserva y referencia de transacción.`,
      },
      {
        heading: '6. Retención de Datos',
        body: `Conservamos su información de reserva durante el tiempo necesario para cumplir con los servicios solicitados y para cumplir con nuestras obligaciones legales y fiscales conforme a la ley mexicana. Puede solicitar la eliminación de sus datos personales en cualquier momento contactándonos en gueycuatritours@gmail.com.`,
      },
      {
        heading: '7. Sus Derechos (Derechos ARCO)',
        body: `Conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (derechos ARCO). Para ejercer estos derechos, contáctenos en gueycuatritours@gmail.com con su solicitud. Responderemos en un plazo de 20 días hábiles.`,
      },
      {
        heading: '8. Enlaces a Terceros',
        body: `Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad de dichos sitios y le recomendamos revisar sus políticas de privacidad de forma independiente.`,
      },
      {
        heading: '9. Cambios a Esta Política',
        body: `Podemos actualizar esta Política de Privacidad de vez en cuando. Cualquier cambio se publicará en esta página con una fecha actualizada. Le recomendamos revisar esta política periódicamente.`,
      },
      {
        heading: '10. Contacto',
        body: `Para cualquier pregunta sobre esta Política de Privacidad o para ejercer sus derechos de datos, contáctenos en gueycuatritours@gmail.com.`,
      },
    ],
  },
}

export default function PrivacyPage() {
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

        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <Link href="/" style={{ color: 'var(--orange)', fontSize: '0.9rem', fontFamily: 'var(--font-heading)', textDecoration: 'none', letterSpacing: '0.05em' }}>
            ← {lang === 'es' ? 'Volver al inicio' : 'Back to home'}
          </Link>
        </div>
      </div>
    </main>
  )
}
