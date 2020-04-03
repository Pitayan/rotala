<template>
  <DefaultLayout>
    <div class="content">
      <h1>Themes</h1>
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
      title: 'Themes',
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
