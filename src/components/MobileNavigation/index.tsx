'use client'

import NavLinkMobile from '@/app/nav-link-mobile'
import {
  Code,
  House,
  User,
  Briefcase,
  At,
  Link,
  SunDim,
} from '@phosphor-icons/react'
import { useTheme } from 'next-themes'

export default function MobileNavigation() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="mobile-header flex w-full items-center justify-center px-4">
      <div className="fixed bottom-8 z-50 flex w-[95%] items-center justify-center gap-8 rounded-xl border border-[#27262C/40] bg-black-200/60 p-12 px-2 py-4 backdrop-blur-[2px] dark:border-black-300/90 dark:bg-black-200/60 lg:hidden">
        <NavLinkMobile href="/">
          <House size={24} color="#c4c4c4" />
        </NavLinkMobile>
        <NavLinkMobile href="/about">
          <User size={24} color="#c4c4c4" />
        </NavLinkMobile>
        <NavLinkMobile href="/projects">
          <Briefcase size={24} color="#c4c4c4" />
        </NavLinkMobile>
        <NavLinkMobile href="/techstack">
          <Code size={24} color="#c4c4c4" />
        </NavLinkMobile>
        <NavLinkMobile href="/contact">
          <At size={24} color="#c4c4c4" />
        </NavLinkMobile>
        <SunDim
          color={theme === 'dark' ? 'rgba(255, 255, 255, 0.25)' : '#fff'}
          className="hover:fill-black-100:dark:hover:fill-white transition-colors"
          weight="bold"
          size={24}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
      </div>
    </div>
  )
}
