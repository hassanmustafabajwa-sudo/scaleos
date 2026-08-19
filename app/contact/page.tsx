import type { Metadata } from 'next'
import { Mail, MessageSquare, Building2 } from 'lucide-react'
import { Container, Section, Eyebrow } from '@/components/site/ui'
import { Reveal } from '@/components/site/reveal'
import { ContactForm } from '@/components/site/contact-form'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start a conversation with ScaleOS about our industry operating systems or growth services.',
}

const points = [
  {
    icon: Building2,
    title: 'Platforms',
    body: 'Interested in running your business on Bagh or another ScaleOS operating system.',
  },
  {
    icon: MessageSquare,
    title: 'Services',
    body: 'Looking for a growth partner across marketing, technology and AI.',
  },
  {
    icon: Mail,
    title: 'Everything else',
    body: 'Partnerships, press or general questions — we read every message.',
  },
]

export default function ContactPage() {
  return (
    <Section className="relative overflow-hidden pt-32 sm:pt-36">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(60%_100%_at_50%_0%,var(--brand)/0.10,transparent_70%)]"
        aria-hidden
      />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left — intro */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <Reveal>
                <Eyebrow>Contact</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
                  Let&apos;s start a conversation.
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                  Tell us about your business and what you&apos;re working toward.
                  Whether it&apos;s our platforms or our services, we&apos;d love to
                  hear from you.
                </p>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <ul className="flex flex-col divide-y divide-border border-y border-border">
                {points.map((p) => {
                  const Icon = p.icon
                  return (
                    <li key={p.title} className="flex items-start gap-4 py-5">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-brand">
                        <Icon className="size-4" />
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-semibold">{p.title}</span>
                        <span className="text-sm leading-relaxed text-muted-foreground">
                          {p.body}
                        </span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-floating sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
