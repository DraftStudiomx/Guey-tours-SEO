'use client'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import BookingWidget from './BookingWidget'

interface BookingModalProps {
  tourName?: string
  trigger: React.ReactNode
}

export default function BookingModal({ tourName, trigger }: BookingModalProps) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Ensure we're client-side before using createPortal
  useEffect(() => { setMounted(true) }, [])

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const modal = (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) close() }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0,0,0,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div
        style={{
          background: 'var(--color-background-primary, #fff)',
          borderRadius: 16,
          width: '100%',
          maxWidth: 720,
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        <button
          onClick={close}
          aria-label="Close booking"
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 10,
            background: '#2a2a2a',
            border: 'none',
            borderRadius: 8,
            width: 32,
            height: 32,
            cursor: 'pointer',
            fontSize: 20,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 1,
          }}
        >
          ×
        </button>
        <BookingWidget initialTourName={tourName} onClose={close} />
      </div>
    </div>
  )

  return (
    <>
      <span onClick={() => setOpen(true)} style={{ cursor: 'pointer' }}>
        {trigger}
      </span>
      {mounted && open && createPortal(modal, document.body)}
    </>
  )
}
