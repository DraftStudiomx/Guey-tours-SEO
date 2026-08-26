import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
})

export async function POST(req: NextRequest) {
  try {
    const { title_en, excerpt_en, body_en } = await req.json()

    if (!title_en) {
      return NextResponse.json({ error: 'title_en is required' }, { status: 400 })
    }

    // Serialize Portable Text body to plain text for translation
    // We'll translate text content only — images/non-text blocks are preserved as-is
    const bodyText = body_en
      ? serializePortableTextToPlain(body_en)
      : ''

    const prompt = `You are a professional translator specialising in Mexican Spanish for tourism and adventure marketing content.

Translate the following blog post content from English to Mexican Spanish.
- Use a warm, adventurous, and engaging tone that suits an ATV tour company in San Miguel de Allende
- Keep proper nouns, place names, and brand names (e.g. "Guey Tours", "San Miguel de Allende", "Atotonilco") unchanged
- Do NOT translate the slug or any URLs
- Return ONLY a valid JSON object with these exact keys: title_es, excerpt_es, body_es_plain
- body_es_plain should be the translated body text, preserving paragraph breaks with double newlines
- Do not include any markdown, explanation, or preamble — just the raw JSON object

Content to translate:

TITLE: ${title_en}

EXCERPT: ${excerpt_en || ''}

BODY:
${bodyText}`

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      messages: [{ role: 'user', content: prompt }],
    })

    const rawText = message.content
      .filter((b) => b.type === 'text')
      .map((b) => (b as { type: 'text'; text: string }).text)
      .join('')

    // Strip any accidental markdown fences
    const clean = rawText.replace(/```json|```/g, '').trim()
    const translated = JSON.parse(clean)

    // Rebuild Portable Text blocks from translated plain text
    const body_es = body_en
      ? rebuildPortableText(body_en, translated.body_es_plain)
      : []

    return NextResponse.json({
      title_es: translated.title_es,
      excerpt_es: translated.excerpt_es,
      body_es,
    })
  } catch (err) {
    console.error('Translation error:', err)
    return NextResponse.json({ error: 'Translation failed' }, { status: 500 })
  }
}

// ─── Helpers ────────────────────────────────────────────────────────────────

type PTBlock = {
  _type: string
  _key: string
  style?: string
  children?: Array<{ _type: string; _key?: string; text?: string }>
  [key: string]: unknown
}

/**
 * Extract all text from Portable Text blocks, paragraph-separated.
 * Non-text blocks (images etc.) are skipped — they'll be preserved as-is.
 */
function serializePortableTextToPlain(blocks: PTBlock[]): string {
  return blocks
    .filter((b) => b._type === 'block')
    .map((b) => {
      const text = (b.children || [])
        .filter((c) => c._type === 'span')
        .map((c) => c.text || '')
        .join('')
      return text
    })
    .filter(Boolean)
    .join('\n\n')
}

/**
 * Take the original body_en blocks and replace text content with translated
 * paragraphs. Non-block nodes (images) are kept verbatim.
 * Paragraph count may differ after translation — we do a best-effort merge.
 */
function rebuildPortableText(originalBlocks: PTBlock[], translatedPlain: string): PTBlock[] {
  const translatedParagraphs = translatedPlain
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)

  let paraIndex = 0
  return originalBlocks.map((block) => {
    if (block._type !== 'block') {
      // Image or other non-text block — keep as-is
      return block
    }

    const translatedText = translatedParagraphs[paraIndex] ?? ''
    paraIndex++

    // Rebuild children: preserve marks/spans structure but replace text
    const originalChildren = block.children || []
    if (originalChildren.length === 0) return block

    // Simple case: single span → replace its text
    if (originalChildren.length === 1) {
      return {
        ...block,
        children: [{ ...originalChildren[0], text: translatedText }],
      }
    }

    // Multiple spans (mixed marks) → collapse into one span with translated text
    // This loses inline mark granularity but is safe and correct
    return {
      ...block,
      children: [
        {
          _type: 'span',
          _key: originalChildren[0]._key ?? `span-${paraIndex}`,
          text: translatedText,
          marks: [],
        },
      ],
    }
  })
}
