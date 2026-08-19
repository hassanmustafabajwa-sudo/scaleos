import {
  UtensilsCrossed,
  Building2,
  ShoppingBag,
  Trophy,
  Coffee,
  type LucideIcon,
} from 'lucide-react'

export type Platform = {
  slug: string
  name: string
  industry: string
  short: string
  description: string
  status: 'Live' | 'Early Access' | 'In Development'
  icon: LucideIcon
  accent: string // oklch hue-adjusted brand tint for per-product identity
  modules: string[]
  href: string
}

export const platforms: Platform[] = [
  {
    slug: 'bagh',
    name: 'Bagh',
    industry: 'Restaurant Operating System',
    short: 'The operating system built for restaurants.',
    description:
      'Bring point of sale, orders, inventory, staff and finance into one connected system designed for how restaurants really run.',
    status: 'Early Access',
    icon: UtensilsCrossed,
    accent: 'oklch(0.58 0.15 40)',
    modules: [
      'Point of Sale',
      'Orders',
      'Menu',
      'Inventory',
      'Staff',
      'Customers',
      'Loyalty',
      'Finance',
      'Analytics',
    ],
    href: '/platforms/bagh',
  },
  {
    slug: 'property',
    name: 'Property OS',
    industry: 'Property & Real Estate Operating System',
    short: 'One system for the entire property lifecycle.',
    description:
      'Manage listings, leasing, tenants, maintenance and finance across your portfolio from a single connected operating system.',
    status: 'In Development',
    icon: Building2,
    accent: 'oklch(0.55 0.13 210)',
    modules: [
      'Listings',
      'Leasing',
      'Tenants',
      'Maintenance',
      'Documents',
      'Payments',
      'Reporting',
    ],
    href: '/platforms/property',
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce OS',
    industry: 'E-commerce Business Operating System',
    short: 'Run the entire online business in one place.',
    description:
      'Unify catalog, orders, fulfilment, customers and performance so your online store operates as one connected system.',
    status: 'In Development',
    icon: ShoppingBag,
    accent: 'oklch(0.55 0.15 300)',
    modules: [
      'Catalog',
      'Orders',
      'Fulfilment',
      'Customers',
      'Marketing',
      'Payments',
      'Analytics',
    ],
    href: '/platforms/ecommerce',
  },
  {
    slug: 'sports',
    name: 'Sports OS',
    industry: 'Sports Business Operating System',
    short: 'The operating layer for sports businesses.',
    description:
      'Coordinate memberships, scheduling, facilities, teams and payments for clubs, academies and sports venues.',
    status: 'In Development',
    icon: Trophy,
    accent: 'oklch(0.58 0.14 150)',
    modules: [
      'Memberships',
      'Scheduling',
      'Facilities',
      'Teams',
      'Bookings',
      'Payments',
      'Insights',
    ],
    href: '/platforms/sports',
  },
  {
    slug: 'coffee',
    name: 'Coffee Shop OS',
    industry: 'Coffee Shop Operating System',
    short: 'Built for the pace of a coffee shop.',
    description:
      'Fast point of sale, mobile orders, inventory and loyalty designed for the speed and rhythm of coffee service.',
    status: 'In Development',
    icon: Coffee,
    accent: 'oklch(0.5 0.1 60)',
    modules: [
      'Point of Sale',
      'Mobile Orders',
      'Inventory',
      'Loyalty',
      'Staff',
      'Reporting',
    ],
    href: '/platforms/coffee',
  },
]

export function getPlatform(slug: string) {
  return platforms.find((p) => p.slug === slug)
}

export type Service = {
  title: string
  description: string
  points: string[]
}

export const services: Service[] = [
  {
    title: 'Digital Marketing',
    description:
      'Marketing strategy, campaign planning, audience research and growth strategy.',
    points: ['Growth strategy', 'Audience research', 'Campaign planning'],
  },
  {
    title: 'Paid Advertising',
    description:
      'Meta Ads, Google Ads, campaign strategy, targeting, testing and optimization.',
    points: ['Meta & Google Ads', 'Targeting & testing', 'Optimization'],
  },
  {
    title: 'Social Media',
    description:
      'Social strategy, content planning, content creation, management and community engagement.',
    points: ['Content planning', 'Creation & management', 'Community'],
  },
  {
    title: 'SEO',
    description:
      'Technical SEO, on-page SEO, keyword strategy, content optimization and local SEO.',
    points: ['Technical & on-page', 'Keyword strategy', 'Local SEO'],
  },
  {
    title: 'Websites & Digital Experiences',
    description:
      'Business websites, landing pages, e-commerce websites, UI/UX and conversion optimization.',
    points: ['Websites & landing pages', 'UI/UX design', 'Conversion'],
  },
  {
    title: 'AI & Business Systems',
    description:
      'AI-powered workflows, business automation, AI marketing systems, integrations and custom business platforms.',
    points: ['AI workflows', 'Automation', 'Custom platforms'],
  },
]

export const nav = [
  { label: 'Platforms', href: '/platforms' },
  { label: 'Services', href: '/services' },
  { label: 'Vision', href: '/vision' },
  { label: 'About', href: '/about' },
]
