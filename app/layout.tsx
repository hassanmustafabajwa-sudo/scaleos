import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const siteUrl = 'https://scaleos.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ScaleOS — Every Business Deserves Its Own Operating System',
    template: '%s — ScaleOS',
  },
  description:
    'ScaleOS builds purpose-built operating systems for the way businesses actually work — from restaurants to real estate, e-commerce, sports and coffee shops.',
  keywords: [
    'ScaleOS',
    'business operating system',
    'restaurant software',
    'property management',
    'e-commerce operations',
    'Bagh',
  ],
  authors: [{ name: 'ScaleOS' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'ScaleOS',
    title: 'ScaleOS — Every Business Deserves Its Own Operating System',
    description:
      'Purpose-built operating systems for the way businesses actually work.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScaleOS — Every Business Deserves Its Own Operating System',
    description:
      'Purpose-built operating systems for the way businesses actually work.',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="min-h-screen font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
