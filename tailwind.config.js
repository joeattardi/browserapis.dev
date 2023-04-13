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

