import Image from 'next/image';

const missionText =
  "We envision a future where technology integrates into all aspects of life, empowering both businesses and individuals.";

export function MissionVisionValuesSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="px-4 sm:px-8 lg:px-12">

        {/* Outer 2-col: image (centered) | text block */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-12 items-center">

          {/* Col 1 – Image, vertically centered with equal space top & bottom */}
          <div className="relative w-full lg:w-[260px] xl:w-[300px] lg:h-[320px] overflow-hidden rounded-xl flex-shrink-0">
            <Image
              src="/images/team.png"
              alt="Our team collaborating on technology solutions"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Col 2 – Inner 2-col grid: Mission+Vision | Our Values, both top-aligned */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12 items-start">

            {/* Mission + Vision */}
            <div className="space-y-10">
              <div>
                <h3 className="mb-3 text-[1.9rem] font-medium tracking-[-0.01em] text-[#191919]">
                  Mission
                </h3>
                <p className="max-w-[38ch] text-[15px] leading-relaxed text-[#4e4e4e]">
                  {missionText}
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-[1.9rem] font-medium tracking-[-0.01em] text-[#191919]">
                  Vision
                </h3>
                <p className="max-w-[38ch] text-[15px] leading-relaxed text-[#4e4e4e]">
                  {missionText}
                </p>
              </div>
            </div>

            {/* Our Values – top-aligned with Mission */}
            <div>
              <h3 className="mb-3 text-[1.9rem] font-medium tracking-[-0.01em] text-[#191919]">
                Our values
              </h3>
              <p className="max-w-[38ch] text-[15px] leading-relaxed text-[#4e4e4e]">
                {missionText}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}