<template>
  <base-navbar class="header-navbar">
    <template #left><link-list :links="links" /></template>
    <template #right>
      <user-content
        :user-name="userName"
        :password="password" />
    </template>
  </base-navbar>
</template>

<script>
import BaseNavbar from '@/components/shared/BaseNavbar';
import LinkList from './LinkList';
import UserContent from '@/components/Header/UserContent';

const links = ['Sport', 'Uživo', 'Loto', 'Casino', 'Vegas',
  'Igre Uživo', 'Virtualne Igre'];

export default {
  name: 'header-component',
  data: () => ({
    links,
    userName: 'Antonio',
    password: '******'
  }),
  components: { BaseNavbar, LinkList, UserContent }
};
</script>

<style lang="scss" scoped>
.header-navbar {
  height: var(--header-height);
  background-color: var(--color-primary-300);
}
</style>
