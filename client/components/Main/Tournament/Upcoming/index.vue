<template>
  <div>
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
      <template #row1><div class="h4">Game begins</div></template>
      <template #row2><div class="h4">Registration begins</div></template>
      <template #row3><div class="h4">Players</div></template>
    </game-form>
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
