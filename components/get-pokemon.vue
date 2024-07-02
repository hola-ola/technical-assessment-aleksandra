<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  isGrid: {
    type: Boolean,
  },
  loading: {
    type: Boolean,
  },
});

const { data: character } = await useFetch(props.url);
</script>

<template>
  <div :class="!isGrid ? `list-wrapper` : null" v-if="!loading">
    <grid-card
      v-if="isGrid"
      :character="character as object"
      :image="character?.sprites.front_default"
    />
    <list-card
      v-else
      :character="character as object"
      :image="character?.sprites.front_default"
    />
  </div>
</template>

<style lang="scss" scoped>
.list-wrapper {
  @apply w-screen flex justify-center;
}
</style>
