<template>
  <header class="topbar">
    <div class="w-full max-w-screen-2xl relative mx-auto px-6 lg:px-16">
      <div class="flex items-center">
        <g-link class="flex items-center" to="/">
          <SVG-logo class="text-primary-600" width="24" alt="logo" />
          <b class="ml-2 text-xl hidden md:block">Rotala.css</b>
        </g-link>

        <ul class="flex-no-wrap ro-tab hidden lg:flex border-0 mx-4">
          <li class="ro-tab-item mx-3" v-for="{ node: parts } in $static.part.edges" :key="parts.part">
            <g-link class="px-0 py-6 -my-1 mr-0 font-extrabold border-b-2" :to="parts.link">
              {{ parts.part }}
            </g-link>
          </li>
        </ul>

        <div class="flex-1 mx-4">
          <TopbarSearch />
        </div>

        <div class="hidden sm:flex items-center justify-between">
          <ul class="ro-tab flex justify-start items-center border-0">
            <li class="ro-tab-item text-gray-700">
              <a class="mr-0" target="__blank" :href="githubUrl">
                <SVG-github width="20" height="20" />
              </a>
            </li>
            <li class="ro-tab-item text-gray-700">
              <a class="mr-0" target="__blank" :href="twitterUrl">
                <SVG-twitter width="20" height="20" />
              </a>
            </li>
          </ul>
        </div>

        <a href="javascript:void(0)" @click="$root.$emit('sidebar')" class="ro-link ml-2 lg:hidden" aria-label="Toggle the sidebar">
          <i class="ro-icon ro-icon-menu"></i>
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
import TopbarSearch from '~/components/TopbarSearch'

export default {
  components: {
    SVGGithub,
    SVGTwitter,
    SVGLogo,
    TopbarSearch
  },
  data () {
    return {
      githubUrl: process.env.GRIDSOME_ROTALA_GITHUB,
      twitterUrl: process.env.GRIDSOME_ROTALA_TWITTER
    }
  }
}
</script>

<style lang="postcss" scoped>

.topbar {
  @apply fixed;
  @apply bg-white;
  @apply flex;
  @apply items-center;
  @apply top-0;
  @apply inset-x-0;
  @apply z-20;
  @apply h-16;
  @apply border-b;
  @apply border-gray-300;
}
</style>
