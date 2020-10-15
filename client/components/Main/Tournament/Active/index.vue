<template>
  <div>
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
</template>

<script>
import GameForm from '@/components/shared/GameForm';
import { mapGetters } from 'vuex';

export default {
  name: 'active-tournament',
  computed: {
    ...mapGetters({ games: 'activeGameData' })
  },
  components: { GameForm }
};
</script>

<style lang="scss" scoped>
.status-message {
  text-align: center;
}
</style>
