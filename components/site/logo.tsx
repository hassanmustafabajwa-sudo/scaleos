import { cn } from '@/lib/utils'

/**
 * ScaleOS mark — a rounded system aperture: an outer frame representing
 * the operating layer, with an offset inner core representing the business
 * it is built around.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn('text-foreground', className)}
      aria-hidden="true"
    >
      <rect
        x="2.25"
        y="2.25"
        width="19.5"
        height="19.5"
        rx="6"
        className="stroke-current"
        strokeWidth="1.6"
        opacity="0.9"
      />
      <rect
        x="7"
        y="7"
        width="10"
        height="10"
        rx="3.2"
        className="fill-brand"
      />
      <circle cx="12" cy="12" r="1.9" className="fill-brand-foreground" />
    </svg>
  )
}
