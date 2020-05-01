<template>
  <footer class="footer">
    <span class="py-2">
      <a href="https://twitter.com/rotalacss" class="ro-link ro-link-doc mx-2">
        Twitter
      </a>
      ·
      <a href="https://github.com/daiyanze/rotala" class="ro-link ro-link-doc mx-2">
        Github
      </a>
      ·
      <a href="https://github.com/daiyanze/rotala/issues" class="ro-link ro-link-doc mx-2">
        Issues
      </a>
      ·
      <a href="https://github.com/daiyanze/rotala/releases" class="ro-link ro-link-doc mx-2">
        Releases
      </a>
      ·
      <a href="https://github.com/daiyanze/rotala/blob/master/LICENSE" class="ro-link ro-link-doc">
        MIT License
      </a>
    </span>
    <br>
    <br>
    <span class="py-2">
      <span class="py-2 mx-px">&copy; {{ year }}</span>
      ·
      <span class="py-2 mx-px">All rights reserved</span>
      ·
      <span class="py-2 mx-px">by <a class="ro-link ro-link-doc" href="https://github.com/daiyanze">daiyanze</a></span>
    </span>
  </footer>
</template>

<script>
export default {
  computed: {
    year () {
      return (new Date()).getFullYear()
    }
  }
}
</script>

<style lang="postcss" scoped>
.footer {
  @apply text-sm;
}
</style>