'use client'

import { PaperPlaneRight } from '@phosphor-icons/react'

export default function ButtonContact() {
  return (
    <button className="gradient-gray dark:box-shadow-sm mt-8 flex items-center gap-2 rounded-[9px] px-8 py-4 text-18 font-medium text-white lg:mt-0">
      <PaperPlaneRight size={25} color="#ffffff" />
      <span>Get in touch</span>
    </button>
  )
}
