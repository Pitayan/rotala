
const plugin = require('tailwindcss/plugin')

const hexToRgba = function (hex, opacity) {
  hex = hex.replace('#','')
  r = parseInt(hex.substring(0, 2), 16)
  g = parseInt(hex.substring(2, 4), 16)
  b = parseInt(hex.substring(4, 6), 16)

  result = 'rgba('+r+', '+g+', '+b+', '+opacity/1+')'
  return result
}

const colors = {
  primary: {
    100: '#ECF7F1',
    200: '#D0EADC',
    300: '#B4DDC7',
    400: '#7CC49E',
    500: '#44AA74',
    600: '#3D9968',
    700: '#296646',
    800: '#1F4D34',
    900: '#143323'
  },
  secondary: {
    100: '#F3F1F1',
    200: '#E1DCDC',
    300: '#CFC6C7',
    400: '#AC9C9E',
    500: '#887174',
    600: '#7A6668',
    700: '#524446',
    800: '#3D3334',
    900: '#292223'
  },
  gray: {
    100: '#F9F9F9',
    200: '#EFEFEF',
    300: '#E5E5E5',
    400: '#D2D2D2',
    500: '#BEBFBE',
    600: '#ABACAB',
    700: '#727372',
    800: '#565656',
    900: '#393939'
  }
}

module.exports = {
  extend: {
    colors
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const focusShadow = {
        '.shadow-primary-base': {
          boxShadow: '0 0 0 .125rem ' + hexToRgba(colors.primary[600], 0.2)
        },
        '.shadow-secondary-base': {
          boxShadow: '0 0 0 .125rem ' + hexToRgba(colors.secondary[600], 0.2)
        },
        '.shadow-white': {
          boxShadow: '0 0 0 .125rem' + hexToRgba('#ffffff', 1)
        }
      }

      addUtilities(focusShadow)
    })
  ]
}
