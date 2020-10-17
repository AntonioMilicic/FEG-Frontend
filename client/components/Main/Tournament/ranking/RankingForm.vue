<template>
  <div class="ranking-form pb-l">
    <ranking-header :image="game.image" :game-state="currentRouteName" />
    <div class="ranking-wrapper mx-s">
      <ranking-table
        :game-state="currentRouteName"
        :ranking="ranking"
        :user-rank="userRank" />
      <game-description
        :rules="game.rules"
        :game-stats="gameStateDescription" />
      <game-carousel :images="gameCarousel.images" :total="gameCarousel.total" />
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
import GameCarousel from '@/components/shared/ranking/GameCarousel';
import GameDescription from '@/components/shared/ranking/GameDescription';
import RankingHeader from '@/components/shared/ranking/RankingHeader';
import RankingTable from '@/components/shared/ranking/RankingTable';
// const players = [
//   { rank: 1, username: 'Tonitest1', score: 1000, prize: 1000 },
// ];
// const game = {
//   title,
//   image,
//   rules
// };
// const gameStateDescription = [
//   { title: 'Players', content: '1521' },
//   { title: 'Registered', content: '487' },
//   { title: 'Registration', content: 'Finished' },
//   { title: 'Included games', content: '58' }
// ];
// const user = { rank: 6 };
// const gameCarousel = {
//   images: [
//     { image: 'games/small/game-1.png', position: 1 },
//   ],
//   total: 16
// };
export default {
  name: 'base-modal',
  props: {
    game: { type: Object, required: true },
    ranking: { type: Object, required: true },
    userRank: { type: Number, default: null },
    gameStateDescription: { type: Object, required: true },
    gameCarousel: { type: Object, required: true }
  },
  computed: { currentRouteName: vm => vm.$route.name },
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
  width: 40%;
  min-width: var(--measure-m);
  max-width: var(--measure-l);
  background-color: var(--color-gray-dark-100);

  .terms-button {
    color: var(--color-gray-light-100);
  }
}
</style>
