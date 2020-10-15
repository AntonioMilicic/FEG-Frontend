<template>
  <div class="app flex-v">
    <header-component />
    <router-view />
    <footer-component />
  </div>
</template>

<script>
import FooterComponent from '@/components/Footer';
import HeaderComponent from '@/components/Header';

export default {
  name: 'app',
  components: { FooterComponent, HeaderComponent }
};
</script>

<style lang="scss">
@import "~@/assets/stylesheets/main";

.app {
  height: 100%;
}
</style>
