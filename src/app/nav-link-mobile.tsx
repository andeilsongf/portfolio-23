'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

type NavLinkProps = {
  href: string
  children: JSX.Element
}

export default function NavLinkMobile({ href, children }: NavLinkProps) {
  const segment = useSelectedLayoutSegment()
  const active = href === `/${segment}`

  return (
    <div className="relative">
      <Link
        className={
          active
            ? 'before:absolute before:-left-2 before:-top-2 before:right-0 before:m-auto before:flex before:h-10 before:w-10 before:items-center before:justify-center before:rounded-xl before:bg-white/10'
            : ''
        }
        href={href}
      >
        {children}
      </Link>
    </div>
  )
}
