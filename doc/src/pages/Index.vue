<template>
  <DefaultLayout class="topbar-home">
    <main class="w-full max-w-screen-2xl mx-auto relative px-6 main">
      <section class="w-full mx-auto">
        <Intro />
      </section>

      <section class="w-full mx-auto text-center mt-32">
        <Workflow />
      </section>

      <section class="w-full mx-auto mt-32">
        <Features />
      </section>

      <section class="w-full mx-auto text-center mt-32 max-w-3xl">
        <Examples />
      </section>

      <section class="w-full mx-auto text-center my-32">
        <Action />
      </section>

      <section class="w-full mx-auto my-32 max-w-3xl">
        <Newsletter />
      </section>
    </main>

    <Footer class="w-full mx-auto text-center p-6" />
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
import Intro from '~/components/home/Intro'
import Workflow from '~/components/home/Workflow'
import Features from '~/components/home/Features'
import Examples from '~/components/home/Examples'
import Action from '~/components/home/Action'
import Newsletter from '~/components/home/Newsletter'
import Footer from '~/components/Footer'


export default {
  components: {
    Intro,
    Workflow,
    Features,
    Examples,
    Action,
    Newsletter,
    Footer
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

<style lang="postcss">

.topbar-home {
  .topbar {
    @apply relative;
    @apply border-none;
  }
}
</style>