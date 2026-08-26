'use client'

import { PortableText, PortableTextComponents } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'

interface InlineImage {
  _type: 'image'
  asset: { _ref: string }
  alt?: string
  caption?: string
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: InlineImage }) => {
      if (!value?.asset?._ref) return null
      const url = urlFor(value).width(1200).url()
      return (
        <figure style={{ margin: '2.5rem 0' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 10', borderRadius: 8, overflow: 'hidden' }}>
            <Image
              src={url}
              alt={value.alt || ''}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          {value.caption && (
            <figcaption style={{
              marginTop: '0.75rem',
              fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.6)',
              textAlign: 'center',
              fontStyle: 'italic',
            }}>
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  block: {
    h1: ({ children }) => <h1 style={{ fontSize: '2.25rem', fontWeight: 800, margin: '2.5rem 0 1rem', color: 'white', fontFamily: 'var(--font-heading)' }}>{children}</h1>,
    h2: ({ children }) => <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '2.5rem 0 1rem', color: 'white', fontFamily: 'var(--font-heading)' }}>{children}</h2>,
    h3: ({ children }) => <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '2rem 0 0.75rem', color: 'white', fontFamily: 'var(--font-heading)' }}>{children}</h3>,
    h4: ({ children }) => <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '1.5rem 0 0.5rem', color: 'white' }}>{children}</h4>,
    normal: ({ children }) => <p style={{ margin: '0 0 1.25rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem' }}>{children}</p>,
    blockquote: ({ children }) => (
      <blockquote style={{
        margin: '2rem 0',
        padding: '1rem 1.5rem',
        borderLeft: '3px solid var(--orange)',
        background: 'rgba(255,255,255,0.03)',
        fontStyle: 'italic',
        color: 'rgba(255,255,255,0.9)',
      }}>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul style={{ margin: '0 0 1.5rem', paddingLeft: '1.5rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}>{children}</ul>,
    number: ({ children }) => <ol style={{ margin: '0 0 1.5rem', paddingLeft: '1.5rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li style={{ marginBottom: '0.5rem' }}>{children}</li>,
    number: ({ children }) => <li style={{ marginBottom: '0.5rem' }}>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong style={{ color: 'white', fontWeight: 700 }}>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const href = value?.href || '#'
      const isExternal = href.startsWith('http')
      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          style={{ color: 'var(--orange)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
        >
          {children}
        </a>
      )
    },
  },
}

export default function PortableTextRenderer({ value }: { value: any[] }) {
  if (!value || value.length === 0) return null
  return <PortableText value={value} components={components} />
}
