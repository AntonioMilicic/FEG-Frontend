<template>
  <div v-if="gameExists" class="flex-v align-center">
    <base-card
      v-for="{ id, begins, registerBegins, players, image, title } in games"
      :key="id"
      :title="title"
      :title-list="titleList"
      :content-list="{
        begins,
        registerBegins,
        players
      }">
      <template #left>
        <img
          :src="addRequireToSrc(image)"
          alt="game-image"
          href="#"
          class="game-image">
      </template>
    </base-card>
  </div>
  <tournament-message v-else message="upcoming" />
</template>

<script>
import { addRequireToSrc } from '@/helpers/mixins/AddRequireMixin';
import BaseCard from '@/components/shared/BaseCard';
import { gameExists } from '@/helpers/mixins/BooleanMixin';
import { mapGetters } from 'vuex';
import TournamentMessage from '../message/TournamentErrorMessage';

const titleList = [
  'Game begins',
  'Registration begins',
  'Players'
];

export default {
  name: 'active-tournament',
  mixins: [addRequireToSrc, gameExists],
  computed: { ...mapGetters({ games: 'upcomingGameData' }) },
  created() {
    this.titleList = titleList;
  },
  components: { BaseCard, TournamentMessage }
};
</script>
