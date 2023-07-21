/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './node_modules/@onrewind/ui/**/*.{js,jsx,ts,tsx}',
    './src/layout/**/*.tsx',
    './src/components/**/*.tsx',
    './src/pages/**/*.tsx',
  ],
  presets: [require('@onrewind/ui/lib/origins.preset')],
  theme: {
    fontFamily: {
      title: ['graphik-regular', ...defaultTheme.fontFamily.sans],
      body: ['Headline', ...defaultTheme.fontFamily.sans],
      sans: ['graphik-bold', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: '#f16305',
        secondary: 'var(--secondary)',
        background: '#FEFEFE',
        form: '#696969',
        facebook: '#1B74E4',
        error: '#ef4444',
      },
      width: {
        'min-1080': 'min(100%, 1080px)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')],
};
