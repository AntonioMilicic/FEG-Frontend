<template>
  <a :href="href" :class="{ [color]: true }">
    <slot></slot>
  </a>
</template>

<script>
const behaviour = ['image', 'white', 'gray-light-100'];

export default {
  name: 'base-link',
  props: {
    href: {
      type: String,
      default: '#'
    },
    color: {
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

.white {
  color: var(--color-white);

  &:hover {
    color: var(--color-gray-light-100);
    border-bottom: 2px solid var(--color-gray-light-100);
  }
}

.gray-light-100 {
  color: var(--color-gray-light-100);

  &:hover {
    color: var(--color-white);
  }
}
</style>
