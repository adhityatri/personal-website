<template>
  <div class="flex items-center gap-4" v-if="!isMobile">
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
  <USlideover v-model:open="open" v-else>
    <UButton icon="i-lucide-align-right" variant="soft" />

    <template #header>
      <div class="flex justify-between items-center flex-1 px-2">
        <app-brand />
        <UButton
          icon="i-lucide-indent-increase"
          variant="soft"
          size="md"
          @click="open = false"
        >
        </UButton>
      </div>
    </template>

    <template #body>
      <UNavigationMenu  orientation="vertical" :items="menuItems" />
    </template>
  </USlideover>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';
const { isMobile } = useDevice();

const open = ref(false);
const menuItems = ref<NavigationMenuItem[]>([
  {
    label: 'Blog',
    to: '/blog',
    onSelect: () => open.value = false
  },
  {
    label: 'Work',
    to: '/work',
    onSelect: () => open.value = false
  },
  {
    label: 'Contact',
    to: '/contact',
    onSelect: () => open.value = false
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

defineShortcuts({
  o: () => (open.value != open.value)
})
</script>
