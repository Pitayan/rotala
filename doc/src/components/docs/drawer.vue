<template>
  <div
    class="drawer"
    :class="drawerClasses"
    @click.self="$emit('update:open', false)"
    v-if="open">
    <div class="drawer-container" :style="containerStyle">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    },
    drawerClasses: {
      type: Object,
      default: () => {}
    },
    containerStyle: {
      type: Object,
      default: () => {}
    }
  }
}
</script>