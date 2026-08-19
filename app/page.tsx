import { HomeHero } from '@/components/home/hero'
import { PlatformGrid } from '@/components/home/platform-grid'
import { Philosophy } from '@/components/home/philosophy'
import { FeaturedBagh } from '@/components/home/featured-bagh'
import { VisionPreview } from '@/components/home/vision-preview'
import { ServicesIntro } from '@/components/home/services-intro'
import { CTASection } from '@/components/site/cta-section'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <PlatformGrid />
      <Philosophy />
      <FeaturedBagh />
      <VisionPreview />
      <ServicesIntro />
      <CTASection />
    </>
  )
}
