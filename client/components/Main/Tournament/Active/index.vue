<template>
  <div v-if="gameExists" class="flex-v align-center">
    <tournament-card
      v-for="game in games"
      :key="game.id"
      @register-dialog="registerDialog(game.id)"
      @show-details="showDetails"
      :title-list="titleList"
      :game="game"
      :content-list="{
        tournamentEnds: game.tournamentEnds,
        registerEnds: game.registerEnds,
        totalPlayers: game.totalPlayers
      }" />
    <v-dialog />
  </div>
  <tournament-message v-else message="active" />
</template>

<script>
import { getGameCarousel, getRanking } from '@/helpers/api/UserGames';
import { gameExists } from '@/helpers/mixins/BooleanMixin';
import { mapGetters } from 'vuex';
import RankingModal from '../ranking/RankingForm';
import { registerDialog } from '@/helpers/mixins/RegisterDialog';
import { showModal } from '@/helpers/mixins/RankingModal';
import TournamentCard from '../card/TournamentCard';
import TournamentMessage from '../message/TournamentErrorMessage';

const titleList = [
  'Tournament ends',
  'Registration ends',
  'Players'
];

const detailTitleList = [
  'Tournament ends',
  'Registration ends',
  'Players',
  'Included games'
];

export default {
  name: 'active-tournament',
  mixins: [gameExists, registerDialog, showModal],
  computed: { ...mapGetters({ games: 'activeGameData' }) },
  methods: {
    showDetails(data) {
      const {
        playerId, id, image, title, rules,
        listData: { tournamentEnds, registerEnds, totalPlayers }
      } = data;
      const game = {
        playerId,
        id,
        title,
        rules,
        image
      };
      const ranking = getRanking;
      ranking[ranking.length - 1].rank = totalPlayers;
      const gameCarousel = getGameCarousel;
      const contentList = { tournamentEnds, registerEnds, totalPlayers };
      contentList.total = getGameCarousel.total;
      const titleList = detailTitleList;

      let width = window.screen.width;
      if (window.screen.width === 768) width = 500;
      if (window.screen.width > 768) width = 600;

      this.$modal.show(
        RankingModal,
        {
          game,
          ranking,
          gameCarousel,
          contentList,
          titleList
        },
        {
          name: 'tournament',
          height: 'auto',
          width,
          delay: '100',
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
