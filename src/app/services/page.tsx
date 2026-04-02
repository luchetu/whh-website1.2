import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import { AboutHeroSection, PartnerLogosStrip, ServicesCardsSection } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Services | Kristalogic',
  description: 'Kristalogic Services - Your trusted partner in digital solutions.',
}

export default function ServicesPage() {
  return (
    <>
      <main className="bg-[#f4f0ea] text-[#161616]">
        <AboutHeroSection
          imageSrc="/images/hero2.png"
          imageAlt="A glowing digital map of Africa representing Kristalogic's reach"
          title="We are Kristalogic. Your trusted partner, more than a service provider."
          description={[
            'We are a community of digital experts with a passion for building impactful software solutions.',
            'Meet the team behind your success.'
          ]}
          primaryCta={{ href: '/contactus', label: "Let's Talk" }}
          secondaryCta={{ href: '/projects', label: 'See Our Work' }}
          showPartnerLogos
        />
        <div className="[&_.trusted-by-label]:text-lg [&_.trusted-by-label]:font-bold [&_.trusted-by-label]:ml-12">
          <PartnerLogosStrip darkLogos />
        </div>
        <ServicesCardsSection />
      </main>
      <Footer />
    </>
  )
}



