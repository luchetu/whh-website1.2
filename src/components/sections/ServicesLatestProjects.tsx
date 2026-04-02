import Image from 'next/image'
import Link from 'next/link'
import { servicesLatestProjectsItems } from '@/utils/servicesLatestProjectsItems'

type ServiceLatestProjectItem = {
  title: string
  description: string
  icon: string
}

function ServiceLatestProjectCard({ item }: { item: ServiceLatestProjectItem }) {
  return (
    <div className="flex gap-4">

      {/* ICON - orange diamond outline */}
      <div className="flex-shrink-0 mt-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="1.5"
            width="12"
            height="12"
            rx="1"
            transform="rotate(45 10 1.5)"
            stroke="#F97316"
            strokeWidth="1.8"
          />
        </svg>
      </div>

      {/* TEXT CONTENT */}
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-medium tracking-tight text-[#191919]">
          {item.title}
        </h3>
        <p className="whitespace-pre-line text-sm leading-6 text-[#4d4d4e]">
          {item.description}
        </p>
      </div>

    </div>
  )
}

export function ServicesLatestProjects() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">

        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#191919]">
          Latest Projects
        </p>

        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">

          <div className="max-w-xl">
            <h2 className="text-[2.2rem] font-medium leading-[1.15] text-[#191919] min-[420px]:text-4xl sm:text-5xl">
              End-to-end Software
              <br />
              Development Services
            </h2>
          </div>

          <div className="max-w-md text-[14px] leading-[1.5] text-[#4d4d4e] lg:ml-auto lg:-ml-2">
            <p>
              For over 5 years, we've crafted top-tier solutions across various
              sectors. Our team of over 500 skilled engineers has transformed from
              Python innovators to leaders in AI and Data Engineering. This extensive
              knowledge ensures your vital projects are developed correctly and
              launched swiftly.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2 lg:pl-16">
          {servicesLatestProjectsItems.map((item, index) => (
            <ServiceLatestProjectCard key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  )
}