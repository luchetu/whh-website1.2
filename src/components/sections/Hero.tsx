import Image from 'next/image'
import type { ReactNode } from 'react'
import { ButtonLink } from '@/components/ui/Button'
import { partnerLogos } from '@/utils/partnerLogos'

type HeroSectionProps = {
  imageSrc: string
  imageAlt: string
  title: ReactNode
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
    <section
      className="overflow-hidden bg-[#050b11] shadow-[0_24px_80px_rgba(20,20,20,0.12)]"
      aria-label={imageAlt}
    >
      <div
        className="relative min-h-[640px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,9,14,0.9)_0%,rgba(4,9,14,0.68)_34%,rgba(4,9,14,0.3)_68%,rgba(4,9,14,0.48)_100%)]" />

        <div className="relative flex min-h-[640px] flex-col justify-between px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-14">
          <div className="flex w-full flex-col gap-4">
            <div className="max-w-[36rem]">
              <h1 className="max-w-[31rem] text-[2.15rem] font-medium leading-[1.12] tracking-tight sm:text-[2.35rem]">
                {title}
              </h1>
            </div>

            <div className="max-w-[31rem] space-y-4 text-sm leading-7 text-white/82 sm:text-base">
              {description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap gap-3">
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
            <div className="mt-4 flex w-full -translate-y-4 justify-center pt-0 sm:mt-6 sm:-translate-y-5">
              <div className="flex w-full max-w-[860px] items-center justify-between gap-4 px-2 text-white/76">
                <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-white/90 sm:text-[14px]">
                  Trusted by
                </span>
                {partnerLogos.map((logo) => (
                  <span key={logo.name} className="inline-flex shrink-0 items-center">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={logo.width}
                      height={logo.height}
                      className={`${logo.className} opacity-65`}
                    />
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
