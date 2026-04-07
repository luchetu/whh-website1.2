import Image from 'next/image'
import {
  contactAvatars,
  contactChatDescription,
  contactHeadingLines,
  contactMethods,
  contactSupportCopy,
} from '@/utils/contactPage'

function ContactMethodIcon({ icon }: { icon: (typeof contactMethods)[number]['icon'] }) {
  if (icon === 'chat') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          d="M7 18.5 3.5 20V6.75A2.75 2.75 0 0 1 6.25 4h11.5A2.75 2.75 0 0 1 20.5 6.75v7.5A2.75 2.75 0 0 1 17.75 17H8.05L7 18.5Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M8 9.5h8M8 12.5h5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </svg>
    )
  }

  if (icon === 'visit') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          d="M12 20V9m0 11 4-2.25m-4 2.25L8 17.75M12 9l4-2.25M12 9 8 6.75M16 17.75V6.25M8 17.75V6.25"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M6.9 4.5h2.46c.43 0 .81.29.92.7l.85 3.17a1 1 0 0 1-.28.98l-1.4 1.31a13.83 13.83 0 0 0 3.9 3.89l1.31-1.39a1 1 0 0 1 .98-.28l3.17.85c.41.11.7.49.7.92v2.46A1.4 1.4 0 0 1 19.1 19.5h-.6C10.77 19.5 4.5 13.23 4.5 5.5v-.6A1.4 1.4 0 0 1 5.9 3.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function ContactSection() {
  return (
    <main className="bg-white text-[#111111]">
      <section className="mx-auto max-w-[1440px] px-5 pb-16 pt-8 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <div className="border-b border-black/10 pb-12 pt-4 lg:pb-14 lg:pt-8">
          <div className="flex flex-col gap-12 sm:gap-16 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-[40rem]">
              <h1 className="text-[64px] font-medium leading-[0.98] tracking-[-0.05em]">
                {contactHeadingLines.map((line, index) => (
                  <span key={line}>
                    {index > 0 ? <br /> : null}
                    {line}
                  </span>
                ))}
              </h1>
            </div>

            <div className="flex max-w-sm flex-col gap-16 lg:items-end">
              <div className="inline-flex w-fit flex-col items-start gap-2 self-start rounded-[1.25rem] bg-white/70 px-3 py-3 lg:self-end">
                <div className="flex -space-x-2">
                  {contactAvatars.map((avatar) => (
                    <span
                      key={avatar.src}
                      className="relative block h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-[#e7dfd3]"
                    >
                      <Image
                        src={avatar.src}
                        alt={avatar.alt}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </span>
                  ))}
                </div>
                <div className="text-[0.72rem] leading-tight text-[#2a2a2a]">
                  <p className="font-semibold">Client Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <a
              href="#contact-form"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#111111] px-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#2a2a2a]"
            >
              Let&apos;s Talk
            </a>

            <p className="max-w-[16rem] text-sm leading-6 text-[#323232] lg:text-right">
              {contactSupportCopy}
            </p>
          </div>
        </div>

        <div className="grid gap-12 pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] lg:gap-16">
          <div className="flex min-h-full flex-col">
            <div>
              <h2 className="text-[2rem] font-medium tracking-[-0.04em] text-[#111111]">
                Chat Our Team
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-[#3a3a3a]">
                {contactChatDescription}
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6 lg:mt-auto">
              {contactMethods.map((method) => (
                <div key={method.title} className="text-[#111111]">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[#f5f5f5]">
                    <ContactMethodIcon icon={method.icon} />
                  </span>
                  <h3 className="mt-4 text-lg font-medium">{method.title}</h3>
                  <p className="mt-2 text-sm text-[#444444]">{method.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <form id="contact-form" className="space-y-5 rounded-[2rem] bg-transparent">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#111111]">
                  First name *
                </span>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="h-14 w-full rounded-lg border border-transparent bg-[#ededed] px-4 text-sm text-[#111111] outline-none transition placeholder:text-[#6c6c6c] focus:border-[#111111]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#111111]">
                  Last name *
                </span>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="h-14 w-full rounded-lg border border-transparent bg-[#ededed] px-4 text-sm text-[#111111] outline-none transition placeholder:text-[#6c6c6c] focus:border-[#111111]"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[#111111]">
                Email *
              </span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="h-14 w-full rounded-lg border border-transparent bg-[#ededed] px-4 text-sm text-[#111111] outline-none transition placeholder:text-[#6c6c6c] focus:border-[#111111]"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[#111111]">
                Message *
              </span>
              <textarea
                name="message"
                rows={5}
                placeholder="Message here..."
                className="w-full rounded-lg border border-transparent bg-[#ededed] px-4 py-4 text-sm text-[#111111] outline-none transition placeholder:text-[#6c6c6c] focus:border-[#111111]"
              />
            </label>

            <button
              type="submit"
              className="flex min-h-14 w-full items-center justify-center rounded-lg bg-[#111111] px-6 text-sm font-semibold text-white transition hover:bg-[#2a2a2a]"
            >
              Send to Us
            </button>

            <p className="mx-auto max-w-[22rem] text-center text-xs leading-5 text-[#444444]">
              By Contacting us, you agree to our Terms of service and Privacy Policy
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}
