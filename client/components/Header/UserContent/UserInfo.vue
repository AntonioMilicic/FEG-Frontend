<template>
  <div class="user-info flex-h justify-space-between pb-xxs p1">
    <div class="ml-xxxs">{{ userName }}</div>
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
    userName: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.user-info {
  border-bottom: 3px solid var(--color-black-200);
}
</style>
