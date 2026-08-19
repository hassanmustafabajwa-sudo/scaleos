import { Check, X } from 'lucide-react'
import { Container, Section, SectionHeader } from '@/components/site/ui'
import { Reveal } from '@/components/site/reveal'

const traditional = [
  'Disconnected tools',
  'Scattered information',
  'Generic workflows',
  'Multiple systems',
]

const scaleos = [
  'Purpose-built',
  'Connected',
  'Industry-specific',
  'One operating system',
]

export function Philosophy() {
  return (
    <Section className="border-t border-border bg-surface">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Philosophy"
            title={
              <>
                Software should adapt to the business.
                <span className="text-muted-foreground"> Not the other way around.</span>
              </>
            }
            description="Traditional software asks businesses to change the way they work. ScaleOS takes the opposite approach — building systems around the realities of each industry."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-7">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Traditional Software
              </p>
              <ul className="mt-6 flex flex-col gap-3.5">
                {traditional.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <span className="flex size-6 items-center justify-center rounded-full border border-border">
                      <X className="size-3.5" />
                    </span>
                    <span className="text-[0.95rem]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-foreground/15 bg-primary p-7 text-primary-foreground">
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/40 blur-3xl"
                aria-hidden
              />
              <p className="relative font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground/60">
                ScaleOS
              </p>
              <ul className="relative mt-6 flex flex-col gap-3.5">
                {scaleos.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex size-6 items-center justify-center rounded-full bg-brand text-brand-foreground">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-[0.95rem] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
