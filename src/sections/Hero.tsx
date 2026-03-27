import Image from 'next/image'
import { ButtonLink } from '@/components/ui/ButtonLink'

const partnerLogos = ['Snowflake', 'Umbrella', 'Luminous', 'Nextmove', 'Sitemark']

type HeroSectionProps = {
  imageSrc: string
  imageAlt: string
  title: string
  description: string[]
  primaryCta?: {
    href: string
    label: string
  }
  secondaryCta?: {
    href: string
    label: string
  }
  showPartnerLogos?: boolean
}

export function HeroSection({
  imageSrc,
  imageAlt,
  title,
  description,
  primaryCta,
  secondaryCta,
  showPartnerLogos = false,
}: HeroSectionProps) {
  return (
    <section className="overflow-hidden bg-white shadow-[0_24px_80px_rgba(20,20,20,0.12)]">
      <div className="relative min-h-[640px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,12,18,0.84)_0%,rgba(6,12,18,0.52)_32%,rgba(6,12,18,0.12)_65%,rgba(6,12,18,0.32)_100%)]" />

        <div className="relative flex min-h-[640px] flex-col justify-between px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-14">
          <div className="max-w-xl pt-6">
            <h1 className="max-w-lg text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {title}
            </h1>
            <div className="mt-8 space-y-4 text-sm leading-7 text-white/82 sm:text-base">
              {description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {(primaryCta || secondaryCta) && (
              <div className="mt-10 flex flex-wrap gap-3">
                {primaryCta ? (
                  <ButtonLink href={primaryCta.href} variant="light">
                    {primaryCta.label}
                  </ButtonLink>
                ) : null}
                {secondaryCta ? (
                  <ButtonLink href={secondaryCta.href} variant="ghost-light">
                    {secondaryCta.label}
                  </ButtonLink>
                ) : null}
              </div>
            )}
          </div>

          {showPartnerLogos ? (
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/14 pt-6 text-white/76">
              <span className="text-xs font-medium uppercase tracking-[0.22em]">
                Trusted by
              </span>
              {partnerLogos.map((logo) => (
                <span
                  key={logo}
                  className="text-lg font-medium tracking-tight text-white/66"
                >
                  {logo}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
