import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import { ContactSection } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Contact Us | Kristalogic',
  description: 'Connect with Kristalogic to discuss your next product, platform, or digital growth plan.',
}

export default function ContactUsPage() {
  return (
    <>
      <ContactSection />
      <Footer />
    </>
  )
}
