/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      colors:{
        'inesc-blue': '#0091BE',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
