const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{svelte,js}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      ...colors
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
