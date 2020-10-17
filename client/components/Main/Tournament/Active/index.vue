<template>
  <div v-if="games.length" class="flex-v align-center">
    <game-form
      v-for="game in games"
      :key="game.id"
      :image="game.image"
      :game-state-description="{
        title: game.title,
        tournamentEnds: game.tournamentEnds,
        registrationEnds: game.registerEnds,
        totalPlayers: game.totalPlayers
      }">
      <template #row1>
        <span class="p1">Tournament ends</span>
      </template>
      <template #row2>
        <span class="p1">Registation ends</span>
      </template>
      <template #row3>
        <span class="p1">Players</span>
      </template>
    </game-form>
  </div>
  <tournament-message v-else message="active" />
</template>

<script>
import GameForm from '../tournament-form/GameForm';
import { mapGetters } from 'vuex';
import TournamentMessage from '../message/TournamentErrorMessage';

export default {
  name: 'active-tournament',
  computed: { ...mapGetters({ games: 'activeGameData' }) },
  components: { GameForm, TournamentMessage }
};
</script>
