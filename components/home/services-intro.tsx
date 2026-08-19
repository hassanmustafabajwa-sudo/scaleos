import { Container, Section, SectionHeader, ArrowLink } from '@/components/site/ui'
import { Reveal } from '@/components/site/reveal'

const services = [
  'Digital Marketing',
  'Paid Advertising',
  'Social Media',
  'SEO',
  'Websites',
  'AI & Business Systems',
]

export function ServicesIntro() {
  return (
    <Section className="border-t border-border">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="ScaleOS Services"
              title="Need growth before you need a platform?"
              description="ScaleOS helps businesses build their digital presence, acquire customers and adopt better technology through strategic growth services."
            />
            <div className="mt-6">
              <ArrowLink href="/services">Explore Services</ArrowLink>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {services.map((s) => (
                <li
                  key={s}
                  className="bg-card px-5 py-6 text-sm font-medium transition-colors hover:bg-surface"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
