<script setup lang="ts">
const goRandom = async function () {
  const { data: all } = await useFetch(
    `https://rickandmortyapi.com/api/character/`,
  );

  const total = all?.value.info?.count;
  const id = Math.floor(Math.random() * total);

  await navigateTo({
    path: `/rick-and-morty/${id}`,
    params: { id: id },
  });
};
</script>

<template>
  <div>
    <a href="#" class="link" @click="goRandom">
      <Icon name="mdi:dice" class="link__icon" />
      <span>Random encounter</span>
    </a>
  </div>
</template>

<style scoped lang="scss">
.link {
  @apply text-sm p-4 rounded-2xl text-white border border-white;
  @apply hover:border-transparent hover:text-[#00C16A] hover:bg-white;

  &__icon {
    @apply mr-2 text-xl;
  }
}
</style>
