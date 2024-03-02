/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fundo': 'rgba(23, 23, 23, 1)',
        'fundo2': 'rgba(13, 13, 13, 1)',
        'vermelhoIcon': 'rgba(254, 0, 0, 1)',
        'gradient': 'linear-gradient(to right,#7351ef,#081106)',
        'card':'rgba(13, 13, 13, 1)',
        'dark':'rgba(29, 28, 29, 1)',
        'dark2':'rgba(15, 15, 15, 1)',
        'light':'#fff',
        'laranja':'rgba(230, 65, 28, 1)'
      },
      boxShadow: {
        'card': 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
      }
    },
  },
  plugins: [],
}

