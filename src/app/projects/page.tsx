import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import { InnerPageHeroSection, OurWorksSection } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Projects | Kristalogic',
  description: 'Explore Kristalogic projects and the digital solutions we have delivered.',
}

export default function ProjectsPage() {
  return (
    <>
      <main className="bg-[#f4f0ea] text-[#161616]">
        <InnerPageHeroSection
          imageSrc="/images/hero2.png"
          imageAlt="A glowing digital map of Africa representing Kristalogic's project reach"
          title="We are Kristalogic Your trusted partner, more than a service provider."
          description={[
            'We are a community of digital experts with a passion for building impactful software solutions. Meet the team behind your success.',
            'Delivering great digital products and building culture people want to belong to.',
          ]}
          primaryCta={{ href: '/contactus', label: "Let's Talk" }}
          secondaryCta={{ href: '/services', label: 'See All Services' }}
          showPartnerLogos
        />
        <OurWorksSection />
      </main>
      <Footer />
    </>
  )
}
