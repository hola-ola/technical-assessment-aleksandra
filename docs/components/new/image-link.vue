<script setup lang="ts">
const props = defineProps<{
  src: string;
  path: string;
  text: string;
}>();
</script>

<template>
  <nuxt-link v-slot="{ navigate }" :to="path" class="link">
    <NuxtImg
      @click="navigate"
      :src="src"
      height="300"
      width="300"
      class="image"
    >
    </NuxtImg>
    <p>{{ text }}</p>
  </nuxt-link>
</template>

<style lang="scss" scoped>
.link {
  @apply cursor-pointer;

  .image {
    @apply rounded-xl opacity-70;
    @apply hover:opacity-100 hover:border-8 hover:border-[#00C16A];
  }
  p {
    @apply text-lg mt-4 text-center;
  }
}
</style>
