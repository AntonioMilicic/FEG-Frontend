<template>
  <div class="image-content flex-v">
    <span
      class="image-content-top h2 px-xs mx-s my-m"
      :class="{finished: statusText}">
      {{ statusText }}
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
        v-if="isActive"
        class="image-content-bottom-button p4"
        color="secondary">
        REGISTER
      </base-button>
    </div>
  </div>
</template>

<script>
import { addRequireToSrc } from '@/helpers/mixins/AddRequireMixin';
import BaseButton from '@/components/shared/BaseButton';

export default {
  name: 'ranking-header',
  mixins: [addRequireToSrc],
  props: {
    isActive: { type: Boolean, default: true },
    image: { type: String, required: true },
    title: { type: String, default: 'Game title' }
  },
  computed: { statusText: vm => vm.isActive ? 'ACTIVE' : 'FINISHED' },
  components: { BaseButton }
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
    background-color: var(--color-gray-light-200); // Add gradient
    font-style: italic;

    .finished {
      background-color: red; // variable
    }
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
