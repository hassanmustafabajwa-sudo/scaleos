import { Container, Section, Eyebrow, ArrowLink } from '@/components/site/ui'
import { BaghDashboard } from '@/components/site/bagh-dashboard'
import { Reveal } from '@/components/site/reveal'

const areas = [
  'Point of Sale',
  'Orders',
  'Inventory',
  'Staff',
  'Customers',
  'Finance',
  'Analytics',
]

export function FeaturedBagh() {
  return (
    <Section className="border-t border-border">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <div className="flex flex-col items-start gap-6">
            <Reveal>
              <Eyebrow>Flagship Product</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-4xl md:text-[2.75rem]">
                Meet Bagh.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                The operating system built for restaurants — bringing every part
                of the operation into one connected system.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <ul className="flex flex-wrap gap-2">
                {areas.map((a) => (
                  <li
                    key={a}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground/80"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={180}>
              <ArrowLink href="/platforms/bagh">Explore Bagh</ArrowLink>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <BaghDashboard />
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
