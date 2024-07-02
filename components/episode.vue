<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});

const { data: episode } = await useFetch(props.url);
</script>

<template>
  <p v-if="episode?.episode">{{ episode.episode }} {{ episode.name }}</p>
</template>

<style scoped></style>
