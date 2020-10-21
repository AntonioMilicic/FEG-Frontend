<template>
  <div class="link-list flex-v">
    <div class="link-container flex-h justify-center h2 pt-s">
      <base-link
        v-for="link in linkFirstRow"
        :key="link"
        behaviour="color-gray-light-100"
        class="link px-xs">
        {{ link }}
      </base-link>
    </div>
    <div class="link-container flex-h justify-center h2 py-s">
      <base-link
        v-for="link in linkSecondRow"
        :key="link"
        behaviour="color-gray-light-100"
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
    linkFirstRow: { type: Array, required: true },
    linkSecondRow: { type: Array, required: true }
  },
  components: { BaseLink }
};
</script>

<style lang="scss" scoped>
.link-container {
  .link {
    border-right: solid var(--border-size-s) var(--color-gray-dark-300);
  }

  :last-child {
    border-right: none;
  }
}

@media (max-width: 67.5rem) {
  .link-list {
    .link-container {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding-top: 0;

      .link {
        width: 100%;
        padding: var(--spc-xxs) 0;
        border-right: none;
        border-bottom: solid var(--border-size-s) var(--color-gray-dark-300);
      }
    }
  }
}
</style>
