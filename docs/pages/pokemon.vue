<script setup lang="ts">
<<<<<<< HEAD:pages/pokemon.vue
import { ref } from "vue";
=======
import Collection from "~/docs/components/new/collection.vue";
import Pagination from "~/docs/components/new/pagination.vue";
import GridCard from "~/docs/components/new/grid-card.vue";
import GetCharacter from "~/docs/components/new/get-character.vue";

>>>>>>> 2b91c5bfe3035bf8b59984ae8f2705810f47eb6f:docs/pages/pokemon.vue
const offset = ref(20);
const loading = ref(false);

const { data: characters } = await useFetch(
  `https://pokeapi.co/api/v2/pokemon/`,
  {
    query: { offset: offset },
  },
);

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const updateOffset = async function (value: number) {
  offset.value = value * 20;
  loading.value = true;
  await sleep(100);
  loading.value = false;
};
</script>

<template>
  <page title="Pokemon">
    <collection
        :key="Number(offset)"
      v-slot="slotProps"
      v-if="characters?.results"
      :data="characters?.results"
      uses-slot
    >
      <div>
        <get-pokemon
            :loading="loading"
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
