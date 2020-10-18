<template>
  <div class="game-form flex-h px-m my-l">
    <img :src="addRequireToSrc(image)" alt="game-image" class="game-image">

    <ul class="game-content flex-v">
      <li
        v-for="(it, _, index) in gameStateDescription"
        :key="it"
        class="game-desc flex-v flex-1 justify-center">
        <slot :name="`row${index}`"></slot>
        <span class="h3">{{ it }}</span>
      </li>
      <li v-if="notUpcoming" class="flex-h flex-1 justify-center align-center">
        <base-button
          @click="$emit('show-details', { image, gameStateDescription, gameRules })"
          color="gray"
          class="game-button mx-xs p4">
          DETAILS
        </base-button>
        <base-button
          v-if="isActive"
          color="secondary"
          class="game-button mx-xs p4">
          REGISTER
        </base-button>
        <div v-else class="game-button mx-xs p4">
          <font-awesome-icon icon="check" size="lg" class="icon" />
          <span class="ml-xxs">Logged in</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { addRequireToSrc } from '@/helpers/mixins/AddRequireMixin';
import BaseButton from '@/components/shared/BaseButton';

export default {
  name: 'game-form',
  mixins: [addRequireToSrc],
  props: {
    image: { type: String, required: true },
    gameStateDescription: { type: Object, required: true },
    gameRules: { type: String, default: 'Game rules' }
  },
  computed: {
    // Could be done with one boolean, but this is more descriptive
    isActive: vm => vm.$route.name === 'active',
    notUpcoming: vm => vm.$route.name !== 'upcoming'
  },
  components: { BaseButton }
};
</script>

<style lang="scss" scoped>
.game-form {
  width: 100%;
  max-width: var(--measure-xxl);
  height: var(--measure-s);

  .game-image {
    width: 70%;
    border-radius: var(--border-radius-xxs) 0 0 var(--border-radius-xxs);
  }

  .game-content {
    width: 30%;
    margin: 0;
    text-align: center;
    background-color: var(--color-gray-dark-100);
    border-bottom-right-radius: var(--border-radius-xxs);
    border-top-right-radius: var(--border-radius-xxs);

    .game-desc {
      color: var(--color-white);
      border-bottom: solid var(--border-size-m) var(--color-gray-light-200);

      &:first-child {
        border-top-right-radius: var(--border-radius-xxs);
        background-color: var(--color-black-200);

        span {
          font-size: 1.25rem;
          font-weight: 700;
          text-transform: uppercase;
        }
      }

      &:last-child {
        border-bottom: none;
      }
    }

    .game-button {
      width: var(--button-width-m);
      height: var(--button-height-m);
      color: var(--color-white);

      .icon {
        color: var(--color-accent);
      }
    }
  }
}
</style>
