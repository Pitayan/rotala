<template>
  <div>
    <h3 class="mb-8 font-bold">How it Works</h3>
    <div class="flex flex-wrap sm:flex-no-wrap items-center justify-center">
      <div class="w-64 m-4 p-6 border border-gray-300 rounded">
        <h5 class="p-2">Styles</h5>
        <div class="h-12 p-2 text-left">
          <SVGIcon class="inline mr-4 text-gray-600 text-left" width="20" height="20" />Your custom styles
        </div>
        <div class="h-12 p-2 text-left">
          <SVGIcon class="inline mr-4 text-primary-600 text-left" width="20" height="20" />Rotala + Extensions
        </div>
      </div>
      <hr class="hr w-12 sm:inline hidden">

      <div class="w-64 m-4 p-6 border border-gray-300 rounded">
        <h5 class="p-2">Build</h5>
        <div class="h-12 p-2 text-left">
          <SVGTailwind class="inline mr-4" width="20" height="20" />Tailwindcss
        </div>
        <div class="h-12 p-2 text-left">
          <SVGPostcss class="inline mr-4" fill="#DD3735" width="20" height="20" />Postcss + Plugins
        </div>
      </div>
      <hr class="hr w-12 sm:block hidden">

      <div class="w-64 m-4 p-6 border border-gray-300 rounded">
        <h5 class="p-2">Theme</h5>
        <div class="h-12 p-2 text-left">
          <span class="token keyword">@import</span><span class="token string"> "my_theme";</span><br>
        </div>
        <div class="h-12 p-2 text-left">
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name"> class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>menu<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SVGPostcss from "~/assets/img/postcss.svg"
import SVGTailwind from "~/assets/img/tailwind.svg"
import SVGIcon from "~/assets/img/icon-fill-current.svg"

export default {
  components: {
    SVGIcon,
    SVGPostcss,
    SVGTailwind
  }
}
</script>

<style>

</style>