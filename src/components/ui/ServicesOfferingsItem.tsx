import Link from 'next/link'

type ServicesOfferingsItemProps = {
  description: string
  isOpen: boolean
  number: string
  onToggle: () => void
  title: string
}

export function ServicesOfferingsItem({
  description,
  isOpen,
  number,
  onToggle,
  title,
}: ServicesOfferingsItemProps) {
  return (
    <div className="border-b border-[#bfbfbf]">
      <button
        type="button"
        onClick={onToggle}
        className="grid w-full grid-cols-[auto_1fr] items-start gap-x-4 gap-y-3 py-5 text-left md:grid-cols-[auto_1fr_auto] md:gap-x-8"
        aria-expanded={isOpen}
      >
        <span className="pt-1 text-[12px] leading-none text-[#303030]">{number}</span>

        <div className="min-w-0">
          <h3 className="text-[22px] font-normal leading-[1.2] tracking-[0] text-[#141414] min-[420px]:text-[24px] md:text-[32px]">
            {title}
          </h3>

          {isOpen ? (
            <p className="mt-4 max-w-[28rem] text-[14px] font-normal leading-[1.4] tracking-[0] text-[#2f2f2f]">
              {description}
            </p>
          ) : null}
        </div>

        <span className="col-span-2 flex min-w-[5.5rem] items-center justify-start gap-2 pt-1 text-[11px] text-[#2d2d2d] md:col-span-1 md:justify-end">
          {isOpen ? (
            <>
              <Link href="/contactus" className="border-b border-[#1f1f1f] pb-px">
                Book a call
              </Link>
              <span aria-hidden="true" className="rotate-45 text-[13px] leading-none">
                ↑
              </span>
            </>
          ) : (
            <span aria-hidden="true" className="text-[18px] leading-none">
              +
            </span>
          )}
        </span>
      </button>
    </div>
  )
}
