import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import {
  AboutMissionVisionValuesSection,
  AboutServicesSection,
  AboutTechnologySection,
  InnerPageHeroSection,
  PartnerLogosStrip,
} from '@/components/sections'

export const metadata: Metadata = {
  title: 'About Us | Kristalogic',
  description: 'Meet the digital experts behind Kristalogic and how we build meaningful software.',
}

export default function AboutPage() {
  return (
    <>
      <main className="bg-[#f4f0ea] text-[#161616]">
        <InnerPageHeroSection
          imageSrc="/images/hero2.png"
          imageAlt="A glowing digital map of Africa representing Kristalogic's reach"
          title="We are Kristalogic. Your trusted partner, more than a service provider."
          description={[
            'We are a community of digital experts with a passion for building impactful software solutions. Meet the team behind your success.',
            'Delivering great digital products and building culture people want to belong to.',
          ]}
          primaryCta={{ href: '/contactus', label: "Let's Talk" }}
          secondaryCta={{ href: '/services', label: 'See All Services' }}
          showPartnerLogos
        />
        <div className="[&_.trusted-by-label]:text-lg [&_.trusted-by-label]:font-bold [&_.trusted-by-label]:ml-12">
          <PartnerLogosStrip darkLogos />
        </div>

        <AboutTechnologySection />
        <AboutMissionVisionValuesSection />
        <AboutServicesSection />
      </main>
      <Footer />
    </>
  )
}
