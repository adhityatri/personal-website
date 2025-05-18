<template>
  <div class="flex items-center gap-4">
    <UNavigationMenu :items="menuItems"> </UNavigationMenu>
    <UButton
      icon="line-md:download-loop"
      variant="primary"
      class="h-fit bg-[#006d77] hover:bg-[#83c5be] text-white"
      size="md"
      @click="downloadResume()"
    >
      Resume
    </UButton>
  </div>
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
  {
    label: 'Contact',
    to: '/contact'
  }
]);

const downloadResume = async () => {
  const resumeUrl =
    'https://drive.google.com/file/d/1BN31fza2QmhC4Z1zm7B0jMsoHEVhG_Sh/view?usp=sharing';

  await navigateTo(resumeUrl, {
    external: true,
    open: {
      target: '_blank'
    }
  });
};
</script>
