import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    has_supabase_url: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    has_supabase_anon: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    has_sanity_project_id: !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    has_sanity_dataset: !!process.env.NEXT_PUBLIC_SANITY_DATASET,
    has_stripe_secret: !!process.env.STRIPE_SECRET_KEY,
    has_resend_key: !!process.env.RESEND_API_KEY,
    has_site_url: !!process.env.NEXT_PUBLIC_SITE_URL,
  })
}