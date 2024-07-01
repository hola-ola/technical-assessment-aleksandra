<script setup lang="ts">
const props = defineProps({
  character: Object,
  image: String,
});

const navigate = async function () {
  if (props.character?.id) {
    const route = useRoute();
    console.log("route.name", route.name);
    await navigateTo({
      path: `/${route.name}/${props.character.id}`,
      params: { id: props.character.id },
    });
  }
};
</script>

<template>
  <div @click="navigate" class="card">
    <div class="card__content">
      <h2>
        {{ character?.name ?? "No name" }}
      </h2>
      <div class="card__text" v-if="character?.species?.length">
        <p>Species: {{ character?.species }}</p>
      </div>
      <div class="card__text" v-if="character?.height">
        <p>Height: {{ character?.height }}</p>
      </div>
      <div class="card__text" v-if="character?.weight">
        <p>Weight: {{ character?.weight }}</p>
      </div>
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
  @apply border-4 border-indigo-700 flex flex-row justify-between;
  @apply w-2/5 bg-pink-700 hover:cursor-pointer rounded-xl;

  &__content {
    @apply flex flex-col pt-6 pl-6;
  }

  &__image {
    @apply h-48;
  }

  h2 {
    @apply font-bold text-lg capitalize text-indigo-700 pb-4;
  }
}

img:not(.image) {
  @apply rounded-r-lg h-48 object-cover;
}
</style>
