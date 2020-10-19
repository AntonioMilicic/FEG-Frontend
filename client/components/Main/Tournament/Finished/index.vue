<template>
  <div v-if="gameExists" class="flex-v align-center">
    <base-card
      v-for="{ id, image, rules, title, registration, userRank, totalPlayers } in games"
      :key="id"
      :title="title"
      :image="image"
      :rules="rules"
      :title-list="titleList"
      :content-list="{
        registration,
        userRank,
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
            image, title, rules, listData: { registration, userRank, totalPlayers }
          })"
          color="gray"
          class="game-button mx-xs p4">
          DETAILS
        </base-button>
        <div class="game-button mx-xs p4">
          <font-awesome-icon icon="check" size="lg" class="icon" />
          <span class="ml-xxs">Logged in</span>
        </div>
      </template>
    </base-card>
  </div>
  <tournament-message v-else message="finished" />
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
  'Registration',
  'Your position',
  'Registered'
];

export default {
  name: 'active-tournament',
  mixins: [gameExists, addRequireToSrc],
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
  components: { BaseButton, BaseCard, TournamentMessage }
};
</script>
