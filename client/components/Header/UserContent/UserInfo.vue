<template>
  <div class="user-info flex-h justify-space-between pb-xxs h3">
    <span class="ml-xxxs">{{ userName }}</span>
    <div>
      {{ password }}
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-info',
  props: {
    userName: { type: String, required: true },
    password: { type: String, required: true }
  }
};
</script>

<style lang="scss" scoped>
.user-info {
  border-bottom: 2px solid var(--color-black-200);
}
</style>
