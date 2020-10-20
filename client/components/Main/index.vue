<template>
  <div class="main-component pb-xxxl">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './Navbar';

export default {
  name: 'main-view',
  components: { Navbar }
};
</script>

<style lang="scss" scoped>
.main-component {
  background-color: var(--color-gray-dark-300);
  flex: auto;
}

@media (max-width: 47.5rem) {
  .main-component {
    padding-bottom: 0;
    background-color: var(--color-gray-dark-100);
  }
}
</style>
