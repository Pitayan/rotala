<template>
  <DocLayout :subtitles="subtitles">
    <section class="pt-20 px-6 w-full mx-auto xl:mx-0">
      <ul class="ro-breadcrumb text-sm my-4">
        <li class="ro-breadcrumb-item">
          <g-link class="ro-link ro-link-doc text-primary-600" to="/">Home</g-link>
        </li>
        <li class="ro-breadcrumb-item">
          <g-link class="ro-link ro-link-doc text-primary-600" to="/docs/">Docs</g-link>
        </li>
        <li class="ro-breadcrumb-item">
          <span>{{ $page.doc.title }}</span>
        </li>
      </ul>
      <h1>{{ $page.doc.title }}</h1>
      <VueRemarkContent class="markdown" ref="markdown"></VueRemarkContent>
    </section>
  </DocLayout>
</template>

<page-query>
query Doc ($path: String!) {
  doc: doc (path: $path) {
    title
    path
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
  data () {
    return {
      init: false
    }
  },
  computed: {
    subtitles () {
      return this.$page.doc.subtitles.filter(val => [2, 4, 6].includes(val.depth))
    }
  },
  updated () {
    this.highjackCodeBlock(this.$refs.markdown)
    this.scrollToAnchor()
  },
  methods: {
    // Insert data-lang attribute to pre>code
    highjackCodeBlock (markdown) {
      if (!markdown) return

      const code = markdown.$el.querySelectorAll('pre[class*="language"]')

      if (code.length) {
        code.forEach((d, k) => {
          d.setAttribute('data-lang', d.className.substring(9))
        })
      }
    },
    // jump to hashtag anchor on page load
    scrollToAnchor () {
      if (this.init) return

      this.$nextTick(() => {
        if (!this.$route.hash) return

        setTimeout(() =>{
          const el = document.querySelector(this.$route.hash);
          el && el.scrollIntoView();
          this.init = true
        }, 70)
      })
    }
  }
}
</script>

<style lang="postcss" scoped>

/deep/ > h2,
/deep/ > h3,
/deep/ > h4,
/deep/ > h5,
/deep/ > h6 {
  @apply pt-24;
  @apply -mt-24;
}

/deep/ > p > img {
  @apply max-w-full;
}

.markdown {
  padding-bottom: calc(100vh - 13rem + 2px);
  min-height: calc(100vh - 13rem + 2px);
}
</style>
