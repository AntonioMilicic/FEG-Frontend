<template>
  <div class="logo-container flex-h justify-center py-xs">
    <base-link
      v-for="{ alt, image } in logos"
      :key="image"
      behaviour="image"
      class="logo-link mx-s">
      <img :src="addRequireToSrc(image)" :alt="alt" class="logo">
    </base-link>
  </div>
</template>

<script>
import { addRequireToSrc } from '@/helpers/mixins/AddRequireMixin';
import BaseLink from '@/components/shared/BaseLink';

export default {
  name: 'logo-list',
  mixins: [addRequireToSrc],
  props: { logos: { type: Array, required: true } },
  components: { BaseLink }
};
</script>

<style lang="scss" scoped>
.logo-container {
  border-top: solid var(--border-size-m) var(--color-black-100);
  border-bottom: solid var(--border-size-m) var(--color-black-100);

  .logo-link {
    width: var(--logo-width);
    height: var(--logo-height);

    .logo {
      width: 100%;
      height: 100%;
    }
  }
}

@media (max-width: 67.5rem) {
  .logo-container {
    display: none;
  }
}
</style>
