import { Container, CTA, Section } from './ui'
import { Reveal } from './reveal'

export function CTASection({
  eyebrow = 'Build with ScaleOS',
  title = "Build what's next with ScaleOS.",
  description = 'Purpose-built technology for businesses ready to grow.',
  primary = { label: 'Explore Platforms', href: '/platforms' },
  secondary = { label: 'Start a Conversation', href: '/contact' },
}: {
  eyebrow?: string
  title?: string
  description?: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <Section className="pb-28 pt-8 sm:pb-32">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-primary px-6 py-16 text-center sm:px-12 sm:py-20">
          {/* subtle grid inside dark panel */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/30 blur-[100px]"
            aria-hidden
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/50">
              {eyebrow}
            </span>
            <h2 className="text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-primary-foreground sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="max-w-md text-pretty text-base leading-relaxed text-primary-foreground/70">
              {description}
            </p>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <CTA href={primary.href} variant="brand" size="lg" arrow>
                {primary.label}
              </CTA>
              <CTA
                href={secondary.href}
                size="lg"
                className="border border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                {secondary.label}
              </CTA>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
