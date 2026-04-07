'use client'

import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import { ErrorStateSection } from '@/components/sections/ErrorStateSection'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string }
}) {
  console.error(error)

  return (
    <html lang="en">
      <body
        id="page-top"
        className={`${inter.variable} min-h-screen bg-white font-sans antialiased`}
      >
        <Navbar />
        <ErrorStateSection
          title="Sorry for a while"
          description="It looks like there's an issue with the website. Don't worry; we're on it! Our team is working hard to fix this as quickly as possible."
          backgroundWord="We hit a snag!"
          accentLabel="ERROR"
          variant="error"
        />
      </body>
    </html>
  )
}
