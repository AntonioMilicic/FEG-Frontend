<template>
  <div class="game-description flex-h justify-space-between my-m">
    <div class="game-rules mr-s">
      <span class="mb-xs h2">Pravila turnira</span>
      <p class="p1 mt-xs">{{ rules }}</p>
    </div>
    <ul class="game-stats flex-v justify-center">
      <li
        v-for="(content, _, index) in contentList"
        :key="content"
        class="list-item flex-v py-xxs">
        <div class="left-text p1">{{ titleList[index] }}</div>
        <div class="right-text h3">{{ content }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'game-description',
  props: {
    rules: { type: String, default: 'There are no available rules' },
    contentList: { type: Object, required: true },
    titleList: { type: Array, required: true }
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
    border-bottom: solid var(--border-size-m) var(--color-gray-light-300);

    &:last-child {
      border-bottom: none;
    }
  }
}

@media (max-width: 47.5rem) {
  .game-description {
    flex-direction: column-reverse;
    background-color: var(--color-gray-dark-300);

    .game-rules {
      width: 100%;
      padding: var(--spc-m) var(--spc-xs) 0 var(--spc-xs);
      background-color: var(--color-gray-dark-100);
    }

    .game-stats {
      width: 100%;
      border-radius: 0;

      .list-item {
        flex-direction: row;
        align-items: center;
        padding: var(--spc-xxs) var(--spc-m);

        .right-text {
          margin-left: auto;
        }

        .left-text {
          margin-right: auto;
        }

        &:last-child {
          border-bottom: solid var(--border-size-m) var(--color-gray-light-300);
        }
      }
    }
  }
}
</style>
