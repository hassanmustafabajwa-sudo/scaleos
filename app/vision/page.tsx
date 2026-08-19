import type { Metadata } from 'next'
import { Container, Section, SectionHeader, Eyebrow, CTA } from '@/components/site/ui'
import { Reveal } from '@/components/site/reveal'
import { CTASection } from '@/components/site/cta-section'

export const metadata: Metadata = {
  title: 'Vision',
  description:
    'ScaleOS is building the operating systems that industries run on — a connected ecosystem of software, one industry at a time.',
}

const principles = [
  {
    title: 'Depth over breadth',
    body: 'We build deep, opinionated systems for one industry at a time — not shallow tools that try to serve everyone.',
  },
  {
    title: 'Connected by design',
    body: 'Every module and every platform shares a common foundation, so information flows instead of fragmenting.',
  },
  {
    title: 'Built to endure',
    body: 'We treat software as infrastructure — reliable, considered and designed to be relied on for years.',
  },
  {
    title: 'AI as a foundation',
    body: 'Intelligence is woven into the systems themselves, not bolted on as an afterthought.',
  },
]

const horizon = [
  {
    phase: 'Today',
    title: 'The first operating system',
    body: 'Bagh brings the restaurant industry into one connected system — the first proof of the model.',
  },
  {
    phase: 'Next',
    title: 'The ecosystem expands',
    body: 'Property, E-commerce, Sports and Coffee Shop operating systems, each built on shared foundations.',
  },
  {
    phase: 'Beyond',
    title: 'The operating layer for industry',
    body: 'A connected ecosystem where every industry runs on software that finally fits how it works.',
  },
]

export default function VisionPage() {
  return (
    <>
      {/* Manifesto hero */}
      <Section className="relative overflow-hidden pt-32 sm:pt-40">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(55%_100%_at_50%_0%,var(--brand)/0.12,transparent_70%)]"
          aria-hidden
        />
        <Container>
          <Reveal>
            <Eyebrow>Our vision</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl md:text-6xl">
              We&apos;re building the operating systems that industries run on.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Most businesses run on a patchwork of disconnected tools that were
              never designed to work together. We think entire industries deserve
              something better — a single, connected system built around how they
              actually operate.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Narrative statement */}
      <Section className="border-t border-border">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr]">
            <Reveal>
              <Eyebrow>The belief</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-col gap-6 text-pretty text-xl leading-relaxed tracking-[-0.01em] sm:text-2xl">
                <p>
                  Software should be the foundation a business is built on — not a
                  drawer of disconnected apps that each solve one small thing.
                </p>
                <p className="text-muted-foreground">
                  So we&apos;re building operating systems, one industry at a time.
                  Each one goes deep. Each one connects everything. And together
                  they form an ecosystem — the operating layer that industries run
                  on.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Principles */}
      <Section className="border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Principles"
              title="What guides everything we build."
            />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 80} className="bg-card">
                <div className="flex h-full flex-col gap-3 p-8">
                  <span className="font-mono text-xs font-medium text-brand">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Horizon / roadmap */}
      <Section className="border-t border-border">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="The horizon"
              title="One industry at a time."
              description="We're not trying to build everything at once. We're building the ecosystem deliberately — proving the model, then expanding it."
            />
          </Reveal>
          <ol className="mt-14 flex flex-col">
            {horizon.map((h, i) => (
              <Reveal key={h.phase} delay={i * 90}>
                <li className="group grid grid-cols-[auto_1fr] gap-6 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span className="flex size-10 items-center justify-center rounded-full border border-border bg-card font-mono text-xs font-medium text-brand shadow-soft">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {i < horizon.length - 1 ? (
                      <span className="mt-2 w-px flex-1 bg-border" aria-hidden />
                    ) : null}
                  </div>
                  <div className="flex flex-col gap-2 pb-2">
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {h.phase}
                    </span>
                    <h3 className="text-2xl font-semibold tracking-[-0.01em]">
                      {h.title}
                    </h3>
                    <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
                      {h.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      <CTASection
        eyebrow="Our vision"
        title="Build the future of your industry with us."
        description="Whether you want to run on our platforms or grow with our services, we'd love to talk."
        primary={{ label: 'Start a conversation', href: '/contact' }}
        secondary={{ label: 'Explore platforms', href: '/platforms' }}
      />
    </>
  )
}
