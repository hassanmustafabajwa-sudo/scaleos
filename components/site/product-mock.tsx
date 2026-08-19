import type { Platform } from '@/lib/site-data'
import { cn } from '@/lib/utils'

/**
 * Generic, clearly-schematic product interface used as a placeholder mock
 * for platforms still in development. It adapts to each platform's modules
 * and accent colour while staying honest about being a preview.
 */
export function ProductMock({
  platform,
  className,
}: {
  platform: Platform
  className?: string
}) {
  const Icon = platform.icon
  const nav = platform.modules.slice(0, 6)
  const bars = [46, 62, 54, 78, 68, 88, 74]

  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-border bg-card shadow-floating',
        className,
      )}
    >
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
        </div>
        <div className="ml-3 flex items-center gap-2 rounded-md bg-card px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: platform.accent }} />
          {platform.slug}.scaleos.com
        </div>
      </div>

      <div className="flex">
        {/* sidebar */}
        <aside className="hidden w-44 shrink-0 flex-col gap-0.5 border-r border-border bg-surface/60 p-3 sm:flex">
          <div className="mb-3 flex items-center gap-2 px-2 py-1">
            <span
              className="flex size-6 items-center justify-center rounded-md border border-border"
              style={{ color: platform.accent }}
            >
              <Icon className="size-3.5" />
            </span>
            <span className="text-sm font-semibold">{platform.name}</span>
          </div>
          {nav.map((label, i) => (
            <div
              key={label}
              className={cn(
                'rounded-lg px-2.5 py-2 text-[0.8rem] font-medium',
                i === 0 ? 'bg-card text-foreground shadow-soft' : 'text-muted-foreground',
              )}
            >
              {label}
            </div>
          ))}
        </aside>

        {/* main — schematic placeholders */}
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex flex-col gap-1.5">
              <div className="h-3 w-28 rounded bg-foreground/80" />
              <div className="h-2 w-20 rounded bg-border" />
            </div>
            <span
              className="rounded-lg px-2.5 py-1.5 text-[0.7rem] font-medium text-brand-foreground"
              style={{ background: platform.accent }}
            >
              {platform.modules[0]}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            {platform.modules.slice(0, 3).map((m) => (
              <div key={m} className="rounded-xl border border-border bg-surface/60 p-3">
                <p className="truncate text-[0.65rem] uppercase tracking-wide text-muted-foreground">
                  {m}
                </p>
                <div className="mt-2 h-4 w-14 rounded bg-foreground/70" />
                <div className="mt-1.5 h-2 w-10 rounded" style={{ background: platform.accent, opacity: 0.5 }} />
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-xl border border-border bg-surface/60 p-4">
              <div className="mb-3 h-2.5 w-24 rounded bg-border" />
              <div className="flex h-24 items-end gap-2">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${h}%`,
                      background:
                        i === bars.length - 1 ? platform.accent : 'oklch(0.205 0.014 265 / 0.14)',
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-border bg-surface/60 p-4">
              <div className="mb-3 h-2.5 w-20 rounded bg-border" />
              <ul className="flex flex-col gap-2.5">
                {platform.modules.slice(3, 7).map((m) => (
                  <li key={m} className="flex items-center justify-between">
                    <span className="text-[0.75rem] text-foreground/80">{m}</span>
                    <span className="h-2 w-8 rounded bg-border" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-3 text-center font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
            Interface preview · In development
          </p>
        </div>
      </div>
    </div>
  )
}
