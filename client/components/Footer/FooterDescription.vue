<template>
  <div class="description-wrapper flex-h justify-space-between mx-m">
    <p class="text-color p2">
      Prva Sportska Kladionica &#169; 2020. Sva prava pridržana.
      Klađenje je dozvoljeno osobama starijima od 18 godina.
    </p>
    <div class="flex-h align-center">
      <button type="button" class="icon-button text-color mr-s">
        <font-awesome-icon :icon="['fab', 'facebook-f']" size="lg" />
      </button>
      <button type="button" class="icon-button text-color">18+</button>
      <button type="button" class="lang-dropdown text-color mt-xxxs ml-xl h3">
        Hrvatski
        <font-awesome-icon icon="caret-down" size="sm" />
      </button>
    </div>
  </div>
</template>

<script>
export default { name: 'footer-description' };
</script>

<style lang="scss" scoped>
.text-color {
  color: var(--color-gray-light-200);
}

.icon-button {
  width: var(--button-width-xxxs);
  height: var(--button-height-m);
  background-color: inherit;
  border-radius: 50%;
  border: solid var(--border-size-l) var(--color-gray-light-200);
  cursor: pointer;

  &:hover {
    color: var(--color-white);
    border-color: var(--color-white);
  }
}

.lang-dropdown {
  background-color: inherit;
  border: none;
  cursor: pointer;

  &:hover {
    color: var(--color-white);
  }
}

@media (max-width: 67.5rem) {
  .description-wrapper {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
  }
}
</style>
