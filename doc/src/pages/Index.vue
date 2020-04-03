<template>
  <DefaultLayout>
    <main class="w-full max-w-screen-2xl mx-auto relative px-6">
      <div class="w-full pt-16 max-w-4xl mt-16 mx-auto text-center">
        <h1 class="sm:text-4xl text-3xl">
          Into the crowd of designs with less efforts
        </h1>
        <h5 class="font-normal max-w-2xl mx-auto">
          <b>Rotala.css</b> is an open source CSS framework based on
          <i class="underline">Tailwindcss</i>
          that helps developers build themes faster
        </h5>
      </div>
      <div class="w-full mx-auto text-center mt-16">
        <a class="button button-primary text-xl font-medium" href="/docs">Get started</a>
      </div>
      <div class="w-full mx-auto text-center mt-32">
        <h3 class="">What's the difference?</h3>
      </div>
    </main>
  </DefaultLayout>
</template>

<static-query>
query {
  metadata {
    siteDescription
  }
}
</static-query>

<script>
import Topbar from  "~/components/Topbar"

export default {
  components: {
    Topbar
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteDescription,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
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