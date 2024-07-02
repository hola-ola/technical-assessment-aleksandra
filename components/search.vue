<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const props = defineProps({
  error: {
    type: String,
  },
});

const schema = object({
  name: string(),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  name: "",
});

const emit = defineEmits(["search"]);

async function onSubmit(event: FormSubmitEvent<Schema>) {
  emit("search", event.data.name);
}
</script>

<template>
  <div class="search">
    <UForm
      :schema="schema"
      :state="state"
      class="search__form"
      @submit="onSubmit"
    >
      <UFormGroup name="name">
        <UInput v-model="state.name" type="name"> </UInput>
      </UFormGroup>
      <UButton type="submit" class="search__button"> Search! </UButton>
    </UForm>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<style scoped lang="scss">
.search {
  @apply flex flex-col mt-8 gap-2 justify-start;

  p {
    @apply text-red-600 text-sm;
  }

  &__form {
    @apply gap-2 flex flex-row items-center;
  }

  &__button {
    @apply h-8;
  }
}
</style>
