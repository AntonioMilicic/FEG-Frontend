<template>
  <div class=" flex-h">
    <base-link class="logo-link pt-l">
      <img
        src="../../assets/images/logos/psk.png"
        alt="psk Logo"
        class="logo">
    </base-link>
    <ul class="flex-h mt-l ml-l pt-xxs h1">
      <li
        v-for="link in links"
        :key="link" class="link-container">
        <base-link color="white" class="px-xs pb-xxs mx-xxxs upper">
          {{ link }}
        </base-link>
      </li>
    </ul>
  </div>
</template>

<script>
import BaseLink from '@/components/shared/BaseLink';

export default {
  name: 'header-link-list',
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  components: { BaseLink }
};
</script>

<style lang="scss" scoped>
.logo-link {
  width: 6rem;
  height: 100%;

  .logo {
    width: 100%;
    height: 50%;
  }
}

.link-container {
  text-align: center;
}
</style>
