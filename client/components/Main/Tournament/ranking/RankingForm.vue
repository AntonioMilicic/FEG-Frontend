<template>
  <div class="ranking-form pb-l">
    <ranking-header
      @register-dialog="registerDialog"
      :player-id="game.playerId"
      :image="game.image"
      :title="game.title"
      :is-active="isActive" />
    <div class="ranking-wrapper mx-s">
      <ranking-table :ranking="ranking" :user-rank="userRank" />
      <game-description
        :rules="game.rules"
        :content-list="contentList"
        :title-list="titleList" />
      <game-carousel
        :images="gameCarousel.images"
        :total="gameCarousel.total" />
      <base-button
        behaviour="inherit"
        type="button"
        class="terms-button h2">
        Terms and conditions
      </base-button>
    </div>
    <v-dialog />
  </div>
</template>

<script>
import BaseButton from '@/components/shared/BaseButton';
import GameCarousel from './GameCarousel';
import GameDescription from './GameDescription';
import RankingHeader from './RankingHeader';
import RankingTable from './RankingTable';

export default {
  name: 'base-modal',
  props: {
    game: { type: Object, required: true },
    ranking: { type: Array, required: true },
    userRank: { type: Number, default: null },
    contentList: { type: Object, required: true },
    titleList: { type: Array, required: true },
    gameCarousel: { type: Object, required: true }
  },
  computed: {
    isActive() {
      if (this.$route.name === 'active') return true;
      return false;
    }
  },
  methods: {
    registerDialog() {
      this.$modal.show('dialog', {
        title: 'Please confirm your registration',
        text: 'To enter the tournament, you have to confirm your application.',
        buttons: [
          {
            title: 'Confirm',
            handler: () => {
              const submittedId = Math.floor((Math.random() * 10000) + 1);
              this.$store.dispatch('submitPlayerId',
                { activeGameId: this.game.id, playerId: submittedId });
              this.game.playerId = submittedId;
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
    }
  },
  components: {
    BaseButton,
    GameCarousel,
    RankingHeader,
    RankingTable,
    GameDescription
  }
};
</script>

<style lang="scss" scoped>
.ranking-form {
  width: 100%;
  min-width: var(--measure-m);
  max-width: var(--measure-l);
  background-color: var(--color-gray-dark-100);

  .rule-title {
    color: var(--color-gray-light-100);
  }

  .terms-button {
    color: var(--color-gray-light-100);
  }
}
</style>
