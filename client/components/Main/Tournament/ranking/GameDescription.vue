<template>
  <div class="game-description flex-h justify-space-between py-m">
    <div class="game-rules mr-s">
      <span class="mb-xs h2">Pravila turnira</span>
      <p class="p1 mt-xs">{{ rules }}</p>
    </div>
    <ul class="game-stats flex-v justify-center">
      <li
        v-for="{ title, content } in gameStats"
        :key="title"
        class="list-item flex-v py-xxs">
        <span class="p1">{{ title }}</span>
        <span class="h3">{{ content }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'game-description',
  props: {
    rules: { type: String, default: 'There are no available rules' },
    gameStats: { type: Array, required: true }
  }
};
</script>

<style lang="scss" scoped>
.game-rules {
  text-align: left;
  width: 70%;
  color: var(--color-gray-light-100);
}

.game-stats {
  width: 30%;
  align-self: center;
  margin: 0;
  text-align: center;
  background-color: var(--color-gray-dark-300);
  border-radius: var(--border-radius-xxs);

  .list-item {
    color: var(--color-gray-light-100);
    border-bottom: 2px solid var(--color-gray-light-300); // var

    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
