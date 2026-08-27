import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'
import { LangProvider } from '@/lib/i18n'
import ChatWidget from '@/components/ChatWidget'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Best ATV Tours in San Miguel de Allende | Guey Tours',

  description:
    'Explore San Miguel de Allende with thrilling ATV, RZR and off-road tours. Private experiences, bilingual guides and unforgettable adventures.',

  keywords:
    'ATV tours, San Miguel de Allende, RZR tours, adventure tours, off-road, quad bikes, Mexico tours',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.gueytours.com/',
    siteName: 'Guey Tours',
    title: 'Best ATV Tours in San Miguel de Allende | Guey Tours',
    description:
      'Explore San Miguel de Allende with thrilling ATV, RZR and off-road tours. Private experiences, bilingual guides and unforgettable adventures.',

    images: [
      {
        url: 'https://www.gueytours.com/guey-logo.png',
        width: 384,
        height: 384,
        alt: 'Guey Tours - ATV Tours in San Miguel de Allende',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Best ATV Tours in San Miguel de Allende | Guey Tours',
    description:
      'Explore San Miguel de Allende with thrilling ATV, RZR and off-road tours.',
    images: ['https://www.gueytours.com/guey-logo.png'],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',

  '@id': 'https://www.gueytours.com/#business',

  name: 'Guey Tours',

  description:
    'Guey Tours es una empresa de turismo de aventura ubicada en San Miguel de Allende, Guanajuato, especializada en recorridos guiados en ATV, RZR, Cuatrimotos y vehículos todoterreno. Ofrece experiencias privadas y personalizadas que combinan adrenalina, naturaleza, cultura e historia, permitiendo a los visitantes explorar tanto el centro histórico como los alrededores de la ciudad con altos estándares de seguridad, guías bilingües y atención personalizada.',

  url: 'https://www.gueytours.com/',

  logo: 'https://www.gueytours.com/guey-logo.png',

  image: 'https://www.gueytours.com/guey-logo.png',

  telephone: '+52 1 415 109 0021',

  email: 'gueycuatritours@gmail.com',

  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle Refugio Sur #52',
    addressLocality: 'San Miguel de Allende',
    addressRegion: 'Guanajuato',
    addressCountry: 'MX',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable}`}
    >
      <head>
        <link
          rel="preconnect"
          href="https://use.typekit.net"
          crossOrigin="anonymous"
        />

        <link
          rel="preconnect"
          href="https://p.typekit.net"
          crossOrigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://use.typekit.net/aza7xhc.css"
        />

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N3WM92GS');
          `}
        </Script>

        {/* Local Business Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>

      <body>
        {/* Google Tag Manager - noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N3WM92GS"
            height="0"
            width="0"
            style={{
              display: 'none',
              visibility: 'hidden',
            }}
          />
        </noscript>

        <LangProvider>
          {children}
          <ChatWidget />
        </LangProvider>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GFZNCW3QJV"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GFZNCW3QJV');
          `}
        </Script>
      </body>
    </html>
  )
}
