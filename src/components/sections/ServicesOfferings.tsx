'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ServicesOfferingsItem } from '@/components/sections/ServicesOfferingsItem'
import { serviceOfferings } from '@/utils/serviceOfferings'

export function ServicesOfferingsSection() {
  const [openIndex, setOpenIndex] = useState(1)

  return (
    <section className="bg-white pt-6 pb-16 sm:pt-8 sm:pb-20">
      <div className="px-4 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:items-stretch lg:gap-12">
          <div className="lg:flex lg:h-full lg:flex-col">
            <p className="text-[16px] font-medium uppercase tracking-[0.02em] text-[#111]">
              Services
            </p>

            <div className="mt-14 space-y-10 sm:mt-20 lg:mt-[8.9rem] lg:flex lg:h-full lg:flex-col">
              <p className="max-w-[24rem] text-[14px] font-normal leading-[1.4] tracking-[0] text-[#2f2f2f]">
                We take creative leaps and offer tailored solutions
                <br />
                for the growth of your digital products.
              </p>

              <div className="relative mt-14 aspect-[320/345] w-full max-w-[280px] overflow-hidden bg-[#ece9e4] sm:mt-20 md:mt-24 lg:mt-auto">
                <Image
                  src="/images/phone.png"
                  alt="Mobile product preview"
                  fill
                  sizes="(max-width: 640px) 100vw, 280px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="mb-10 flex justify-start lg:justify-end">
              <h2 className="max-w-none text-left text-[1.95rem] font-medium leading-[1.15] tracking-[0] text-[#111] min-[420px]:text-[2.1rem] sm:text-[2.7rem] lg:text-right">
                There is a Lot We Can Do.
                <br />
                Here is a Few
              </h2>
            </div>

            <div>
              {serviceOfferings.map((item, index) => (
                <ServicesOfferingsItem
                  key={`${item.number}-${item.title}`}
                  number={item.number}
                  title={item.title}
                  description={item.description}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex((current) => (current === index ? -1 : index))}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
