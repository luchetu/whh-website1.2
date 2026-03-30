import Link from 'next/link'
import Image from 'next/image'
import { ButtonLink } from '@/components/ui/Button'

const navItems = [
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/projects', label: 'Case Studies' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  return (
    <header className="bg-white pt-0 pb-0">
      <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 shadow-[0_18px_50px_rgba(20,20,20,0.08)] sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/Logo.svg"
            alt="Kristalogic"
            width={200}
            height={50}
            className="h-8 w-auto sm:h-9"
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

        <ButtonLink href="/contactus" variant="outline-dark">
          Let&apos;s Talk
        </ButtonLink>
      </div>
    </header>
  )
}
