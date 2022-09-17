const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: 'true',
        padding: '1rem',
      },
      colors:{
        cyan: colors.cyan,
        teal: colors.teal,
        'light-blue' : colors.lightBlue,
      },
      spacing:{
        112 : '28rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
