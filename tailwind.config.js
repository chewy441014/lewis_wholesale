/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'office-back': "url('/back1.jpg')"
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'bright': '#eff2f1',
      'sapphire': '#2b50aa',
      'darkgray': '#383838',
    },
  },
  plugins: [],
}
