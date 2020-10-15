<template>
  <div>
    <game-form
      v-for="game in games"
      :key="game.id"
      :image="game.image"
      :description="{
        title: game.title,
        registration: game.registration,
        userRank: game.userRank,
        totalPlayers: game.totalPlayers
      }">
      <template #row1><div class="h4">Registration</div></template>
      <template #row2><div class="h4">Your position</div></template>
      <template #row3><div class="h4">Registered</div></template>
    </game-form>
  </div>
</template>

<script>
import GameForm from '@/components/shared/GameForm';
import { mapGetters } from 'vuex';

export default {
  name: 'active-tournament',
  computed: {
    ...mapGetters({ games: 'finishedGameData' })
  },
  components: { GameForm }
};
</script>
