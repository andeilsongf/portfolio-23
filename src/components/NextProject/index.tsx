'use client'

import { StarAndCrescent } from '@phosphor-icons/react'
import ButtonContact from '../Button'
import { useTheme } from 'next-themes'

export default function NextProject() {
  const { theme } = useTheme()

  return (
    <div className="mb-20 flex h-[565px] flex-col items-center justify-center rounded-[32px] border border-dashed border-gray-400">
      <StarAndCrescent
        color={theme === 'dark' ? '#ffffff' : '#808080'}
        size={80}
      />
      <h2 className="mb-4 mt-3 text-20 font-extrabold uppercase text-black-200 dark:text-white lg:text-32">
        Your project goes here
      </h2>
      <span className="mb-24 text-16 text-black-200/50 dark:text-gray-200">
        Let&apos;s turn your idea into a visual reality
      </span>
      <ButtonContact />
    </div>
  )
}
