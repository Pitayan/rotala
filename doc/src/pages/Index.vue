<template>
  <DefaultLayout>
    <main class="w-full max-w-screen-2xl mx-auto relative px-6">
      <section class="w-full pt-16 my-16 mx-auto text-center">
        <h1 class="font-extrabold sm:text-5xl text-4xl my-16">
          Into the crowd of designs with less efforts
        </h1>
        <h5 class="font-normal max-w-2xl mx-auto my-16">
          <b>Rotala.css</b> is a light-weight and responsive open source CSS framework
          that helps develop customized themes with a bottom-up approach.
        </h5>

        <a class="button button-primary text-xl font-medium" href="/docs">
          Get Started
        </a>
      </section>
      <section class="w-full mx-auto text-center mt-32">
        <h3 class="mb-8">How it Works</h3>
        <div class="flex flex-wrap sm:flex-no-wrap items-center justify-center">
          <div class="w-64 m-4 p-2 border border-gray-300 rounded">
            <h5 class="p-2">Styles</h5>
            <div class="h-12 p-2 text-left">
              <SVGIcon class="inline mr-4 text-gray-600 text-left" width="20" height="20" />Your custom styles
            </div>
            <div class="h-12 p-2 text-left">
              <SVGIcon class="inline mr-4 text-primary-600 text-left" width="20" height="20" />Rotala + Extensions
            </div>
          </div>
          <hr class="hr w-12 sm:inline hidden">

          <div class="w-64 m-4 p-2 border border-gray-300 rounded">
            <h5 class="p-2">Build</h5>
            <div class="h-12 p-2 text-left">
              <SVGTailwind class="inline mr-4" width="20" height="20" />Tailwindcss
            </div>
            <div class="h-12 p-2 text-left">
              <SVGPostcss class="inline mr-4" fill="#DD3735" width="20" height="20" />Postcss + Plugins
            </div>
          </div>
          <hr class="hr w-12 sm:block hidden">

          <div class="w-64 m-4 p-2 border border-gray-300 rounded">
            <h5 class="p-2">Theme</h5>
            <div class="h-12 p-2 text-left">
              <span class="token keyword">@import</span><span class="token string"> "my_theme";</span><br>
            </div>
            <div class="h-12 p-2 text-left">
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name"> class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>menu<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
            </div>
          </div>
        </div>
      </section>
      <section class="w-full mx-auto text-center mt-32">
        <h3 class="mb-4">Features</h3>
        <div class="flex flex-wrap justify-center mx-auto max-w-6xl">
          <div class="p-4 sm:w-1/2 w-full">
            <h5>Lightweight</h5>
            <p>
              By providing only the rudimentry appearance of every single component, the
              package results in a rather small size (~10kb gziped of CDN resource)
            </p>
          </div>
          <div class="p-4 sm:w-1/2 w-full">
            <h5>Extendable</h5>
            <p>
              The core library is maintained in a small size.
              And we believe that the <i>eco-system</i> is the most important feature,
              by which you can still meet various design demands
              by importing the extensions to your project effortlessly.
            </p>
          </div>
          <div class="p-4 sm:w-1/2 w-full">
            <h5>Customizable</h5>
            <p>
              The <b>Rotala</b> is built atop of <i>Tailwindcss</i> and <i>Postcss</i>.
              Theme customization's made available by utilizing <i>Tailwindcss</i> and <i>Postcss</i>
              powerful features. With their plugins and community support,
              you could even opt for a deep customization.
            </p>
          </div>
          <div class="p-4 sm:w-1/2 w-full">
            <h5>Simple</h5>
            <p>
              No Js, only the modern CSS. The complete code base has nothing but clean css styles.
              This will help reduce the styling complexity of your project.
            </p>
          </div>
        </div>
      </section>
      <section class="w-full mx-auto text-center mt-32">
        <h3 class="mb-4">An easier way to customize themes</h3>
        <div class="flex mx-auto justify-center max-w-6xl">
          <ul class="menu flex items-center m-4 text-lg">
            <li class="menu-item">
              <a href="#">first</a>
            </li>
            <li class="menu-item">
              <a href="#">second</a>
            </li>
            <li class="menu-item">
              <a href="#">third</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </DefaultLayout>
</template>

<static-query>
query {
  metadata {
    siteDescription
  }
}
</static-query>

<script>
import Topbar from  "~/components/Topbar"
import SVGPostcss from '~/assets/img/postcss.svg'
import SVGTailwind from '~/assets/img/tailwind.svg'
import SVGIcon from '~/assets/img/icon-fill-current.svg'

export default {
  components: {
    Topbar,
    SVGIcon,
    SVGPostcss,
    SVGTailwind
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteDescription,
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

<style>
.content {
  top: 4rem;
}
</style>