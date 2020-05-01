<template>
  <div class="intro lg:flex-no-wrap lg:px-8 lg:my-12">
    <div class="max-w-4xl lg:max-w-lg lg:text-left">
      <h1 class="font-black sm:text-5xl text-3xl">
        Make Your Own Customized Theme Effortlessly
      </h1>
      <p class="mb-8 mx-auto">
        <b>Rotala.css</b> is a light-weight and responsive open source CSS framework
        to help develop customized themes.
      </p>
      <pre class="language-bash w-full mx-auto max-w-xl"><code class="language-bash"># Quick start
npm install rotala</code></pre>
      <a class="ro-button ro-button-primary px-8 py-2 rounded-full text-lg font-bold" href="/docs">
        Get Started
      </a>
    </div>
    <SVGHome class="my-8 lg:my-auto lg:mx-0 mx-auto" width="700" />
  </div>
</template>

<script>
import SVGHome from '~/assets/img/home.svg'

export default {
  components: {
    SVGHome
  }
}
</script>

<style lang="postcss" scoped>
.intro {
  @apply flex flex-wrap;
  @apply justify-between;
  @apply items-center;
  @apply my-8;
  @apply text-center;
}
</style>