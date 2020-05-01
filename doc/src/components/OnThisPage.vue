<template>
  <aside class="aside sticky overflow-y-auto scrolling-touch">
    <nav class="pl-4 pr-8">
      <b class="block mt-24 title text-sm">On This Page</b>
      <ul class="list-none text-sm ml-0">
        <li :class="['my-4', `pl-${depth - 2}`]"
          v-for="{ anchor, value, depth } in subtitles" :key="value">
          <a class="ro-link" :href="anchor">
            {{ value }}
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  props: {
    subtitles: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.aside {
  width: 200px;
  top: 4rem;
  height: calc(100vh - 4rem);
}
</style>
