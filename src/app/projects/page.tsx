import ProjectCard from '@/components/ProjectCard'
import SubHeader from '@/components/Subheader'

import ProjectInfo from '@/components/ProjectInfo'
import projectDATA from './data'
import NextProject from '@/components/NextProject'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Andeilson Ferreira',
  description:
    'Projects created by Andeilson Ferreira. Brazilian Frontend Developer based in Brasília, capital of Brazil. Works with React, React Native and Javascript.',
}

export default function Projects() {
  return (
    <>
      <SubHeader
        title="Projects"
        description="Projects and ideas I've worked on"
      />

      <main className="flex flex-col gap-4 px-4 lg:px-0">
        {projectDATA.map((data) => {
          return (
            <div
              key={data.id}
              className="relative flex w-full flex-col items-center justify-between overflow-hidden rounded-[32px] border border-whitetheme-gray-300 bg-whitetheme-gray-200 p-4 pt-12 dark:border-gray-400 dark:bg-black-200 lg:h-[565px] lg:flex-row lg:p-8"
            >
              <ProjectInfo
                key={data.id}
                alt={data.alt}
                title={data.name}
                description={data.description}
                linkTitle={data.linkTitle}
                src={data.logo}
              />
              <ProjectCard
                alt={data.alt}
                src={data.image}
                isMobile={data.isMobile}
              />
            </div>
          )
        })}

        <NextProject />
      </main>
    </>
  )
}
