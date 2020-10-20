<template>
  <div class=" flex-h align-center">
    <base-link class="logo-link">
      <img
        src="../../assets/images/logos/psk.svg"
        alt="psk-logo"
        behaviour="image"
        class="logo">
    </base-link>
    <ul class="list-wrapper flex-h ml-l h2">
      <li
        v-for="link in links"
        :key="link"
        class="link-wrapper">
        <base-link
          behaviour="color-white"
          class="px-xs mx-xxxs upper">
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
  props: { links: { type: Array, required: true } },
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

.link-wrapper {
  text-align: center;
}
// Dont know how to do global importing of scss variables,
// and don't have time to dig too deep in webpack config for that.
@media (max-width: 67.5rem) {
  .list-wrapper {
    display: none;
  }
}
</style>
