<template>
  <aside class="aside sticky overflow-y-auto scrolling-touch">
    <SidebarMenu />
  </aside>
</template>

<script>
import SidebarMenu from '~/components/SidebarMenu'

export default {
  components: {
    SidebarMenu
  }
}
</script>

<style  scoped>
.aside {
  top: 4rem;
  height: calc(100vh - 4rem);
}
</style>
