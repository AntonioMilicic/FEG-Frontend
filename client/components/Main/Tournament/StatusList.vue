<template>
  <ul class="flex-h mx-xl px-xxs">
    <base-router-link
      v-for="(tournamentCount, name) in status"
      :key="name"
      :name="name"
      class="link px-l mx-xs py-xxs h1">
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
