<template>
  <div class="modal" :class="modalClasses" @click.self="$emit('update:open', false)" v-if="open">
    <div class="modal-container" :class="containerClasses" :style="containerStyle">
      <div class="modal-head">
        <slot name="head" />
      </div>
      <div class="modal-body">
        <slot name="body" />
      </div>
      <div class="modal-footer">
        <slot name="footer" />
      </div>
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
    modalClasses: {
      type: [Object, Array, String],
      default: () => {}
    },
    containerClasses: {
      type: [Object, Array, String],
      default: () => {}
    },
    containerStyle: {
      type: Object,
      default: () => {}
    },
    scrollable: {
      type: String,
      default: 'body'
    }
  }
}
</script>