<template>
  <div class="flex flex-col gap-2">
    <app-title>Lattest Projects</app-title>

    <div class="mt-4 grid grid-cols-3 gap-4">
      <div
        v-for="(item, index) in projectList"
        :key="index"
        class="ring-1 ring-gray-300 p-4 bg-white rounded-lg hover:shadow-md"
      >
        {{ item.title }}
        <div>{{ item.technology }}</div>
      </div>
      <UButton
        @click="moreProject"
        icon="line-md:chevron-right-circle"
        class="w-fit bg-white text-[#006d77] hover:bg-[#83c5be] ring-1 ring-[#83c5be] hover:text-[#006d77] hover:ring-[#006d77]]"
        size="lg"
      >
        View More
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const projectList = [
  {
    title: 'CMA : eSPGA App',
    technology: ['Angular', '.net', 'git']
  },
  {
    title: 'Komodoin : Virtual Assistant Module',
    technology: ['nextJs', 'git']
  },
  {
    title: 'Wiber.id',
    technology: ['nuxtJs', 'scss', 'goLang', 'git']
  },
  {
    title: 'McEasy : Smart Alarm',
    technology: ['Ionic', 'Adobe Xd', 'Angular']
  },
  {
    title: 'FKPPN : Portal Website',
    technology: ['Vue/Nuxt', 'Scss', 'Express', 'Figma', 'Git', 'MySql']
  },
  {
    title: 'POLTEKKES SURABAYA : SAKU',
    technology: ['Nuxt', 'Scss', 'Figma', 'Git']
  }
];

const moreProject = async () => {
  await navigateTo({ name: 'work-pages' });
};
</script>
