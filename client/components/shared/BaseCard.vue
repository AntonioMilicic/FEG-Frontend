<template>
  <div class="card-form flex-h px-m my-l" :class="{'detail-form': detail}">
    <div v-if="leftSlotExist" class="card-form-left">
      <slot name="left"></slot>
    </div>
    <ul class="card-list flex-v">
      <li
        v-if="title"
        class="card-list-title h1 upper flex-v flex-1 justify-center">
        {{ title }}
      </li>
      <li
        v-for="(content, _, index) in contentList"
        :key="content"
        class="card-list-item flex-v flex-1 justify-center">
        <div class="flex-v" :class="{'detail-list-text': detail}">
          <span v-if="titleList[index]" class="p1">
            {{ titleList[index] }}
          </span>
          <span class="h3">{{ content }}</span>
        </div>
      </li>
      <li
        v-if="listSlotExist"
        class="flex-h flex-1 justify-center align-center">
        <slot name="listEnd"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'base-card',
  props: {
    contentList: { type: Object, required: true },
    titleList: { type: Array, required: true },
    title: { type: String, default: '' },
    image: { type: String, default: '' },
    gameRules: { type: String, default: '' },
    detail: { type: Boolean, default: false }
  },
  computed: {
    leftSlotExist: vm => Boolean(vm.$slots.left),
    listSlotExist: vm => Boolean(vm.$slots.listEnd)
  }
};
</script>

<style lang="scss" scoped>
.card-form {
  width: 100%;
  max-width: var(--measure-xxl);
  height: var(--measure-s);

  &-left {
    width: 70%;
    height: 100%;
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

.game-image {
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-xxs) 0 0 var(--border-radius-xxs);
}

.game-button {
  width: var(--button-width-m);
  height: var(--button-height-m);
  color: var(--color-white);

  .icon {
    color: var(--color-accent);
  }
}

.game-rules {
  text-align: left;
  margin: 0;
  color: var(--color-gray-light-100);
}

.detail-form {
  max-width: 100%;
  height: 100%;
  padding-right: 0;
  padding-left: 0;

  .card-list {
    background-color: var(--color-gray-dark-300);
    border-radius: var(--border-radius-xxs);
    align-self: center;

    .detail-list-text {
      padding: var(--spc-xxs) 0;
    }
  }
}
</style>
