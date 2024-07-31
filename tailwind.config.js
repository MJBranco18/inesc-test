/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      colors:{
        'dark-blue': '#0C85B0',
        'light-blue': '#59B2D1',
      }
    },
    fontFamily: {
      mono: ['JetBrains Mono', 'monospace'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
