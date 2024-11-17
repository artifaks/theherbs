import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Herbal Tincture Guide',
  description: 'A comprehensive guide to crafting nature\'s remedies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}