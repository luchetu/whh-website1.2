"use client";

import Image from "next/image";

type IndustryHighlight = {
  id: string;
  imageFirst: boolean;
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
};

const industryHighlights: IndustryHighlight[] = [
  {
    id: "transport-top",
    imageFirst: true,
    imageSrc: "/images/team.png",
    imageAlt: "Kristalogic team collaborating on a transport software project",
    eyebrow: "Latest Projects",
    title: "Transform Ideas into | high value products",
    description:
      "For over 5 years, we've crafted top-tier solutions across various sectors. Our team of over 500 skilled engineers has transformed from Python innovators to leaders in AI and Data Engineering. This extensive knowledge ensures your vital projects are developed correctly and launched swiftly.",
  },
  {
    id: "industry-right-top",
    imageFirst: false,
    imageSrc: "/images/team.png",
    imageAlt: "Kristalogic team in a product strategy session",
    eyebrow: "Latest Projects",
    title: "Transform Ideas into | high value products",
    description:
      "For over 5 years, we've crafted top-tier solutions across various sectors. Our team of over 500 skilled engineers has transformed from Python innovators to leaders in AI and Data Engineering. This extensive knowledge ensures your vital projects are developed correctly and launched swiftly.",
  },
  {
    id: "industry-left-bottom",
    imageFirst: true,
    imageSrc: "/images/team.png",
    imageAlt: "Kristalogic team collaborating on a software delivery session",
    eyebrow: "Latest Projects",
    title: "Transform Ideas into | high value products",
    description:
      "For over 5 years, we've crafted top-tier solutions across various sectors. Our team of over 500 skilled engineers has transformed from Python innovators to leaders in AI and Data Engineering. This extensive knowledge ensures your vital projects are developed correctly and launched swiftly.",
  },
  {
    id: "industry-right-bottom",
    imageFirst: false,
    imageSrc: "/images/team.png",
    imageAlt: "Kristalogic team reviewing product and engineering details",
    eyebrow: "Latest Projects",
    title: "Transform Ideas into | high value products",
    description:
      "For over 5 years, we've crafted top-tier solutions across various sectors. Our team of over 500 skilled engineers has transformed from Python innovators to leaders in AI and Data Engineering. This extensive knowledge ensures your vital projects are developed correctly and launched swiftly.",
  },
];

function IndustryHighlightRow({
  imageFirst,
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  description,
}: IndustryHighlight) {
  const [titleLineOne = "", titleLineTwo = ""] =
    title.split(" | ");

  const textBlock = (
    <div className="flex h-full w-full max-w-[36rem] items-start">
      <article className="w-full">
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#232323]">
          {eyebrow}
        </p>
        <h2 className="max-w-[24rem] text-[2.05rem] font-medium leading-[1.12] tracking-[-0.04em] text-[#111111] sm:text-[2.55rem]">
          {titleLineOne}
          <br />
          {titleLineTwo}
        </h2>
        <p className="mt-7 w-full text-[14px] leading-[1.6] text-[#4f4f4f]">
          {description}
        </p>
      </article>
    </div>
  );

  const imageBlock = (
    <div className="w-full max-w-[36rem]">
      <div className="relative aspect-[1.52/1] w-full overflow-hidden bg-[#e8e2d8] shadow-[0_18px_40px_rgba(10,10,12,0.08)]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
    </div>
  );

  return (
    <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
      {imageFirst ? (
        <>
          <div className="flex h-full justify-start">{imageBlock}</div>
          <div className="flex h-full justify-start">{textBlock}</div>
        </>
      ) : (
        <>
          <div className="order-2 flex h-full justify-end lg:order-1">{textBlock}</div>
          <div className="order-1 flex h-full justify-end lg:order-2">{imageBlock}</div>
        </>
      )}
    </div>
  );
}

export function IndustriesSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="px-4 sm:px-8 lg:px-14">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-12 md:gap-14">
          {industryHighlights.map((highlight) => (
            <IndustryHighlightRow key={highlight.id} {...highlight} />
          ))}
        </div>
      </div>
    </section>
  );
}
