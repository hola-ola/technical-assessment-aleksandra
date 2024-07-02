<script setup lang="ts">
const props = defineProps({
  character: Object,
  image: String,
});
const navigate = async function () {
  if (props.character?.id) {
    const route = useRoute();
    if (route.name === "rick-and-morty") {
      await navigateTo({
        path: `/${route.name}/${props.character.id}`,
        params: { id: props.character.id },
      });
    }
  }
};
</script>

<template>
  <div @click="navigate" class="card">
    <header class="card__header">
      <Icon name="ph:lightning-fill" class="card__icon" />
      <p>
        {{ character?.name ?? "No name" }}
      </p>
    </header>
    <div class="card__text" v-if="character?.species?.length">
      <p>Species</p>
      <span>{{ character?.species }}</span>
    </div>
    <div class="card__text">
      <p v-if="character?.height">Height: {{ character?.height }}</p>
      <p v-if="character?.weight">Weight: {{ character?.weight }}</p>
    </div>
    <div class="card__image">
      <NuxtImg
          v-if="image || character?.image"
        :src="image || character?.image"
        width="256"
        placeholder
        placeholder-class="image"
      />
      <div v-else class="card__image__test">
        No picture available
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply border-2 border-blue-800 flex flex-col justify-between;
  @apply h-fit bg-gray-100 hover:cursor-pointer rounded-xl;

  &__header {
    @apply p-3 flex items-center justify-center text-white h-16;
    @apply border-b-2 border-blue-800 rounded-t-lg bg-blue-800 text-gray-100;
  }

  &__icon {
    @apply mr-2 text-xl text-gray-100;
  }

  &__text {
    @apply p-2 text-center font-semibold;

    span {
      @apply font-light;
    }
  }

  &__image {
    @apply border-t-2 border-t-blue-800 h-4/5;

    &__test {
      @apply h-48 flex flex-row justify-center items-center;
    }
  }

  h2 {
    @apply font-bold text-lg capitalize text-blue-800;
  }
}

img:not(.image) {
  @apply rounded-b-lg;
}
</style>
