'use client'

import Image, { ImageProps } from 'next/image'

type ImageCardProps = ImageProps
type ImageDetails = {
  isMobile: boolean
}

export type ProjectCardDetails = ImageCardProps & ImageDetails

export default function ProjectCard({ isMobile, ...rest }: ProjectCardDetails) {
  return (
    <div className="flex w-full items-center justify-center overflow-hidden">
      <Image
        {...rest}
        alt={`project by Andeilson Ferreira`}
        title={`project by Andeilson Ferreira`}
        width={isMobile ? 600 : 500}
        height={isMobile ? 600 : 500}
        className={`${
          isMobile === true
            ? 'absolute bottom-0 right-16 hidden w-96 lg:flex'
            : 'absolute -right-10 hidden overflow-hidden lg:flex'
        }`}
      />
    </div>
  )
}
