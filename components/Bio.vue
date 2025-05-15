<template>
  <div :class="isMobile ? 'w-[85%] self-center' : ''">
    <app-title>Bio</app-title>
    <ul :class="`flex flex-col mt-4 ${isMobile ? 'gap-4' : 'indent-4 gap-2'}`">
      <li
        v-for="(item, index) in bio"
        :key="index"
        :class="`flex ${isMobile ? 'gap-4' : 'gap-2'}`"
      >
        <b class="text-[#006d77] font-extrabold">{{ item.year }}</b>
        <div class="text-gray-600 text-balance" v-html="item.name"></div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { isMobile } = useDevice();
const bio = [
  {
    name: 'Born in <b>Jember, Indonesia</b>',
    year: '1991',
    description: ''
  },
  {
    name: 'Completed the Bachelor of <b>Informatics Engineering</b> at <b>STIKI Malang</b>',
    year: '2013',
    description: ''
  },
  {
    name: 'Worked as a Software Engineer at <b>PT. Infogobal Teknologi Semesta, Indonesia</b>',
    year: '2013',
    description: ''
  },
  {
    name: 'Worked as a <b>Frontend Engineer<b> at <b>PT. Gramedia Asri Media, Indonesia</b>',
    year: '2022',
    description: ''
  },
  {
    name: 'Working as a <b>Freelancer</b>',
    year: '2025',
    description: ''
  }
];
</script>
