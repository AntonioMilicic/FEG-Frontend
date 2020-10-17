<template>
  <div v-if="games.length" class="flex-v align-center">
    <game-form
      v-for="game in games"
      :key="game.id"
      :image="game.image"
      :game-state-description="{
        title: game.title,
        registration: game.registration,
        userRank: game.userRank,
        totalPlayers: game.totalPlayers
      }">
      <template #row1>
        <span class="p1">Registration</span>
      </template>
      <template #row2>
        <span class="p1">Your position</span>
      </template>
      <template #row3>
        <span class="p1">Registered</span>
      </template>
    </game-form>
  </div>
  <base-tournament-message v-else message="finished" />
</template>

<script>
import BaseTournamentMessage from '@/components/shared/BaseTournamentMessage';
import GameForm from '@/components/shared/GameForm';
import { mapGetters } from 'vuex';

export default {
  name: 'active-tournament',
  computed: { ...mapGetters({ games: 'finishedGameData' }) },
  components: { BaseTournamentMessage, GameForm }
};
</script>
