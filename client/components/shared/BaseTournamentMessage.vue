<template>
  <span class="status-message flex-h justify-center p1">
    Sorry, there seem to be no {{ message }} tournaments.<br>
    Checkout other games and try your luck.
  </span>
</template>

<script>
export default {
  name: 'base-tournament-message',
  props: { message: { type: String, default: '' } }
};
</script>

<style lang="scss" scoped>
.status-message {
  text-align: center;
  color: var(--color-white);
}
</style>
