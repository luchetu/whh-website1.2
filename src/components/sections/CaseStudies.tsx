import Image from 'next/image'
import Link from 'next/link'
import { empheriaLogo } from '@/utils/empheriaLogo'

const caseStudies = [
  {
    category: 'Agri-Tech',
    title: 'EMPHERIA AGRICULTURE',
    href: '/projects',
    imageSrc: '/images/empheria.jpg',
    imageAlt: 'Empheria Agriculture case study preview',
    imageClassName: 'aspect-[535/491] w-full',
    imageStyleClassName: 'object-cover object-center',
  },
  {
    category: 'FinTech',
    title: 'CHARLOTTE AI',
    href: '/projects',
    imageSrc: '/images/charlotte ai.png',
    imageAlt: 'Charlotte AI case study preview',
    imageClassName: 'aspect-[368.5/339] w-full',
    imageStyleClassName: 'object-contain object-center bg-[#cfe0f3]',
  },
  {
    category: 'UX/UI Design',
    title: 'CHARLOTTE AI',
    href: '/projects',
    imageSrc: '/images/builder.png',
    imageAlt: 'Builder design case study preview',
    imageClassName: 'aspect-[368.5/339] w-full',
    imageStyleClassName: 'object-cover object-center',
  },
]

export function CaseStudiesSection() {
  const [featuredStudy, ...secondaryStudies] = caseStudies

  return (
    <section className="bg-white py-12 sm:py-14 lg:py-10">
      <div className="px-4 sm:px-8 lg:px-9">
        <div className="flex w-full max-w-[1306px] flex-col justify-between gap-5 md:flex-row md:items-start">
          <div className="max-w-[17rem] space-y-5">
            <p className="text-[16px] font-medium uppercase tracking-[0.02em] text-[#111]">
              Case Studies
            </p>

            <p className="text-[14px] font-normal leading-[1.4] tracking-[0] text-[#2f2f2f]">
              <span className="block">
                Check out our completed projects and see why
              </span>
              <span className="block">
                clients value our expertise. We provide solutions
              </span>
              <span className="block">
                that drive growth and innovation through
              </span>
              <span className="block">
                exceptional design and customised features.
              </span>
            </p>
          </div>

          <div className="space-y-4 md:ml-auto">
            <h2 className="max-w-none text-left text-[1.95rem] font-medium leading-[1.15] tracking-[0] text-[#111] min-[420px]:text-[2.1rem] sm:text-[2.7rem] lg:text-right">
              From ideas to impact
              <br />
              Our Latest Successfully
              <br />
              Completed Project
            </h2>

            <div className="flex justify-start pt-3 lg:justify-end lg:pt-[4.75rem]">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border-b border-[#111] pb-1 text-[11px] leading-none text-[#232323]"
              >
                <span>See all case studies</span>
                <span
                  aria-hidden="true"
                  className="inline-block -translate-y-[1px] rotate-45 text-[13px] leading-none text-black"
                >
                  ↑
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-3 grid gap-3 md:grid-cols-[1.22fr_0.83fr_0.83fr] lg:items-start">
          <article className="space-y-2 md:-mt-[0.8rem] lg:-mt-[1rem]">
            <div className="space-y-1">
              <p className="text-[14px] leading-[1.4] text-[#7a7a7a]">
                {featuredStudy.category}
              </p>
              <h3 className="ml-0 text-[1.08rem] font-normal leading-[1.2] tracking-[-0.02em] text-[#141414] sm:text-[1.12rem]">
                <Link href={featuredStudy.href}>{featuredStudy.title}</Link>
              </h3>
            </div>

            <Link
              href={featuredStudy.href}
              className={`relative block overflow-hidden bg-[#ece7de] ${featuredStudy.imageClassName}`}
            >
              <Image
                src={featuredStudy.imageSrc}
                alt={featuredStudy.imageAlt}
                fill
                loading="eager"
                className={featuredStudy.imageStyleClassName}
                sizes="(min-width: 1024px) 32vw, (min-width: 768px) 40vw, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <Image
                  src={empheriaLogo.src}
                  alt={empheriaLogo.alt}
                  width={empheriaLogo.width}
                  height={empheriaLogo.height}
                  loading="eager"
                  className={empheriaLogo.className}
                />
              </div>
            </Link>
          </article>

          {secondaryStudies.map((study) => (
            <article
              key={`${study.category}-${study.title}`}
              className="space-y-2 pt-10 md:pt-[2.45rem]"
            >
              <Link
                href={study.href}
                className={`relative block overflow-hidden bg-[#ece7de] ${study.imageClassName}`}
              >
                <Image
                  src={study.imageSrc}
                  alt={study.imageAlt}
                  fill
                  loading={study.imageSrc === '/images/charlotte ai.png' ? 'eager' : 'lazy'}
                  className={study.imageStyleClassName}
                  sizes="(min-width: 1024px) 24vw, (min-width: 768px) 28vw, 100vw"
                />
              </Link>

              <div className="space-y-1">
                <p className="text-[14px] leading-[1.4] text-[#7a7a7a]">{study.category}</p>
                <h3 className="text-[1.08rem] font-normal leading-[1.2] tracking-[-0.02em] text-[#141414] sm:text-[1.12rem]">
                  <Link href={study.href}>{study.title}</Link>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
