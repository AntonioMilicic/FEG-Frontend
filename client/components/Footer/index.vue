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
  { image: 'logos/visa.png', alt: 'visa-logo' },
  { image: 'logos/mastercard.png', alt: 'mastercard-logo' },
  { image: 'logos/maestro.png', alt: 'maestro-logo' },
  { image: 'logos/paysafe.svg', alt: 'paysafe-logo' },
  { image: 'logos/skrill.png', alt: 'skrill-logo' },
  { image: 'logos/abon.png', alt: 'abon-logo' },
  { image: 'logos/aircash.png', alt: 'aircash-logo' }
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
