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
import { showModal } from '@/helpers/mixins/RankingModal';
import TournamentCard from '../card/TournamentCard';
import TournamentMessage from '../message/TournamentErrorMessage';

const titleList = [
  'Registration',
  'Your position',
  'Registered'
];

export default {
  name: 'active-tournament',
  mixins: [gameExists, showModal],
  computed: { ...mapGetters({ games: 'finishedGameData' }) },
  methods: {
    showDetails({ id, playerId, image, title, rules, listData }) {
      const game = { id, playerId, title, rules, image };
      const gameCarousel = getGameCarousel;
      const contentList = listData;
      // TODO: Uncomment to see user marked on scoreboard, otherwise its up to chance
      // contentList.userRank = 7;
      const ranking = getRanking;
      ranking[ranking.length - 1].rank = listData.totalPlayers;

      this.showModal(RankingModal,
        { game, ranking, gameCarousel, contentList, titleList });
    }
  },
  created() { this.titleList = titleList; },
  components: { TournamentCard, TournamentMessage }
};
</script>
