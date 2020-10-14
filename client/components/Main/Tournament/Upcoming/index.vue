<template>
  <div>
    <game-form v-for="game in games" :key="game.id" :game="game" />
  </div>
</template>

<script>
import GameForm from '@/components/shared/GameForm';
import { mapGetters } from 'vuex';

export default {
  name: 'active-tournament',
  computed: {
    ...mapGetters({ games: 'upcomingGameData' })
  },
  components: { GameForm }
};
</script>
