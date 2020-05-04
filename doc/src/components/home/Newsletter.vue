<template>
  <form action="https://rotalacss.us19.list-manage.com/subscribe/post?u=0a9fb4638f81bf62999f66e9d&amp;id=947eb37a84"
    class="max-w-3xl"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    target="_blank"
    novalidate>
    <div class="text-center" id="mc_embed_signup_scroll">
      <SVGMail class="mx-auto mb-4" width="400" />

      <h1>The Rotala Newsletter</h1>
      <p>Subscribe to our email and get updates right in your inbox!</p>

      <div class="flex flex-wrap items-center justify-between mx-auto">
        <label class="ro-input-group relative w-full my-2 max-w-xl mx-auto">
          <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
            <i class="ro-icon ro-icon-mail text-gray-600 mt-px"></i>
          </span>
          <input id="mce-EMAIL"
            class="ro-input px-8 rounded-full border border-solid border-gray-300"
            type="email"
            name="EMAIL"
            v-model="value"
            @input="checkEmailFormat($event.target.value)"
            placeholder="your@email.com" />
          <button
            class="absolute inset-y-0 right-0 ro-button ro-button-primary font-bold rounded-full"
            :type="value ? 'submit' : 'button'"
            :disabled="!isEmailValid">
            subscribe
          </button>
          <span
            class="absolute text-red-600 text-xs"
            style="top: 40px; left: 2px;"
            v-if="!isEmailValid">
            Incorrect Email Format
          </span>
        </label>
      </div>

      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input type="text" name="b_0a9fb4638f81bf62999f66e9d_947eb37a84" tabindex="-1" value="">
      </div>
    </div>
  </form>
</template>

<script>
import SVGMail from '~/assets/img/mail.svg'

export default {
  components: {
    SVGMail
  },
  data () {
    return {
      isEmailValid: true,
      timeout: null,
      value: ''
    }
  },
  methods: {
    checkEmailFormat (val) {
      if (this.timeout) clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.isEmailValid =
          !val || val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      }, 250)
    }
  }
}
</script>
