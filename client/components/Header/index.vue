<template>
  <nav class="header-container flex-h justify-space-between px-m">
    <link-list :links="links" class="header-left" />
    <user-content
      :user-name="userName"
      :password="password"
      class="header-right" />
  </nav>
</template>

<script>
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
  components: { LinkList, UserContent }
};
</script>

<style lang="scss" scoped>
.header-container {
  height: var(--header-height);
  background-color: var(--color-primary-300);
}
</style>
