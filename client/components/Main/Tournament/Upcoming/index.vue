<template>
  <div v-if="gameExists" class="flex-v align-center">
    <game-form
      v-for="game in games"
      :key="game.id"
      :image="game.image"
      :game-state-description="{
        title: game.title,
        gameBegins: game.begins,
        registerBegins: game.registerBegins,
        players: game.players
      }">
      <template #row1>
        <span class="p1">Game begins</span>
      </template>
      <template #row2>
        <span class="p1">Registration begins</span>
      </template>
      <template #row3>
        <span class="p1">Players</span>
      </template>
    </game-form>
  </div>
  <tournament-message v-else message="upcoming" />
</template>

<script>
import { gameExists } from '@/helpers/mixins/BooleanMixin';
import GameForm from '../tournament-form/GameForm';
import { mapGetters } from 'vuex';
import TournamentMessage from '../message/TournamentErrorMessage';

export default {
  name: 'active-tournament',
  mixins: [gameExists],
  computed: {
    gameExists: vm => Boolean(vm.games.length),
    ...mapGetters({ games: 'upcomingGameData' })
  },
  components: { GameForm, TournamentMessage }
};
</script>
