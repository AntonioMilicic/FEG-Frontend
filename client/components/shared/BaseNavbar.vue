<template>
  <nav class="flex-h justify-space-between px-m">
    <div class="side-left flex-h align-center">
      <slot name="left"></slot>
    </div>
    <div class="side-right flex-h align-center">
      <slot name="right"></slot>
    </div>
  </nav>
</template>

<script>
export default { name: 'base-navbar' };
</script>
