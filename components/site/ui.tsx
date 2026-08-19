import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/* Container                                                           */
/* ------------------------------------------------------------------ */

export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-5 sm:px-8', className)}>
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Eyebrow (mono label)                                                */
/* ------------------------------------------------------------------ */

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground',
        className,
      )}
    >
      <span className="h-1 w-1 rounded-full bg-brand" aria-hidden />
      {children}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Section header                                                      */
/* ------------------------------------------------------------------ */

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="max-w-2xl text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* CTA Button (link-based, premium sizing)                             */
/* ------------------------------------------------------------------ */

type CTAVariant = 'primary' | 'secondary' | 'ghost' | 'brand'
type CTASize = 'md' | 'lg'

const base =
  'group/cta inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50'

const variants: Record<CTAVariant, string> = {
  primary:
    'bg-primary text-primary-foreground shadow-soft hover:bg-primary/90 hover:shadow-raised active:translate-y-px',
  brand:
    'bg-brand text-brand-foreground shadow-soft hover:brightness-110 hover:shadow-raised active:translate-y-px',
  secondary:
    'border border-border bg-background/60 text-foreground backdrop-blur hover:bg-secondary hover:border-foreground/20',
  ghost: 'text-foreground hover:bg-secondary',
}

const sizes: Record<CTASize, string> = {
  md: 'h-10 px-5 text-sm',
  lg: 'h-12 px-6 text-[0.95rem]',
}

export function CTA({
  href,
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  className,
  type,
  ...rest
}: {
  href?: string
  children: React.ReactNode
  variant?: CTAVariant
  size?: CTASize
  arrow?: boolean
  className?: string
  type?: 'button' | 'submit'
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const content = (
    <>
      {children}
      {arrow ? (
        <ArrowRight className="size-4 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
      ) : null}
    </>
  )
  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    const external = href.startsWith('http') || href.startsWith('mailto')
    if (external) {
      return (
        <a href={href} className={classes}>
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }
  return (
    <button type={type ?? 'button'} className={classes} {...rest}>
      {content}
    </button>
  )
}

/* ------------------------------------------------------------------ */
/* Text link with arrow                                                */
/* ------------------------------------------------------------------ */

export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group/al inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-brand',
        className,
      )}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-200 group-hover/al:translate-x-0.5" />
    </Link>
  )
}

/* ------------------------------------------------------------------ */
/* Status pill                                                         */
/* ------------------------------------------------------------------ */

export function StatusPill({ status }: { status: string }) {
  const isLive = status === 'Live'
  const isEarly = status === 'Early Access'
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-[0.12em]',
        isLive
          ? 'border-success/30 bg-success/10 text-success'
          : isEarly
            ? 'border-brand/30 bg-brand/10 text-brand'
            : 'border-border bg-secondary text-muted-foreground',
      )}
    >
      <span
        className={cn(
          'h-1.5 w-1.5 rounded-full',
          isLive ? 'bg-success' : isEarly ? 'bg-brand' : 'bg-muted-foreground',
        )}
        aria-hidden
      />
      {status}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Section wrapper with consistent vertical rhythm                     */
/* ------------------------------------------------------------------ */

export function Section({
  className,
  children,
  id,
}: {
  className?: string
  children: React.ReactNode
  id?: string
}) {
  return (
    <section id={id} className={cn('py-20 sm:py-28', className)}>
      {children}
    </section>
  )
}
