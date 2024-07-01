<script setup lang="ts">
import GridCard from "~/components/new/grid-card.vue";
import ListCard from "~/components/new/list-card.vue";

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  isGrid: {
    type: Boolean,
  },
});

const { data: character } = await useFetch(props.url);
</script>

<template>
  <div class="wrapper">
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
.wrapper {
  @apply w-screen flex justify-center;
}
</style>
