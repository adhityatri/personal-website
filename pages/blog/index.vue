<template>
  <div class="flex flex-col w-full gap-4 py-8" :class="{ 'px-6' : isMobile }">
    <app-title class="mb-12"> Blog Page </app-title>

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

<script setup lang="ts">
const { isMobile } = useDevice();
definePageMeta({
  title: 'Blog',
  name: 'blog-pages'
});

useHead({
  title: 'Blog - Adhitya Tri',
  meta: [
    {
      name: 'description',
      content:
        'Explore insightful articles about web development, technology trends, and software engineering best practices.'
    },
    {
      name: 'keywords',
      content:
        'web development, software engineering, tech blog, programming tutorials'
    },
    // OpenGraph tags for better social sharing
    { property: 'og:title', content: 'Blog - Adhitya Tri' },
    {
      property: 'og:description',
      content:
        'Explore insightful articles about web development, technology trends, and software engineering best practices.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Adhitya Tri' },
    // Twitter Card tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Blog - Adhitya Tri' },
    {
      name: 'twitter:description',
      content:
        'Explore insightful articles about web development, technology trends, and software engineering best practices.'
    }
  ]
});

const router = useRouter();
const goBack = () => {
  router.back();
};
</script>
