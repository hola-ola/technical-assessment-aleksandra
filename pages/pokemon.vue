<script setup lang="ts">
import Collection from "~/components/new/collection.vue";
import Pagination from "~/components/new/pagination.vue";
import GridCard from "~/components/new/grid-card.vue";
import GetCharacter from "~/components/new/get-character.vue";

const offset = ref(20);

const { data: characters } = await useFetch(
  `https://pokeapi.co/api/v2/pokemon/`,
  {
    query: { offset: offset },
  },
);

const updateOffset = function (value: number) {
  offset.value = value * 20;
};
</script>

<template>
  <page title="Pokemon">
    <collection
      v-slot="slotProps"
      v-if="characters?.results"
      :data="characters?.results"
      uses-slot
    >
      <div>
        <get-character
          v-if="slotProps.url"
          :url="slotProps.url as string"
          :is-grid="!!slotProps.isGrid"
        />
      </div>
    </collection>
    <pagination
      :page-count="20"
      :total="characters?.count"
      :current-page="1"
      @updatePage="updateOffset"
    />
  </page>
</template>
