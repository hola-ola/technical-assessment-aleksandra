<script setup lang="ts">
const currentPage = ref(1);
const searchTerm = ref("");

let { data: characters } = await useFetch(
  `https://rickandmortyapi.com/api/character`,
  {
    query: { page: currentPage }
  },
);

const data = ref(characters.value);
const error = ref("")

const updatePage = function (value: number) {
  currentPage.value = value;
  data.value = characters.value;
};

const applySearch = async function (value: string) {
  if (!value) {
    data.value = characters.value;
    error.value = "";
  }
  const { data: filtered } = await useFetch(
      `https://rickandmortyapi.com/api/character/?name=${value}`,
      {
        query: { page: currentPage }
      },
  );
  if (!filtered.value) {
    error.value = "No results found. Try again!";
    data.value = { results: {}};
  } else {
    data.value = filtered.value;
  }
};
</script>

<template>
  <page title="Rick and Morty">
    <collection v-if="data?.results" :data="data.results" :key="searchTerm">
      <template v-slot:action>
        <search @search="applySearch" :error="error"/>
      </template>
    </collection>
    <pagination
        v-if="data?.info?.count > 20"
      :page-count="20"
      :total="data?.info?.count"
      :current-page="currentPage"
      @updatePage="updatePage"
    />
  </page>
</template>
