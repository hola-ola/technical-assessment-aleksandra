<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["view-changed"]);

const route = useRoute();
const isGrid = ref(true);
const updateDefaultView = function () {
  localStorage.setItem(`display-${route.name}`, isGrid.value ? "grid" : "list");
  emit("view-changed", isGrid.value);
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
  <div class="toggle">
    <p>List</p>
    <UToggle v-model="isGrid" size="lg" @change="updateDefaultView" />
    <p>Grid</p>
  </div>
</template>

<style lang="scss" scoped>
.toggle {
  @apply flex flex-row justify-center gap-2 my-10;
}
</style>
