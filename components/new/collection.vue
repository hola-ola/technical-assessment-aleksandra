<script setup lang="ts">
import ViewSwitch from "~/components/new/view-switch.vue";
import { ref } from "vue";

const props = defineProps({
  data: {
    type: Array,
    required: true,
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

const customClassItem = computed(() => (isGrid.value ? "" : "m-4"));
const customClassList = computed(() =>
  isGrid.value ? "flex flex-wrap p-4" : "in-line",
);
</script>

<template>
  <view-switch @view-changed="updateView"></view-switch>
  <div v-for="item in data">
    {{ item?.name }}
  </div>
</template>

<style scoped></style>
