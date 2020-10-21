<template>
  <ul class="status-list flex-h mx-xl px-xxs">
    <base-router-link
      v-for="(tournamentCount, name) in status"
      :key="name"
      :name="name"
      class="status-link px-l mx-xs py-xxs h1">
      {{ name | capital }} ({{ tournamentCount }})
    </base-router-link>
  </ul>
</template>

<script>
import BaseRouterLink from '@/components/shared/BaseRouterLink';

export default {
  name: 'status-list',
  props: { status: { type: Object, required: true } },
  filters: { capital: value => (value.charAt(0).toUpperCase() + value.slice(1)) },
  components: { BaseRouterLink }
};
</script>

<style lang="scss" scoped>
@media (max-width: 67.5rem) {
  .status-list {
    margin-right: 0;
    margin-left: 0;
    padding-right: 0;
    padding-left: 0;
    justify-content: center;
  }
}

@media (max-width: 30rem) {
  .status-list {
    .status-link {
      margin-right: 0;
      margin-left: 0;
      padding-right: 0.625rem;
      padding-left: 0.625rem;
      font-size: 1rem;
    }
  }
}
</style>
