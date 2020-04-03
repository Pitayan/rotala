<template>
  <DefaultLayout>
    <div class="content">
      <h1>showcase</h1>
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

export default {
  metaInfo() {
    return {
      title: 'Showcase',
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
