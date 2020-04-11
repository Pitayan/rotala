<template>
  <ul class="mt-8 pb-12">
    <li class="list-none" v-if="isOffCanvas">
      <ul class="pl-8 mb-8 relative">
        <span class="mt-px pb-1 px-1 rounded-full absolute bg-primary-100 cursor-pointer sm:hidden" style="right: 2rem;"
          @click="$root.$emit('sidebar')">
          <i class="icon icon-combo icon-close text-xs text-primary-600"></i>
        </span>
        <g-link to="/">
          <SVG-logo class="inline-block mb-2 mr-2 text-primary-600" width="24" />
          <b class="text-xl">Rotala.css</b>
        </g-link>
        <li class="list-none" v-for="{ node: parts } in $static.part.edges" :key="parts.part">
          <b>
            <g-link
              class="py-1 w-full border-b-2 border-primary-600"
              :to="parts.link">
              {{ parts.part }}
            </g-link>
          </b>
        </li>
      </ul>
    </li>
    <li class="list-none" v-for="{ node: menu } in $static.menu.edges" :key="menu.section">
      <ul class="pl-8 mb-8">
        <b>{{ menu.section }}</b>
        <template v-for="{ node } in $static.docs.edges">
          <li class="list-none relative" v-if="node.section == menu.section" :key="node.link">
            <router-link class="block py-px w-full bullet-dot"
              :class="{ active: node.link == $route.path }" :to="node.link">
              {{ node.title }}
            </router-link>
          </li>
        </template>
      </ul>
    </li>
  </ul>
</template>

<static-query>
query Menu {
  menu: allMenu(order:ASC) {
    edges {
      node {
        section
      }
    }
  }
  part: allPart(order:ASC) {
    edges {
      node {
        part
        link
      }
    }
  }
  docs: allDoc(order:ASC) {
    edges {
      node {
        title
        link
        slug
        section
      }
    }
  }
}
</static-query>

<script>
import SVGLogo from '~/assets/img/icon-fill-current.svg'

export default {
  components: {
    SVGLogo
  },
  props: {
    isOffCanvas: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>