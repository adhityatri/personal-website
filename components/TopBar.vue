<template>
  <UContainer
    as="nav"
    :class="useDevice().isDesktopOrTablet ? desktopClass : mobileClass"
  >
    <app-brand hydrate-never/>
    <nav-menu v-if="useDevice().isDesktopOrTablet" />
  </UContainer>
</template>

<script setup lang="ts">
const desktopClass =
  'flex justify-between items-center p-2 shadow-lg rounded-b-2xl sticky top-0 bg-white z-10';
const mobileClass =
  'flex items-center justify-center shadow-lg rounded-b-2xl sticky top-[-1px] bg-white z-10 px-2 py-4';
</script>
