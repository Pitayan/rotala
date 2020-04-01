
const { extend, plugins } = require('rotala/variables')

module.exports = {
  important: true,
  theme: {
    extend: {
      ...extend,
      maxWidth: {
        'screen-2xl': '1600px'
      }
    }
  },
  plugins
}