<script setup lang="ts">
const route = useRoute();
const id = route?.params?.id;

const { data: character } = await useFetch(
  `https://rickandmortyapi.com/api/character/${id}`,
);

const items = [
  {
    slot: "info",
    label: "Information",
  },
  {
    slot: "origin",
    label: "Origin",
  },
  {
    slot: "location",
    label: "Location",
  },
  {
    slot: "episodes",
    label: "Episodes",
  },
];
</script>

<template>
  <header class="header">
    <h1>Rick and Morty</h1>
    <nuxt-link to="/rick-and-morty" class="link">
      Go back to all the characters
    </nuxt-link>
  </header>
  <div class="profile">
    <NuxtImg :src="character?.image" class="profile__image" />

    <UTabs :items="items" class="profile__tabs">
      <template #info="{ item }">
        <UCard>
          <h4>{{ item.label }}</h4>
          <ul>
            <li v-if="character?.name">
              <span>Name: </span>{{ character.name }}
            </li>
            <li v-if="character?.status">
              <span>Status: </span>{{ character.status }}
            </li>
            <li v-if="character?.gender">
              <span>Gender: </span>{{ character.gender }}
            </li>
            <li v-if="character?.type">
              <span>Type: </span>{{ character.type }}
            </li>
            <li v-if="character?.species">
              <span>Species: </span>{{ character.species }}
            </li>
          </ul>
        </UCard>
      </template>
      <template #origin="{ item }">
        <UCard>
          <h4>{{ item.label }}</h4>
          <location
            v-if="character.origin.url?.length"
            :url="character.origin.url"
          />
          <p v-else>Origin unknown</p>
        </UCard>
      </template>
      <template #location="{ item }">
        <UCard>
          <h4>{{ item.label }}</h4>
          <location
            v-if="character.origin.url?.length"
            :url="character.origin.url"
          />
          <p v-else>Location unknown</p>
        </UCard>
      </template>
      <template #episodes="{ item }">
        <UCard>
          <h4>{{ item.label }}</h4>
          <ul v-for="episode in character.episode" :key="episode">
            <episode :url="episode" />
          </ul>
        </UCard>
      </template>
    </UTabs>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  &__image {
    @apply rounded-3xl w-1/5 m-auto mt-16 mb-8 border-2 border-[#00C16A];
  }

  &__tabs {
    @apply px-24;

    h4 {
      @apply font-semibold text-gray-900 mb-4;
    }
    p,
    ul {
      @apply text-sm text-gray-500;
    }
    span {
      @apply font-semibold;
    }
  }
}
.tabs {
  @apply flex flex-col items-center mt-10;
  li span {
    @apply font-bold;
  }
}
</style>

<style lang="scss">
.profile__tabs {
  @apply w-2/5 m-auto;
}
</style>
