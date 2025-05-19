<script setup lang="ts">
definePageMeta({
  title: 'Labs',
  name: 'labs-pages'
});

useHead({
  title: 'Labs - Adhitya Tri',
  meta: [
    { name: 'description', content: 'Explore experimental projects, tech demos, and innovative web development experiments in my personal laboratory.' },
    { name: 'keywords', content: 'web experiments, tech demos, coding lab, development prototypes' },
    // OpenGraph tags for better social sharing
    { property: 'og:title', content: 'Labs - Adhitya Tri' },
    { property: 'og:description', content: 'Explore experimental projects, tech demos, and innovative web development experiments in my personal laboratory.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Adhitya Tri' },
    // Twitter Card tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Labs - Adhitya Tri' },
    { name: 'twitter:description', content: 'Explore experimental projects, tech demos, and innovative web development experiments in my personal laboratory.' }
  ]
});

const goBack = () => {
  navigateTo('/');
};
</script>

<template>
  <div class="flex flex-1 my-10 flex-col">
    <app-title class="mb-12"> Labs Page </app-title>

    <div class="flex justify-center items-center flex-col">
      <UIcon class="text-[4rem]" name="line-md:hazard-lights-filled-loop" />
      <div class="text-xl font-bold mt-4">Pardon our dust!</div>
      <div>This page is getting a makeover.</div>

      <UButton
        class="bg-[#006d77] hover:bg-[#83c5be] mt-8"
        size="xl"
        @click="goBack()"
      >
        Back To Home
      </UButton>
    </div>
  </div>
</template>
