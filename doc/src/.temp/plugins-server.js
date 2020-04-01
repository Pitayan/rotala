import plugin_gridsome_vue_remark_5 from "/Users/yanze.dai/Desktop/tide/rotala/doc/node_modules/@gridsome/vue-remark/gridsome.client.js"
import plugin_gridsome_plugin_google_analytics_6 from "/Users/yanze.dai/Desktop/tide/rotala/doc/node_modules/@gridsome/plugin-google-analytics/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_vue_remark_5,
    options: {"index":["installation"],"baseDir":"./docs","pathPrefix":"/docs","typeName":"Doc","template":"./src/templates/Doc.vue","plugins":["@gridsome/remark-prismjs","remark-attr"],"includePaths":[],"remark":{"autolinkHeadings":{"behavior":"append","linkProperties":{"className":["link link-anchor","ml-2"]},"content":{"type":"text","value":"#"}}},"refs":{}}
  },
  {
    run: plugin_gridsome_plugin_google_analytics_6,
    options: {"id":"XX-999999999-9"}
  }
]
