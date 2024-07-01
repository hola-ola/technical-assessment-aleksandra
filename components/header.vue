<template>
  <nav>
    <div class="top">
      <span class="top__title">Your favorite cartoon characters</span>
    </div>
    <div>
      <a href="#" class="link">
        <Icon name="mdi:dice" class="link__icon" />
        <span>Random encounter</span>
      </a>
    </div>
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
.link {
  @apply text-sm p-4 rounded-2xl text-white border border-white;
  @apply hover:border-transparent hover:text-[#00C16A] hover:bg-white;

  &__icon {
    @apply mr-2 text-xl;
  }
}
</style>
