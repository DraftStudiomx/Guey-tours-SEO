'use client'

import { useLang } from '@/lib/i18n'
import Image from 'next/image'

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon fill="#0a0a0a" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
)

const linkStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.4)',
  textDecoration: 'none',
  fontFamily: 'var(--font-body)',
  fontSize: '0.8rem',
  letterSpacing: '0.05em',
  transition: 'color 0.2s',
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={linkStyle}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--orange)' }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)' }}
    >
      {children}
    </a>
  )
}

export default function Footer() {
  const { t, lang } = useLang()

  return (
    <footer style={{
      background: '#0a0a0a',
      borderTop: '1px solid rgba(232,84,26,0.2)',
      padding: '2.5rem 2rem',
    }}>
      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.5rem',
      }}>

        <Image
          src="/guey-logo-footer.png"
          alt="Guey Tours"
          width={280}
          height={90}
          style={{ objectFit: 'contain' }}
        />

        {/* Centre links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
        
          <FooterLink href="/privacy">
            {lang === 'es' ? 'Privacidad' : 'Privacy Policy'}
          </FooterLink>
          <FooterLink href="/terms">
            {lang === 'es' ? 'Términos' : 'Terms & Conditions'}
          </FooterLink>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem' }}>
            {t('footer.rights')}
          </span>
        </div>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          {[
            { icon: FacebookIcon, href: 'https://www.facebook.com/gueytours/?locale=es_LA' },
            { icon: InstagramIcon, href: 'https://www.instagram.com/gueytours/' },
            { icon: YoutubeIcon, href: 'https://www.youtube.com/channel/UCr2yquo5cpNIMgGW00spu7A' },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '36px',
                height: '36px',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--orange)'
                el.style.color = 'var(--orange)'
                el.style.background = 'rgba(232,84,26,0.1)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.15)'
                el.style.color = 'rgba(255,255,255,0.5)'
                el.style.background = 'transparent'
              }}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
