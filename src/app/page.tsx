import { HeroSection, ServicesSection } from '@/components/sections'

export default function Home() {
  return (
    <main className="px-4 pb-6 text-[#161616] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <HeroSection
          imageSrc="/images/hero1.jpg"
          imageAlt="Developer working late at a desk"
          title="We are Kristalogic Your trusted partner, more than a service provider."
          description={[
            'We are a community of digital experts with a passion for building impactful software solutions. Meet the team behind your success.',
            'Delivering great digital products and building culture people want to belong to.',
          ]}
          primaryCta={{ href: '/contactus', label: "Let's Talk" }}
          secondaryCta={{ href: '/services', label: 'See All Services' }}
          showPartnerLogos
        />
        <ServicesSection />
      </div>
    </main>
  )
}
