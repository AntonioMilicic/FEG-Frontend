<template>
  <base-navbar class="main-navbar">
    <template #left>
      <font-awesome-icon icon="home" size="lg" class="nav-icon mr-s" />
      <base-router-link
        v-for="{ category, name } in tabs"
        :key="name"
        :name="name"
        class="tab-item px-xs mx-xxxs h3">
        {{ category }}
      </base-router-link>
    </template>
    <template #right>
      <div class="search flex-h align-center">
        <font-awesome-icon icon="search" class="nav-icon mx-xs" />
        <input
          type="text"
          placeholder="Pretraži preko 300 igara..."
          class="input mx-xxs">
      </div>
    </template>
  </base-navbar>
</template>

<script>
import BaseNavbar from '@/components/shared/BaseNavbar';
import BaseRouterLink from '@/components/shared/BaseRouterLink';

const tabs = [
  { category: 'Popularno', name: 'popular' },
  { category: 'Novo', name: 'new' },
  { category: 'Automati', name: 'slots' },
  { category: 'Igre na stolovima', name: 'table-games' },
  { category: 'Jackpot', name: 'jackpot' },
  { category: 'Turniri', name: 'tournaments' },
  { category: 'Promocije', name: 'promotions' },
  { category: 'Moje igre', name: 'my-games' }
];

export default {
  name: 'main-navbar',
  created() { this.tabs = tabs; },
  components: { BaseNavbar, BaseRouterLink }
};
</script>

<style lang="scss" scoped>
.main-navbar {
  height: var(--nav-height);
  background-color: var(--color-black-200);
}

.nav-icon {
  color: var(--color-white);
}

.tab-item {
  padding-top: 7px;
  padding-bottom: 7px;
}

.router-link-active {
  padding-top: 10px;
}

.search {
  width: var(--input-width-m);
  height: var(--input-height-m);
  background-color: var(--color-gray-dark-300);
  border-radius: var(--border-radius-xxxs);

  .input {
    width: 80%;
    color: var(--color-white);
    background-color: inherit;
    border: none;
  }
}
</style>
