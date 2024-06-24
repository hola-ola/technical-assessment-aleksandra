<script setup lang="ts">
import type { TabsPaneContext } from "element-plus";

const activeName = ref("first");
const route = useRoute();
const id = route?.params?.id;

const { data: character } = await useFetch(`https://rickandmortyapi.com/api/character/${id}`);

</script>

<template>
  <div>
    <general-info-image :image="character?.image" customClass="profile" />

    <el-tabs v-model="activeName" class="tabs">
      <el-tab-pane label="Information" name="first">
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
      </el-tab-pane>
      <el-tab-pane v-if="character?.origin" label="Origin" name="second">
        <characters-character-location
          v-if="character.origin.url?.length"
          :url="character.origin.url"
        />
        <div v-else>Origin unknown</div>
      </el-tab-pane>
      <el-tab-pane v-if="character?.location" label="Location" name="third">
        <characters-character-location
          v-if="character.location.url?.length"
          :url="character.location.url"
        />
        <div v-else>Location unknown</div>
      </el-tab-pane>
      <el-tab-pane label="Episodes" name="fourth">
        <ul v-for="episode in character.episode" :key="episode">
          <characters-character-episode :url="episode" />
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped>
.tabs {
  @apply flex flex-col items-center mt-10;
  li span {
    @apply font-bold;
  }
}
</style>
