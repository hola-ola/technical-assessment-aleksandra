<script setup lang="ts">
import usePokemonList from "~/composables/usePokemonList";
const { data, fetchNextPage, hasNextPage } = usePokemonList();
</script>

<template>
  <page
    title="Pokemon"
    sub-title="Pokeball"
    icon="mdi:pokeball"
    :data="data"
    :fetch-next-page="fetchNextPage"
    :has-next-page="hasNextPage"
  />
</template>
