<template>
  <div>
    <app-title>Bio</app-title>
    <ul class="flex flex-col gap-2 indent-4 mt-4">
      <li v-for="(item, index) in bio" :key="index" class="flex gap-2">
        <b class="text-[#006d77] font-extrabold">{{ item.year }}</b>
        <div class="text-gray-600">{{ item.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const bio = [
  {
    name: 'Born in Jember, Indonesia',
    year: '1991',
    description: ''
  },
  {
    name: 'Completed the Bachelor of Informatics Engineering at STIKI Malang',
    year: '2013',
    description: ''
  },
  {
    name: 'Worked as a Software Engineer at PT. Infogobal Teknologi Semesta, Indonesia',
    year: '2013',
    description: ''
  },
  {
    name: 'Worked as a Frontend Engineer at PT. Gramedia Asri Media, Indonesia',
    year: '2022',
    description: ''
  },
  {
    name: 'Working as a Freelancer',
    year: '2025',
    description: ''
  }
];
</script>
