<template>
  <button
    v-on="$listeners"
    v-bind="$attrs"
    :class="{ [color]: true }"
    class="button">
    <slot>Click me</slot>
  </button>
</template>

<script>
const colors = ['inherit', 'secondary', 'gray'];
export default {
  name: 'base-button',
  props: {
    color: {
      type: String,
      validator: val => colors.includes(val),
      default: colors[0]
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  color: var(--color-white);
  border: none;
  border-radius: var(--border-radius-xxxs);
  cursor: pointer;

  &.inherit {
    background-color: inherit;
  }

  &.secondary {
    background-color: var(--color-secondary);
  }

  &.gray {
    background-color: var(--color-gray-light-200);
  }
}
</style>
