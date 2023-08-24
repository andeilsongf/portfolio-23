'use client'

import NavLink from '@/app/nav-link'
import { GithubLogo, LinkedinLogo, Moon } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import LogoDark from '../LogoDark'
import LogoWhite from '../LogoWhite'

export default function Header() {
  const { theme, setTheme } = useTheme()
  // const [isDark, setIsDark] = useState(false)

  // useEffect(() => {
  //   setIsDark(true)
  // }, [theme])

  return (
    <header className="relative m-auto mt-8 flex h-[60px] items-center justify-center rounded-xl bg-transparent px-4 backdrop-blur-[2px] lg:bg-white/25 dark:lg:bg-black-200/30">
      <div className="absolute -top-8 left-0 -z-10 h-[400px] max-h-[550px] w-full max-w-5xl overflow-hidden lg:overflow-visible">
        <span className="absolute -left-[300px] -top-[100px] h-[178px] w-[600px] bg-blue  blur-[120px] lg:flex" />
        <span className="absolute -left-0 -top-[120px] right-0 m-auto h-[263px] w-[600px] bg-red  blur-[120px] lg:flex" />
        <span className="absolute -top-[250px] left-[645px] h-[138px] w-[600px] bg-yellow  blur-[120px] lg:flex" />
      </div>
      <div>{theme === 'dark' ? <LogoDark /> : <LogoWhite />}</div>

      <div className="desktop hidden w-full items-center justify-between lg:flex">
        <nav className="ml-10 flex gap-4 text-16 font-medium text-black-200 dark:text-gray-100">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Work</NavLink>
          <NavLink href="/techstack">Tech Stack</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        <div className="flex gap-6">
          <Link href="https://linkedin.com/in/andeilson" target="_blank">
            <LinkedinLogo
              color="#C5C5C5"
              className="transition-colors hover:fill-black-100 dark:hover:fill-white"
              size={24}
            />
          </Link>
          <Link href="https://github.com/andeilsongf" target="_blank">
            <GithubLogo
              color="#C5C5C5"
              className="transition-colors hover:fill-black-100 dark:hover:fill-white"
              size={24}
            />
          </Link>
        </div>
      </div>
      <div className="ml-6 hidden border-l border-black-100/25 pl-6 dark:border-white/30 lg:flex">
        <Moon
          color="#C5C5C5"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          size={24}
          className="cursor-pointer"
        />
      </div>
    </header>
  )
}
