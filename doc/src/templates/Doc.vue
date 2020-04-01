<template>
  <DocLayout :subtitles="subtitles">
    <section class="pt-24 px-6 w-full mx-auto xl:mx-0">
      <h1>{{ $page.doc.title }}</h1>
      <VueRemarkContent class="markdown"></VueRemarkContent>
    </section>
  </DocLayout>
</template>

<page-query>
query Doc ($path: String!) {
  doc: doc (path: $path) {
    title
    path
    date (format: "D. MMMM YYYY")
    headings (depth: h1) {
      value
    }
    section
    subtitles: headings {
      depth
      value
      anchor
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.doc.title,
      meta: [
        { key: 'description', name: 'description', content: this.$page.doc.description }
      ]
    }
  },
  computed: {
    subtitles () {
      return this.$page.doc.subtitles.filter(val => [2, 4, 6].includes(val.depth))
    }
  }
}
</script>


<style scoped>

/deep/ > h2,
/deep/ > h3,
/deep/ > h4,
/deep/ > h5,
/deep/ > h6 {
  padding-top: 100px;
  margin-top: -80px;
}

/deep/ > p > img {
  max-width: 100%;
}

.markdown {
  padding-bottom: 50vh;
  min-height: calc(90vh);
}
</style>
