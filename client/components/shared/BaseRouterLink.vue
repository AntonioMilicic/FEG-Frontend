<template>
  <router-link :to="{ name }" class="router-link">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'base-router-link',
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.router-link {
  color: var(--color-white);

  &:hover {
    color: var(--color-accent);
  }
}

.router-link-active {
  color: var(--color-accent);
  border-bottom: 2px solid var(--color-accent);
}
</style>
