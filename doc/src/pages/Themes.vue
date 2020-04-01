<template>
  <DefaultLayout>
    <div class="content">
      <h1>{{ $static.metadata.siteName }} - {{ this.description }}</h1>
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
  data() {
    return {
      description: 'The ultimate static generated documentation theme for the JAM-stack'
    }
  },
  metaInfo() {
    return {
      title: this.description,
      meta: [
        { key: 'description', name: 'description', content: 'A theme for static site documentation based on Gridsome, ready to deploy to Netlify in one click.' }
      ]
    }
  }
}
</script>
