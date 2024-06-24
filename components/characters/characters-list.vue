<script setup lang="ts">
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  fetchNextPage: {
    type: Function,
  },
  hasNextPage: {
    type: Boolean,
  },
  styleList: {
    type: String,
  },
  styleItem: {
    type: String,
  },
  path: {
    type: String,
  },
});
</script>
<template>
  <div v-if="data">
    <ul
      v-for="page in data.pages"
      :key="page.next"
      class="gap-8"
      :class="styleList"
    >
      <li
        v-for="character in page.results"
        :key="character.name"
        class="w-[25ch]"
        :class="styleItem"
      >
        <characters-character-info :character="character" />
      </li>
    </ul>
    <div class="flex items-center justify-center p-20">
      <UButton :disabled="!hasNextPage" size="xl" @click="fetchNextPage">
        Load more
      </UButton>
    </div>
  </div>
</template>

<style></style>
