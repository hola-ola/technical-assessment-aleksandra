<script setup lang="ts">
import useCharactersList from "~/composables/useCharactersList";
const { data, fetchNextPage, hasNextPage } = useCharactersList();
</script>

<template>
  <page
    title="Rick and Morty"
    :data="data"
    :fetch-next-page="fetchNextPage"
    :has-next-page="hasNextPage"
  />
</template>
