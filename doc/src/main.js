// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DocLayout from '~/layouts/DocLayout.vue'
import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/style/theme.pcss'
import '~/assets/style/trim.pcss'

require('typeface-open-sans')

export default function (Vue, { head, isClient, appOptions }) {

  Vue.component('DefaultLayout', DefaultLayout)
  Vue.component('DocLayout', DocLayout)

  // Vue.directive('retain', {
  //   update () {
  //     const body = document.body
  //     if (isOpen) {
  //       const scrollTop = -(body.scrollTop || document.documentElement.scrollTop || 0)
  //       body.style.cssText += `top: ${scrollTop}px;`
  //       body.classList.add('is-drawer-open')
  //     } else {
  //       const scrollTop = -parseInt(body.style.top || '')
  //       body.scrollTop = scrollTop
  //       document.documentElement.scrollTop = scrollTop
  //       body.style.cssText = body.style.cssText.replace(`top: ${body.style.top};`, '')
  //       body.classList.remove('is-drawer-open')
  //     }
  //   }
  // })

  // Add attributes to HTML tag
  head.htmlAttrs = { lang: 'en' }

  head.link.push({
    rel: 'manifest',
    href: '/manifest.json'
  })

  head.meta.push({
    name: 'theme-color',
    content: '#3D9968'
  })

  head.meta.push({
    name: 'apple-mobile-web-app-status-bar-style',
    content: 'default'
  })
}
