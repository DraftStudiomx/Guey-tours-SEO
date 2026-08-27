import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'
import { LangProvider } from '@/lib/i18n'
import ChatWidget from '@/components/ChatWidget'
import Script from "next/script";


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
  title: 'Best ATV & RZR Tours in San Miguel de Allende | Guey Tours',
  description: 'Explore San Miguel de Allende with thrilling ATV and RZR tours. Scenic off-road adventures, expert guides and unforgettable experiences. Book now.',
  keywords: 'ATV tours, San Miguel de Allende, RZR tours, adventure tours, off-road, quad bikes, Mexico tours',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/aza7xhc.css" />
      </head>

      <body>
        <LangProvider>
          {children}
          <ChatWidget />
        </LangProvider>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GFZNCW3QJV"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
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
