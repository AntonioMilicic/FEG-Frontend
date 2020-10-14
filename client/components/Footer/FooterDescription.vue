<template>
  <div class="flex-h justify-space-between mx-m">
    <p class="text p2">
      Prva Sportska Kladionica &#169; 2020. Sva prava pridržana.
      Klađenje je dozvoljeno osobama starijima od 18 godina.
    </p>
    <div class="flex-h align-center">
      <button type="button" class="icon-button mr-s">
        <font-awesome-icon :icon="['fab', 'facebook-f']" size="lg" />
      </button>
      <button type="button" class="icon-button">18+</button>
      <button type="button" class="lang-dropdown text mt-xxxs ml-xl h3">
        Hrvatski
        <font-awesome-icon icon="caret-down" size="sm" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-description'
};
</script>

<style lang="scss" scoped>
.text {
  color: var(--color-gray-light-200);
}

.icon-button {
  width: 1.75rem;
  height: 1.75rem;
  color: var(--color-gray-light-200);
  background-color: inherit;
  border-radius: 50%;
  border: 3px solid var(--color-gray-light-200);
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
</style>
