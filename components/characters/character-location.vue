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
  <div>
    {{ location.name }} | {{ location.type }} Dimension {{ location.dimension }}
  </div>
</template>

<style scoped></style>
