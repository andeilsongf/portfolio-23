'use client'

import { ArrowArcRight, ArrowRight } from '@phosphor-icons/react'
import Image from 'next/image'

type ProjectCardProps = {
  title: string
  description: string
  link: string
  image: string
  icon: string
  linkTitle: string
}

export default function ProjectCard({
  title,
  description,
  link,
  image,
  icon,
  linkTitle,
}: ProjectCardProps) {
  return (
    <div className="flex min-h-[565px] w-full items-center justify-between gap-5 rounded-[32px] border border-gray-400 bg-black-200 p-[60px]">
      <div className="">
        <div>
          <Image
            className="mb-4"
            src={image}
            alt={title}
            title={title}
            width={70}
            height={70}
          />
          <h3 className="mb-4 text-32 font-extrabold leading-snug text-white">
            {title}
          </h3>
          <span className="flex max-w-[503px] text-16 text-gray-300">
            {description}
          </span>
        </div>
        <button className="mt-32 flex items-center gap-3 text-18 font-medium text-white">
          <span>{linkTitle}</span> <ArrowRight color="#fff" size={20} />
        </button>
      </div>
      <div className="">
        <Image
          src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          alt="Andeilson Logo"
          title="Andeilson Logo"
          width={300}
          height={300}
          className=""
        />
      </div>
    </div>
  )
}
