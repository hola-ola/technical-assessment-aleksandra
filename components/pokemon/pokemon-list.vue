<script setup lang="ts">
import { ref } from 'vue'
const { data, fetchNextPage, hasNextPage } = usePokemonList()

const isGrid = ref(true)
const styleGrid = {
  ul: "flex gap-8 flex-wrap p-4",
  li: "w-[25ch]"
}

const styleList = {
  ul: "in-line gap-8",
  li: "w-[25ch] m-4"
}

const route = useRoute()

const updateDefaultView = function () {
  localStorage.setItem(`display-${route.name}`, isGrid.value ? "grid" : "list");
}

const applyDefaultView = function () {
  const display = localStorage.getItem(`display-${route}`);
  isGrid.value = !display || display === "grid";
}

onBeforeMount( () => {
  applyDefaultView();
})

</script>
<template>
<div     class="text-center p-4">
  <el-switch v-model="isGrid"
             size="large"
             active-text="Grid"
             inactive-text="List"
             @change="updateDefaultView"
  />
</div>

  <div v-if="data">
    <ul v-for="page in data.pages" :key="page.next" :class="isGrid ? styleGrid.ul : styleList.ul">
      <li v-for="pokemon in page.results" :key="pokemon.name" :class="isGrid ? styleGrid.li : styleList.li">
        <pokemon-info :name="pokemon.name" />
      </li>
    </ul>
    <div class="flex items-center justify-center p-20">
      <UButton :disabled="!hasNextPage" size="xl" @click="fetchNextPage">
        Load more
      </UButton>
    </div>
  </div>
</template>

<style>

</style>
