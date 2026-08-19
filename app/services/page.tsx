import type { Metadata } from 'next'
import {
  Megaphone,
  Target,
  Share2,
  Search,
  Monitor,
  Bot,
} from 'lucide-react'
import { services } from '@/lib/site-data'
import { Container, Section, SectionHeader, CTA } from '@/components/site/ui'
import { Reveal } from '@/components/site/reveal'
import { CTASection } from '@/components/site/cta-section'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'ScaleOS partners with businesses on digital marketing, paid advertising, social media, SEO, websites and AI-powered business systems.',
}

const icons = [Megaphone, Target, Share2, Search, Monitor, Bot]

const engagement = [
  {
    step: '01',
    title: 'Understand',
    body: 'We start with your business, your goals and how you actually operate today.',
  },
  {
    step: '02',
    title: 'Design',
    body: 'We shape a strategy and system tailored to your growth, not a generic template.',
  },
  {
    step: '03',
    title: 'Build & run',
    body: 'We execute, measure and refine — treating your growth as an ongoing partnership.',
  },
]

export default function ServicesPage() {
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
              eyebrow="Services"
              title="Growth partnership for ambitious businesses."
              description="Beyond our platforms, ScaleOS works directly with businesses to grow — combining marketing, technology and AI into systems that compound over time."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA href="/contact" variant="primary" size="lg" arrow>
                Start a conversation
              </CTA>
              <CTA href="/platforms" variant="secondary" size="lg">
                Explore platforms
              </CTA>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Services grid */}
      <Section className="border-t border-border pt-16 sm:pt-20">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = icons[i % icons.length]
              return (
                <Reveal key={service.title} delay={(i % 3) * 70} className="bg-card">
                  <div className="flex h-full flex-col gap-4 p-7">
                    <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-surface text-brand">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="mt-auto flex flex-col gap-1.5 pt-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2 text-[0.8rem] text-foreground/70"
                        >
                          <span className="h-1 w-1 rounded-full bg-brand" aria-hidden />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Engagement model */}
      <Section className="border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="How we work"
              title="A partnership, not a project."
              description="We don't hand over a deliverable and disappear. We build systems and stay close as they grow."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {engagement.map((item, i) => (
              <Reveal key={item.step} delay={i * 80}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <span className="font-mono text-2xl font-semibold tracking-tight text-brand">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Services"
        title="Let's grow your business."
        description="Tell us what you're working toward. We'll help you get there with the right mix of strategy, technology and AI."
        primary={{ label: 'Start a conversation', href: '/contact' }}
        secondary={{ label: 'Explore platforms', href: '/platforms' }}
      />
    </>
  )
}
