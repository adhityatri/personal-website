<template>
  <UContainer
    as="nav"
    :class="useDevice().isDesktopOrTablet ? desktopClass : mobileClass"
  >
    <app-brand hydrate-never/>
    <nav-menu/>
  </UContainer>
</template>

<script setup lang="ts">
const desktopClass =
  'flex justify-between items-center p-2 shadow-lg rounded-b-2xl sticky top-0 bg-white z-10';
const mobileClass =
  'flex items-center justify-between shadow-lg rounded-b-2xl sticky top-[-1px] bg-white z-10 px-6 py-4';
</script>
