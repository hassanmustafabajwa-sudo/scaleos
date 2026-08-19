import { platforms } from '@/lib/site-data'
import { Container, Section, SectionHeader, ArrowLink } from '@/components/site/ui'
import { PlatformCard } from '@/components/site/platform-card'
import { Reveal } from '@/components/site/reveal'

export function PlatformGrid() {
  return (
    <Section id="ecosystem" className="border-t border-border">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionHeader
              eyebrow="The Ecosystem"
              title="One ecosystem. Built around every business."
              description="Different businesses operate differently. ScaleOS creates specialized systems around the workflows that matter most to each industry."
            />
          </Reveal>
          <Reveal delay={80}>
            <ArrowLink href="/platforms">View all platforms</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <PlatformCard platform={p} />
            </Reveal>
          ))}
          {/* closing statement card */}
          <Reveal delay={platforms.length * 60}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-border bg-surface/50 p-6">
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                A growing family of operating systems, connected by a common
                technology foundation.
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-foreground">
                More industries to follow
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
