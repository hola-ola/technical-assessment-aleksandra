<script setup lang="ts">
const props = defineProps({
  character: Object,
  image: String,
});
const navigate = async function () {
  console.log("navigate");
};
</script>

<template>
  <div @click="navigate" class="card">
    <header class="card__header">
      <Icon name="ph:lightning-fill" class="card__icon" />
      <h2>
        {{ character?.name ?? "No name" }}
      </h2>
    </header>
    <div class="card__text" v-if="character?.species?.length">
      <p>Species: {{ character?.species }}</p>
    </div>
    <div class="card__text" v-if="character?.height">
      <p>Height: {{ character?.height }}</p>
    </div>
    <div class="card__text" v-if="character?.weight">
      <p>Weight: {{ character?.weight }}</p>
    </div>
    <div class="card__image">
      <NuxtImg
        :src="image || character?.image"
        width="256"
        placeholder
        placeholder-class="image"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply border-4 border-indigo-700 flex flex-col justify-between;
  @apply h-96 bg-yellow-400 hover:cursor-pointer rounded-xl;

  &__header {
    @apply p-2 flex items-center bg-orange-500 border-b-4 border-indigo-700	 rounded-t-lg;
  }

  &__icon {
    @apply mr-2 text-xl text-indigo-700;
  }

  &__text {
    @apply p-2;
  }

  h2 {
    @apply font-bold text-lg capitalize text-indigo-700;
  }
}

img:not(.image) {
  @apply rounded-b-lg;
}
</style>
