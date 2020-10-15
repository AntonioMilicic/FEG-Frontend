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
      <template #row1>
        <span class="h4">Registration</span>
      </template>
      <template #row2>
        <span class="h4">Your position</span>
      </template>
      <template #row3>
        <span class="h4">Registered</span>
      </template>
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
