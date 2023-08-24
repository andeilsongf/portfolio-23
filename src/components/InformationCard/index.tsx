import Image, { ImageProps } from 'next/image'
import { title } from 'process'

interface InformationCardProps extends ImageProps {
  title: string
  alt: string
  description: string
  fitContent?: boolean
}

export default function InformationCard({
  title,
  alt,
  description,
  fitContent = false,
  ...rest
}: InformationCardProps) {
  return (
    <div className="relative flex min-h-[500px] flex-col items-center justify-start rounded-[32px] border border-whitetheme-gray-300 bg-whitetheme-gray-200 p-16 dark:border-gray-400 dark:bg-black-300 dark:lg:border-none">
      <h3 className="mb-2 text-24 font-extrabold leading-none text-black-200 dark:text-white lg:mb-4 lg:text-32">
        {title}
      </h3>
      <span className="text-center text-16 text-gray-300">{description}</span>
      <div className="mt-16">
        <Image
          {...rest}
          alt={`${alt} - Andeilson Ferreira`}
          width={200}
          height={200}
          className={`${
            fitContent === false ? 'm-auto mb-6' : 'w-full'
          } absolute bottom-0 left-0 right-0 m-auto`}
        />
      </div>
    </div>
  )
}
