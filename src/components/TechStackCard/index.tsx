import Image from 'next/image'

type TechStackCardProps = {
  image: string
  title: string
  type?: string | boolean
}

export default function TechStackCard({
  image,
  title,
  type = false,
}: TechStackCardProps) {
  return (
    <div className="relative flex items-center justify-center rounded-[22px] border border-whitetheme-gray-300 bg-whitetheme-gray-100 p-6 dark:border-gray-400 dark:bg-black-200 lg:h-[300px] lg:w-[330px] lg:flex-col lg:justify-center">
      <Image
        src={image}
        alt={`Andeilson Ferreira - I work using ${title}`}
        title={`Andeilson Ferreira - I work using ${title}`}
        width={70}
        height={70}
        className=""
      />
      <div className="ml-2 flex w-full items-center justify-between lg:absolute lg:bottom-4 lg:ml-0 lg:mt-10 lg:px-6 ">
        <span className="text-16 font-semibold text-black-200 dark:text-white lg:text-20">
          {title}
        </span>
        {type === false ? (
          ''
        ) : (
          <span className="rounded-[26px] bg-white/70 px-3 py-[6px] text-11 text-gray-300 dark:border dark:border-[#272525] dark:bg-black-200 lg:text-14">
            {type}
          </span>
        )}
      </div>
    </div>
  )
}
