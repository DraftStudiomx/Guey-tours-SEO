import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    revalidatePath('/')
    revalidatePath('/blog')
    revalidatePath('/blog/[slug]', 'page')
    revalidatePath('/gallery')
    revalidatePath('/tours/[slug]', 'page')
    revalidatePath('/rentals/[slug]', 'page')
    revalidatePath('/book')
    revalidatePath('/terms')
    revalidatePath('/privacy')

    return NextResponse.json({ revalidated: true })
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}