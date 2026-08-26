import { useEffect, useState } from 'react'
import { DocumentActionComponent, DocumentActionProps, useDocumentOperation } from 'sanity'


type TranslationStatus = 'idle' | 'loading' | 'success' | 'error'

export const TranslateToSpanishAction: DocumentActionComponent = (
  props: DocumentActionProps
) => {
  const { draft, published, type, id } = props
  const { patch } = useDocumentOperation(id, type)

  // Only show on post documents
  if (type !== 'post') return null

  const doc = draft || published
  const [status, setStatus] = useState<TranslationStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const label =
    status === 'loading'
      ? 'Translating…'
      : status === 'success'
      ? '✓ Translated!'
      : status === 'error'
      ? '✗ Failed — retry?'
      : '🌐 Translate → Spanish'

  // Reset status after success/error
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const t = setTimeout(() => setStatus('idle'), 4000)
      return () => clearTimeout(t)
    }
  }, [status])

  const handleTranslate = async () => {
    if (!doc?.title_en) {
      alert('Please fill in the English title before translating.')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title_en: doc.title_en,
          excerpt_en: doc.excerpt_en ?? '',
          body_en: doc.body_en ?? [],
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || `HTTP ${res.status}`)
      }

      const { title_es, excerpt_es, body_es } = await res.json()

      // Patch the document fields directly
      patch.execute([
        {
          set: {
            title_es,
            excerpt_es,
            body_es,
          },
        },
      ])

      setStatus('success')
    } catch (err: unknown) {
      console.error('Translation action error:', err)
      setErrorMsg(err instanceof Error ? err.message : 'Unknown error')
      setStatus('error')
    }
  }

  return {
    label,
    tone:
      status === 'success'
        ? 'positive'
        : status === 'error'
        ? 'critical'
        : 'default',
    disabled: status === 'loading',
    onHandle: handleTranslate,
    title: errorMsg || 'Auto-translate English fields to Spanish using Claude AI',
  }
}
