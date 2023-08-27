'use client'

import NavLink from '@/app/nav-link'
import Image from 'next/image'
import Link from 'next/link'

import { useTheme } from 'next-themes'
import LogoDark from '../LogoDark'
import LogoWhite from '../LogoWhite'

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="relative flex flex-col-reverse justify-between gap-8 border-t border-white/10 px-4 py-[42px] lg:max-h-[330px] lg:flex-row lg:gap-0 lg:px-0">
      <div className="flex flex-col justify-between">
        <div className="z-20">
          <Link href="/">
            <div>{theme === 'dark' ? <LogoDark /> : <LogoWhite />}</div>
          </Link>
          <span className="text-14 text-black-200 dark:text-gray-200">
            Thanks for stopping by.
          </span>
        </div>
        <span className="text-14 text-black-200 dark:text-gray-200">
          © 2023 Andeilson Ferreira. All Rights Reserved.
        </span>
      </div>
      <div>
        <h4 className="mb-8 text-16 font-bold text-black-200 dark:text-white">
          Links
        </h4>
        <nav className="flex flex-col gap-2 text-16 text-black-200 dark:text-gray-100">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Work</NavLink>
          <NavLink href="/techstack">Tech Stack</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
      </div>
      <div>
        <h4 className="mb-8 text-16 font-bold text-black-200 dark:text-white">
          Elsewhere
        </h4>
        <nav>
          <ul className="flex flex-col gap-2 text-16 text-black-200 dark:text-gray-100">
            <li>
              <Link href="mailto:hello@andeilson.dev">Email</Link>
            </li>
            <li>
              <Link href="https://linkedin.com/in/andeilson" target="_blank">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="https://github.com/andeilsongf" target="_blank">
                GitHub
              </Link>
            </li>
            <li>
              <Link href="#">Threads</Link>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-0 left-0 -z-10 h-[550px] w-full overflow-hidden lg:overflow-visible">
          <span className="absolute bottom-0 right-0 h-[135px] max-h-[180px] w-[750px] rounded-[750px] bg-blue blur-[115px] lg:flex" />
          <span className="absolute bottom-0 left-0 right-0 h-[230px] max-h-[180px] w-[750px] rounded-[750px] bg-red blur-[115px] lg:flex" />
          <span className="absolute bottom-0 left-32  h-[172px] max-h-[230px] w-[180px] rounded-[750px] bg-yellow blur-[115px] lg:flex" />
        </div>
      </div>
    </footer>
  )
}
