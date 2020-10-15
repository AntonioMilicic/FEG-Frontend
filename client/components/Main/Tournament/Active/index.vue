<template>
  <div v-if="games.length">
    <game-form
      v-for="game in games"
      :key="game.id"
      :image="game.image"
      :description="{
        title: game.title,
        tournamentEnds: game.tournamentEnds,
        registrationEnds: game.registerEnds,
        totalPlayers: game.totalPlayers
      }">
      <template #row1>
        <span class="h4">Tournament ends</span>
      </template>
      <template #row2>
        <span class="h4">Registation ends</span>
      </template>
      <template #row3>
        <span class="h4">Players</span>
      </template>
    </game-form>
  </div>
  <base-tournament-message v-else message="active" />
</template>

<script>
import BaseTournamentMessage from '@/components/shared/BaseTournamentMessage';
import GameForm from '@/components/shared/GameForm';
import { mapGetters } from 'vuex';

export default {
  name: 'active-tournament',
  computed: {
    ...mapGetters({ games: 'activeGameData' })
  },
  components: { BaseTournamentMessage, GameForm }
};
</script>
