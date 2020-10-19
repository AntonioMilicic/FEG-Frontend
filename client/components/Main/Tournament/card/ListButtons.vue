<template>
  <li class="flex-h flex-1 justify-center align-center">
    <base-button
      @click="$emit('show-details')"
      color="gray"
      class="game-button mx-xs p4">
      DETAILS
    </base-button>
    <div v-if="playerId" class="game-button mx-xs p4">
      <font-awesome-icon icon="check" size="lg" class="icon" />
      <span class="ml-xxs">Logged in</span>
    </div>
    <base-button
      v-else
      @click="$emit('register-dialog')"
      color="secondary"
      class="game-button mx-xs p4">
      REGISTER
    </base-button>
  </li>
</template>

<script>
import BaseButton from '@/components/shared/BaseButton';

export default {
  name: 'button-list',
  props: { playerId: { type: Number, default: null } },
  components: { BaseButton }
};
</script>

<style lang="scss" scoped>
.game-button {
  width: var(--button-width-m);
  height: var(--button-height-m);
  color: var(--color-white);

  .icon {
    color: var(--color-accent);
  }
}
</style>
