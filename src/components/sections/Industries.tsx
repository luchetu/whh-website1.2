"use client";

import Image from "next/image";

const industryHighlights = [
  {
    id: "wide-image-top",
    imageFirst: true,
    imageSrc: "/images/team.png",
    imageAlt: "Kristalogic team collaborating on a software project",
    imageWrapClassName: "w-full max-w-[40rem] justify-self-start",
    imageAspectClassName: "aspect-[640/385]",
  },
  {
    id: "narrow-image-top",
    imageFirst: false,
    imageSrc: "/images/team.png",
    imageAlt: "Kristalogic team in a product strategy session",
    imageWrapClassName:
      "w-full max-w-[16.75rem] justify-self-end md:max-w-[18.5rem] lg:max-w-[20rem]",
    imageAspectClassName: "aspect-[320/385]",
  },
  {
    id: "wide-image-bottom",
    imageFirst: true,
    imageSrc: "/images/team.png",
    imageAlt: "Kristalogic team collaborating on a software delivery session",
    imageWrapClassName: "w-full max-w-[40rem] justify-self-start",
    imageAspectClassName: "aspect-[640/385]",
  },
  {
    id: "narrow-image-bottom",
    imageFirst: false,
    imageSrc: "/images/team.png",
    imageAlt: "Kristalogic team reviewing product and engineering details",
    imageWrapClassName:
      "w-full max-w-[16.75rem] justify-self-end md:max-w-[18.5rem] lg:max-w-[20rem]",
    imageAspectClassName: "aspect-[320/385]",
  },
];

function IndustryHighlight({
  imageFirst,
  imageSrc,
  imageAlt,
  imageWrapClassName,
  imageAspectClassName,
}: (typeof industryHighlights)[number]) {
  const textWrapClassName = imageFirst
    ? "flex w-full max-w-[37.5rem] flex-col gap-6 md:max-w-[34rem] lg:max-w-[37.5rem]"
    : "flex w-full max-w-[42.75rem] flex-col gap-6 md:max-w-[40rem] lg:max-w-[42.75rem]";

  const paragraphClassName = imageFirst
    ? "w-full max-w-[37.5rem] text-[14px] font-normal leading-[140%] tracking-[0] text-[#0A0A0C] sm:text-[15px] lg:max-w-[38rem] lg:min-h-[217px] lg:text-[16px]"
    : "w-full max-w-[42.75rem] text-[14px] font-normal leading-[140%] tracking-[0] text-[#0A0A0C] sm:text-[15px] lg:min-h-[217px] lg:text-[16px]";

  const rowClassName = imageFirst
    ? "grid items-start gap-10 md:grid-cols-[minmax(0,39.5rem)_18rem] md:justify-between lg:grid-cols-[640px_600px] lg:gap-12"
    : "grid items-start gap-10 md:grid-cols-[minmax(0,42.75rem)_20rem] md:justify-between lg:grid-cols-[684px_320px] lg:gap-12";

  const imageHeightClassName = imageFirst
    ? "h-[15.5rem] md:h-[16.5rem] lg:h-[17.75rem]"
    : "h-[15.5rem] md:h-[16.5rem] lg:h-[17.75rem]";

  const textBlock = (
    <div className={textWrapClassName}>
      {/* Top text */}
      <div className="space-y-3">
        <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#111] sm:text-[12px]">
          Latest Projects
        </p>

        <h2 className="text-[2rem] font-medium leading-[1.08] tracking-[-0.03em] text-[#111] min-[420px]:text-[2.2rem] sm:text-[2.5rem] lg:text-[2.7rem]">
          {imageFirst ? (
            <>
              Transform Ideas
              <br />
              into high value
              <br />
              products
            </>
          ) : (
            <>
              <span className="block whitespace-nowrap">
                Transform Ideas into high value
              </span>
              <span className="block">products</span>
            </>
          )}
        </h2>
      </div>

      {/* Bottom paragraph */}
      <p className={paragraphClassName}>
        {imageFirst ? (
          <>
            <span className="block">
              For over 5 years, we&apos;ve crafted top-tier solutions across
            </span>
            <span className="block">
              various sectors. Our team of over 500 skilled engineers
            </span>
            <span className="block">
              has transformed from Python innovators to leaders in AI
            </span>
            <span className="block">
              and Data Engineering. This extensive knowledge ensures
            </span>
            <span className="block">
              your vital projects are developed correctly and launched
            </span>
            <span className="block">swiftly.</span>
          </>
        ) : (
          <>
            For over 5 years, we&apos;ve crafted top-tier solutions across various
            sectors. Our team of over 500 skilled engineers has transformed from
            Python innovators to leaders in AI and Data Engineering. This extensive
            knowledge ensures your vital projects are developed correctly and
            launched swiftly.
          </>
        )}
      </p>
    </div>
  );

  const imageBlock = (
    <div className={imageWrapClassName}>
      <div
        className={`relative overflow-hidden bg-[#e8e2d8] ${imageHeightClassName}`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(min-width: 1024px) 42vw, (min-width: 768px) 48vw, 100vw"
        />
      </div>
    </div>
  );

  return (
    <div className={rowClassName}>
      {imageFirst ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
}

export function IndustriesSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="px-4 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-20 md:gap-24">
          {industryHighlights.map((highlight) => (
            <IndustryHighlight key={highlight.id} {...highlight} />
          ))}
        </div>
      </div>
    </section>
  );
}
