<script setup lang="ts">
<<<<<<<< HEAD:docs/components/collection.vue
import { ref } from "vue";
========
import ViewSwitch from "~/docs/components/new/view-switch.vue";
import { ref } from "vue";
import GridCard from "~/docs/components/new/grid-card.vue";
import ListCard from "~/docs/components/new/list-card.vue";
import Search from "~/docs/components/new/search.vue";
import { useFuse } from "@vueuse/integrations/useFuse";
>>>>>>>> 2b91c5bfe3035bf8b59984ae8f2705810f47eb6f:docs/components/new/collection.vue

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
</script>

<template>
  <div>
    <div class="collection__actions">
      <view-switch @view-changed="updateView"></view-switch>
      <slot name="action" />
    </div>
    <div class="collection" :class="isGrid ? `grid-view` : null">
      <div v-if="usesSlot" v-for="item in data" class="collection__item">
        <slot :is-grid="isGrid" :url="item?.url" />
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
  @apply mt-20;

  &__item {
    @apply flex flex-row justify-center py-2;
  }

  &__actions {
    @apply flex flex-row justify-center gap-6;
  }
}
.grid-view {
  @apply grid grid-cols-5 gap-x-10 gap-y-20;
}
</style>
