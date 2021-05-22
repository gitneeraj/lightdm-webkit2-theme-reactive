const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
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
