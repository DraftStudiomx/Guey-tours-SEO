'use client'

import { useLang } from '@/lib/i18n'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

// ─── Types ───────────────────────────────────────────────────────────────────

interface PTSpan {
  _type: 'span'
  _key: string
  text: string
  marks?: string[]
}

interface PTBlock {
  _type: string
  _key: string
  style?: string
  children?: PTSpan[]
  markDefs?: Array<{ _type: string; _key: string; href?: string }>
  asset?: { _ref: string }
  alt?: string
  caption?: string
}

interface Post {
  _id: string
  title_en: string
  title_es: string
  slug: string
  publishedAt: string
  coverImageUrl: string | null
  excerpt_en?: string
  excerpt_es?: string
  body_en?: PTBlock[]
  body_es?: PTBlock[]
}

interface TocItem {
  id: string
  text: string
  level: number
}

// ─── TOC extraction ──────────────────────────────────────────────────────────

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function extractToc(blocks: PTBlock[]): TocItem[] {
  return blocks
    .filter(b => b._type === 'block' && (b.style === 'h2' || b.style === 'h3'))
    .map(b => {
      const text = (b.children || []).map(c => c.text || '').join('')
      return {
        id: slugify(text),
        text,
        level: b.style === 'h2' ? 2 : 3,
      }
    })
    .filter(item => item.text.length > 0)
}

// ─── Portable Text components ────────────────────────────────────────────────

function makeComponents(urlFor?: (ref: any) => any): PortableTextComponents {
  return {
    block: {
      normal: ({ children }) => (
        <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
          {children}
        </p>
      ),
      h2: ({ children, value }) => {
        const text = value?.children?.map((c: any) => c.text || '').join('') || ''
        const id = slugify(text)
        return (
          <h2
            id={id}
            style={{
              color: 'white',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
              letterSpacing: '0.03em',
              marginTop: '2.5rem',
              marginBottom: '1rem',
              scrollMarginTop: '6rem',
            }}
          >
            {children}
          </h2>
        )
      },
      h3: ({ children, value }) => {
        const text = value?.children?.map((c: any) => c.text || '').join('') || ''
        const id = slugify(text)
        return (
          <h3
            id={id}
            style={{
              color: 'rgba(255,255,255,0.9)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
              letterSpacing: '0.02em',
              marginTop: '2rem',
              marginBottom: '0.75rem',
              scrollMarginTop: '6rem',
            }}
          >
            {children}
          </h3>
        )
      },
      blockquote: ({ children }) => (
        <blockquote style={{
          borderLeft: '3px solid var(--orange, #E8541A)',
          paddingLeft: '1.25rem',
          margin: '2rem 0',
          color: 'rgba(255,255,255,0.65)',
          fontStyle: 'italic',
          fontSize: '1.05rem',
          lineHeight: 1.75,
        }}>
          {children}
        </blockquote>
      ),
    },
    marks: {
      strong: ({ children }) => (
        <strong style={{ color: 'white', fontWeight: 700 }}>{children}</strong>
      ),
      em: ({ children }) => (
        <em style={{ color: 'rgba(255,255,255,0.75)' }}>{children}</em>
      ),
      link: ({ children, value }) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--orange, #E8541A)', textDecoration: 'underline', textUnderlineOffset: 3 }}
        >
          {children}
        </a>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul style={{ color: 'rgba(255,255,255,0.82)', paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol style={{ color: 'rgba(255,255,255,0.82)', paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li style={{ marginBottom: '0.4rem' }}>{children}</li>,
      number: ({ children }) => <li style={{ marginBottom: '0.4rem' }}>{children}</li>,
    },
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) return null
        // Use next/image with Sanity CDN URL if urlFor not available
        const src = `https://cdn.sanity.io/images/${value.asset._ref.replace('image-', '').replace(/-([a-z]+)$/, '.$1').replace(/-/g, '/')}`
        return (
          <figure style={{ margin: '2.5rem 0' }}>
            <div style={{ position: 'relative', width: '100%', borderRadius: 8, overflow: 'hidden', aspectRatio: '16/9' }}>
              <img
                src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${value.asset._ref.replace('image-', '').replace(/-([a-z]+)$/, '.$1')}`}
                alt={value.alt || ''}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            {value.caption && (
              <figcaption style={{
                textAlign: 'center',
                color: 'rgba(255,255,255,0.45)',
                fontSize: '0.82rem',
                marginTop: '0.6rem',
                fontStyle: 'italic',
              }}>
                {value.caption}
              </figcaption>
            )}
          </figure>
        )
      },
    },
  }
}

// ─── Sticky TOC ──────────────────────────────────────────────────────────────

function TableOfContents({ items, lang }: { items: TocItem[]; lang: string }) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (items.length === 0) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    )

    items.forEach(item => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav
      aria-label="Table of contents"
      style={{
        position: 'sticky',
        top: '7rem',
        alignSelf: 'flex-start',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 10,
        padding: '1.5rem',
        minWidth: 220,
        maxWidth: 260,
      }}
    >
      <p style={{
        color: 'var(--orange, #E8541A)',
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: '0.72rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        margin: '0 0 1rem',
      }}>
        {lang === 'en' ? 'In this article' : 'En este artículo'}
      </p>
      <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
        {items.map(item => (
          <li key={item.id} style={{ paddingLeft: item.level === 3 ? '0.75rem' : 0 }}>
            <button
              onClick={() => scrollTo(item.id)}
              style={{
                background: activeId === item.id ? 'rgba(232,84,26,0.08)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                width: '100%',
                padding: '0.35rem 0.5rem',
                borderRadius: 5,
                color: activeId === item.id ? 'var(--orange, #E8541A)' : 'rgba(255,255,255,0.55)',
                fontSize: item.level === 3 ? '0.8rem' : '0.87rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: activeId === item.id ? 700 : 500,
                lineHeight: 1.4,
                transition: 'color 0.2s',
              }}
                          >
              {item.text}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  )
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function BlogPostClient({ post }: { post: Post }) {
  const { lang, t } = useLang()

  const title = lang === 'es' && post.title_es ? post.title_es : post.title_en
  const body = (lang === 'es' && post.body_es?.length ? post.body_es : post.body_en) ?? []

  const tocItems = extractToc(body as PTBlock[])
  const components = makeComponents()

  const formatDate = (iso: string) => {
    const d = new Date(iso)
    const month = t(`booking.months.${d.getMonth()}`)
    return `${month} ${d.getDate()}, ${d.getFullYear()}`
  }

  return (
    <main style={{ minHeight: '100vh', background: 'var(--dark, #111)', paddingTop: '180px' }}>
      {/* ─── Hero image + title ───────────────────────────────────────── */}
      <header style={{ position: 'relative', width: '100%', height: 'clamp(280px, 45vw, 520px)', background: '#1a1a1a'}}>
        {post.coverImageUrl && (
          <Image
            src={post.coverImageUrl}
            alt={title}
            fill
            priority
            style={{ objectFit: 'cover', opacity: 0.55 }}
            sizes="100vw"
          />
        )}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(17,17,17,0) 0%, rgba(17,17,17,0.6) 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(1.5rem, 4vw, 3rem) clamp(1.5rem, 6vw, 5rem)',
          maxWidth: 900,
        }}>
          <p style={{
            color: 'var(--orange, #E8541A)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            letterSpacing: '0.2em',
            fontSize: '0.78rem',
            textTransform: 'uppercase',
            margin: '0 0 0.6rem',
          }}>
            {post.publishedAt ? formatDate(post.publishedAt) : ''}
          </p>
          <h1 style={{
            color: 'white',
            fontFamily: 'var(--font-heading)',
            fontWeight: 900,
            fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
            lineHeight: 1.2,
            letterSpacing: '0.02em',
            margin: 0,
            textShadow: '0 2px 12px rgba(0,0,0,0.5)',
          }}>
            {title}
          </h1>
        </div>
      </header>

      {/* ─── Content + TOC ───────────────────────────────────────────── */}
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '3rem 2rem 6rem',
        display: 'flex',
        gap: '4rem',
        alignItems: 'flex-start',
      }}>
        {/* Article body */}
        <article style={{ flex: 1, minWidth: 0 }}>
          {/* Back link */}
          <a
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'rgba(255,255,255,0.45)',
              textDecoration: 'none',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: '0.82rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '2.5rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--orange, #E8541A)')}
            onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.45)')}
          >
            ← {lang === 'en' ? 'All posts' : 'Todos los artículos'}
          </a>

          <PortableText value={body as any} components={components} />
        </article>

        {/* Sticky TOC — hidden on mobile via CSS */}
        <aside className="blog-toc-aside">
          <TableOfContents items={tocItems} lang={lang} />
        </aside>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .blog-toc-aside { display: none !important; }
        }
        @media (min-width: 901px) {
          .blog-toc-aside { display: block; }
        }
      `}</style>
    </main>
  )
}
