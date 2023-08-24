import './globals.css'
import { Inter } from 'next/font/google'

import MobileNavigation from '@/components/MobileNavigation'
import Header from '@/components/Header'
import Providers from './Providers'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Andeilson Ferreira | Frontend Developer',
  description:
    'Andeilson Ferreira. Brazilian Frontend Developer based in Brasília, capital of Brazil. Works with React, React Native and Javascript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} relative m-auto max-w-5xl overflow-x-hidden  font-sans`}
      >
        <Providers>
          <Header />
          <MobileNavigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
