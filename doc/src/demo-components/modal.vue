<template>
  <div>
    <button class="button button-outline" @click="open = false">open modal</button>
    <transition
      enter-active-class="ro-effect-fade-in"
      leave-active-class="ro-effect-fade-out"
      @enter="enter">
      <div
        tabindex="-1"
        style="animation-duration: 200ms"
        class="ro-modal"
        :class="{ open }"
        @click.self="containerOpen = false"
        v-if="open">
        <transition
          enter-active-class="ro-effect-slide-left-off-canvas"
          leave-active-class="ro-effect-slide-right-off-canvas"
          @leave="leave"
          v-retain="open">
          <div
            class="ro-modal-container overflow-auto"
            style="animation-duration: 200ms">
            <div class="ro-modal-head">
              <span class="h3">Title</span>
              <i class="icon icon-close cursor-pointer" style="margin-left: auto;" @click.self="open = false"></i>
            </div>
            <div class="ro-modal-body">
              <div>
                <p>This is the content inside the modal.</p>
                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit
                  amet, feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.</p>
                <p>Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet
                  but rub face on everything hopped up on goofballs.</p>
                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit
                  amet, feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.</p>
                <p>Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet
                  but rub face on everything hopped up on goofballs.</p>
                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit
                  amet, feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.</p>
                <p>Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet
                  but rub face on everything hopped up on goofballs.</p>
                <h4>Cupcake ipsum</h4>
                <p>Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple
                  pie carrot cake chocolate cake caramels.</p>
                <p>De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. Hi
                  brains mindless mortuis limbic cortex soulless creaturas optic nerve.</p>
                <h4>Candy ipsum</h4>
                <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely
                  deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.</p>
                <p>Caerphilly swiss fromage frais. Brie cheese and wine fromage frais chalk and cheese danish fontina
                  smelly cheese who moved my cheese cow.</p>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: false
    }
  },
  methods: {
    open () {

    }
    close () {
      this.open = false
    }
  }
}
</script>