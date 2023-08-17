import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          100: '#0D0D0D',
          200: '#181818',
        },
        gray: {
          100: '#C5C5C5',
          200: 'rgba(128, 128, 128, 0.5)',
          300: '#808080',
          400: '#383737',
        },
        white: '#ffffff',
        blue: 'rgba(63, 100, 234, 0.43)',
        red: 'rgba(233, 63, 64, 0.43)',
        yellow: 'rgba(255, 184, 0, 0.43)',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      fontSize: {
        '10': '0.625rem',
        '11': '0.6875rem',
        '12': '0.75rem',
        '14': '0.875rem',
        '15': '0.9375rem',
        '16': '1rem',
        '18': '1.125rem',
        '20': '1.25rem',
        '24': '1.5rem',
        '32': '2rem',
        '40': '2.5rem',
        '48': '3rem',
        '60': '3.75rem',
        '80': '5rem',
      },
    },
  },
  plugins: [],
}
export default config
