'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

type NavLinkProps = {
  href: string
  children: string
}

export default function NavLink({ href, children }: NavLinkProps) {
  const segment = useSelectedLayoutSegment()
  const active = href === `/${segment}`

  return (
    <Link
      className={
        active
          ? 'text-black-200 underline underline-offset-8 dark:text-white'
          : ''
      }
      href={href}
    >
      {children}
    </Link>
  )
}
