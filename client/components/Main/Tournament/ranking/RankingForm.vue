<template>
  <div class="ranking-form pb-l">
    <ranking-header
      :image="game.image"
      :title="game.title"
      :is-active="isActive" />
    <div class="ranking-wrapper mx-s">
      <ranking-table
        :ranking="ranking"
        :user-rank="userRank" />
      <game-description
        :rules="game.rules"
        :game-stats="gameStats" />
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
    gameStats: { type: Array, required: true },
    gameCarousel: { type: Object, required: true }
  },
  computed: {
    isActive() {
      if (this.$route.name === 'active') return true;
      return false;
    }
  },
  components: {
    BaseButton,
    GameCarousel,
    GameDescription,
    RankingHeader,
    RankingTable
  }
};
</script>

<style lang="scss" scoped>
.ranking-form {
  width: 100%;
  min-width: var(--measure-m);
  max-width: var(--measure-l);
  background-color: var(--color-gray-dark-100);

  .terms-button {
    color: var(--color-gray-light-100);
  }
}
</style>
