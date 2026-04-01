import Link from 'next/link'
import { serviceItems } from '@/utils/serviceItems'

function ServiceCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <article className="grid h-full grid-rows-[auto_1fr_auto] rounded-2xl bg-[#0A0A0C1A] p-5 text-[#181818]">
      <div className="flex min-h-[4.5rem] items-start gap-3">
        <span className="mt-1 h-3 w-3 rotate-45 rounded-[2px] border border-[#d4aa22]" />
        <h3 className="max-w-[14rem] text-lg font-medium leading-snug tracking-tight">
          {title}
        </h3>
      </div>

      <p className="mt-5 max-w-[16rem] text-sm leading-6 text-[#4e4e4e]">
        {description}
      </p>

      <Link
        href="/services"
        className="mt-7 inline-flex w-fit flex-col items-start gap-1 text-sm font-medium text-[#232323] transition hover:text-[#1292ee]"
      >
        <span className="inline-flex items-center gap-3">
          <span>See all services</span>
          <span aria-hidden="true" className="text-base leading-none">
            →
          </span>
        </span>
        <span aria-hidden="true" className="block h-px w-full bg-[#2f2f2f]/70" />
      </Link>
    </article>
  )
}

export function ServicesSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="px-4 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div className="max-w-xl">
            <h2 className="text-[2.2rem] font-medium leading-[1.15] tracking-[0] text-[#191919] min-[420px]:text-4xl sm:text-5xl">
              Transform Ideas
              <br />
              into high value products
            </h2>
          </div>

          <div className="max-w-md justify-self-start text-[14px] font-normal leading-[1.5] tracking-[0] text-[#4d4d4d] lg:justify-self-end">
            <p>
              For over 5 years, we&apos;ve crafted top-tier solutions across various
              sectors. Our team of over 500 skilled engineers has transformed from
              Python innovators to leaders in AI and Data Engineering. This extensive
              knowledge ensures your vital projects are developed 
              correctly and launched swiftly.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {serviceItems.map((item) => (
            <ServiceCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
