const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{js,svelte,json}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors
      },
      animation: {
        shake: 'shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both',
        float: 'float 6s ease-in-out infinite'
      },
      keyframes: {
          shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' }
        },
        float: {
          '0%': {
            'box-shadow': '0 5px 15px 0px rgba(0,0,0,0.6)',
            transform: 'translatey(0px)'
          },
          '50%': {
            'box-shadow': '0 25px 15px 0px rgba(0,0,0,0.2)',
            transform: 'translatey(-20px)'
          },
          '100%': {
            'box-shadow': '0 5px 15px 0px rgba(0,0,0,0.6)',
            transform: 'translatey(0px)'
        }
        }
      }
    }
  },
  plugins: []
}
