<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});

const { data: location } = await useFetch(props.url);
</script>

<template>
  <div class="location">
    {{ location.name }} | Type: {{ location.type }} | Dimension: {{ location.dimension }}
  </div>
</template>

<style lang="scss" scoped>
.location {
  @apply text-sm text-gray-500;
}
</style>
