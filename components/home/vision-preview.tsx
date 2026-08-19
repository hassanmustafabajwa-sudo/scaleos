import { Plus } from 'lucide-react'
import { platforms } from '@/lib/site-data'
import { Container, Section, SectionHeader } from '@/components/site/ui'
import { Logo } from '@/components/site/logo'
import { Reveal } from '@/components/site/reveal'

export function VisionPreview() {
  return (
    <Section className="border-t border-border bg-surface">
      <Container>
        <Reveal>
          <SectionHeader
            align="center"
            eyebrow="The Vision"
            title="A growing operating system for every industry."
            description="ScaleOS is building a family of specialized operating systems connected by a common technology foundation."
          />
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <div className="flex flex-col items-center">
            {/* root */}
            <div className="flex items-center gap-2 rounded-2xl border border-border bg-card px-5 py-3 shadow-soft">
              <Logo className="h-6 w-6" />
              <span className="text-sm font-semibold tracking-[-0.01em]">
                Scale<span className="text-brand">OS</span>
              </span>
            </div>

            {/* connector */}
            <div className="h-10 w-px bg-border" aria-hidden />

            {/* branches */}
            <div className="relative w-full">
              <div className="mx-auto hidden h-px max-w-4xl bg-border sm:block" aria-hidden />
              <div className="grid grid-cols-2 gap-3 pt-0 sm:mt-8 sm:grid-cols-3 lg:grid-cols-6">
                {platforms.map((p) => {
                  const Icon = p.icon
                  return (
                    <div
                      key={p.slug}
                      className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card px-3 py-4 text-center transition-colors hover:border-foreground/15"
                    >
                      <span
                        className="flex size-8 items-center justify-center rounded-lg border border-border"
                        style={{ color: p.accent }}
                      >
                        <Icon className="size-4" />
                      </span>
                      <span className="text-xs font-medium leading-tight tracking-[-0.01em]">
                        {p.name}
                      </span>
                    </div>
                  )
                })}
                {/* "more to follow" ghost node */}
                <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-surface/50 px-3 py-4 text-center text-muted-foreground">
                  <span className="flex size-8 items-center justify-center rounded-lg border border-dashed border-border">
                    <Plus className="size-4" />
                  </span>
                  <span className="text-xs font-medium leading-tight">More to follow</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
