<template>
  <div class="card-form flex-h px-m my-l">
    <img
      :src="addRequireToSrc(game.image)"
      alt="game-image"
      href="#"
      class="game-image">
    <ul class="card-list flex-v">
      <li class="card-list-title h1 upper flex-v flex-1 justify-center">
        <div class="px-xs py-xs">
          <div class="title">{{ game.title }}</div>
          <list-buttons
            v-if="showButtons"
            @register-dialog="$emit('register-dialog', game.id)"
            @show-details="addData"
            :player-id="game.playerId"
            class="title-buttons" />
        </div>
      </li>
      <li
        v-for="(content, _, index) in contentList"
        :key="content"
        class="card-list-item items flex-v flex-1 justify-center">
        <span class="left-text p1">
          {{ titleList[index] }}
        </span>
        <span class="right-text h3">
          {{ content }}
        </span>
      </li>
      <list-buttons
        v-if="showButtons"
        @register-dialog="$emit('register-dialog', game.id)"
        @show-details="addData"
        :player-id="game.playerId"
        class="list-buttons" />
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

      .title-buttons {
        display: none;
      }
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

@media (max-width: 67.5rem) {
  .card-form {
    margin-top: 0;
  }
}

@media (max-width: 47.5rem) {
  .card-form {
    flex-direction: column;
    height: auto;
    margin-bottom: var(--spc-s);
    padding: 0;

    .game-image {
      width: 100%;
      height: 40%;
      border-radius: 0;
    }

    .card-list {
      width: 100%;
      border-radius: 0;
      background-color: var(--color-gray-dark-300);

      .list-buttons {
        display: none;
      }

      &-title {
        border-radius: 0;

        .title {
          padding-top: var(--spc-xxs);
          padding-bottom: var(--spc-xs);
          padding-left: var(--spc-xs);
          text-align: start;
          text-transform: none;
        }

        .title-buttons {
          display: flex;
        }
      }

      &-item {
        border-bottom: solid var(--border-size-m) var(--color-gray-light-300);

        &:first-child {
          border-bottom: none;
        }
      }

      .items {
        flex-direction: row;
        align-items: center;
        padding: 0.25rem 1.5rem;

        .right-text {
          margin-left: auto;
        }

        .left-text {
          margin-right: auto;
        }
      }
    }
  }
}

</style>
