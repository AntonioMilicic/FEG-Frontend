<template>
  <div class="image-content flex-v">
    <span
      v-if="gameState === 'popular'"
      class="image-content-top h2 px-xs mx-s my-m">
      ACTIVE
    </span>
    <span
      v-else-if="gameState === 'finished'"
      class="image-content-top h2 px-xs mx-s my-m">
      ENDED
    </span>
    <img
      :src="addRequireToSrc(image)"
      alt="game-image"
      class="image-content-image">
    <div
      class="image-content-bottom
        flex-h justify-space-between
        align-center px-m">
      <span class="h1">{{ game.title }}</span>
      <base-button
        v-show="gameState === 'popular'"
        class="image-content-bottom-button p4"
        color="secondary">
        REGISTER
      </base-button>
    </div>
  </div>
</template>

<script>
import { addRequireToSrc } from '@/helpers/mixins/AddRequireMixin';

export default {
  name: 'ranking-header',
  mixins: [addRequireToSrc],
  props: {
    gameState: { type: String, required: true }, // Change popular to active
    image: { type: String, required: true }
  }
};
</script>

<style lang="scss" scoped>
.image-content {
  position: relative;
  height: 20rem;

  &-top {
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    background-color: red; // Change with variable
    font-style: italic;
  }

  &-image {
    width: 100%;
    height: 100%;
  }

  &-bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30%;
    color: white;
    background-color: rgba(0, 0, 0, 0.8); // Change with variable

    &-button {
      width: 6rem;
      height: 1.5rem;
    }
  }
}
</style>
