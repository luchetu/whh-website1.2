import Image from 'next/image'
import Link from 'next/link'
import { servicesServiceItems } from '@/utils/servicesServiceItems'

type ServicesIntroProps = {
  eyebrow?: string
}

type ServiceCardItem = {
  title: string
  description: string
  icon: string
}

export function ServicesIntro({ eyebrow }: ServicesIntroProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
      <div className="max-w-xl">
        {eyebrow ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#191919]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-[2.2rem] font-medium leading-[1.15] tracking-[0] text-[#191919] min-[420px]:text-4xl sm:text-5xl">
          Transform Ideas
          <br />
          into high value products
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
  )
}

function ServicesServiceCard({ item }: { item: ServiceCardItem }) {
  return (
    <article className="grid h-full grid-rows-[auto_1fr_auto] rounded-2xl bg-[#0A0A0C1A] p-5 text-[#181818]">
      <div>
        {/* Icon above title */}
        <div className="mb-4">
          <Image
            src={item.icon}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 flex-shrink-0"
          />
        </div>
        <h3 className="max-w-[14rem] text-lg font-medium leading-snug tracking-tight">
          {item.title}
        </h3>
        <p className="mt-2 max-w-[16rem] text-sm leading-6 text-[#4e4e4e]">
          {item.description}
        </p>
      </div>
      <Link
        href="/services"
        className="mt-7 inline-flex w-fit flex-col items-start gap-1 text-sm font-medium text-[#232323] transition hover:text-[#1292ee]"
      >
        <span className="inline-flex items-center gap-3">
          <span>See all services</span>
          <span aria-hidden="true" className="text-base leading-none">→</span>
        </span>
        <span aria-hidden="true" className="block h-px w-full bg-[#2f2f2f]/70" />
      </Link>
    </article>
  )
}

export function ServicesCardsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="px-4 sm:px-8 lg:px-12">
        <ServicesIntro />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {servicesServiceItems.map((item) => (
            <ServicesServiceCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
