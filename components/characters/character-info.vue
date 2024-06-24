<script setup lang="ts">
const props = defineProps({
  character: {
    type: {} as Character,
  },
});

const navigate = async function () {
  await navigateTo({
    path: `/rick-and-morty/${props.character.id}`,
    params: { id: props.character.id },
  });
};
</script>

<template>
  <div
    @click="navigate"
    class="hover:cursor-pointer border-4 border-pink-600 flex flex-col rounded-lg bg-slate-800"
  >
    <header
      class="p-2 flex items-center bg-pink-950 border-b border-b-4 border-pink-600"
    >
      <Icon name="ph:lightning-fill" class="mr-2 text-xl text-pink-700" />
      <h2 class="font-bold text-lg capitalize text-pink-700">
        <span v-if="!character">...</span>
        <span v-else>
          {{ character.name }}
        </span>
      </h2>
    </header>
    <div class="p-2">
      <p>
        Species: <span v-if="character">{{ character.species }}</span
        ><span v-else>...</span>
      </p>
    </div>
    <div class="h-[23ch]">
      <general-info-image
        v-if="character"
        :image="character.image"
        class="w-full"
      />
    </div>
    <footer class="flex p-2"></footer>
  </div>
</template>
>
