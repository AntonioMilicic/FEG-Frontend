<template>
  <a :href="href" :class="{ [behaviour]: true }">
    <slot></slot>
  </a>
</template>

<script>
const behaviour = ['image', 'color-white', 'color-gray-light-100'];
export default {
  name: 'base-link',
  props: {
    href: { type: String, default: '#' },
    behaviour: {
      type: String,
      validator: val => behaviour.includes(val),
      default: behaviour[0]
    }
  }
};
</script>

<style lang="scss" scoped>
.image {
  &:hover {
    transform: scale(1.1);
  }
}

.color-white {
  color: var(--color-white);

  &:hover {
    color: var(--color-gray-light-100);
  }
}

.color-gray-light-100 {
  color: var(--color-gray-light-100);

  &:hover {
    color: var(--color-white);
  }
}
</style>
