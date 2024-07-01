<script setup lang="ts">
import Collection from "~/components/new/collection.vue";
import Pagination from "~/components/new/pagination.vue";

const currentPage = ref(1);

const { data: characters } = await useFetch(
  `https://rickandmortyapi.com/api/character`,
  {
    query: { page: currentPage },
  },
);

const updatePage = function (value: number) {
  currentPage.value = value;
};
</script>

<template>
  <page title="Rick and Morty">
    <collection v-if="characters?.results" :data="characters?.results">
    </collection>
    <pagination
      :page-count="20"
      :total="characters?.info?.count"
      :current-page="currentPage"
      @updatePage="updatePage"
    />
  </page>
</template>
