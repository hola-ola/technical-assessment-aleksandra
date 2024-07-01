<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const schema = object({
  name: string(),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  name: undefined,
});

const emit = defineEmits(["search"]);

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
  emit("search", event.data.name);
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="search" @submit="onSubmit">
    <UFormGroup name="name">
      <UInput v-model="state.name" type="name" />
    </UFormGroup>
    <UButton type="submit" class="search__button"> Search! </UButton>
  </UForm>
</template>

<style scoped lang="scss">
.search {
  //background-color: pink;
  @apply gap-2 flex flex-row items-center;
  &__button {
    @apply h-8;
  }
}
</style>
