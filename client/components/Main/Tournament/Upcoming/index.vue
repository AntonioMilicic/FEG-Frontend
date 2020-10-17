<template>
  <div v-if="games.length" class="flex-v align-center">
    <game-form
      v-for="game in games"
      :key="game.id"
      :image="game.image"
      :description="{
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
  <base-tournament-message v-else message="upcoming" />
</template>

<script>
import BaseTournamentMessage from '@/components/shared/BaseTournamentMessage';
import GameForm from '@/components/shared/GameForm';
import { mapGetters } from 'vuex';

export default {
  name: 'active-tournament',
  computed: { ...mapGetters({ games: 'upcomingGameData' }) },
  components: { BaseTournamentMessage, GameForm }
};
</script>
