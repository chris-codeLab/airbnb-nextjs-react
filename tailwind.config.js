/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [ "./src/**/*.{js,ts,jsx,tsx}" ],
  darkMode: false, // or 'media' or 'class'
  
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
