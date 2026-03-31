import Image from 'next/image'
import { partnerLogos } from '@/utils/partnerLogos'

export function PartnerLogosStrip() {
  return (
    <section className="bg-white">
      <div className="px-4 py-10 sm:px-8 lg:px-10 lg:py-12">
        <div className="flex flex-col gap-6 min-[900px]:flex-row min-[900px]:items-center min-[900px]:justify-between">
          <span className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#1b1b1b]">
            Trusted By
          </span>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-5 min-[900px]:justify-end lg:gap-x-12">
            {partnerLogos.map((logo) => (
              <span key={logo.name} className="inline-flex shrink-0 items-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className={`${logo.className} brightness-0 opacity-80`}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
