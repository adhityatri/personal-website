<template>
  <UNavigationMenu :items="menuItems"> </UNavigationMenu>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const menuItems = ref<NavigationMenuItem[]>([
  {
    label: 'Blog',
    to: '/blog'
  },
  {
    label: 'Work',
    to: '/work'
  },
  // {
  //   label: 'About',
  //   to: '/about'
  // },
  {
    label: 'Contact',
    to: '/contact'
  }
]);
</script>
