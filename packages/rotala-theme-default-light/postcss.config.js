
module.exports = {
  map: false,
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-simple-vars')({
      variables: {
        prefix: ''
      }
    }),
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [
          require('cssnano')
        ]
      : []
  ]
}