import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Platform } from '@/lib/site-data'
import { StatusPill } from './ui'

export function PlatformCard({ platform }: { platform: Platform }) {
  const Icon = platform.icon
  return (
    <Link
      href={platform.href}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
    >
      {/* accent wash on hover */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: platform.accent }}
        aria-hidden
      />

      <div className="relative flex items-start justify-between">
        <div
          className="flex size-11 items-center justify-center rounded-xl border border-border bg-surface transition-colors duration-300 group-hover:border-foreground/15"
          style={{ color: platform.accent }}
        >
          <Icon className="size-5" />
        </div>
        <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>

      <div className="relative mt-8 flex flex-col gap-2">
        <div className="flex items-center gap-2.5">
          <h3 className="text-lg font-semibold tracking-[-0.01em]">{platform.name}</h3>
          <StatusPill status={platform.status} />
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
          {platform.industry}
        </p>
        <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
          {platform.description}
        </p>
      </div>
    </Link>
  )
}
