/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx,mdx}',
    './src/templates/**/*.{ts,tsx,mdx,css}',
    './static/code/**/*.{html,js}'
  ],
  theme: {
    extend: {
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

