<script setup lang="ts">
useHead({
  title: 'Adhitya Tri W. U. - Software Engineer',
  meta: [
    { name: 'description', content: 'Seasoned Software Engineer with 10+ years experience in developing scalable and high-performance applications. Specializing in design and technology integration.' },
    { name: 'keywords', content: 'Software Engineer, Web Development, Full Stack Developer, Vue.js, Nuxt.js' },
    { property: 'og:title', content: 'Adhitya Tri W. U. - Software Engineer' },
    { property: 'og:description', content: 'Seasoned Software Engineer with 10+ years experience in developing scalable and high-performance applications.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Adhitya Tri W. U. - Software Engineer' },
    { name: 'twitter:description', content: 'Seasoned Software Engineer with 10+ years experience in developing scalable and high-performance applications.' }
  ]
});
</script>

<template>
  <div class="flex flex-col flex-1">
    <hero-profile />
    <quote />
    <bio class="mt-[4em] mb-[6em]" />
    <project />
    <promote class="mt-8" :with-action="true" />
  </div>
</template>
