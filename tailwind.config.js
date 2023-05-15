/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,jsx}',
    './src/pages/**/*.{js,jsx,mdx}',
    './src/templates/**/*.{js,jsx,mdx,css}',
    './static/code/**/*.{html,js}'
  ],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
      serif: ['Domine', 'serif'],
      mono: ['Consolas', 'Monaco', '"Andale Mono"', '"Ubuntu Mono"', 'monospace']
    },
    extend: {
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

