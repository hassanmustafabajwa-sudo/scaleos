import Link from 'next/link'
import { platforms } from '@/lib/site-data'
import { Logo } from './logo'
import { cn } from '@/lib/utils'

/* node positions in the 400x300 SVG coordinate space */
const NODES = [
  { x: 200, y: 35, left: '50%', top: '11.7%' },
  { x: 343, y: 115, left: '85.7%', top: '38.2%' },
  { x: 288, y: 243, left: '72%', top: '81%' },
  { x: 112, y: 243, left: '28%', top: '81%' },
  { x: 57, y: 115, left: '14.3%', top: '38.2%' },
]

const CENTER = { x: 200, y: 150 }

export function Ecosystem({ className }: { className?: string }) {
  return (
    <div className={cn('relative mx-auto w-full max-w-xl', className)}>
      <div className="relative aspect-[4/3] w-full">
        {/* connector + pulse layer */}
        <svg
          viewBox="0 0 400 300"
          className="absolute inset-0 h-full w-full overflow-visible"
          aria-hidden
        >
          <defs>
            {NODES.map((n, i) => (
              <path
                key={`p-${i}`}
                id={`eco-path-${i}`}
                d={`M ${CENTER.x} ${CENTER.y} L ${n.x} ${n.y}`}
              />
            ))}
          </defs>

          {/* static connectors */}
          {NODES.map((_, i) => (
            <use
              key={`line-${i}`}
              href={`#eco-path-${i}`}
              className="stroke-foreground/12"
              strokeWidth={1.25}
              fill="none"
            />
          ))}

          {/* flowing pulses travelling outward from the core */}
          {NODES.map((_, i) => (
            <circle key={`pulse-${i}`} r={2.4} className="fill-brand">
              <animateMotion
                dur="2.6s"
                begin={`${i * 0.5}s`}
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="spline"
                keySplines="0.4 0 0.2 1"
              >
                <mpath href={`#eco-path-${i}`} />
              </animateMotion>
              <animate
                attributeName="opacity"
                dur="2.6s"
                begin={`${i * 0.5}s`}
                values="0;1;1;0"
                keyTimes="0;0.1;0.75;1"
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </svg>

        {/* central ScaleOS core */}
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <span
              className="absolute inset-0 -z-10 animate-ping rounded-2xl bg-brand/20"
              style={{ animationDuration: '3s' }}
              aria-hidden
            />
            <div className="flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-floating">
              <Logo className="h-6 w-6" />
              <span className="text-sm font-semibold tracking-[-0.01em]">
                Scale<span className="text-brand">OS</span>
              </span>
            </div>
          </div>
        </div>

        {/* platform nodes */}
        {platforms.map((p, i) => {
          const pos = NODES[i]
          const Icon = p.icon
          return (
            <Link
              key={p.slug}
              href={p.href}
              className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: pos.left, top: pos.top }}
            >
              <div className="flex items-center gap-2 rounded-xl border border-border bg-card/90 px-3 py-2 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-raised">
                <span
                  className="flex size-6 items-center justify-center rounded-md"
                  style={{ color: p.accent }}
                >
                  <Icon className="size-4" />
                </span>
                <span className="whitespace-nowrap text-xs font-medium tracking-[-0.01em]">
                  {p.name}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
