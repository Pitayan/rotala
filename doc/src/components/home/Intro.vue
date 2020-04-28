<template>
  <div class="flex flex-wrap items-center justify-between">
    <div class="w-auto lg:w-2/5 lg:px-12 mx-auto">
      <h1 class="font-black sm:text-5xl text-3xl">
        Make A Customized Theme Effortlessly
      </h1>
      <h6 class="font-normal mx-auto mb-8 max-w-screen-sm">
        <b>Rotala.css</b> is a light-weight and responsive open source CSS framework
        to help develop customized themes.
      </h6>
      <pre class="language-bash w-64 mx-auto"><code class="language-bash"># Quick start
npm install rotala</code></pre>
      <a class="ro-button ro-button-primary px-8 py-2 rounded-full text-lg font-extrabold" href="/docs">
        Get Started
      </a>
    </div>
    <div class="w-auto lg:w-3/5 lg:px-12 mx-auto my-6">
      <SVGHome class="w-full h-full" />
    </div>
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

</style>