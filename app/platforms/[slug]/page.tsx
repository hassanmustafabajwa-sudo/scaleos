import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { platforms, getPlatform } from '@/lib/site-data'
import { ProductPage } from '@/components/site/product-page'

export function generateStaticParams() {
  return platforms.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const platform = getPlatform(slug)
  if (!platform) return { title: 'Platform not found' }
  return {
    title: `${platform.name} — ${platform.industry}`,
    description: platform.description,
  }
}

export default async function PlatformDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const platform = getPlatform(slug)
  if (!platform) notFound()
  return <ProductPage platform={platform} />
}
