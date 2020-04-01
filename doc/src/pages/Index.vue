<template>
  <DefaultLayout>
    <div class="flex w-full max-w-screen-2xl mx-auto relative">
      <main class="w-full pt-16">
        hello
      </main>
    </div>
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
import Topbar from  "~/components/Topbar"

export default {
  components: {
    Topbar
  },
  data() {
    return {
      description: 'Tunable CSS Framework'
    }
  },
  metaInfo() {
    return {
      title: this.description,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'Tunable CSS Framework'
        }
      ]
    }
  }
}
</script>

<style>
.content {
  top: 4rem;
}
</style>