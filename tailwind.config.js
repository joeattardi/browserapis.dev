/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx,mdx}',
    './src/templates/**/*.{ts,tsx,mdx}',
    './static/code/**/*.{html,js}'
  ],
  theme: {
    typography: {
      default: {
        css: {
          code: {
            '&::before': {
              content: '""'
            },
            '&::after': {
              content: '""'
            }
          }
        }
      }
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

