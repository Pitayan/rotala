<template>
  <header class="fixed bg-white flex items-center top-0 inset-x-0 z-20 h-16 border-b border-gray-300 h-16">
    <div class="w-full max-w-screen-2xl relative mx-auto px-6 lg:px-16">
      <div class="flex items-center">
        <g-link class="flex items-center" to="/">
          <SVG-logo class="text-primary-600" width="24" alt="logo" />
          <b class="ml-2 text-xl hidden md:block">Rotala.css</b>
        </g-link>

        <ul class="flex-no-wrap tab hidden lg:flex border-0 mx-4">
          <li class="tab-item mx-3" v-for="{ node: parts } in $static.part.edges" :key="parts.part">
            <g-link class="px-0 py-6 -my-px mr-0 font-semibold" :to="parts.link">
              {{ parts.part }}
            </g-link>
          </li>
        </ul>

        <div class="flex-1 mx-4">
          <label class="input-group relative w-full ml-auto md:max-w-sm">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
              <i class="icon icon-search text-gray-600 mt-px"></i>
            </span>
            <input class="input input-search" type="text"
              placeholder="Search Docs...">
          </label>
        </div>

        <div class="hidden sm:flex items-center justify-between">
          <ul class="tab flex justify-start items-center border-0">
            <li class="tab-item text-gray-700">
              <a class="mr-0" target="__blank" href="https://github.com/daiyanze/rotala">
                <SVG-github width="20" height="20" />
              </a>
            </li>
            <li class="tab-item text-gray-700">
              <a class="mr-0" target="__blank" href="https://twitter.com/rotalacss">
                <SVG-twitter width="20" height="20" />
              </a>
            </li>
          </ul>
        </div>

        <a href="javascript:void(0)" @click="$root.$emit('sidebar')" class="link ml-2 lg:hidden" aria-label="Toggle the sidebar">
          <i class="icon icon-menu"></i>
        </a>
      </div>
    </div>
  </header>
</template>

<static-query>
query Menu {
  part: allPart(order:ASC) {
    edges {
      node {
        part
        link
      }
    }
  }
}
</static-query>

<script>
import SVGGithub from '~/assets/img/github.svg'
import SVGTwitter from '~/assets/img/twitter.svg'
import SVGLogo from '~/assets/img/icon-fill-current.svg'

export default {
  components: {
    SVGGithub,
    SVGTwitter,
    SVGLogo
  }
}
</script>

<style scoped>

</style>
