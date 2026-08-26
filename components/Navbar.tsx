'use client'

import { useState, useEffect, useRef } from 'react'
import { useLang } from '@/lib/i18n'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'

// ─── Social URLs ───────────────────────────────────────────────────────────
const SOCIAL = {
  facebook:  'https://www.facebook.com/gueytours/?locale=es_LA',
  instagram: 'https://www.instagram.com/gueytours/',
  tiktok:    'https://www.tiktok.com/@gueytours?_t=ZM-8vJdstmTdtH&_r=1',
  youtube:   'https://www.youtube.com/@gueytours',
}

// TikTok icon (lucide doesn't include one — inline SVG)
function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M19.321 5.562a5.122 5.122 0 0 1-3.414-1.267 5.122 5.122 0 0 1-1.537-3.163V.75h-3.4v13.49a3.007 3.007 0 0 1-5.39 1.793 3.007 3.007 0 0 1 2.69-4.796V7.827A6.409 6.409 0 0 0 5.637 19.08a6.409 6.409 0 0 0 10.928-4.535V8.263a8.498 8.498 0 0 0 4.992 1.596V6.453a5.15 5.15 0 0 1-2.236-.891z"/>
    </svg>
  )
}

// Facebook icon (lucide dropped brand logos — inline SVG)
function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

// Instagram icon (lucide dropped brand logos — inline SVG)
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

// YouTube icon (lucide dropped brand logos — inline SVG)
function YouTubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [toursDropdownOpen, setToursDropdownOpen] = useState(false)
  const dropdownCloseTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Small delay on close to avoid flicker when moving mouse from parent to dropdown
  const openDropdown = () => {
    if (dropdownCloseTimeout.current) clearTimeout(dropdownCloseTimeout.current)
    setToursDropdownOpen(true)
  }
  const closeDropdown = () => {
    dropdownCloseTimeout.current = setTimeout(() => setToursDropdownOpen(false), 120)
  }

  // Tours has children (currently just Blog). Split-link pattern:
  //   - clicking "Tours" label → scrolls to /#tours
  //   - hovering the item or clicking the caret → opens dropdown
  const toursChildren = [
    { label: t('nav.blog'), href: '/blog' },
  ]

  const leftLinks = [
    { label: t('nav.tours'), href: '/#tours', children: toursChildren },
    { label: t('nav.testimonials'), href: '/#testimonials' },
    { label: t('nav.about'), href: '/#about' },
  ]

  const rightLinks = [
    { label: t('nav.gallery'), href: '/#gallery' },
    { label: t('nav.contact'), href: '/#contact' },
  ]

  // Flattened list for mobile — promote Tours children to top-level siblings
  const mobileLinks = [
    ...leftLinks.flatMap(link =>
      link.children
        ? [{ label: link.label, href: link.href }, ...link.children]
        : [link]
    ),
    ...rightLinks,
  ]

  const linkStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    fontFamily: 'var(--font-inter, var(--font-heading))',
    fontWeight: 700,
    fontSize: '1.0rem',
    letterSpacing: '0.1em',
    opacity: 0.85,
    transition: 'color 0.2s, opacity 0.2s',
  }

  // Always compact sizing. Background/border/padding still transition on scroll.
  const navBackground = scrolled ? 'rgba(20,20,20,0.98)' : 'transparent'
  const navBackdrop   = scrolled ? 'blur(12px)' : 'none'
  const navBorder     = scrolled ? '1px solid rgba(107,191,46,0.2)' : 'none'
  const navPadding    = '0.4rem 0'

  const logoWidth   = 160
  const logoHeight  = 126
  const mobileLogoW = 120
  const mobileLogoH = 94

  // ─── Language toggle ──────────────────────────────────────────────────────
  function LangToggle({ size = 'sm' }: { size?: 'sm' | 'md' }) {
    const padding = size === 'md' ? '0.4rem 0.9rem' : '0.3rem 0.7rem'
    const fontSize = size === 'md' ? '0.9rem' : '0.8rem'
    return (
      <div style={{ display: 'flex', gap: 0, border: '1px solid rgba(255,255,255,0.25)', borderRadius: 4, overflow: 'hidden', flexShrink: 0 }}>
        {(['en', 'es'] as const).map(l => (
          <button
            key={l}
            onClick={() => setLang(l)}
            style={{
              padding,
              background: lang === l ? 'var(--orange)' : 'transparent',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize,
              letterSpacing: '0.1em',
              transition: 'background 0.2s',
            }}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    )
  }

  // ─── Social icons cluster (desktop only, top-right absolute) ──────────────
  function SocialIcons() {
    const iconStyle: React.CSSProperties = {
      color: 'var(--orange)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.2s, opacity 0.2s',
      opacity: 0.9,
    }
    const hover = (e: React.MouseEvent) => {
      const el = e.currentTarget as HTMLElement
      el.style.opacity = '1'
      el.style.transform = 'translateY(-2px)'
    }
    const out = (e: React.MouseEvent) => {
      const el = e.currentTarget as HTMLElement
      el.style.opacity = '0.9'
      el.style.transform = 'translateY(0)'
    }
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={iconStyle} onMouseEnter={hover} onMouseLeave={out}>
          <FacebookIcon size={22} />
        </a>
        <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={iconStyle} onMouseEnter={hover} onMouseLeave={out}>
          <InstagramIcon size={22} />
        </a>
        <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={iconStyle} onMouseEnter={hover} onMouseLeave={out}>
          <YouTubeIcon size={24} />
        </a>
        <a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" style={iconStyle} onMouseEnter={hover} onMouseLeave={out}>
          <TikTokIcon size={20} />
        </a>
      </div>
    )
  }

  // ─── Desktop nav link (handles split-dropdown for items with children) ────
  function DesktopNavLink({ link }: { link: typeof leftLinks[number] }) {
    const hasChildren = 'children' in link && link.children && link.children.length > 0
    const isOpen = hasChildren && toursDropdownOpen

    if (!hasChildren) {
      return (
        <a
          href={link.href}
          style={linkStyle}
          onMouseEnter={e => { (e.target as HTMLElement).style.color = 'var(--orange)'; (e.target as HTMLElement).style.opacity = '1' }}
          onMouseLeave={e => { (e.target as HTMLElement).style.color = 'white'; (e.target as HTMLElement).style.opacity = '0.85' }}
        >
          {link.label}
        </a>
      )
    }

    return (
      <div
        style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
      >
        <a
          href={link.href}
          style={linkStyle}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--orange)'; (e.currentTarget as HTMLElement).style.opacity = '1' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'white'; (e.currentTarget as HTMLElement).style.opacity = '0.85' }}
        >
          {link.label}
        </a>
        <button
          aria-label="Toggle tours menu"
          aria-expanded={isOpen}
          onClick={() => setToursDropdownOpen(v => !v)}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            opacity: 0.85,
            cursor: 'pointer',
            padding: '0.25rem',
            display: 'flex',
            alignItems: 'center',
            transition: 'transform 0.2s, color 0.2s, opacity 0.2s',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--orange)'; (e.currentTarget as HTMLElement).style.opacity = '1' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'white'; (e.currentTarget as HTMLElement).style.opacity = '0.85' }}
        >
          <ChevronDown size={14} strokeWidth={2.5} />
        </button>

        {isOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              marginTop: '0.5rem',
              background: 'rgba(20,20,20,0.98)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(107,191,46,0.2)',
              borderRadius: 6,
              padding: '0.5rem 0',
              minWidth: 160,
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              zIndex: 110,
            }}
          >
            {link.children!.map(child => (
              <a
                key={child.href}
                href={child.href}
                style={{
                  display: 'block',
                  padding: '0.6rem 1.2rem',
                  color: 'white',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-inter, var(--font-heading))',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  letterSpacing: '0.08em',
                  opacity: 0.85,
                  transition: 'color 0.2s, opacity 0.2s, background 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--orange)';
                  (e.currentTarget as HTMLElement).style.opacity = '1';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(107,191,46,0.08)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = 'white';
                  (e.currentTarget as HTMLElement).style.opacity = '0.85';
                  (e.currentTarget as HTMLElement).style.background = 'transparent'
                }}
              >
                {child.label}
              </a>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: navBackground,
        backdropFilter: navBackdrop,
        borderBottom: navBorder,
        padding: navPadding,
      }}
    >
      {/* Desktop */}
      <div
        style={{
          maxWidth: '1500px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          position: 'relative',
        }}
        className="hidden-mobile"
      >
        {/* Left links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', justifyContent: 'flex-end' }}>
          {leftLinks.map(link => (
            <DesktopNavLink key={link.href} link={link} />
          ))}
        </div>

        {/* Centre logo */}
        <a href="/" style={{ textDecoration: 'none', margin: '0 2.5rem' }}>
          <Image
            src="/guey-logo.png"
            alt="Guey Tours"
            width={logoWidth}
            height={logoHeight}
            style={{ objectFit: 'contain' }}
          />
        </a>

        {/* Right links + language toggle + social */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', justifyContent: 'flex-start' }}>
          {rightLinks.map(link => (
            <DesktopNavLink key={link.href} link={link} />
          ))}
          <LangToggle size="sm" />
          <SocialIcons />
        </div>
      </div>

      {/* Mobile header row — logo + lang toggle + hamburger */}
      <div
        style={{ maxWidth: '1500px', margin: '0 auto', padding: '0 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}
        className="show-mobile"
      >
        <a href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <Image
            src="/guey-logo.png"
            alt="Guey Tours"
            width={mobileLogoW}
            height={mobileLogoH}
            style={{ objectFit: 'contain' }}
          />
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: 'auto' }}>
          <LangToggle size="sm" />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '0.5rem' }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — no language toggle or social (kept simple) */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(20,20,20,0.98)',
          padding: '1.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          borderTop: '1px solid rgba(107,191,46,0.3)',
        }}>
          {mobileLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '1.2rem',
                letterSpacing: '0.1em',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: grid !important; }
        }
      `}</style>
    </nav>
  )
}
