import type { Metadata } from 'next'
import { Container, Section, SectionHeader, Eyebrow, CTA } from '@/components/site/ui'
import { Reveal } from '@/components/site/reveal'
import { CTASection } from '@/components/site/cta-section'

export const metadata: Metadata = {
  title: 'About',
  description:
    'ScaleOS is a technology company building connected operating systems for industries, alongside a growth services practice.',
}

const values = [
  {
    title: 'Craft',
    body: 'We care about the details. Good software feels obvious — that only happens through care.',
  },
  {
    title: 'Focus',
    body: 'We go deep on one thing at a time and finish it well before moving to the next.',
  },
  {
    title: 'Partnership',
    body: 'We succeed when the businesses we work with succeed. Their growth is the point.',
  },
  {
    title: 'Longevity',
    body: 'We build for the long term — systems meant to be relied on for years, not quarters.',
  },
]

const facts = [
  { label: 'Focus', value: 'Industry operating systems' },
  { label: 'First platform', value: 'Bagh — Restaurants' },
  { label: 'Practice', value: 'Platforms + growth services' },
  { label: 'Approach', value: 'AI-native, connected by design' },
]

export default function AboutPage() {
  return (
    <>
      <Section className="relative overflow-hidden pt-32 sm:pt-40">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(55%_100%_at_50%_0%,var(--brand)/0.10,transparent_70%)]"
          aria-hidden
        />
        <Container>
          <Reveal>
            <Eyebrow>About ScaleOS</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl md:text-6xl">
              A technology company building what industries run on.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              ScaleOS designs and builds connected operating systems for entire
              industries — starting with restaurants — and partners with
              businesses to grow through modern marketing and AI.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Story */}
      <Section className="border-t border-border">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr]">
            <Reveal>
              <Eyebrow>Our story</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-col gap-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                <p className="text-xl leading-relaxed tracking-[-0.01em] text-foreground">
                  ScaleOS began with a simple frustration: the tools businesses
                  rely on rarely work together.
                </p>
                <p>
                  Every industry has its own way of operating, yet most software
                  forces it into generic tools that solve one narrow problem and
                  ignore the rest. The result is a patchwork — data trapped in
                  silos, teams stitching systems together by hand.
                </p>
                <p>
                  We set out to build the opposite: deep, connected operating
                  systems designed around how a specific industry actually works.
                  Bagh, our restaurant operating system, is the first. It won&apos;t
                  be the last.
                </p>
                <p>
                  Alongside our platforms, our services practice helps businesses
                  grow — combining strategy, marketing and AI into systems that
                  compound.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Facts strip */}
      <Section className="border-t border-border bg-surface/40 py-14 sm:py-16">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f, i) => (
              <Reveal key={f.label} delay={i * 60} className="bg-card">
                <div className="flex h-full flex-col gap-2 p-6">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {f.label}
                  </span>
                  <span className="text-base font-semibold tracking-tight">
                    {f.value}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="border-t border-border">
        <Container>
          <Reveal>
            <SectionHeader eyebrow="What we value" title="How we work and why." />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <h3 className="text-lg font-semibold tracking-tight">{v.title}</h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="About ScaleOS"
        title="Let's build something that lasts."
        description="Interested in our platforms, our services, or working with us? Start a conversation."
        primary={{ label: 'Start a conversation', href: '/contact' }}
        secondary={{ label: 'Read our vision', href: '/vision' }}
      />
    </>
  )
}
