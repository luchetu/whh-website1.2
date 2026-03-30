'use client'

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ButtonLink } from '@/components/ui/Button'

const navItems = [
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/projects', label: 'Case Studies' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white pt-0 pb-0">
      <div className="px-4 py-4 shadow-[0_18px_50px_rgba(20,20,20,0.08)] sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/images/Logo.svg"
              alt="Kristalogic"
              width={200}
              height={50}
              className="h-8 w-auto max-w-[150px] sm:h-9 sm:max-w-[180px]"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#595959] lg:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-black">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href="/contactus" variant="outline-dark">
              Let&apos;s Talk
            </ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#202020] bg-[#141414] text-white transition hover:bg-[#202020] lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span aria-hidden="true" className="text-lg leading-none">
              {isMenuOpen ? '×' : '☰'}
            </span>
          </button>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-nav"
            className="mt-4 rounded-2xl border border-[#e8e1d8] bg-[#faf7f2] p-4 shadow-[0_16px_40px_rgba(20,20,20,0.08)] lg:hidden"
          >
            <nav className="flex flex-col gap-1 text-[12px] font-medium uppercase tracking-[0.16em] text-[#3f3f3f]">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-xl px-3 py-3 transition hover:bg-white hover:text-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <ButtonLink
              href="/contactus"
              variant="outline-dark"
              className="mt-4 w-full"
            >
              Let&apos;s Talk
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </header>
  )
}
