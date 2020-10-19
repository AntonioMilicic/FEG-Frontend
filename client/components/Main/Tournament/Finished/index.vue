<template>
  <div v-if="gameExists" class="flex-v align-center">
    <tournament-card
      v-for="game in games"
      :key="game.id"
      @show-details="showDetails"
      :title-list="titleList"
      :game="game"
      :content-list="{
        registration: game.registration,
        userRank: game.userRank,
        totalPlayers: game.totalPlayers
      }" />
  </div>
  <tournament-message v-else message="finished" />
</template>

<script>
import { getGameCarousel, getRanking } from '@/helpers/api/UserGames';
import { gameExists } from '@/helpers/mixins/BooleanMixin';
import { mapGetters } from 'vuex';
import RankingModal from '../ranking/RankingForm';
import TournamentCard from '../card/TournamentCard';
import TournamentMessage from '../message/TournamentErrorMessage';

const titleList = [
  'Registration',
  'Your position',
  'Registered'
];

export default {
  name: 'active-tournament',
  mixins: [gameExists],
  computed: { ...mapGetters({ games: 'finishedGameData' }) },
  methods: {
    showDetails({ image, title, rules, listData }) {
      const game = {
        title,
        rules,
        image
      };
      const ranking = getRanking;
      ranking[ranking.length - 1].rank = listData.totalPlayers;
      const gameCarousel = getGameCarousel;
      const contentList = listData;

      this.$modal.show(
        RankingModal,
        {
          game,
          ranking,
          userRank: 7, // Mocked data to show selected
          contentList,
          titleList,
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
  created() { this.titleList = titleList; },
  components: { TournamentCard, TournamentMessage }
};
</script>
