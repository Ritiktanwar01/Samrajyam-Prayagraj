import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Samrajyam - Premium Residential Project in Raipur',
  description: 'Discover Samrajyam - A grand landmark residential project in Raipur with 7 towers, modern amenities, and eco-friendly features.',
  icons: {
    icon: [
      {
        url: '/new_logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/new_logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/new_logo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/new_logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
