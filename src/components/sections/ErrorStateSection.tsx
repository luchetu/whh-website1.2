import Link from 'next/link'

type ErrorStateSectionProps = {
  title: string
  description: string
  backgroundWord: string
  accentLabel?: string
  variant?: 'not-found' | 'error'
}

export function ErrorStateSection({
  title,
  description,
  backgroundWord,
  accentLabel,
  variant = 'not-found',
}: ErrorStateSectionProps) {
  const isNotFound = variant === 'not-found'

  return (
    <main className="min-h-[calc(100vh-73px)] overflow-hidden bg-white text-[#171717]">
      <section
        className={`mx-auto flex min-h-[calc(100vh-73px)] max-w-[1800px] flex-col overflow-hidden px-4 sm:px-6 lg:px-8 ${
          isNotFound
            ? 'justify-between pt-3 sm:pt-8'
            : 'justify-center gap-4 pt-2 pb-4 sm:gap-8 sm:pt-10 sm:pb-10'
        }`}
      >
        <div className="mx-auto flex max-w-[42rem] flex-col items-center px-2 text-center">
          <h1 className="text-[1.85rem] font-medium leading-none tracking-[-0.045em] text-[#171717] sm:text-[2.35rem]">
            {title}
          </h1>
          <p className="mt-3 max-w-[35rem] text-[0.95rem] leading-6 text-[#8a8a8a] sm:text-sm">
            {description}
          </p>
        </div>

        {isNotFound ? (
          <Link
            href="/"
            className="mx-auto mt-4 inline-flex min-h-10 items-center justify-center rounded-full bg-[#111111] px-5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#2a2a2a] sm:mt-6 sm:px-6"
          >
            Go Back Home
          </Link>
        ) : null}

        <div
          className={`relative flex flex-1 justify-center ${
            isNotFound
              ? 'mt-[-2.5rem] min-h-[10rem] items-center sm:mt-[-1.5rem] sm:min-h-[16rem] sm:items-end lg:mt-[-2rem] lg:min-h-[20rem]'
              : 'mt-[-1rem] min-h-[8rem] items-center sm:min-h-[12rem] sm:items-end md:min-h-[15rem]'
          }`}
        >
          <div className="relative inline-flex max-w-full items-center justify-center">
            <div
              className={`pointer-events-none select-none font-medium leading-none tracking-[-0.08em] text-[#d3d3d6] ${
                isNotFound
                  ? 'whitespace-nowrap translate-y-[-12%] text-[11rem] sm:translate-y-[-1%] sm:text-[20rem] md:text-[30rem] lg:text-[38rem] xl:text-[47.5rem]'
                  : 'max-w-[92vw] text-center whitespace-normal break-words translate-y-[-26%] text-[3.9rem] sm:max-w-none sm:whitespace-nowrap sm:translate-y-[-16%] sm:text-[7rem] md:text-[10rem] lg:text-[12rem] xl:text-[13rem]'
              }`}
            >
              {backgroundWord}
            </div>

            {accentLabel ? (
              <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[#d2a11d] sm:text-[0.78rem]">
                {accentLabel}
              </span>
            ) : null}
          </div>
        </div>

        {!isNotFound ? (
          <>
            <Link
              href="/"
              className="mx-auto inline-flex min-h-10 items-center justify-center rounded-full bg-[#111111] px-5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#2a2a2a] sm:px-6"
            >
              Go Back Home
            </Link>
            <div className="mt-8 border-t border-black/10 sm:mt-10" />
          </>
        ) : null}
      </section>
    </main>
  )
}
