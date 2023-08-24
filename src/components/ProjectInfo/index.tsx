'use client'
import { ArrowRight } from '@phosphor-icons/react'
import { useTheme } from 'next-themes'
import Image, { ImageProps } from 'next/image'

interface ProjectInfoProps extends ImageProps {
  title: string
  alt: string
  description: string
  linkTitle: string
}

export default function ProjectInfo({
  title,
  alt,
  description,
  linkTitle,
  ...rest
}: ProjectInfoProps) {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex h-full basis-3/4 flex-col justify-between">
      <div className="">
        <Image
          {...rest}
          alt={`${alt} - Project developed by Andeilson`}
          className="mb-4"
          width={70}
          height={70}
        />
        <h3 className="mb-4 text-24 font-extrabold leading-snug text-black-200 dark:text-white lg:text-32">
          {title}
        </h3>
        <span className="flex max-w-[503px] text-16 text-gray-300">
          {description}
        </span>
      </div>
      <button className="my-12 flex items-center gap-3 text-18 font-medium text-white lg:my-0">
        <span className="text-18 font-medium text-black-200 dark:text-white">
          {linkTitle}
        </span>{' '}
        <ArrowRight color={theme === 'dark' ? '#fff' : '#181818'} size={20} />
      </button>
    </div>
  )
}
