<template>
  <div class="ranking-form pb-l">
    <ranking-header
      @register-dialog="registerDialog(game.id, true)"
      :player-id="game.playerId"
      :image="game.image"
      :title="game.title"
      :is-active="isActive" />
    <div class="ranking-wrapper mx-s">
      <ranking-table :ranking="ranking" :user-rank="contentList.userRank" />
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
import { registerDialog } from '@/helpers/mixins/RegisterDialog';

export default {
  name: 'base-modal',
  mixins: [registerDialog],
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
  background-color: var(--color-gray-dark-100);

  .rule-title {
    color: var(--color-gray-light-100);
  }

  .terms-button {
    color: var(--color-gray-light-100);
  }
}

@media (max-width: 47.5rem) {
  .ranking-form {
    background-color: var(--color-gray-dark-100);

    .ranking-wrapper {
      margin: 0;

      .terms-button {
        padding-left: var(--spc-xs);
      }
    }
  }
}
</style>
