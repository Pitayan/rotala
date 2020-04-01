<template>
  <div class="w-full max-w-screen-2xl mx-auto relative">
    <Topbar />
    <slot />
    <OffCanvasSidebar />
  </div>
</template>

<script>
import Topbar from "~/components/Topbar"
import OffCanvasSidebar from "~/components/OffCanvasSidebar"

export default {
  components: {
    Topbar,
    OffCanvasSidebar
  }
}
</script>