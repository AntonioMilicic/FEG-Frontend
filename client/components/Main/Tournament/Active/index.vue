<template>
  <div v-if="games.length" class="flex-v align-center">
    <game-form
      v-for="game in games"
      :key="game.id"
      @show-details="showDetails"
      :image="game.image"
      :game-rules="game.rules"
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
import { getGameCarousel, getRanking } from '@/helpers/api/UserGames';
import GameForm from '../tournament-form/GameForm';
import { mapGetters } from 'vuex';
import RankingModal from '../ranking/RankingForm';
import TournamentMessage from '../message/TournamentErrorMessage';
const gameStats = [
  { title: 'Players', content: '' },
  { title: 'Registered', content: '487' }, // The f? This data shouldnt be part of active
  { title: 'Registration', content: 'Finished' }, // Nor this
  { title: 'Included games', content: '58' }
];

export default {
  name: 'active-tournament',
  computed: { ...mapGetters({ games: 'activeGameData' }) },
  methods: {
    showDetails({ image, gameStateDescription, gameRules }) {
      const game = {
        title: gameStateDescription.title,
        rules: gameRules,
        image
      };
      const getRanks = getRanking;
      getRanks[getRanks.length - 1].rank = gameStateDescription.totalPlayers;
      const ranking = getRanks;
      const gameStatsCalc = gameStats;
      gameStatsCalc[0].content = gameStateDescription.totalPlayers;
      const gameStatistic = gameStatsCalc;
      const gameCarousel = getGameCarousel;

      this.$modal.show(
        RankingModal,
        {
          game,
          ranking,
          gameStats: gameStatistic,
          gameCarousel
        },
        {
          height: 'auto',
          shiftY: 0,
          scrollable: true
        }
      );
    }
  },
  components: { GameForm, TournamentMessage }
};
</script>
