<script setup lang="ts">
const props = defineProps<{
  image: string;
  customClass: string;
}>();
</script>

<template>
  <NuxtImg :class="customClass" :src="image" :placeholder="[50, 25, 75, 5]" />
</template>

<style scoped>
.image {
  image-rendering: pixelated;
}
.profile {
  height: 500px;
  margin: 0 auto;
}
</style>
