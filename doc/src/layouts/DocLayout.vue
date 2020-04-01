<template>
  <DefaultLayout class="flex">
    <Sidebar class="hidden lg:block xl:w-1/5 lg:w-1/4" />
    <main class="max-w-full xl:w-3/5 lg:w-3/4 md:w-full">
      <slot />
    </main>
    <OnThisPage class="hidden xl:block flex-1 w-1/5" :subtitles="subtitles" />
  </DefaultLayout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import DefaultLayout from '~/layouts/Default.vue'
import Sidebar from '~/components/Sidebar.vue'
import OnThisPage from '~/components/OnThisPage.vue'

export default {
  components: {
    DefaultLayout,
    Sidebar,
    OnThisPage
  },
  props: {
    subtitles: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
