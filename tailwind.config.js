/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      currentColor: 'currentColor',
      project1: '#0386D0',
      project2: '#3F52BB',
      project3: '#5856d6',
      project4: '#4fbbd2',
      project5: '#ebeaea',
      project6: '#b7b7e3',
      project7: '#f4d91b',
      lightGray: '#e0e0e0',
      white: '#FFFFFF',
      black: '#000000'
    },
    fontFamily: {
      'heading': ['Cabin', 'sans-serif'],
      'body': ['Montserrat', 'sans-serif'],
    },
    extend: {
      dropShadow: {
        'card': '0px 8px 24px rgba(149, 157, 165, 0.25)'
      }
    },
  },
  plugins: [],
}
