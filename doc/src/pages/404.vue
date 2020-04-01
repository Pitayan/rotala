<template>
  <DefaultLayout>
    <div class="not-found text-center sticky">
      <h1 class="pt-24">404 - Page not found</h1>
      <g-link class="link" to="/">Back to home</g-link>
    </div>
  </DefaultLayout>
</template>

<style>
.not-found {
  top: 4rem;
  height: calc(100vh - 4rem);
}
</style>