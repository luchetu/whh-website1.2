import Image from 'next/image'
import Link from 'next/link'

const footerColumns = [
  {
    heading: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/projects', label: 'Portfolio' },
      { href: '/services', label: 'Services' },
      { href: '#', label: 'Our Teams' },
      { href: '#', label: 'Career' },
    ],
  },
  {
    heading: 'Industry',
    links: [
      { href: '#', label: 'Fintech' },
      { href: '#', label: 'Telecom & Media' },
      { href: '#', label: 'Health-tech' },
      { href: '#', label: 'Agri-tech' },
      { href: '#', label: 'E-commerce' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { href: '#', label: "FAQ's" },
      { href: '/contactus', label: 'Contact Us' },
    ],
  },
]

const socialLinks = [
  {
    href: '#',
    label: 'X',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
        <path d="M18.9 2H21l-6.54 7.47L22 22h-5.91l-4.62-6.04L6.18 22H4.07l7-8L2 2h6.06l4.17 5.51L18.9 2Zm-1.03 18h1.64L5.18 3.9H3.42L17.87 20Z" />
      </svg>
    ),
  },
  {
    href: '#',
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75A4 4 0 0 0 3.75 7.75v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5Zm8.88 1.5a1.12 1.12 0 1 1 0 2.25 1.12 1.12 0 0 1 0-2.25ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.51 5.51 0 0 1 12 6.5Zm0 1.75A3.75 3.75 0 1 0 15.75 12 3.75 3.75 0 0 0 12 8.25Z" />
      </svg>
    ),
  },
  {
    href: '#',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
        <path d="M6.94 8.56H3.56V20h3.38V8.56Zm.22-3.53A1.97 1.97 0 1 0 5.2 7 1.97 1.97 0 0 0 7.16 5.03ZM20 13.03c0-3.44-1.84-5.04-4.3-5.04a3.72 3.72 0 0 0-3.35 1.84V8.56H9V20h3.38v-6.18c0-1.62.31-3.19 2.31-3.19s2.03 1.86 2.03 3.3V20H20Z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="px-4 pt-16 pb-6 text-[#1a1a1a] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl bg-white px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/Logo.svg"
                alt="Kristalogic"
                width={184}
                height={44}
                className="h-9 w-auto"
              />
            </Link>

            <a
              href="mailto:hello@kristalogic.systems.com"
              className="mt-8 block text-[13px] text-[#4d4d4d] transition hover:text-black"
            >
              hello@kristalogic.systems.com
            </a>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-[13px] text-[#4d4d4d]">Follow us</span>
              <div className="flex items-center gap-2">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f1efeb] text-[#565656] transition hover:bg-[#dfdbd4] hover:text-black"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 sm:gap-14 lg:gap-20">
            {footerColumns.map((column) => (
              <div key={column.heading}>
                <h2 className="text-[11px] font-medium tracking-[0.04em] text-[#919191]">
                  {column.heading}
                </h2>
                <nav className="mt-4 flex flex-col gap-3 text-[13px] text-[#1f1f1f]">
                  {column.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="transition hover:text-[#1292ee]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-[#efebe5] pt-6 text-[11px] uppercase tracking-[0.04em] text-[#2f2f2f] sm:flex-row sm:items-end sm:justify-between">
          <p>©2025 Kristalogic Systems Limited. All Rights Reserved.</p>

          <a
            href="#page-top"
            className="inline-flex items-end gap-2 self-start text-right normal-case tracking-normal text-[#1a1a1a] transition hover:text-[#1292ee] sm:self-auto"
          >
            <span aria-hidden="true" className="text-base leading-none">
              ↑
            </span>
            <span className="text-[13px]">Back to top</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
