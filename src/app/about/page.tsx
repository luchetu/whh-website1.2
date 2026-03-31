import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import { AboutHeroSection, PartnerLogosStrip } from '@/components/sections'

export const metadata: Metadata = {
  title: 'About Us | Kristalogic',
  description: 'Meet the digital experts behind Kristalogic and how we build meaningful software.',
}

export default function AboutPage() {
  return (
    <>
      <main className="bg-[#f4f0ea] text-[#161616]">
        <AboutHeroSection
          imageSrc="/images/hero2.png"
          imageAlt="A glowing digital map of Africa representing Kristalogic's reach"
          title="We are Kristalogic Your trusted partner, more than a service provider."
          description={[
            'We are a community of digital experts with a passion for building impactful software solutions. Meet the team behind your success.',
            'Delivering great digital products and building culture people want to belong to.',
          ]}
          primaryCta={{ href: '/contactus', label: "Let's Talk" }}
          secondaryCta={{ href: '/services', label: 'See All Services' }}
          showPartnerLogos
        />
        <PartnerLogosStrip />
      </main>
      <Footer />
    </>
  )
}
