<template>
  <div class="notification-container" :class="{ open, ...containerClasses }">
    <div class="notification-title">
      <h3 class="flex items-center">Hi
        <i class="ro-icon ro-icon-close cursor-pointer ml-auto text-sm" @click.self="close"></i>
      </h3>
    </div>
    <p>
      This is a notification
    </p>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    },
    containerClasses: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    close () {
      this.$emit('update:open', false)
    }
  }
}
</script>

<style>

</style>