import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative flex max-h-[330px] justify-between border-t border-white/10 py-[42px]">
      <div className="flex flex-col justify-between">
        <div className="">
          <Image
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="Andeilson Logo"
            title="Andeilson Logo"
            width={30}
            height={30}
            className="mb-4"
          />
          <span className="text-14 text-gray-200">Thanks for stopping by.</span>
        </div>
        <span className="text-14 text-gray-200">
          © 2023 Andeilson Ferreira. All Rights Reserved.
        </span>
      </div>
      <div>
        <h4 className="mb-8 text-16 font-bold text-white">Links</h4>
        <nav>
          <ul className="text-16 text-gray-100">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Work</a>
            </li>
            <li>
              <a href="">Tech Stack</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h4 className="mb-8 text-16 font-bold text-white">Elsewhere</h4>
        <nav>
          <ul className="text-16 text-gray-100">
            <li>
              <a href="">Email</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
            </li>
            <li>
              <a href="">GitHub</a>
            </li>
            <li>
              <a href="">Threads</a>
            </li>
          </ul>
        </nav>
      </div>
      <span className="absolute bottom-0 right-0 -z-10 h-[135px] max-h-[180px] w-[750px] overflow-hidden rounded-[750px] bg-blue blur-[115px]" />
      <span className="absolute bottom-0 left-0 right-0 -z-10 h-[230px] max-h-[180px] w-[750px] overflow-hidden rounded-[750px] bg-red blur-[115px]" />
      <span className="absolute bottom-0 left-32 -z-10 h-[172px] max-h-[230px] w-[180px] overflow-hidden rounded-[750px] bg-yellow blur-[115px]" />
    </footer>
  )
}
