<template>
  <footer class="footer-container">
    <link-list :link-first-row="linkFirstRow" :link-second-row="linkSecondRow" />
    <logo-list :logos="logos" />
    <footer-description />
  </footer>
</template>

<script>
import FooterDescription from './FooterDescription';
import LinkList from './LinkList';
import LogoList from './LogoList';

const linkFirstRow = ['Pomoć', 'Pravila', 'Popis igara i pravila'];
const linkSecondRow = [
  'O nama', 'Kontakt', 'PSK Casino', 'Načela odgovornog ponašanja',
  'Pravila o privatnosti', 'Obrazac za samoisključenje', 'GDPR Obrazac'
];
const logos = [
  { image: 'visa.png', alt: 'visa logo' },
  { image: 'mastercard.png', alt: 'mastercard logo' },
  { image: 'maestro.png', alt: 'maestro logo' },
  { image: 'paysafe.svg', alt: 'paysafe logo' },
  { image: 'skrill.png', alt: 'skrill logo' },
  { image: 'abon.png', alt: 'abon logo' },
  { image: 'aircash.png', alt: 'aircash logo' }
];

export default {
  name: 'footer-container',
  data: () => ({
    linkFirstRow,
    linkSecondRow,
    logos
  }),
  components: {
    FooterDescription,
    LinkList,
    LogoList
  }
};
</script>

<style lang="scss" scoped>
.footer-container {
  background-color: var(--color-black);
}
</style>
