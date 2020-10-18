<template>
  <div class="game-carousel">
    <span class="h1">Games</span>
    <div class="carousel my-s">
      <base-button v-show="showButtonLeft" class="carousel-left">
        <font-awesome-icon icon="chevron-left" />
      </base-button>
      <ul class="carousel-container flex-h justify-space-between">
        <li
          v-for="{ image } in images"
          :key="image"
          class="carousel-item px-xxxs">
          <img
            :src="addRequireToSrc(image)"
            alt="carousel-image"
            class="carousel-image">
        </li>
      </ul>
      <base-button
        v-show="showButtonRight"
        class="carousel-right">
        <font-awesome-icon icon="chevron-right" />
      </base-button>
    </div>
  </div>
</template>

<script>
import { addRequireToSrc } from '@/helpers/mixins/AddRequireMixin';
import BaseButton from '@/components/shared/BaseButton';

export default {
  name: 'game-carousel',
  mixins: [addRequireToSrc],
  props: {
    images: { type: Array, required: true },
    total: { type: Number, required: true }
  },
  computed: {
    showButtonLeft: vm => Boolean(vm.images[0].position !== 1),
    showButtonRight: vm => Boolean(
      vm.images[vm.images.length - 1].position !== vm.total
    )
  },
  components: { BaseButton }
};
</script>

<style lang="scss" scoped>
.game-carousel { // Just for placeholder, would be done in a nicer way otherwise
  width: 100%;
  color: var(--color-gray-light-100);

  .carousel-container {
    margin: 0;
  }

  .carousel {
    position: relative;
  }

  .carousel-arrow {
    position: absolute;
    top: 22.5%;
    padding: 1.5rem 0.75rem;
    background-color: var(--color-gray-dark-300);
  }

  .carousel-left {
    @extend .carousel-arrow;

    left: -2.8%;
    border-top-right-radius: var(--border-radius-xxs);
    border-bottom-right-radius: var(--border-radius-xxs);
  }

  .carousel-right {
    @extend .carousel-arrow;

    right: -2.8%;
    border-top-left-radius: var(--border-radius-xxs);
    border-bottom-left-radius: var(--border-radius-xxs);
  }

  .carousel-item {
    width: 25%;

    .carousel-image {
      width: 100%;
      height: 7.25rem;
    }
  }
}
</style>
