<template>
  <div v-if="gameExists" class="flex-v align-center">
    <base-card
      v-for="{ id, image, rules, title, tournamentEnds, registerEnds, totalPlayers } in games"
      :key="id"
      :image="image"
      :rules="rules"
      :title="title"
      :title-list="titleList"
      :content-list="{
        tournamentEnds,
        registerEnds,
        totalPlayers
      }">
      <template #left>
        <img
          :src="addRequireToSrc(image)"
          alt="game-image"
          href="#"
          class="game-image">
      </template>
      <template #listEnd>
        <base-button
          @click="showDetails({
            image, title, rules, listData: { tournamentEnds, registerEnds, totalPlayers }
          })"
          color="gray"
          class="game-button mx-xs p4">
          DETAILS
        </base-button>
        <base-button
          color="secondary"
          class="game-button mx-xs p4">
          REGISTER
        </base-button>
      </template>
    </base-card>
  </div>
  <tournament-message v-else message="active" />
</template>

<script>
import { getGameCarousel, getRanking } from '@/helpers/api/UserGames';
import { addRequireToSrc } from '@/helpers/mixins/AddRequireMixin';
import BaseButton from '@/components/shared/BaseButton';
import BaseCard from '@/components/shared/BaseCard';
import { gameExists } from '@/helpers/mixins/BooleanMixin';
import { mapGetters } from 'vuex';
import RankingModal from '../ranking/RankingForm';
import TournamentMessage from '../message/TournamentErrorMessage';

const titleList = [
  'Tournament ends',
  'Registration ends',
  'Players'
];

export default {
  name: 'active-tournament',
  mixins: [gameExists, addRequireToSrc],
  computed: { ...mapGetters({ games: 'activeGameData' }) },
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
      contentList.total = getGameCarousel.total;
      const titleList = this.titleList;
      titleList.push('Included games');
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
          height: 'auto',
          shiftY: 0,
          scrollable: true
        }
      );
    }
  },
  created() { this.titleList = titleList; },
  components: { BaseButton, BaseCard, TournamentMessage }
};
</script>
