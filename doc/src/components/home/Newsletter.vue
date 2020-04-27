<template>
  <form action="https://rotalacss.us19.list-manage.com/subscribe/post?u=0a9fb4638f81bf62999f66e9d&amp;id=947eb37a84"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    target="_blank"
    novalidate>
    <div id="mc_embed_signup_scroll">
      <h5>
        The Rotala Newsletter<br>
        <small class="text-gray-600">Stay Tuned on our updates!</small>
      </h5>

      <div class="flex flex-wrap items-center justify-between">
        <label class="ro-input-group relative w-full my-2 mr-4 max-w-xl">
          <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
            <i class="ro-icon ro-icon-mail text-gray-600 mt-px"></i>
          </span>
          <input id="mce-EMAIL"
            class="ro-input ro-input-search"
            type="email"
            name="EMAIL"
            v-model="value"
            @input="checkEmailFormat($event.target.value)"
            placeholder="your@email.com" />
          <span
            class="absolute text-red-600 text-xs"
            style="top: 40px; left: 2px;"
            v-if="!isEmailValid">
            Incorrect Email Format
          </span>
        </label>
        <button
          class="ro-button ro-button-primary font-medium"
          :type="value ? 'submit' : 'button'"
          :disabled="!isEmailValid">
          subscribe
        </button>
      </div>

      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input type="text" name="b_0a9fb4638f81bf62999f66e9d_947eb37a84" tabindex="-1" value="">
      </div>
    </div>
  </form>
</template>

<script>

export default {
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
