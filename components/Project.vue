<template>
  <div :class="`${isMobile ? 'w-[85%] self-center' : 'w-full'} flex flex-col gap-2`">
    <app-title>Lattest Projects</app-title>

    <div class="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <card v-for="(item, index) in projectList" :key="index">
        <div class="font-bold flex-1">
          {{ item.title }}
        </div>

        <ul
          class="flex flex-wrap items-start justify-start mt-4 gap-2 border-gray-300 pt-2"
        >
          <li
            class="text-sm rounded-lg shadow-md bg-white hover:bg-[#83c5be] hover:text-[#006d77] transition-all duration-200 px-3! py-1!"
            v-for="(tech, index) in item.technology"
            :key="index"
          >
            {{ tech }}
          </li>
        </ul>
      </card>
      <UButton
        @click="moreProject"
        icon="line-md:chevron-right-circle"
        class="w-fit my-4 bg-white text-[#006d77] hover:bg-[#83c5be] ring-1 ring-[#83c5be] hover:text-[#006d77] hover:ring-[#006d77]]"
        size="lg"
      >
        View More
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isMobile } = useDevice();
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
