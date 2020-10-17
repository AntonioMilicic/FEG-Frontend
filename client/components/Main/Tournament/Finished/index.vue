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
  <tournament-message v-else message="finished" />
</template>

<script>
import GameForm from '../tournament-form/GameForm';
import { mapGetters } from 'vuex';
import TournamentMessage from '../message/TournamentErrorMessage';

export default {
  name: 'active-tournament',
  computed: { ...mapGetters({ games: 'finishedGameData' }) },
  components: { GameForm, TournamentMessage }
};
</script>
