'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const T = {
  bg:      '#111111',
  bgPanel: '#1c1c1c',
  bgInput: '#242424',
  border:  '1px solid rgba(254, 217, 2, 0.3)',
  accent:  '#ed7f17',
  accentRgb: '107,191,46',
  text:    '#ffffff',
  textMuted: 'rgba(255,255,255,0.55)',
  radius:  12,
}

const WELCOME: Message = {
  role: 'assistant',
  content: "¡Hola! Hi there! 👋 I'm the Guey Tours assistant. Ask me anything about our ATV tours in San Miguel de Allende — routes, prices, vehicles, or how to book!",
}

// Routes where the chat widget should NOT appear (admin/CMS contexts)
const HIDDEN_ROUTES = ['/studio', '/admin', '/structure', '/vision', '/presentation', '/desk', '/intent', '/tool', '/_studio']

export default function ChatWidget() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([WELCOME])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showGreeting, setShowGreeting] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  useEffect(() => {
    const timer = setTimeout(() => setShowGreeting(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  // Bail out on hidden routes — must come AFTER all hooks above to satisfy React's rules
  if (pathname && HIDDEN_ROUTES.some((r) => pathname.startsWith(r))) {
    return null
  }

  async function sendMessage() {
    const text = input.trim()
    if (!text || loading) return

    const userMsg: Message = { role: 'user', content: text }
    const history = [...messages, userMsg]
    setMessages(history)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: history.map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      if (!res.ok || !res.body) throw new Error('Failed to get response')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let assistantText = ''

      setMessages((prev) => [...prev, { role: 'assistant', content: '' }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        assistantText += decoder.decode(value, { stream: true })
        setMessages((prev) => {
          const updated = [...prev]
          updated[updated.length - 1] = { role: 'assistant', content: assistantText }
          return updated
        })
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, something went wrong. Please try again!' },
      ])
    } finally {
      setLoading(false)
    }
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div style={{
          position: 'fixed',
          bottom: 100,
          right: 24,
          zIndex: 9998,
          width: 360,
          maxWidth: 'calc(100vw - 48px)',
          height: 520,
          maxHeight: 'calc(100vh - 140px)',
          background: T.bg,
          border: T.border,
          borderRadius: T.radius,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
          fontFamily: 'sans-serif',
        }}>
          {/* Header */}
          <div style={{
            background: T.bgPanel,
            borderBottom: T.border,
            padding: '0.75rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src="/ulises250w.png" alt="Ulises" style={{ width: 38, height: 38, borderRadius: '50%', objectFit: 'cover', border: '2px solid ' + T.accent }} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: T.text, lineHeight: 1.2 }}>Ulises</div>
                <div style={{ fontSize: 11, color: T.accent }}>Guey Tours assistant</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.textMuted, fontSize: 20, lineHeight: 1, padding: 0 }}
            >×</button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {messages.map((m, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
                alignItems: 'flex-end',
                gap: 8,
              }}>
                {m.role === 'assistant' && (
                  <img src="/ulises250w.png" alt="Ulises" style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: '1.5px solid ' + T.accent }} />
                )}
                <div style={{
                  maxWidth: '78%',
                  padding: '0.65rem 0.9rem',
                  borderRadius: m.role === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                  background: m.role === 'user' ? T.accent : T.bgPanel,
                  border: m.role === 'assistant' ? T.border : 'none',
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: T.text,
                  whiteSpace: 'pre-wrap',
                }}>
                  {m.content}
                  {m.role === 'assistant' && m.content === '' && (
                    <span style={{ color: T.textMuted, fontSize: 13 }}>▌</span>
                  )}
                </div>
              </div>
            ))}
            {loading && messages[messages.length - 1]?.content === '' && null}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{
            borderTop: T.border,
            padding: '0.75rem',
            display: 'flex',
            gap: 8,
            background: T.bgPanel,
          }}>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Ask about tours, prices, booking…"
              disabled={loading}
              style={{
                flex: 1,
                background: T.bgInput,
                border: T.border,
                borderRadius: 8,
                padding: '8px 12px',
                fontSize: 14,
                color: T.text,
                outline: 'none',
              }}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              style={{
                background: T.accent,
                border: 'none',
                borderRadius: 8,
                width: 38,
                height: 38,
                cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
                opacity: loading || !input.trim() ? 0.4 : 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Greeting bubble */}
      {showGreeting && !open && (
        <div style={{
          position: 'fixed',
          bottom: 100,
          right: 24,
          zIndex: 9998,
          background: '#1c1c1c',
          border: T.border,
          borderRadius: '12px 12px 2px 12px',
          padding: '10px 14px',
          fontSize: 13,
          color: '#ffffff',
          maxWidth: 220,
          lineHeight: 1.5,
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          animation: 'fadeSlideUp 0.4s ease',
        }}
        onClick={() => { setShowGreeting(false); setOpen(true) }}
        >
          Hi! I&apos;m Ulises, happy to help with any questions about our tours! Hablo español también 🇲🇽
          <div style={{
            position: 'absolute',
            bottom: -8,
            right: 16,
            width: 0,
            height: 0,
            borderLeft: '8px solid transparent',
            borderTop: `8px solid rgba(${T.accentRgb},0.3)`,
          }} />
        </div>
      )}

      {/* Floating button — Ulises avatar (64px) */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat with Ulises"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 9999,
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: 'transparent',
          border: '2px solid ' + T.accent,
          cursor: 'pointer',
          padding: 0,
          overflow: 'hidden',
          boxShadow: `0 4px 20px rgba(${T.accentRgb},0.45)`,
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = `0 6px 28px rgba(${T.accentRgb},0.65)` }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = `0 4px 20px rgba(${T.accentRgb},0.45)` }}
      >
        {open ? (
          <div style={{ width: '100%', height: '100%', background: T.accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        ) : (
          <img src="/ulises250w.png" alt="Chat with Ulises" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        )}
      </button>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
