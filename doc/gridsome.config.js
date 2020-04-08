// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const nodeExternals = require('webpack-node-externals')

module.exports = {
  siteName: 'Rotala',
  siteUrl: process.env.SITE_URL,
  siteDescription: process.env.SITE_DESCRIPTION,
  chainWebpack(config, { isServer }) {
    if (isServer) {
      config.externals(nodeExternals({
        whitelist: [
          /\.css$/,
          /\?vue&type=style/,
          /vue-instantsearch/,
          /instantsearch.js/,
          /typeface-open-sans/
        ]
      }))
    }

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
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        index: ['installation'],
        baseDir: './docs',
        pathPrefix: '/docs',
        typeName: 'Doc',
        template: './src/templates/Doc.vue',
        plugins: [
          '@gridsome/remark-prismjs',
          'remark-attr'
        ],
        remark: {
          autolinkHeadings: {
            behavior: 'append',
            linkProperties: {
              className: ['link link-anchor', 'ml-2']
            },
            content: {
              type: 'text',
              value: '#'
            }
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.GA_ID
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    },
    {
      use: 'gridsome-plugin-robots-txt',
      options: {
        host: process.env.SITE_URL,
        sitemap: process.env.SITE_URL + '/sitemap.xml',
        policy: [
          {
            userAgent: "Googlebot",
            allow: "/",
            disallow: "/search",
            crawlDelay: 2
          },
          {
            userAgent: "*",
            allow: "/",
            disallow: "/search",
            crawlDelay: 10,
            cleanParam: "ref /docs/"
          }
        ]
      }
    }
  ]
}

