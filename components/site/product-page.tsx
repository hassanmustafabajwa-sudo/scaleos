import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Platform } from '@/lib/site-data'
import { productContent } from '@/lib/product-content'
import { Container, Section, SectionHeader, CTA, StatusPill } from './ui'
import { Reveal } from './reveal'
import { CTASection } from './cta-section'
import { BaghDashboard } from './bagh-dashboard'
import { ProductMock } from './product-mock'

export function ProductPage({ platform }: { platform: Platform }) {
  const c = productContent[platform.slug]
  const Icon = platform.icon
  const isBagh = platform.slug === 'bagh'

  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-32 sm:pt-36">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80"
          style={{
            background: `radial-gradient(60% 100% at 50% 0%, ${platform.accent}14, transparent 70%)`,
          }}
          aria-hidden
        />
        <Container>
          <Reveal>
            <Link
              href="/platforms"
              className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              All platforms
            </Link>
          </Reveal>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div className="flex flex-col gap-6">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span
                    className="flex size-11 items-center justify-center rounded-xl border border-border bg-card shadow-soft"
                    style={{ color: platform.accent }}
                  >
                    <Icon className="size-5" />
                  </span>
                  <StatusPill status={platform.status} />
                </div>
              </Reveal>
              <Reveal delay={60}>
                <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
                  {c.headline}
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {c.subhead}
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                  {c.intro}
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-wrap items-center gap-3">
                  <CTA href="/contact" variant="primary" size="lg" arrow>
                    {c.ctaLabel}
                  </CTA>
                  <CTA href="/vision" variant="secondary" size="lg">
                    Our vision
                  </CTA>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200} className="min-w-0">
              {isBagh ? <BaghDashboard /> : <ProductMock platform={platform} />}
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Problem */}
      <Section className="border-t border-border bg-surface/40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionHeader eyebrow="The problem" title={c.problem.title} />
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-col gap-6">
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  {c.problem.body}
                </p>
                <ul className="flex flex-col divide-y divide-border border-y border-border">
                  {c.problem.pains.map((pain) => (
                    <li key={pain} className="flex items-start gap-3 py-4">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/70" aria-hidden />
                      <span className="text-[0.95rem] text-foreground/90">{pain}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Solution */}
      <Section className="border-t border-border">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="The solution"
              title={c.solution.title}
              description={c.solution.body}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {c.solution.points.map((point, i) => (
              <Reveal key={point.title} delay={i * 80}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span
                    className="font-mono text-xs font-medium"
                    style={{ color: platform.accent }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight">{point.title}</h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {point.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Modules */}
      <Section className="border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="One connected system"
              title="Every module, working together."
              description={c.moduleNote}
            />
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {platform.modules.map((m, i) => (
              <Reveal key={m} delay={i * 40}>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-soft">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: platform.accent }}
                    aria-hidden
                  />
                  {m}
                </span>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section className="border-t border-border">
        <Container>
          <Reveal>
            <SectionHeader eyebrow="How it works" title="Up and running in three steps." />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {c.howItWorks.map((step, i) => (
              <Reveal key={step.step} delay={i * 80} className="bg-card">
                <div className="flex h-full flex-col gap-3 p-7">
                  <span
                    className="font-mono text-2xl font-semibold tracking-tight"
                    style={{ color: platform.accent }}
                  >
                    {step.step}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow={platform.name}
        title={`Ready to run on ${platform.name}?`}
        description={`Join the businesses building on ${platform.name}. Tell us about your operation and we'll be in touch.`}
        primary={{ label: c.ctaLabel, href: '/contact' }}
        secondary={{ label: 'Explore platforms', href: '/platforms' }}
      />
    </>
  )
}
