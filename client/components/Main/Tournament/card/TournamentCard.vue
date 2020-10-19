<template>
  <div class="card-form flex-h px-m my-l">
    <img
      :src="addRequireToSrc(game.image)"
      alt="game-image"
      href="#"
      class="game-image">
    <ul class="card-list flex-v">
      <li class="card-list-title h1 upper flex-v flex-1 justify-center">
        {{ game.title }}
      </li>
      <li
        v-for="(content, _, index) in contentList"
        :key="content"
        class="card-list-item flex-v flex-1 justify-center">
        <span class="p1">
          {{ titleList[index] }}
        </span>
        <span class="h3">
          {{ content }}
        </span>
      </li>
      <list-buttons
        v-if="showButtons"
        @register-dialog="$emit('register-dialog', game.id)"
        @show-details="addData"
        :player-id="game.playerId" />
    </ul>
  </div>
</template>

<script>
import { addRequireToSrc } from '@/helpers/mixins/AddRequireMixin';
import ListButtons from './ListButtons';

export default {
  name: 'base-tournament',
  mixins: [addRequireToSrc],
  props: {
    game: { type: Object, required: true },
    titleList: { type: Array, required: true },
    contentList: { type: Object, required: true },
    showButtons: { type: Boolean, default: true }
  },
  methods: {
    addData() {
      this.$emit('show-details', {
        id: this.game.id,
        playerId: this.game.playerId,
        image: this.game.image,
        title: this.game.title,
        rules: this.game.rules,
        listData: this.contentList
      });
    }
  },
  components: { ListButtons }
};
</script>

<style lang="scss" scoped>
.card-form {
  width: 100%;
  max-width: var(--measure-xxl);
  height: var(--measure-s);

  .game-image {
    width: 70%;
    height: 100%;
    border-radius: var(--border-radius-xxs) 0 0 var(--border-radius-xxs);
  }

  .card-list {
    width: 30%;
    margin: 0;
    text-align: center;
    background-color: var(--color-gray-dark-100);
    border-radius: 0 var(--border-radius-xxs) var(--border-radius-xxs) 0;

    &-title {
      @extend .card-list-item;

      border-top-right-radius: var(--border-radius-xxs);
      background-color: var(--color-black-200);
    }

    &-item {
      color: var(--color-white);
      border-bottom: solid var(--border-size-m) var(--color-gray-light-200);

      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
