/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header': '#333333',
        'primary': '#4F4F4F',
        'secondary': '#828282',
        'accent': '#195A00',
      },
    },
    fontFamily: {
      'inter' : ['Inter', 'sans-serif'],
      'roboto' : ['Roboto', 'sans-serif'],
      'miniver' : ['Miniver', 'sans-serif'],
    },
    
  },
  plugins: [],
}