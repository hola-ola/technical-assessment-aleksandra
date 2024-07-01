<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <article>
    <header class="header">
      <h1>
        {{ title }}
      </h1>
      <nuxt-link to="/" class="link"> Go back to the home page </nuxt-link>
    </header>
    <main>
      <slot></slot>
    </main>
  </article>
</template>

<style lang="scss" scoped>
main {
  @apply px-10;
}

</style>
<style lang="scss">
.header {
  @apply flex justify-center p-8 bg-slate-950 items-center text-lg;
  h1 {
    @apply text-white;
  }
  .link {
    @apply ml-auto text-white;
  }
}
</style>