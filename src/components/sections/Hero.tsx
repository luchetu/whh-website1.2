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
        className="relative min-h-[620px] bg-cover bg-[center_center] bg-no-repeat sm:min-h-[640px]"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,9,14,0.94)_0%,rgba(4,9,14,0.82)_34%,rgba(4,9,14,0.5)_68%,rgba(4,9,14,0.62)_100%)]" />

        <div className="relative flex min-h-[620px] flex-col justify-between px-4 py-10 text-white sm:min-h-[640px] sm:px-8 sm:py-14 lg:px-14">
          <div className="flex w-full flex-col gap-4">
            <div className="max-w-[36rem]">
              <h1 className="max-w-[31rem] text-[1.9rem] font-medium leading-[1.08] tracking-tight min-[420px]:text-[2.15rem] sm:text-[2.35rem]">
                {title}
              </h1>
            </div>

            <div className="max-w-[31rem] space-y-4 text-[14px] leading-6 text-white/82 sm:text-base sm:leading-7">
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
              <div className="flex w-full max-w-[860px] flex-wrap items-center justify-center gap-x-5 gap-y-4 px-2 text-white/76 sm:justify-between">
                <span className="w-full text-center text-[12px] font-medium uppercase tracking-[0.08em] text-white/90 sm:w-auto sm:text-left sm:text-[14px]">
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
