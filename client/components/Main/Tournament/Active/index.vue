<template>
  <div v-if="gameExists" class="flex-v align-center">
    <tournament-card
      v-for="game in games"
      :key="game.id"
      @register-dialog="registerDialog"
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
  mixins: [gameExists],
  computed: { ...mapGetters({ games: 'activeGameData' }) },
  methods: {
    submitIdHandler(id) {
      const submittedId = Math.floor((Math.random() * 10000) + 1);
      this.$store.dispatch('submitPlayerId',
        { activeGameId: id, playerId: submittedId });
    },
    registerDialog(id) {
      this.$modal.show('dialog', {
        title: 'Please confirm your registration',
        text: 'To enter the tournament, you have to confirm your application.',
        buttons: [
          {
            title: 'Confirm',
            handler: () => {
              this.submitIdHandler(id);
              this.$modal.hide('dialog');
            }
          },
          {
            title: 'Cancel',
            handler: () => {
              this.$modal.hide('dialog');
            }
          }
        ]
      });
    },
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
