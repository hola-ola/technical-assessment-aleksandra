<script setup lang="ts">
import ViewSwitch from "~/components/new/view-switch.vue";
import { ref } from "vue";
import GridCard from "~/components/new/grid-card.vue";
import ListCard from "~/components/new/list-card.vue";
import Search from "~/components/new/search.vue";
import { useFuse } from "@vueuse/integrations/useFuse";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  usesSlot: {
    type: Boolean,
    default: false,
  },
});

const route = useRoute();
const isGrid = ref(true);

const updateView = function (value: boolean) {
  isGrid.value = value;
};
const applyView = function () {
  const display = localStorage.getItem(`display-${route.name}`);
  isGrid.value = !display || display === "grid";
};

onBeforeMount(() => {
  applyView();
});

const input = ref("");

const applySearch = function (value: string) {
  console.log("applySearch", value);
  // input.value = value;
  const { results } = useFuse(input.value, props.data);
  // const results = searchContent(input.value)

  console.log("results", results);
};
</script>

<template>
  <div>
    <div class="collection__actions">
      <view-switch @view-changed="updateView"></view-switch>
      <search @search="applySearch" />
    </div>
    <div class="collection" :class="isGrid ? `grid-view` : null">
      <div v-if="usesSlot" v-for="item in data" class="collection__item">
        <slot :is-grid="isGrid" :url="item?.url" class="slot" />
      </div>
      <div v-else v-for="item in data" class="collection__item">
        <grid-card v-if="isGrid" :character="item as object"></grid-card>
        <list-card v-else :character="item as object"></list-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.collection {
  @apply mt-24;

  &__item {
    @apply flex flex-row justify-center py-2;
  }

  &__actions {
    @apply flex flex-row justify-end gap-6;
  }
}
.grid-view {
  @apply grid grid-cols-5 gap-x-10 gap-y-20;
}
</style>
