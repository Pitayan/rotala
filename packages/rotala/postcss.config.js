
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
          require('postcss-banner')({
            important: true,
            inline: true,
            banner: 'Rotala.css v0.1 @copyright 2020 by Daiyanze'
          }),
          require('cssnano')
        ]
      : []
  ]
}