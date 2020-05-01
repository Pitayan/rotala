<template>
  <div
    class="notification"
    :class="{ [`notification-${position}`]: true }"
    ref="notification">
    <slot />
  </div>
</template>

<script>
import Vue from 'vue'
import item from './item'

const notificationItem = Vue.extend(item)

export default {
  props: {
    position: {
      type: String,
      default: 'top-right'
    },
    containerClasses: {
      type: [Object, Array, String],
      default: () => {}
    }
  },
  methods: {
    init () {
      let open = true
      const instance = new notificationItem({ propsData: { open, containerClasses: this.containerClasses } })

      this.$refs.notification.appendChild(instance.$mount().$el)

      instance.$on('update:open', val => {
        if (!val) {
          this.$refs.notification.removeChild(instance.$el)
          instance.$destroy()
        }
      })
    }
  },
  mounted () {
    this.$root.$on('init:notification', () => {
      this.init()
    })

  },
  destroyed () {
    this.$off('init:notification')
  }
}
</script>

<style>

</style>