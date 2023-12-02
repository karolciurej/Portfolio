/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'yellow': '#fca311',
      'black2': '#131211',
    },
    fontFamily: {
      sans: ['"Teko"', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
  
}
