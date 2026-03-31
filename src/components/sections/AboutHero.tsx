import Image from 'next/image'
import { ButtonLink } from '@/components/ui/Button'

type AboutHeroSectionProps = {
  imageSrc: string
  imageAlt: string
  title?: string
  description?: string[]
  primaryCta?: { href: string; label: string }
  secondaryCta?: { href: string; label: string }
  showPartnerLogos?: boolean
}

export function AboutHeroSection({
  imageSrc,
  imageAlt,
  primaryCta,
}: AboutHeroSectionProps) {
  return (
    <section className="overflow-hidden bg-[#020913] text-white">
      <div className="relative min-h-[560px] border-b-2 border-[#7c2cff] sm:min-h-[620px]">
        
        {/* Background Image */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,9,19,0.96)_0%,rgba(2,9,19,0.88)_34%,rgba(2,9,19,0.54)_64%,rgba(2,9,19,0.7)_100%)]" />

        <div className="relative flex min-h-[560px] flex-col justify-between px-4 py-12 sm:min-h-[620px] sm:px-8 sm:py-16 lg:px-14">
          
          {/* TEXT BLOCK */}
          <div className="max-w-[44rem] pt-3">
            
            {/* HEADING */}
            <h1 className="max-w-[41rem] text-[2.4rem] font-medium leading-[1.04] tracking-[-0.04em] min-[420px]:text-[2.8rem] sm:text-[3.5rem] lg:text-[4rem]">
              <span className="block">
                We are <span className="text-[#ffe100]">Kristalogic</span>
              </span>
              <span className="block">
                Your trusted partner, more
              </span>
              <span className="block">
                than a service provider.
              </span>
            </h1>

            {/* PARAGRAPH */}
            <p className="mt-6 max-w-[31rem] text-[14px] leading-[1.45] text-white/82 sm:text-[15px]">
              We are a community of digital experts with a passion for building 
              impactful software solutions. Meet the team behind your success.
            </p>
          </div>

          {/* CTA + SIDE TEXT */}
          <div className="flex flex-col gap-8 pb-4 sm:gap-10 lg:flex-row lg:items-end lg:justify-between">
            
            <ButtonLink
              href={primaryCta?.href || '/contactus'}
              variant="light"
              className="self-start"
            >
              {primaryCta?.label || "Let's Talk"}
            </ButtonLink>

            <p className="max-w-[15rem] text-[15px] leading-[1.45] text-white/88 lg:text-right">
              Delivering great digital products and building culture people want to belong to
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}