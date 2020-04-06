<template>
  <aside class="aside sticky overflow-y-auto scrolling-touch">
    <slot />
  </aside>
</template>

<script>
export default {
}
</script>

<style  scoped>
.aside {
  top: 4rem;
  height: calc(100vh - 4rem);
}
</style>
