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
</style>
