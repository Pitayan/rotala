<template>
  <transition
    enter-active-class="ro-effect-fade-in"
    leave-active-class="ro-effect-fade-out"
    @enter="enter">
    <div
      tabindex="-1"
      style="animation-duration: 200ms"
      class="ro-drawer left"
      :class="{ open }"
      @click.self="containerOpen = false"
      v-if="open"
      v-retain="containerOpen">
      <transition
        enter-active-class="ro-effect-slide-left-off-canvas"
        leave-active-class="ro-effect-slide-right-off-canvas"
        @leave="leave">
        <div
          class="ro-drawer-container overflow-auto"
          style="animation-duration: 200ms"
          v-if="containerOpen">
          <SidebarMenu isOffCanvas />
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import SidebarMenu from '~/components/SidebarMenu'

export default {
  components: {
    SidebarMenu
  },
  data () {
    return {
      open: false,
      containerOpen: false,
      unwatch: () => {}
    }
  },
  created () {
    if (!this.$isServer) {
      this.$root.$on('sidebar', () => {
        if (this.containerOpen) {
          this.containerOpen = false
        } else {
          this.open = true
        }
      })

      this.unwatch = this.$root.$watch('$route', (val) => {
        if (this.containerOpen) {
          this.containerOpen = false
          document.body.classList.remove('is-drawer-open')
        }
      })
    }
  },
  methods: {
    enter () {
      this.containerOpen = true
    },
    leave () {
      this.open = false
    }
  },
  destroy () {
    this.$root.$off('sidebar')
    this.unwatch()
  }
}
</script>
