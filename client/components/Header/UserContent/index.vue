<template>
  <div class="header-right flex-h">
    <div class="icon-container flex-h mt-l pt-xxs mr-s">
      <font-awesome-icon
        icon="wallet"
        size="lg"
        class="icon mx-s" />
      <font-awesome-icon
        icon="trophy"
        size="lg"
        class="icon mx-s" />
    </div>
    <div class="info-content my-xs">
      <user-info :user-name="userName" :password="password">
        <font-awesome-icon icon="eye" size="sm" class="ml-xxs" />
      </user-info>
      <div class="link-container user-links mt-xxs p3 flex-h justify-space-between">
        <div>
          <base-link color="white" class="px-xxxs pb-xxxs mr-xs">
            Povijest igara
          </base-link>
          <base-link color="white" class="px-xxxs pb-xxxs">Račun</base-link>
        </div>
        <div>
          <base-link color="white" class="px-xxxs pb-xxxs">Odjavi se</base-link>
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
    userName: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
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
</style>
