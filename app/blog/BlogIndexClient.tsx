'use client'

import { useLang } from '@/lib/i18n'
import Image from 'next/image'
import Link from 'next/link'

interface Post {
  _id: string
  title_en: string
  title_es: string
  slug: string
  publishedAt: string
  coverImageUrl: string | null
  excerpt_en?: string
  excerpt_es?: string
}

export default function BlogIndexClient({ posts }: { posts: Post[] }) {
  const { lang, t } = useLang()

  const formatDate = (iso: string) => {
    const d = new Date(iso)
    const month = t(`booking.months.${d.getMonth()}`)
    return `${month} ${d.getDate()}, ${d.getFullYear()}`
  }

  return (
    <main style={{ minHeight: '100vh', background: 'var(--dark, #111)', paddingTop: '7rem' }}>
      {/* ─── Header ──────────────────────────────────────────────────────── */}
      <section style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '3rem 2rem 2rem',
        textAlign: 'center',
      }}>
        <p style={{
          color: 'var(--orange, #E8541A)',
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          letterSpacing: '0.2em',
          fontSize: '0.85rem',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
        }}>
          {lang === 'en' ? 'Stories from the trail' : 'Historias del sendero'}
        </p>
        <h1 style={{
          color: 'white',
          fontFamily: 'var(--font-heading)',
          fontWeight: 900,
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          letterSpacing: '0.05em',
          margin: 0,
          textTransform: 'uppercase',
        }}>
          {lang === 'en' ? 'The Guey Blog' : 'El Blog de Guey'}
        </h1>
        <div style={{
          width: 60,
          height: 3,
          background: 'var(--orange, #E8541A)',
          margin: '1.5rem auto 0',
          borderRadius: 2,
        }} />
      </section>

      {/* ─── Post grid ───────────────────────────────────────────────────── */}
      <section style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '3rem 2rem 6rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '2rem',
      }}>
        {posts.length === 0 && (
          <p style={{ color: 'rgba(255,255,255,0.5)', gridColumn: '1/-1', textAlign: 'center' }}>
            {lang === 'en' ? 'No posts yet.' : 'Sin publicaciones aún.'}
          </p>
        )}

        {posts.map(post => {
          const title = lang === 'es' && post.title_es ? post.title_es : post.title_en
          const excerpt = lang === 'es' && post.excerpt_es ? post.excerpt_es : post.excerpt_en

          return (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: 'none', display: 'flex' }}
            >
              <article style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 10,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                transition: 'transform 0.25s, border-color 0.25s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-4px)'
                el.style.borderColor = 'rgba(232,84,26,0.4)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.borderColor = 'rgba(255,255,255,0.08)'
              }}
              >
                {/* Cover image */}
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', flexShrink: 0, background: '#222' }}>
                  {post.coverImageUrl ? (
                    <Image
                      src={post.coverImageUrl}
                      alt={title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  ) : (
                    <div style={{ width: '100%', height: '100%', background: 'rgba(232,84,26,0.15)' }} />
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <p style={{
                    color: 'var(--orange, #E8541A)',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    margin: '0 0 0.5rem',
                  }}>
                    {post.publishedAt ? formatDate(post.publishedAt) : ''}
                  </p>

                  <h2 style={{
                    color: 'white',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '1.15rem',
                    lineHeight: 1.3,
                    margin: '0 0 0.75rem',
                    letterSpacing: '0.02em',
                  }}>
                    {title}
                  </h2>

                  {excerpt && (
                    <p style={{
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      margin: '0 0 1.25rem',
                      flex: 1,
                    }}>
                      {excerpt}
                    </p>
                  )}

                  <span style={{
                    color: 'var(--orange, #E8541A)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}>
                    {lang === 'en' ? 'Read more →' : 'Leer más →'}
                  </span>
                </div>
              </article>
            </Link>
          )
        })}
      </section>
    </main>
  )
}
