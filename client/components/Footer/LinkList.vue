<template>
  <div class="link-list flex-v">
    <div class="link-container flex-h justify-center h2 pt-s">
      <base-link
        v-for="link in linkFirstRow"
        :key="link"
        color="gray-light-100"
        class="link px-xs">
        {{ link }}
      </base-link>
    </div>
    <div class="link-container flex-h justify-center h2 py-s">
      <base-link
        v-for="link in linkSecondRow"
        :key="link"
        color="gray-light-100"
        class="link px-xs">
        {{ link }}
      </base-link>
    </div>
  </div>
</template>

<script>
import BaseLink from '@/components/shared/BaseLink';

export default {
  name: 'footer-link-list',
  props: {
    linkFirstRow: {
      type: Array,
      required: true
    },
    linkSecondRow: {
      type: Array,
      required: true
    }
  },
  components: { BaseLink }
};
</script>

<style lang="scss" scoped>
.link-container {
  .link {
    border-right: 1px solid var(--color-gray-dark-300);
  }

  :last-child {
    border-right: none;
  }
}
</style>
