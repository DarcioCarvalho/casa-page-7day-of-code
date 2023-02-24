/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['monteserrat', 'sans-serif'],
      elsie: ['Elsie Swash Caps', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        app: 'url(/assets/app-bg.png)'
      },
      colors: {
        'zinc-900': '#202020',
        'amber-400': '#FFCB47',
      }
    },
  },
  plugins: [],
}
