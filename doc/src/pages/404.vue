<template>
  <DefaultLayout>
    <div class="not-found text-center sticky">
      <h1 class="pt-24">404 - Page not found</h1>
      <p class="pb-4">Sorry. The content you are looking for is either not existed or relocated.</p>
      <g-link class="ro-link ro-link-doc" to="/">Back to home</g-link>
    </div>
  </DefaultLayout>
</template>

<style>
.not-found {
  top: 4rem;
  height: calc(100vh - 4rem);
}
</style>