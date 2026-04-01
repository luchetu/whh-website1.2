import Image from 'next/image'
import Link from 'next/link'

type WorkCardProps = {
  category: string
  title: string
  href: string
  imageSrc: string
  imageAlt: string
  imageClassName: string
  bgClassName: string
  overlayLogo?: {
    src: string
    alt: string
    width: number
    height: number
    className?: string
  }
}

export function WorkCard({ category, title, href, imageSrc, imageAlt, imageClassName, bgClassName, overlayLogo }: WorkCardProps) {
  return (
    <article>
      <Link href={href} className={`relative block aspect-[640/625] w-full overflow-hidden ${bgClassName}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={imageClassName}
          sizes="(min-width: 640px) 50vw, 100vw"
        />
        {overlayLogo && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <Image
              src={overlayLogo.src}
              alt={overlayLogo.alt}
              width={overlayLogo.width}
              height={overlayLogo.height}
              className={overlayLogo.className}
            />
          </div>
        )}
      </Link>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-[14px] leading-[1.4] text-[#7a7a7a]">{category}</p>
        <h3 className="text-[1.08rem] font-normal tracking-[-0.02em] text-[#141414]">
          <Link href={href}>{title}</Link>
        </h3>
      </div>
    </article>
  )
}