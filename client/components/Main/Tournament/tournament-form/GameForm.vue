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
      <li class="flex-h flex-1 justify-center align-center">
        <base-button
          color="gray"
          class="game-button mx-xs p4">
          DETAILS
        </base-button>
        <base-button
          v-if="currentRouteName === 'active'"
          color="secondary"
          class="game-button mx-xs p4">
          REGISTER
        </base-button>
        <div
          v-else-if="currentRouteName === 'finished'"
          class="game-button mx-xs p4">
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
    gameStateDescription: { type: Object, required: true }
  },
  computed: { currentRouteName: vm => vm.$route.name },
  components: { BaseButton }
};
</script>

<style lang="scss" scoped>
.game-form {
  width: 100%;
  max-width: var(--measure-xxl);
  height: 25rem;

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
      border-bottom: 2px solid var(--color-gray-light-200);

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
      width: 10rem;
      height: 1.75rem;
      color: var(--color-white);

      .icon {
        color: var(--color-accent);
      }
    }
  }
}
</style>
