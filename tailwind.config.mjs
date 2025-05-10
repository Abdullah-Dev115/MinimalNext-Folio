/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'gray-900': '#111827',
        skeleton: 'rgb(209 213 219 / 0.2)',
      },
      fontFamily: {
        ibm: ['var(--font-ibm)'],
      },
      screens: {
        xs: '475px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
