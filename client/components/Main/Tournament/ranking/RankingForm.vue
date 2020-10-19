<template>
  <div class="ranking-form pb-l">
    <ranking-header
      :image="game.image"
      :title="game.title"
      :is-active="isActive" />
    <div class="ranking-wrapper mx-s">
      <ranking-table :ranking="ranking" :user-rank="userRank" />
      <base-card
        :detail="true"
        :content-list="contentList"
        :title-list="titleList">
        <template #left>
          <span class="game-rules h2">Pravila turnira</span>
          <p class="game-rules p1 pt-xs pr-s">{{ game.rules }}</p>
        </template>
      </base-card>
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
import BaseCard from '@/components/shared/BaseCard';
import GameCarousel from './GameCarousel';
// import GameDescription from './GameDescription';
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
  components: {
    BaseButton,
    BaseCard,
    GameCarousel,
    // GameDescription,
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

  .rule-title {
    color: var(--color-gray-light-100);
  }

  .terms-button {
    color: var(--color-gray-light-100);
  }
}
</style>
