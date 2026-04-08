import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import {
  IndustryShowcaseSection,
  InnerPageHeroSection,
  ServiceHighlightsSection,
} from '@/components/sections'

export const metadata: Metadata = {
  title: 'Industries | Kristalogic',
  description: 'Explore the industries Kristalogic serves with tailored digital solutions.',
}

export default function IndustriesPage() {
  return (
    <>
      <main className="bg-[#f4f0ea] text-[#161616]">
        <InnerPageHeroSection
          imageSrc="/images/hero3.jpg"
          imageAlt="A technology-focused hero background for the industries page"
          title="We are Kristalogic Your trusted partner, more than a service provider."
          description={[
            'We are a community of digital experts with a passion for building impactful software solutions. Meet the team behind your success.',
            'Delivering great digital products and building culture people want to belong to.',
          ]}
          primaryCta={{ href: '/contactus', label: "Let's Talk" }}
          secondaryCta={{ href: '/services', label: 'See All Services' }}
          showPartnerLogos
        />
        <ServiceHighlightsSection eyebrow="Latest Projects" />
        <IndustryShowcaseSection />
      </main>
      <Footer />
    </>
  )
}
