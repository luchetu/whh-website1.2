import { works } from '@/utils/works'
import { WorkCard } from '@/components/WorkCard'
import { ButtonLink } from '@/components/ui/Button' 
import { empheriaLogo } from '@/utils/empheriaLogo'

export function OurWorksSection() {
  return (
    <section className="bg-white pt-12 sm:pt-14 lg:pt-10 pb-20 sm:pb-28 lg:pb-40">
      <div className="px-4 sm:px-8 lg:px-9">

        <div className="flex w-full max-w-[1306px] flex-col justify-between gap-5 md:flex-row md:items-start">
          <div className="max-w-[17rem] space-y-5">
            <p className="text-[16px] font-medium uppercase tracking-[0.02em] text-[#111]">
              Our Works
            </p>
            <p className="text-[14px] font-normal leading-[1.4] tracking-[0] text-[#2f2f2f]">
              <span className="block whitespace-nowrap">
                Here are some of our latest successfully completed projects,
              </span>
              <span className="block whitespace-nowrap">
                showcasing our capabilities across a variety of
              </span>
              <span className="block whitespace-nowrap">
                fields.
              </span>
            </p>
          </div>

          <div className="space-y-4 md:ml-auto">
            <h2 className="max-w-none text-left text-[1.95rem] font-medium leading-[1.15] tracking-[0] text-[#111] min-[420px]:text-[2.1rem] sm:text-[2.7rem] lg:text-right">
              Explore Our Portfolio of
              <br />
              Creative Solutions
            </h2>
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {works.map((work, index) => (
            <WorkCard 
              key={`${work.title}-${index}`} 
              {...work} 
              overlayLogo={work.title === 'EMPHERIA AGRICULTURE' && index === 0 ? empheriaLogo : undefined}
            />
          ))}
        </div>
       <div className="mt-16 flex justify-center">
          <ButtonLink href="/projects" variant="solid-dark">
            Load More
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}