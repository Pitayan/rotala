// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

module.exports = function (api) {
  api.chainWebpack(config => {
    // Process styles for Postcss styles
    config.module
      .rule('postcss-loader-all')
      .test(/^(?!.*trim\.).*\.pcss$/g)
      .use('postcss-loader')
      .loader('postcss-loader')
      .tap(() => {
        return {
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
                  require('@fullhuman/postcss-purgecss')({
                    content: [
                      './src/assets/style/**/*.pcss',
                      './src/**/*.vue',
                      './docs/*.md',
                      './gridsome.config.js'
                    ],
                    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
                  })
                ]
              : []
          ]
        }
      })

    config.module
      .rule('postcss-loader-trim')
      .test(/trim.pcss/g)
      .use('postcss-loader')
      .loader('postcss-loader')
      .tap(() => {
        return {
          map: false,
          plugins: [
            require('postcss-import'),
            require('postcss-nested'),
            require('postcss-simple-vars')({
              variables: {
                prefix: 'trim-'
              }
            }),
            require('tailwindcss'),
            require('autoprefixer')
          ]
        }
      })

    // Load SVG images
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  })

  api.loadSource(store => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api

    const { sections } = require('./data/sections.json')
    const { parts } = require('./data/parts.json')

    const Menu = store.addCollection({ typeName: 'Menu' })
    const Part = store.addCollection({ typeName: 'Part' })

    for (const item of sections) {
    	Menu.addNode({
        section: item.name
	    })
    }

    for (const item of parts) {
      Part.addNode({
        part: item.name,
        link: item.link
      })
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  })
}
