// components/sections/AboutUsTechnology.tsx

import { ButtonLink } from '@/components/ui/Button'

export function AboutUsTechnology() {
  return (
    <section className="bg-white py-[64px] sm:py-[80px] lg:py-[96px]">
      <div className="mx-auto w-full max-w-[1306px] px-4 sm:px-8 lg:px-12">

        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-[48px] lg:grid-cols-2 lg:gap-[80px]">

          {/* Left column */}
          <div className="flex flex-col">
            <div className="max-w-[520px] space-y-[18px] text-[15px] leading-[1.75] text-[#2f2f2f]">
              <p>
                At Kristalogic Systems Limited, we deliver cutting-edge digital experiences
                through our versatile subscription-based services tailored to meet diverse
                needs. Our design process is rooted in a commitment to understanding your
                unique challenges and requirements. By merging these insights with
                innovative creativity, we provide ongoing, personalized support to elevate
                your projects continuously.
              </p>
              <p>
                As a trusted partner in Nairobi, Kristalogic Systems Limited excels in
                technology consulting and custom software development, empowering
                businesses to address real-world challenges with secure and scalable digital
                solutions. Whether it's streamlining operations, enabling automation, or
                crafting exceptional customer experiences, we create solutions that offer
                enduring value.
              </p>
            </div>

            {/* Button */}
            <div className="mt-[48px] lg:mt-[80px]">
              <ButtonLink href="/contactus" variant="solid-dark">
                LET'S TALK
              </ButtonLink>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col">
            <h2
              className="
                text-[34px]
                sm:text-[42px]
                lg:text-[56px]
                font-[500]
                leading-[1.08]
                lg:leading-[1.05]
                tracking-[-0.02em]
                lg:tracking-[-0.03em]
                text-black
                lg:whitespace-nowrap
              "
            >
              We are your Technology <br className="hidden lg:block" />
              Partner of Choice
            </h2>
          </div>
        </div>

        {/* ✅ Stats Section (aligned + pulled up) */}
        <div className="mt-[32px] lg:-mt-[10px] grid grid-cols-1 lg:grid-cols-2 lg:gap-[80px]">
          
          {/* Spacer column (pushes stats under LEFT column) */}
          <div className="hidden lg:block" />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-[30px] sm:gap-[40px] lg:gap-[60px]">
            
            {/* Stat 1 */}
            <div>
              <div className="text-[32px] font-[500] tracking-[-0.02em] text-black sm:text-[40px] lg:text-[48px]">
                5Y+
              </div>
              <p className="mt-[6px] text-[10px] uppercase tracking-[0.2em] text-[#666] sm:text-[11px]">
                IN THE MARKET
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <div className="text-[32px] font-[500] tracking-[-0.02em] text-black sm:text-[40px] lg:text-[48px]">
                5K+
              </div>
              <p className="mt-[6px] text-[10px] uppercase tracking-[0.2em] text-[#666] sm:text-[11px]">
                PROJECTS FINISHED
              </p>
            </div>

            {/* Stat 3 */}
            <div>
              <div className="text-[32px] font-[500] tracking-[-0.02em] text-black sm:text-[40px] lg:text-[48px]">
                40+
              </div>
              <p className="mt-[6px] text-[10px] uppercase tracking-[0.2em] text-[#666] sm:text-[11px]">
                WORLDWIDE CLIENTS
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}