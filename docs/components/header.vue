<script setup lang="ts">
</script>

<template>
  <nav>
    <div class="top">
      <span class="top__title">Your favorite cartoon characters</span>
    </div>
    <random />
  </nav>
</template>

<style lang="scss" scoped>
nav {
  @apply flex items-center justify-between flex-wrap bg-[#00C16A] p-10;
}
.top {
  @apply text-white;

  &__title {
    @apply font-semibold text-2xl tracking-tight;
  }
}
</style>
