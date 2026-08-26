'use client'

import { useState, useRef, useEffect } from 'react'
import { useLang } from '@/lib/i18n'
import { MessageCircle, X, Send, Loader } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const SYSTEM_PROMPT = `You are the friendly and knowledgeable assistant for Guey ATV Tours, an adventure tour company based in San Miguel de Allende, Mexico.

You help visitors learn about and book the following tours:
- San Miguel Centro (2 hours) - city center colonial architecture tour
- San Miguel Viejo (3 hours) - original founding site, Allende Dam views
- Puente Roto / Broken Bridge (3.5 hours) - open terrain, natural wonder
- Atotonilco (4 hours) - UNESCO World Heritage site, "Sistine Chapel of Mexico"

Key facts:
- All tours include free photos taken by the guide
- Medical expense insurance included on every tour
- Brand new ATVs, helmets, and safety equipment
- Bilingual guides (English and Spanish)
- Contact: gueycuatritours@gmail.com | +52 4151090021
- Address: Calle Refugio Sur #52, Colonia San Antonio,San Miguel de Allende, Guanajuato, Mexico

You also offer: guided bicycle tours, balloon rides, horseback riding, and zip line circuits.

Be enthusiastic, helpful, and concise. Encourage visitors to book by directing them to the contact form or phone number. Respond in the same language the user writes in (English or Spanish).`

export default function Chatbot() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const greeting = t('chat.greeting')

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'assistant', content: greeting }])
    }
  }, [open])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300)
  }, [open])

  const sendMessage = async () => {
    if (!input.trim() || loading) return

    const userMsg: Message = { role: 'user', content: input.trim() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      })

      const data = await response.json()
      const assistantText = data.content?.find((b: { type: string }) => b.type === 'text')?.text || 'Sorry, I had trouble responding. Please try again.'

      setMessages(prev => [...prev, { role: 'assistant', content: assistantText }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I had trouble connecting. Please call us at +52 1 415 196 7971.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat window */}
      <div
        style={{
          position: 'fixed',
          bottom: '5.5rem',
          right: '1.5rem',
          width: '360px',
          maxHeight: '520px',
          background: '#1a1a1a',
          border: '1px solid rgba(232,84,26,0.3)',
          borderRadius: '12px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          zIndex: 200,
          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          transform: open ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(20px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'all' : 'none',
          transformOrigin: 'bottom right',
        }}
      >
        {/* Header */}
        <div style={{
          background: 'var(--orange)',
          padding: '1rem 1.2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
            }}>🏍️</div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.05em' }}>
                {t('chat.title')}
              </div>
              <div style={{ fontSize: '0.72rem', opacity: 0.85, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span style={{ width: '7px', height: '7px', background: '#4ade80', borderRadius: '50%', display: 'inline-block' }} />
                {t('chat.online')}
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '0.2rem', opacity: 0.8 }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
        }}>
          {messages.map((msg, i) => (
            <div
              key={i}
              className={msg.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'}
            >
              {msg.content}
            </div>
          ))}
          {loading && (
            <div className="chat-bubble-ai" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Loader size={14} style={{ animation: 'spin 1s linear infinite' }} />
              <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>Thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div style={{
          padding: '0.8rem',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          gap: '0.5rem',
          flexShrink: 0,
          background: '#111',
        }}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder={t('chat.placeholder')}
            style={{
              flex: 1,
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'white',
              padding: '0.6rem 0.9rem',
              borderRadius: '20px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              outline: 'none',
            }}
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            style={{
              width: '38px',
              height: '38px',
              background: input.trim() ? 'var(--orange)' : 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '50%',
              color: 'white',
              cursor: input.trim() ? 'pointer' : 'default',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
              flexShrink: 0,
            }}
          >
            <Send size={15} />
          </button>
        </div>
      </div>

      {/* FAB button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          width: '56px',
          height: '56px',
          background: open ? '#333' : 'var(--orange)',
          border: 'none',
          borderRadius: '50%',
          color: 'white',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(232,84,26,0.5)',
          zIndex: 201,
          transition: 'all 0.3s ease',
          transform: open ? 'rotate(0deg)' : 'rotate(0deg)',
        }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 480px) {
          div[style*="width: 360px"] {
            width: calc(100vw - 2rem) !important;
            right: 1rem !important;
          }
        }
      `}</style>
    </>
  )
}
