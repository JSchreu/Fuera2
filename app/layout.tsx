import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fuera del Camino - Wijn Proefmethode',
  description: 'Een app voor het bijhouden van wijnproeverijen',
  manifest: '/manifest.json',
  themeColor: '#722F37',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Fuera del Camino',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
} 