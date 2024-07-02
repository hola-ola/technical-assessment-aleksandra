<<<<<<< HEAD:pages/index.vue
=======
<script setup lang="ts">
import ImageLink from "~/docs/components/new/image-link.vue";
</script>

>>>>>>> 2b91c5bfe3035bf8b59984ae8f2705810f47eb6f:docs/pages/index.vue
<template>
  <div class="wrapper">
    <image-link
      path="/pokemon"
      src="/pokemon-main.jpg"
      text="Check out all the pokemon!"
    />
    <image-link
      path="/rick-and-morty"
      src="/rick-and-morty-main.jpg"
      text="Meet Rick and Morty!"
    />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  @apply flex flex-row gap-10 justify-center mt-36;
}
</style>
