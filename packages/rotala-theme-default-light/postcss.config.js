
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
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [
          require('cssnano')
        ]
      : []
  ]
}