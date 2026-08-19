import type { Metadata } from 'next'
import { platforms } from '@/lib/site-data'
import { Container, Section, SectionHeader } from '@/components/site/ui'
import { Reveal } from '@/components/site/reveal'
import { PlatformCard } from '@/components/site/platform-card'
import { CTASection } from '@/components/site/cta-section'

export const metadata: Metadata = {
  title: 'Platforms',
  description:
    'Explore the ScaleOS ecosystem of industry operating systems — Bagh for restaurants, plus Property, E-commerce, Sports and Coffee Shop OS.',
}

export default function PlatformsPage() {
  return (
    <>
      <Section className="relative overflow-hidden pt-32 sm:pt-36">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(60%_100%_at_50%_0%,var(--brand)/0.10,transparent_70%)]"
          aria-hidden
        />
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="The ecosystem"
              title="One operating system for every industry."
              description="Each ScaleOS platform brings an entire industry's operations into a single connected system — built on shared foundations, tailored to how each business really runs."
            />
          </Reveal>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {platforms.map((platform, i) => (
              <Reveal key={platform.slug} delay={i * 70}>
                <PlatformCard platform={platform} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Build with ScaleOS"
        title="Not sure which platform fits?"
        description="Tell us about your business and we'll help you find the right operating system — or build the one you need."
        primary={{ label: 'Start a conversation', href: '/contact' }}
        secondary={{ label: 'Read our vision', href: '/vision' }}
      />
    </>
  )
}
