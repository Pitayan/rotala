// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
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
    createPage({
      path: '/extensions/:id*',
      component: './src/templates/Extensions.vue'
    })
  })
}
