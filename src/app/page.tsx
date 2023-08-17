'use client'

import Header from '@/components/Header'
import InformationCard from '@/components/InformationCard'
import ProjectCard from '@/components/ProjectCard'
import { PaperPlaneRight } from '@phosphor-icons/react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative m-auto w-full items-center justify-center">
      <div className="max-h-[550px] max-w-5xl">
        <span className="z-index-10 absolute -top-[100px] left-[0px] h-[178px] w-[600px]  bg-blue blur-[120px]" />
        <span className="z-index-10 absolute -left-0 -top-[120px] right-0 m-auto h-[263px] w-[600px]  bg-red blur-[120px]" />
        <span className="z-index-10 absolute -top-[250px] left-[645px] h-[138px] w-[600px]  bg-yellow blur-[120px]" />
      </div>
      <div className="relative m-auto mt-44 flex max-w-5xl">
        <div className="flex flex-col gap-10">
          <h1 className="flex text-80 font-extrabold text-white">
            <span className="mr-4 text-gray-300">I&apos;m</span> Andeilson
            Ferreira.
          </h1>
          <span className="max-w-[720px] text-24 font-medium text-gray-300">
            A front-end engineer and UI/UX designer helping startups turn their
            visions into a digital reality. I specialize in designing and
            building modern mobile and web-based apps.
          </span>
          <div className="mt-10 flex gap-4">
            <button className="gradient-gray box-shadow-sm rounded-[9px] px-8 py-4 text-18 font-medium text-white">
              See my resume
            </button>
            <button className="rounded-[9px] bg-black-200 px-8 py-4 text-18 font-medium text-gray-200 text-gray-300">
              Get in touch
            </button>
          </div>
        </div>
        <Image
          src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          alt="Andeilson Logo"
          title="Andeilson Logo"
          width={300}
          height={300}
          className="absolute right-0 -z-10"
        />
      </div>
      <div className="mt-96">
        <h2 className="mb-8 text-48 font-bold text-white">Selected Work</h2>
        <div className="flex flex-col gap-8">
          <ProjectCard
            title="Subbi –– The free subscriptions manager"
            description="Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more."
            linkTitle="Download App"
            icon="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            link="#"
            image="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          />
          <ProjectCard
            title="Subbi –– The free subscriptions manager"
            description="Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more."
            linkTitle="Download App"
            icon="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            link="#"
            image="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          />
          <ProjectCard
            title="Subbi –– The free subscriptions manager"
            description="Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more."
            linkTitle="Download App"
            icon="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            link="#"
            image="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          />
          <ProjectCard
            title="Subbi –– The free subscriptions manager"
            description="Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more."
            linkTitle="Download App"
            icon="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            link="#"
            image="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          />
        </div>
      </div>

      <div className="mt-24">
        <h2 className="mb-8 text-48 font-bold text-white">Get to know me</h2>
        <div className="grid grid-cols-2 flex-col gap-4">
          <InformationCard
            title="About me"
            description="Who I am and what I do"
            image="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          />
          <InformationCard
            title="About me"
            description="Who I am and what I do"
            image="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          />
          <InformationCard
            title="About me"
            description="Who I am and what I do"
            image="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          />
          <InformationCard
            title="About me"
            description="Who I am and what I do"
            image="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          />
        </div>
      </div>

      <div className="my-24">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="mb-2 text-48 font-bold text-white">
              Let&apos;s work together
            </h2>
            <span className="flex max-w-[495px] text-20 text-gray-200">
              Want to discuss an opportunity to create something great?
              I&lsquo;m ready when you are.
            </span>
          </div>
          <button className="gradient-gray box-shadow-sm flex items-center gap-2 rounded-[9px] px-8 py-4 text-18 font-medium text-white">
            <PaperPlaneRight size={25} color="#ffffff" />
            <span>Get in touch</span>
          </button>
        </div>
      </div>
    </main>
  )
}
