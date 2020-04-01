// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Rotala',
  siteUrl: 'https://rotalacss.com',
  transformers: {
    plugins: [
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
        ]
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ]
}

