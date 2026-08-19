import Link from 'next/link'
import { platforms } from '@/lib/site-data'
import { Logo } from './logo'
import { Container } from './ui'

const columns = [
  {
    title: 'Platforms',
    links: platforms.map((p) => ({ label: p.name, href: p.href })),
  },
  {
    title: 'Company',
    links: [
      { label: 'Services', href: '/services' },
      { label: 'Vision', href: '/vision' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Ecosystem',
    links: [
      { label: 'All Platforms', href: '/platforms' },
      { label: 'Explore Bagh', href: '/platforms/bagh' },
      { label: 'Digital Growth', href: '/services' },
      { label: 'Start a Conversation', href: '/contact' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2" aria-label="ScaleOS home">
              <Logo className="h-6 w-6" />
              <span className="text-[0.95rem] font-semibold tracking-[-0.01em]">
                Scale<span className="text-brand">OS</span>
              </span>
            </Link>
            <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              Purpose-built operating systems for the way businesses actually work.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3.5">
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ScaleOS. Every business deserves its own operating system.
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Building the operating layer for business
          </p>
        </div>
      </Container>
    </footer>
  )
}
