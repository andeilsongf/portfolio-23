type SubHeaderProps = {
  title: string
  description: string
}

export default function SubHeader({ title, description }: SubHeaderProps) {
  return (
    <div className="relative px-4 lg:px-0">
      <h1 className="mb-2 mt-44 text-48 font-bold leading-none text-black-200 dark:text-white lg:mb-0 lg:text-80">
        {title}
      </h1>
      <span className="text-16 text-gray-300/50 dark:text-gray-200 lg:text-24">
        {description}
      </span>
      <span className="my-[60px] flex h-[1px] w-full bg-gray-200/10"></span>
    </div>
  )
}
