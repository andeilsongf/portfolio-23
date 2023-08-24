'use client'

import { Envelope, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

export default function SocialCard() {
  return (
    <>
      <a href="">
        <Envelope size={25} color="#b6b6b6" />
      </a>
      <a href="">
        <LinkedinLogo size={25} color="#b6b6b6" />
      </a>
      <a href="">
        <GithubLogo size={25} color="#b6b6b6" />
      </a>
    </>
  )
}
