// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Rotala',
  siteUrl: process.env.SITE_URL,
  siteDescription: process.env.SITE_DESCRIPTION,
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

