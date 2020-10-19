<template>
  <div class="image-content flex-v">
    <span
      class="image-content-top h2 px-xs mx-s my-m"
      :class="{ active: isActive }">
      {{ statusText }}
    </span>
    <img
      :src="addRequireToSrc(image)"
      alt="game-image"
      class="image-content-image">
    <div
      class="image-content-bottom
        flex-h justify-space-between
        align-center px-m">
      <span class="h1">{{ title }}</span>
      <base-button
        v-if="isActive && !playerId"
        @click="$emit('register-dialog')"
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
    title: { type: String, default: 'Game title' },
    playerId: { type: Number, default: null }
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
    color: var(--color-white);
    background: var(--color-gray-light-200);
    background: var(--color-gray-gradient);
    font-style: italic;
  }

  .active {
    background: var(--color-red);
    background: var(--color-red-gradient);
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
    color: var(--color-white);
    background-color: var(--color-black-transparent-08);

    &-button {
      width: var(--button-width-s);
      height: var(--button-height-s);
    }
  }
}
</style>
