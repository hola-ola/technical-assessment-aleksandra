<script setup lang="ts">
import { ref } from "vue";
import CharactersList from "~/components/characters/characters-list.vue";
import CharacterProfile from "~/components/characters/character-profile.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
  },
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
});

const route = useRoute();
const isGrid = ref(true);

const customClassItem = computed(() => (isGrid.value ? "" : "m-4"));
const customClassList = computed(() =>
  isGrid.value ? "flex flex-wrap p-4" : "in-line",
);

const updateDefaultView = function () {
  localStorage.setItem(`display-${route.name}`, isGrid.value ? "grid" : "list");
};

const applyDefaultView = function () {
  const display = localStorage.getItem(`display-${route.name}`);
  isGrid.value = !display || display === "grid";
};

onBeforeMount(() => {
  applyDefaultView();
});
</script>

<template>
  <article>
    <header
      class="flex align-center justify-center border-b-4 border-slate-500 p-8 bg-slate-950 items-center"
    >
      <h1 class="text-xl text-white">
        {{ title }}
      </h1>
      <nuxt-link to="/" class="ml-auto text-white">
        Go back to the home page
      </nuxt-link>
    </header>
    <main>
      <div class="text-center p-4">
        <el-switch
            v-if="route.name === `pokemon` || route.name === `rick-and-morty`"
          v-model="isGrid"
          size="large"
          active-text="Grid"
          inactive-text="List"
          @change="updateDefaultView"
        />
      </div>
      <pokemon-list
        v-if="route.name === `pokemon`"
        :data="data"
        :fetch-next-page="fetchNextPage"
        :has-next-page="hasNextPage"
        :style-item="customClassItem"
        :style-list="customClassList"
      />
      <characters-list
        v-else-if="route.name === `rick-and-morty`"
        path="rick-and-morty"
        :data="data"
        :fetch-next-page="fetchNextPage"
        :has-next-page="hasNextPage"
        :style-item="customClassItem"
        :style-list="customClassList"
      />
      <div v-else>
        <character-profile />
      </div>
    </main>
  </article>
</template>
