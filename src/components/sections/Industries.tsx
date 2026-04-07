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
      "w-full justify-self-start",
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
      "w-full justify-self-start",
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
  const contentWrapClassName = imageFirst
    ? "w-full min-w-0 max-w-[640px] lg:ml-[2rem]"
    : "w-full min-w-0 max-w-[640px]";

  const mediaWrapClassName = imageFirst
    ? "w-full max-w-[45rem]"
    : "w-full max-w-[28.125rem]";

  const textWrapClassName = imageFirst
    ? "flex w-full min-w-0 max-w-[37.5rem] flex-col gap-6 md:max-w-[34rem] lg:max-w-[37.5rem]"
    : "flex w-full min-w-0 max-w-[42.75rem] flex-col gap-6 md:max-w-[40rem] lg:max-w-[42.75rem]";

  const paragraphClassName = imageFirst
    ? "w-full min-w-0 max-w-[37.5rem] text-[14px] font-normal leading-[1.5] tracking-[0] text-[#4d4d4d] lg:max-w-[38rem]"
    : "w-full min-w-0 max-w-[42.75rem] text-[14px] font-normal leading-[1.5] tracking-[0] text-[#4d4d4d]";

  const rowClassName = imageFirst
    ? "grid items-start gap-8 sm:gap-10 lg:grid-cols-[720px_1fr] lg:gap-8"
    : "grid items-start gap-8 sm:gap-10 lg:grid-cols-[640px_450px] lg:gap-12";

  const imageHeightClassName = imageFirst
    ? "aspect-[5/4] sm:aspect-[16/10] lg:h-[26rem] lg:aspect-auto"
    : "aspect-[1/1] sm:aspect-[5/4] lg:h-[21.25rem] lg:aspect-auto";

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
              <span className="block lg:whitespace-nowrap">
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
            <span className="block lg:hidden">
              For over 5 years, we&apos;ve crafted top-tier solutions across various
              sectors. Our team of over 500 skilled engineers has transformed from
              Python innovators to leaders in AI and Data Engineering. This extensive
              knowledge ensures your vital projects are developed correctly and
              launched swiftly.
            </span>
            <span className="hidden lg:block">
              For over 5 years, we&apos;ve crafted top-tier solutions across
            </span>
            <span className="hidden lg:block">
              various sectors. Our team of over 500 skilled engineers
            </span>
            <span className="hidden lg:block">
              has transformed from Python innovators to leaders in AI
            </span>
            <span className="hidden lg:block">
              and Data Engineering. This extensive knowledge ensures
            </span>
            <span className="hidden lg:block">
              your vital projects are developed correctly and launched
            </span>
            <span className="hidden lg:block">swiftly.</span>
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
    <div className={`mx-auto ${mediaWrapClassName} ${imageWrapClassName}`}>
      <div
        className={`relative overflow-hidden rounded-[1.5rem] bg-[#e8e2d8] shadow-[0_18px_40px_rgba(10,10,12,0.08)] ${imageHeightClassName} lg:rounded-none lg:shadow-none`}
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
          <div className="w-full max-w-[45rem]">{imageBlock}</div>
          <div className={contentWrapClassName}>{textBlock}</div>
        </>
      ) : (
        <>
          <div className={contentWrapClassName}>{textBlock}</div>
          <div className="w-full max-w-[28.125rem] lg:ml-[3rem]">
            {imageBlock}
          </div>
        </>
      )}
    </div>
  );
}

export function IndustriesSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="px-4 sm:px-8 lg:px-14">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-20 md:gap-24">
          {industryHighlights.map((highlight) => (
            <IndustryHighlight key={highlight.id} {...highlight} />
          ))}
        </div>
      </div>
    </section>
  );
}
