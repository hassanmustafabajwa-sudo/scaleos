import { Container, CTA, Eyebrow } from '@/components/site/ui'
import { Ecosystem } from '@/components/site/ecosystem'
import { Reveal } from '@/components/site/reveal'

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft backdrop */}
      <div
        className="pointer-events-none absolute inset-0 bg-dots opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        aria-hidden
      />
      <Container className="relative pb-16 pt-16 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div className="flex flex-col items-start gap-6">
            <Reveal>
              <Eyebrow>Business Operating Systems</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="max-w-xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl">
                Every business deserves its own operating system.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                ScaleOS builds purpose-built operating systems for the way
                businesses actually work.
              </p>
            </Reveal>
            <Reveal delay={180} className="flex flex-col gap-3 sm:flex-row">
              <CTA href="/platforms" size="lg" arrow>
                Explore the Ecosystem
              </CTA>
              <CTA href="/services" variant="secondary" size="lg">
                See Our Services
              </CTA>
            </Reveal>
          </div>

          <Reveal delay={220}>
            <Ecosystem />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
