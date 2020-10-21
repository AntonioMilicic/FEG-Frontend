<template>
  <div class="header-right flex-h">
    <div class="icon-container flex-h mr-s align-center">
      <font-awesome-icon icon="search" size="lg" class="screen-mobile icon mx-s" />
      <font-awesome-icon icon="wallet" size="lg" class="icon mx-s" />
      <font-awesome-icon icon="trophy" size="lg" class="icon mx-s" />
      <font-awesome-icon icon="user" size="2x" class="screen-mobile icon ml-s" />
    </div>
    <div class="info-content my-xs">
      <user-info :user-name="userName" :password="password">
        <font-awesome-icon icon="eye" size="sm" class="ml-xxs" />
      </user-info>
      <div class="flex-h justify-space-between mt-xxs p3">
        <div>
          <base-link behaviour="color-white" class="px-xxxs pb-xxxs mr-xs">
            Povijest igara
          </base-link>
          <base-link behaviour="color-white" class="px-xxxs pb-xxxs">
            Račun
          </base-link>
        </div>
        <div>
          <base-link behaviour="color-white" class="px-xxxs pb-xxxs">
            Odjavi se
          </base-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseLink from '@/components/shared/BaseLink';
import UserInfo from './UserInfo';

export default {
  name: 'user-content',
  props: {
    userName: { type: String, required: true },
    password: { type: String, required: true }
  },
  components: { BaseLink, UserInfo }
};
</script>

<style lang="scss" scoped>
.icon-container {
  .icon {
    color: var(--color-white);
    cursor: pointer;

    &:hover {
      color: var(--color-gray-light-100);
    }
  }
}

.info-content {
  width: 15rem;
  color: var(--color-white);
}

.screen-mobile {
  display: none;
}

@media (max-width: 67.5rem) {
  .header-right {
    .icon-container {
      margin-right: 0;

      .icon {
        margin: 0 var(--spc-xs);
      }
    }
  }

  .info-content {
    display: none;
  }

  .screen-mobile {
    display: initial;
  }
}
</style>
