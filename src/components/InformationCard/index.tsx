import Image from 'next/image'

type InformationCardProps = {
  title: string
  description: string
  image: string
}

export default function InformationCard({
  title,
  description,
  image,
}: InformationCardProps) {
  return (
    <div className="bg-black-300 flex min-h-[500px] flex-col items-center justify-center rounded-[32px]">
      <h3 className="mb-4 text-32 font-extrabold text-white">{title}</h3>
      <span className="text-16 text-gray-300">{description}</span>
      <div className="mt-16">
        <Image
          src={image}
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
