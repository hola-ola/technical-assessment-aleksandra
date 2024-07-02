<script setup lang="ts">
const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
});

const currentPage = ref(props.currentPage);

const emit = defineEmits(["updatePage"]);

watch(
  () => currentPage.value,
  () => {
    emit("updatePage", currentPage.value);
  },
);
</script>

<template>
  <UPagination
    class="pagination"
    v-model="currentPage"
    :page-count="pageCount"
    :total="total"
    :ui="{ rounded: 'first-of-type:rounded-s-md last-of-type:rounded-e-md' }"
  >
    <template #first="{ onClick }">
      <UTooltip text="First page">
        <UButton
          icon="i-heroicons-arrow-uturn-left"
          color="primary"
          :ui="{ rounded: 'rounded-full' }"
          class="rtl:[&_span:first-child]:rotate-180 me-2"
          @click="onClick"
        />
      </UTooltip>
    </template>

    <template #last="{ onClick }">
      <UTooltip text="Last page">
        <UButton
          icon="i-heroicons-arrow-uturn-right-20-solid"
          color="primary"
          :ui="{ rounded: 'rounded-full' }"
          class="rtl:[&_span:last-child]:rotate-180 ms-2"
          @click="onClick"
        />
      </UTooltip>
    </template>
  </UPagination>
</template>

<style lang="scss" scoped>
.pagination {
  @apply py-20 justify-center;
}
</style>
