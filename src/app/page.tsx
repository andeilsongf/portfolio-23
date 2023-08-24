import InformationCard from '@/components/InformationCard'
import ProjectCard from '@/components/ProjectCard'
import Image from 'next/image'

// Images

import AndeilsonMemoji from '../../public/static/images/andeilson-ferreira-memoji.png'
import AndeilsonMemojiIdea from '../../public/static/images/andeilson-ferreira-memoji-idea.png'
import TechStack from '../../public/static/images/andeilson-ferreira-tech-stack.png'
import Link from 'next/link'
import ProjectInfo from '@/components/ProjectInfo'
import projectDATA from './projects/data'
import { Metadata } from 'next'
import ButtonContact from '@/components/Button'

export default function Home() {
  return (
    <main className="relative m-auto w-full items-center justify-center overflow-x-hidden">
      <div className="relative m-auto mt-44 flex max-w-5xl px-4 lg:px-0">
        <div className="flex flex-col gap-10">
          <h1 className="flex text-48 font-extrabold leading-none text-black-200 dark:text-white lg:text-80">
            <div className="flex flex-col lg:flex-row">
              <div className="flex">
                <span className="mr-4  text-gray-300">I&apos;m</span>
                <span className="flex lg:hidden">👋</span>
              </div>
              <span className="flex-1 flex-wrap">Andeilson Ferreira.</span>
            </div>
          </h1>
          <span className="max-w-[720px] text-16 font-medium text-gray-300 lg:text-24">
            A front-end engineer and UI/UX designer helping startups turn their
            visions into a digital reality. I specialize in designing and
            building modern mobile and web-based apps.
          </span>

          <div className="mt-10 gap-4 lg:flex lg:flex-row">
            <Link href="/static/cv/andeilson-ferreira-cv-en.pdf" download>
              <button className="gradient-gray dark:box-shadow-sm mb-4 w-full flex-1 items-center justify-center rounded-[9px] px-8 py-4 text-center text-18 font-medium text-white lg:mb-0 lg:w-fit lg:flex-none">
                See my resume
              </button>
            </Link>
            <Link href="/contact">
              <button className="w-full rounded-[9px] bg-whitetheme-gray-200 px-8 py-4 text-18 font-medium text-black-200 dark:bg-black-200 dark:text-gray-200 lg:w-fit">
                Get in touch
              </button>
            </Link>
          </div>
        </div>
        <Image
          src={AndeilsonMemoji}
          alt="Andeilson Logo"
          title="Andeilson Logo"
          width={335}
          height={319}
          className="absolute right-0 -z-10 hidden lg:flex"
        />
      </div>
      <div className="mt-32 px-4 lg:mt-96 lg:px-0">
        <h2 className="mb-8 text-24 font-bold text-black-200 dark:text-white lg:text-48">
          Selected Work
        </h2>
        <div className="flex flex-col gap-4 lg:px-0">
          {projectDATA.map((data) => {
            return (
              <div
                key={data.id}
                className="relative flex w-full flex-col items-center justify-between overflow-hidden rounded-[32px] border border-whitetheme-gray-300 bg-whitetheme-gray-200 p-4 pt-12 dark:border-gray-400 dark:bg-black-200 lg:h-[565px] lg:flex-row lg:p-8"
              >
                <ProjectInfo
                  key={data.id}
                  alt={data.alt}
                  title={data.name}
                  description={data.description}
                  linkTitle={data.linkTitle}
                  src={data.logo}
                />
                <ProjectCard
                  alt={data.alt}
                  src={data.image}
                  isMobile={data.isMobile}
                />
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-24">
        <h2 className="mb-8 px-4 text-32 font-bold text-black-200 dark:text-white lg:px-0 lg:text-48">
          Get to know me
        </h2>
        <div className="grid flex-col gap-4 px-4 lg:grid-cols-2 lg:px-0">
          <InformationCard
            title="About me"
            alt="About me"
            description="Who I am and what I do"
            src={AndeilsonMemojiIdea}
          />
          <InformationCard
            title="TechStack"
            description="The dev tools, apps, devices, and games I use and play."
            src={TechStack}
            alt="TechStack"
            fitContent
            style={{
              borderRadius: 32,
            }}
          />
        </div>
      </div>

      <div className="my-24">
        <div className="flex flex-col items-center justify-between px-4 text-center lg:flex-row lg:px-0 lg:text-left">
          <div className="">
            <h2 className="mb-2 text-32 font-bold text-black-200 dark:text-white lg:text-48">
              Let&apos;s work together
            </h2>
            <span className="flex max-w-[495px] text-20 text-gray-300 dark:text-gray-200">
              Want to discuss an opportunity to create something great?
              I&lsquo;m ready when you are.
            </span>
          </div>
          <Link href="/contact">
            <ButtonContact />
          </Link>
        </div>
      </div>
    </main>
  )
}
