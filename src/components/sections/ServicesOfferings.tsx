'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ServicesOfferingsItem } from '@/components/ui/ServicesOfferingsItem'

const serviceOfferings = [
  {
    number: '[1]',
    title: 'Product Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. We shape product ideas into polished digital experiences built for real users and steady growth.',
  },
  {
    number: '[2]',
    title: 'Custom Web/Mobile Development',
    description:
      'Developing intuitive and engaging mobile app designs that elevate user engagement and satisfaction.',
  },
  {
    number: '[3]',
    title: 'UX/UI Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. We design clean interfaces and clear journeys that make products easier to use and easier to love.',
  },
  {
    number: '[4]',
    title: 'Web Application Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. From dashboards to customer platforms, we build scalable web applications tailored to your business.',
  },
  {
    number: '[5]',
    title: 'SaaS Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. We help teams launch subscription-based products with strong foundations, smart workflows, and room to scale.',
  },
  {
    number: '[6]',
    title: 'SaaS Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. We refine performance, improve usability, and support products after launch with continuous updates.',
  },
]

export function ServicesOfferingsSection() {
  const [openIndex, setOpenIndex] = useState(1)

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="px-4 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:items-stretch lg:gap-12">
          <div className="lg:flex lg:h-full lg:flex-col">
            <p className="text-[16px] font-medium uppercase tracking-[0.02em] text-[#111]">
              Services
            </p>

            <div className="mt-24 space-y-10 lg:mt-[8.9rem] lg:flex lg:h-full lg:flex-col">
              <p className="max-w-[24rem] text-[14px] font-normal leading-[1.4] tracking-[0] text-[#2f2f2f]">
                We take creative leaps and offer tailored solutions
                <br />
                for the growth of your digital products.
              </p>

              <div className="relative mt-20 w-[320px] overflow-hidden bg-[#ece9e4] md:mt-24 lg:mt-auto">
                <Image
                  src="/images/phone.png"
                  alt="Mobile product preview"
                  width={320}
                  height={345}
                  className="h-[345px] w-[320px] object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="mb-10 flex justify-start lg:justify-end">
              <h2 className="max-w-none text-left text-[2.1rem] font-medium leading-[1.2] tracking-[0] text-[#111] sm:text-[2.7rem] lg:text-right">
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
