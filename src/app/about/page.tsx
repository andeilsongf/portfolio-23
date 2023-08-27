import SubHeader from '@/components/Subheader'
import Image from 'next/image'

import andeilsonMemoji from '../../../public/static/images/andeilson-ferreira-memoji.png'
import andeilsonSignature from '../../../public/static/images/andeilson-ferreira-signature.png'
import ButtonContact from '@/components/Button'
import { Metadata } from 'next'
import { useTheme } from 'next-themes'

export const metadata: Metadata = {
  title: 'About | Andeilson Ferreira',
  description:
    'About Andeilson Ferreira who Is a Brazilian Frontend Developer based in Brasília, capital of Brazil. Works with React, React Native and Javascript.',
}

export default function About() {
  return (
    <main>
      <SubHeader
        title="A little bit about me"
        description="Who I am and what I do"
      />
      <div className="flex flex-col-reverse items-start justify-between px-4 lg:flex-row lg:p-0">
        <article className="flex basis-2/4 flex-col overflow-hidden">
          <h2 className="mb-2 text-16 font-bold uppercase text-black-200 dark:text-gray-200">
            Who I Am
          </h2>
          <p className="mb-8 text-18 text-whitetheme-gray-400 dark:text-gray-300">
            I&apos;m <span className="dark:text-white">Andeilson Ferreira</span>{' '}
            (Pronounced “An-dê-iu-som”) a multi-disciplinary front-end engineer
            based in Brasília, Brazil 🇧🇷.
          </p>
          <h2 className="mb-2 text-16 font-bold uppercase text-black-200 dark:text-gray-200">
            What I Do
          </h2>
          <p className="mb-4 text-18 text-whitetheme-gray-400 dark:text-gray-300">
            I am a seasoned developer with a strong track record in creating
            impactful web and mobile applications. With extensive experience
            across multiple roles, I&apos;ve consistently demonstrated my
            ability to drive innovation, enhance user experiences, and
            contribute to the success of diverse projects.
          </p>
          <p className="text-18 text-whitetheme-gray-400 dark:text-gray-300">
            With a proven history of driving success across various roles, I am
            equipped to tackle new challenges, create compelling solutions, and
            contribute to the growth of innovative projects. My commitment to
            excellence, adaptability, and continuous learning ensures that I
            remain at the forefront of web and mobile development trends.
          </p>
          <h2 className="mb-2 mt-8 text-16 font-bold uppercase text-black-200 dark:text-gray-200">
            What I did
          </h2>
          <p className="mb-16 text-18 text-whitetheme-gray-400 dark:text-gray-300">
            Before delving into the realm of front end engineering, I spent two
            years as a graphic designer. This background has equipped me with a
            keen eye for aesthetics and a deep understanding of user-centered
            design principles. It enables me to seamlessly blend functionality
            and visual appeal in every project I undertake.
          </p>

          <span className="text-18 text-whitetheme-gray-400 dark:text-gray-300">
            Feel free to reach out via{' '}
            <a
              href="mailto:hello@andeilson.dev"
              className="text-black-200 underline underline-offset-4 dark:text-white"
            >
              e-mail
            </a>
            , or follow me on{' '}
            <a
              href="#"
              className="text-black-200 underline underline-offset-4 dark:text-white"
            >
              Threads
            </a>
            . Want to see where I&apos;ve worked? Check out my{' '}
            <a
              href="/static/cv/andeilson-ferreira-cv-en.pdf"
              download="cv"
              className="text-black-200 underline underline-offset-4 dark:text-white"
            >
              Resume
            </a>
            , or Connect with me on{' '}
            <a
              href=""
              className="text-black-200 underline underline-offset-4 dark:text-white"
            >
              LinkedIn
            </a>
            .
          </span>
          <span className="mt-16 text-18 text-whitetheme-gray-400 dark:text-gray-300">
            Let&apos;s build something great,
          </span>
          <Image
            src={andeilsonSignature}
            alt="Andeilson Signature"
            title="Andeilson Signature"
            width={300}
            height={300}
            className="mb-32 mt-16 lg:mt-0"
          />
        </article>
        <div className="mb-16 flex w-full flex-col items-center justify-center lg:mb-0 lg:w-fit lg:basis-2/4">
          <Image
            src={andeilsonMemoji}
            alt="Andeilson Memoji | Party!"
            title="Andeilson Memoji | Party!"
            width={300}
            height={300}
            className="mb-6 mt-8 lg:mb-32 lg:mt-0"
          />{' '}
          <ButtonContact />
        </div>
      </div>
    </main>
  )
}
