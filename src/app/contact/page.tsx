import Form from '@/components/Form'
import SocialCard from '@/components/SocialCard'
import SubHeader from '@/components/Subheader'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Andeilson Ferreira',
  description:
    'Get in contact with Andeilson Ferreira. Brazilian Frontend Developer based in Brasília, capital of Brazil. Works with React, React Native and Javascript.',
}

export default function Contact() {
  return (
    <main>
      <SubHeader
        title="Get in touch"
        description="Let's build something awesome."
      />

      <div className="box-shadow-sm-white mx-4 rounded-xl bg-whitetheme-gray-300 dark:bg-black-200 dark:shadow-none lg:mx-0">
        <div className="flex items-center border-b border-solid border-gray-200/10">
          <div className="flex gap-3 p-4">
            <span className="h-3 w-3 rounded-full bg-[#F63636]" />
            <span className="h-3 w-3 rounded-full bg-[#F6C136]" />
            <span className="h-3 w-3 rounded-full bg-[#68F636]" />
          </div>
          <span className="basis-2/4 text-center text-16 font-medium text-black-200 dark:text-white lg:basis-3/4">
            New Message
          </span>
        </div>
        <div className="px-4 lg:px-8">
          <Form />
        </div>
      </div>
      <div className="my-16 flex items-center justify-center gap-8">
        <SocialCard />
      </div>
    </main>
  )
}
