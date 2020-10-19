<template>
  <div v-if="gameExists" class="flex-v align-center">
    <tournament-card
      v-for="game in games"
      :key="game.id"
      :show-buttons="false"
      :title-list="titleList"
      :game="game"
      :content-list="{
        begins: game.begins,
        registerBegins: game.registerBegins,
        totalPlayers: game.players
      }" />
  </div>
  <tournament-message v-else message="upcoming" />
</template>

<script>
import { gameExists } from '@/helpers/mixins/BooleanMixin';
import { mapGetters } from 'vuex';
import TournamentCard from '../card/TournamentCard';
import TournamentMessage from '../message/TournamentErrorMessage';

const titleList = [
  'Game begins',
  'Registration begins',
  'Players'
];

export default {
  name: 'active-tournament',
  mixins: [gameExists],
  computed: { ...mapGetters({ games: 'upcomingGameData' }) },
  created() {
    this.titleList = titleList;
  },
  components: { TournamentMessage, TournamentCard }
};
</script>
