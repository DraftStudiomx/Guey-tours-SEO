import type { Lang } from '@/types/booking'

// ─── Input shape ──────────────────────────────────────────────────────────────

export interface BookingEmailData {
  booking_id: string
  tour_name: string          // English name (per Option A)
  tour_duration_hours: number
  date: string               // 'YYYY-MM-DD'
  slot: string               // 'HH:MM'
  num_people: number
  vehicles: { name: string; quantity: number }[]  // English names
  principal_name: string
  email: string
  phone: string
  total_price: number
  lang: Lang
}

// ─── Formatters ───────────────────────────────────────────────────────────────

const MONTHS_EN = ['January','February','March','April','May','June','July','August','September','October','November','December']
const MONTHS_ES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']

function formatDate(date: string, lang: Lang): string {
  const [y, mo, d] = date.split('-')
  const months = lang === 'es' ? MONTHS_ES : MONTHS_EN
  const day = parseInt(d)
  const month = months[parseInt(mo) - 1]
  return lang === 'es' ? `${day} de ${month} de ${y}` : `${month} ${day}, ${y}`
}

function formatTime(slot: string): string {
  const [h, m] = slot.split(':').map(Number)
  const ampm = h < 12 ? 'AM' : 'PM'
  const hour = h % 12 === 0 ? 12 : h % 12
  return `${hour}:${String(m).padStart(2, '0')} ${ampm}`
}

function formatMXN(amount: number): string {
  return `$${amount.toLocaleString('en-US')} MXN`
}

// ─── Translations ─────────────────────────────────────────────────────────────

const strings = {
  en: {
    // Customer email
    subject: (t: string) => `Your Guey Tours booking is confirmed — ${t}`,
    preheader: 'Your ATV adventure in San Miguel de Allende is booked. See the details below.',
    heading: 'Booking confirmed',
    greeting: (name: string) => `Hi ${name},`,
    intro: 'Thanks for booking with Guey Tours. Your adventure is locked in — here are the details:',
    label: {
      tour: 'Tour',
      date: 'Date',
      time: 'Time',
      guests: 'Guests',
      vehicles: 'Vehicles',
      total: 'Total paid',
      reference: 'Booking reference',
    },
    whatNext: 'What happens next',
    whatNextItems: [
      'Arrive 15 minutes before your start time at our office in San Miguel de Allende.',
      'Bring your driver\'s license (or passport) and closed-toe shoes.',
      'We provide helmets, goggles, and a full safety briefing.',
      'Tours run rain or shine — dress for the weather.',
    ],
    contact: 'Questions? Reply to this email or WhatsApp us at +52 415 109 0021.',
    footer: 'Guey Tours · San Miguel de Allende, Mexico',
    // Operator email
    opSubject: (t: string, d: string) => `🛻 New booking — ${t} on ${d}`,
    opHeading: 'New booking received',
  },
  es: {
    subject: (t: string) => `Tu reserva con Guey Tours está confirmada — ${t}`,
    preheader: 'Tu aventura en ATV en San Miguel de Allende está reservada. Aquí están los detalles.',
    heading: 'Reserva confirmada',
    greeting: (name: string) => `Hola ${name},`,
    intro: 'Gracias por reservar con Guey Tours. Tu aventura está confirmada — aquí están los detalles:',
    label: {
      tour: 'Tour',
      date: 'Fecha',
      time: 'Hora',
      guests: 'Personas',
      vehicles: 'Vehículos',
      total: 'Total pagado',
      reference: 'Referencia de reserva',
    },
    whatNext: 'Qué sigue',
    whatNextItems: [
      'Llega 15 minutos antes de la hora de inicio a nuestra oficina en San Miguel de Allende.',
      'Trae tu licencia de conducir (o pasaporte) y zapatos cerrados.',
      'Nosotros proporcionamos cascos, gafas y una sesión de seguridad completa.',
      'Los tours operan con lluvia o sol — vístete para el clima.',
    ],
    contact: '¿Preguntas? Responde a este correo o mándanos WhatsApp al +52 415 000 0000.',
    footer: 'Guey Tours · San Miguel de Allende, México',
    opSubject: (t: string, d: string) => `🛻 Nueva reserva — ${t} el ${d}`,
    opHeading: 'Nueva reserva recibida',
  },
}

// ─── Shared styles ────────────────────────────────────────────────────────────

const ORANGE = '#ff6b00'
const CHARCOAL = '#1c1c1c'
const TEXT = '#2a2a2a'
const MUTED = '#6b6b6b'
const BORDER = '#e5e5e5'

// ─── Customer confirmation email ──────────────────────────────────────────────

export function customerEmail(data: BookingEmailData) {
  const t = strings[data.lang]
  const dateStr = formatDate(data.date, data.lang)
  const timeStr = formatTime(data.slot)
  const vehicleStr = data.vehicles.map((v) => `${v.quantity}× ${v.name}`).join(', ')
  const shortRef = data.booking_id.slice(0, 8).toUpperCase()

  const subject = t.subject(data.tour_name)

  const html = `<!DOCTYPE html>
<html lang="${data.lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <span style="display:none;max-height:0;overflow:hidden;opacity:0;">${t.preheader}</span>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.05);">

          <!-- Header -->
          <tr>
            <td style="background:${CHARCOAL};padding:32px 32px 24px;text-align:center;">
              <div style="color:${ORANGE};font-size:11px;letter-spacing:0.3em;text-transform:uppercase;font-weight:700;margin-bottom:8px;">GUEY TOURS</div>
              <h1 style="color:#ffffff;font-size:24px;font-weight:700;margin:0;letter-spacing:0.02em;">${t.heading}</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <p style="color:${TEXT};font-size:16px;line-height:1.5;margin:0 0 12px;">${t.greeting(data.principal_name)}</p>
              <p style="color:${TEXT};font-size:15px;line-height:1.6;margin:0 0 24px;">${t.intro}</p>

              <!-- Details table -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BORDER};border-radius:8px;overflow:hidden;margin-bottom:24px;">
                ${[
                  [t.label.tour, `${data.tour_name} (${data.tour_duration_hours}hr${data.tour_duration_hours > 1 ? 's' : ''})`],
                  [t.label.date, dateStr],
                  [t.label.time, timeStr],
                  [t.label.guests, String(data.num_people)],
                  [t.label.vehicles, vehicleStr],
                  [t.label.reference, shortRef],
                ].map(([label, val]) => `
                  <tr>
                    <td style="padding:12px 16px;border-bottom:1px solid ${BORDER};color:${MUTED};font-size:13px;width:40%;">${label}</td>
                    <td style="padding:12px 16px;border-bottom:1px solid ${BORDER};color:${TEXT};font-size:14px;font-weight:500;">${val}</td>
                  </tr>
                `).join('')}
                <tr>
                  <td style="padding:14px 16px;color:${MUTED};font-size:13px;background:#fafafa;">${t.label.total}</td>
                  <td style="padding:14px 16px;color:${ORANGE};font-size:16px;font-weight:700;background:#fafafa;">${formatMXN(data.total_price)}</td>
                </tr>
              </table>

              <!-- What next -->
              <h2 style="color:${TEXT};font-size:16px;font-weight:700;margin:0 0 12px;">${t.whatNext}</h2>
              <ul style="color:${TEXT};font-size:14px;line-height:1.7;margin:0 0 24px;padding-left:20px;">
                ${t.whatNextItems.map((item) => `<li style="margin-bottom:6px;">${item}</li>`).join('')}
              </ul>

              <p style="color:${MUTED};font-size:13px;line-height:1.6;margin:0;border-top:1px solid ${BORDER};padding-top:20px;">${t.contact}</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#fafafa;padding:20px 32px;text-align:center;border-top:1px solid ${BORDER};">
              <p style="color:${MUTED};font-size:12px;margin:0;">${t.footer}</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  return { subject, html }
}

// ─── Operator notification email ──────────────────────────────────────────────

export function operatorEmail(data: BookingEmailData) {
  // Operator always gets English — simpler for the business
  const t = strings.en
  const dateStr = formatDate(data.date, 'en')
  const timeStr = formatTime(data.slot)
  const vehicleStr = data.vehicles.map((v) => `${v.quantity}× ${v.name}`).join(', ')
  const shortRef = data.booking_id.slice(0, 8).toUpperCase()

  const subject = t.opSubject(data.tour_name, dateStr)

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>${subject}</title></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;">

          <tr>
            <td style="background:${CHARCOAL};padding:24px 32px;">
              <div style="color:${ORANGE};font-size:11px;letter-spacing:0.3em;text-transform:uppercase;font-weight:700;margin-bottom:6px;">NEW BOOKING</div>
              <h1 style="color:#ffffff;font-size:20px;font-weight:700;margin:0;">${t.opHeading}</h1>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BORDER};border-radius:8px;overflow:hidden;">
                ${[
                  ['Tour', `${data.tour_name} (${data.tour_duration_hours}hr${data.tour_duration_hours > 1 ? 's' : ''})`],
                  ['Date', dateStr],
                  ['Time', timeStr],
                  ['Guests', String(data.num_people)],
                  ['Vehicles', vehicleStr],
                  ['Customer', data.principal_name],
                  ['Email', `<a href="mailto:${data.email}" style="color:${ORANGE};text-decoration:none;">${data.email}</a>`],
                  ['Phone', `<a href="tel:${data.phone}" style="color:${ORANGE};text-decoration:none;">${data.phone}</a>`],
                  ['Language', data.lang === 'es' ? 'Spanish' : 'English'],
                  ['Reference', shortRef],
                ].map(([label, val]) => `
                  <tr>
                    <td style="padding:10px 14px;border-bottom:1px solid ${BORDER};color:${MUTED};font-size:13px;width:35%;">${label}</td>
                    <td style="padding:10px 14px;border-bottom:1px solid ${BORDER};color:${TEXT};font-size:14px;">${val}</td>
                  </tr>
                `).join('')}
                <tr>
                  <td style="padding:12px 14px;color:${MUTED};font-size:13px;background:#fafafa;">Total paid</td>
                  <td style="padding:12px 14px;color:${ORANGE};font-size:16px;font-weight:700;background:#fafafa;">${formatMXN(data.total_price)}</td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  return { subject, html }
}
