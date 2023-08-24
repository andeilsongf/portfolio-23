'use client'

import { useState, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

const Providers = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeProvider
      disableTransitionOnChange
      enableSystem
      defaultTheme="dark"
      attribute="class"
    >
      {children}
    </ThemeProvider>
  )
}

export default Providers
