<template>
  <base-navbar class="main-navbar">
    <template #left>
      <div class="left-wrapper">
        <font-awesome-icon icon="home" size="lg" class="nav-icon mr-s" />
        <base-router-link
          v-for="{ category, name } in tabs"
          :key="name"
          :name="name"
          class="tab-item px-xs mx-xxxs h3">
          {{ category }}
        </base-router-link>
        <base-link
          v-for="link in links"
          :key="link"
          behaviour="color-white"
          class="links-mobile px-xs mx-xxxs h3">
          {{ link }}
        </base-link>
      </div>
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
import BaseLink from '@/components/shared/BaseLink';
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

const links = ['Sport', 'Uživo', 'Loto', 'Casino', 'Vegas',
  'Igre Uživo', 'Virtualne Igre'];

export default {
  name: 'main-navbar',
  created() {
    this.tabs = tabs;
    this.links = links;
  },
  components: { BaseLink, BaseNavbar, BaseRouterLink }
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
  padding-bottom: 10px;
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

.middle {
  display: none;
}

.links-mobile {
  display: none;
}

@media (max-width: 67.5rem) {
  .main-navbar {
    height: fit-content;
    padding-top: var(--spc-xs);
    overflow-x: scroll;
    white-space: nowrap;
    background-color: var(--color-primary-200);
    border-top: solid var(--border-size-m) var(--color-primary-100);
    border-bottom: solid var(--border-size-m) var(--color-primary-100);

    .left-wrapper {
      display: flex;
      flex-direction: row;

      .links-mobile {
        display: initial;

        &:last-child {
          margin-right: var(--spc-s);
        }
      }
    }

    .search {
      display: none;
    }
  }
}
</style>
