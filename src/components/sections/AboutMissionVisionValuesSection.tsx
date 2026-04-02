import Image from 'next/image';

const missionText =
  "We envision a future where technology integrates into all aspects of life, empowering both businesses and individuals.";

export function AboutMissionVisionValuesSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[1306px] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-12 items-center">

          <div className="relative w-full aspect-[4/3] lg:w-[260px] xl:w-[300px] lg:aspect-auto lg:h-[320px] overflow-hidden rounded-xl flex-shrink-0">
            <Image
              src="/images/team.png"
              alt="Our team collaborating on technology solutions"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12 items-start lg:pl-10 xl:pl-14">

            {/* Mission + Vision */}
            <div className="space-y-10 justify-self-end lg:justify-self-end">
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
