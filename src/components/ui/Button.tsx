import Link from 'next/link'
import type { ReactNode } from 'react'

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: 'light' | 'ghost-light' | 'outline-dark'
  className?: string
}

const baseClasses =
  'inline-flex items-center justify-center rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition'

const variantClasses = {
  light: 'bg-white text-[#141414] hover:bg-[#ececec]',
  'ghost-light':
    'border border-white/70 bg-transparent text-white hover:bg-white hover:text-[#141414]',
  'outline-dark':
    'border border-[#202020] bg-transparent text-[#141414] hover:bg-[#202020] hover:text-white',
}

export function ButtonLink({
  href,
  children,
  variant = 'outline-dark',
  className = '',
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`.trim()}
    >
      {children}
    </Link>
  )
}
