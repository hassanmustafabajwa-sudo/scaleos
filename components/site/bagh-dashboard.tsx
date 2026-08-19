import {
  LayoutDashboard,
  ScrollText,
  Boxes,
  Users,
  UtensilsCrossed,
  Wallet,
  BarChart3,
  ArrowUpRight,
  Clock,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const sidebar = [
  { label: 'Overview', icon: LayoutDashboard, active: true },
  { label: 'Point of Sale', icon: UtensilsCrossed },
  { label: 'Orders', icon: ScrollText },
  { label: 'Inventory', icon: Boxes },
  { label: 'Staff', icon: Users },
  { label: 'Finance', icon: Wallet },
  { label: 'Analytics', icon: BarChart3 },
]

const metrics = [
  { label: "Today's Sales", value: '$4,820', delta: '+12.4%' },
  { label: 'Orders', value: '186', delta: '+8.1%' },
  { label: 'Avg. Ticket', value: '$25.9', delta: '+3.2%' },
]

const bars = [42, 55, 38, 63, 71, 58, 84, 76, 61, 88, 72, 95]

const orders = [
  { id: '#1042', table: 'Table 7', items: '3 items', status: 'Preparing', tone: 'brand' },
  { id: '#1041', table: 'Takeaway', items: '2 items', status: 'Ready', tone: 'success' },
  { id: '#1040', table: 'Table 3', items: '5 items', status: 'Served', tone: 'muted' },
  { id: '#1039', table: 'Delivery', items: '1 item', status: 'Served', tone: 'muted' },
]

const toneMap: Record<string, string> = {
  brand: 'bg-brand/10 text-brand',
  success: 'bg-success/10 text-success',
  muted: 'bg-secondary text-muted-foreground',
}

export function BaghDashboard({ className }: { className?: string }) {
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
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          app.bagh.scaleos.com
        </div>
      </div>

      <div className="flex">
        {/* sidebar */}
        <aside className="hidden w-48 shrink-0 flex-col gap-0.5 border-r border-border bg-surface/60 p-3 sm:flex">
          <div className="mb-3 flex items-center gap-2 px-2 py-1">
            <span className="flex size-6 items-center justify-center rounded-md bg-foreground text-[0.7rem] font-bold text-background">
              B
            </span>
            <span className="text-sm font-semibold">Bagh</span>
          </div>
          {sidebar.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className={cn(
                  'flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[0.8rem] font-medium transition-colors',
                  item.active
                    ? 'bg-card text-foreground shadow-soft'
                    : 'text-muted-foreground',
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </div>
            )
          })}
        </aside>

        {/* main */}
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[-0.01em]">Overview</p>
              <p className="flex items-center gap-1.5 text-[0.7rem] text-muted-foreground">
                <Clock className="size-3" /> Live · Downtown location
              </p>
            </div>
            <span className="rounded-lg bg-foreground px-2.5 py-1.5 text-[0.7rem] font-medium text-background">
              New Order
            </span>
          </div>

          {/* metrics */}
          <div className="grid grid-cols-3 gap-2.5">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-border bg-surface/60 p-3"
              >
                <p className="truncate text-[0.65rem] uppercase tracking-wide text-muted-foreground">
                  {m.label}
                </p>
                <p className="mt-1 text-base font-semibold tracking-[-0.01em] sm:text-lg">
                  {m.value}
                </p>
                <p className="mt-0.5 inline-flex items-center gap-0.5 text-[0.65rem] font-medium text-success">
                  <ArrowUpRight className="size-3" />
                  {m.delta}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.4fr_1fr]">
            {/* chart */}
            <div className="rounded-xl border border-border bg-surface/60 p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[0.8rem] font-medium">Sales · Last 12 hours</p>
                <span className="font-mono text-[0.65rem] text-muted-foreground">
                  hourly
                </span>
              </div>
              <div className="flex h-24 items-end gap-1.5">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className={cn(
                      'flex-1 rounded-sm',
                      i === bars.length - 1 ? 'bg-brand' : 'bg-foreground/15',
                    )}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* orders */}
            <div className="rounded-xl border border-border bg-surface/60 p-4">
              <p className="mb-3 text-[0.8rem] font-medium">Active Orders</p>
              <ul className="flex flex-col gap-2">
                {orders.map((o) => (
                  <li key={o.id} className="flex items-center justify-between">
                    <div className="min-w-0">
                      <p className="text-[0.75rem] font-medium">
                        {o.id} · {o.table}
                      </p>
                      <p className="text-[0.65rem] text-muted-foreground">{o.items}</p>
                    </div>
                    <span
                      className={cn(
                        'rounded-md px-1.5 py-0.5 text-[0.6rem] font-medium',
                        toneMap[o.tone],
                      )}
                    >
                      {o.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
