import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Kristalogic',
  description: 'Kristalogic — Your trusted partner, more than a service provider.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-[#f4f0ea] font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
