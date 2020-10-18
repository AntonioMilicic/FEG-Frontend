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
import { getGameCarousel, getRanking } from '@/helpers/api/UserGames';
import GameForm from '../tournament-form/GameForm';
import { mapGetters } from 'vuex';
import RankingModal from '../ranking/RankingForm';
import TournamentMessage from '../message/TournamentErrorMessage';
const gameStats = [
  { title: 'Registration', content: 'Finished' },
  { title: 'Position', content: '' },
  { title: 'Registered', content: '' }
];

export default {
  name: 'active-tournament',
  data: () => ({ userRank: 7 }), // Mocked data to show selected line
  computed: { ...mapGetters({ games: 'finishedGameData' }) },
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
      gameStatsCalc[1].content = gameStateDescription.userRank;
      gameStatsCalc[2].content = gameStateDescription.totalPlayers;

      const gameStatistic = gameStatsCalc;
      const gameCarousel = getGameCarousel;

      this.$modal.show(
        RankingModal,
        {
          game,
          ranking,
          userRank: this.userRank,
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
