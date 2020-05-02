<template>
  <div class="my-20">
    <h1 class="h1 text-center">Features</h1>
    <div class="features xl:text-left lg:flex-no-wrap">
      <div class="w-full p-0 lg:p-4">
        <SVGLight class="my-8 mx-auto" width="240" />
        <div class="max-w-xl mx-auto">
          <h3 class="mb-4 font-bold">Super Lightweight</h3>
          <p>
            By providing only the rudimentry appearance of every single component, the
            core library package results in a rather small size (~10kb gziped of CDN resource)
          </p>
        </div>
      </div>
      <div class="w-full p-0 lg:p-4">
        <SVGExtend class="my-8 mx-auto" width="240" />
        <div class="max-w-xl mx-auto">
          <h3 class="mb-4 font-bold">Customizable & Extendable</h3>
          <p>
            The <b>Rotala</b> is built atop of <i>Tailwindcss</i> and <i>Postcss</i>.
            With the plugins and community support, you could even opt for a deeper customization to meet various design demands.
          </p>
        </div>
      </div>
      <div class="w-full p-0 lg:p-4">
        <SVGSimple class="my-8 mx-auto" width="240" />
        <div class="max-w-xl mx-auto">
          <h3 class="mb-4 font-bold">As Simple As Possible</h3>
          <p>
            No Js, only the modern CSS. The complete code base has nothing but clean css styles.
            This will help reduce the styling complexity of your project.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SVGLight from '~/assets/img/light.svg'
import SVGExtend from '~/assets/img/extend.svg'
import SVGSimple from '~/assets/img/simple.svg'

export default {
  components: {
    SVGLight,
    SVGExtend,
    SVGSimple
  }
}
</script>

<style lang="postcss" scoped>
.features {
  @apply mx-6;
  @apply text-center;
  @apply flex items-center flex-wrap;
}
</style>