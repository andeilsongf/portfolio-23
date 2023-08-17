'use client'

import {
  GithubLogo,
  LinkedinLogo,
  SunDim,
  TwitterLogo,
} from '@phosphor-icons/react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="m-auto mt-8 flex h-[60px] items-center rounded-xl bg-black-200/30 px-4 backdrop-blur-[2px]">
      <Image
        src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
        alt="Andeilson Logo"
        title="Andeilson Logo"
        width={40}
        height={20}
        className=""
      />
      <div className="flex w-full items-center justify-between">
        <nav className="ml-10 flex">
          <ul className="flex gap-10 text-16 font-medium text-gray-100">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Work</a>
            </li>
            <li>
              <a href="">Notebook</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">More</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-6">
          <a href="">
            <LinkedinLogo color="rgba(255, 255, 255, 0.25)" size={24} />
          </a>
          <a href="">
            <TwitterLogo color="rgba(255, 255, 255, 0.25)" size={24} />
          </a>
          <a href="">
            <GithubLogo color="rgba(255, 255, 255, 0.25)" size={24} />
          </a>
        </div>
      </div>
      <div className="border-[rgba(255, 255, 255, 0.25)] ml-6 border-l pl-6">
        <a href="">
          <SunDim color="rgba(255, 255, 255, 0.25)" weight="bold" size={24} />
        </a>
      </div>
    </header>
  )
}
