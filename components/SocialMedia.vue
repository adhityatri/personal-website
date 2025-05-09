<script setup lang="ts">
import { ref } from 'vue';

type sosmed = {
  logo: string;
  name: string;
  link: string;
};

const props = defineProps({
  solid: {
    type: Boolean,
    default: false
  },
  sosmedOnly: {
    type: Boolean,
    default: false
  }
});

const sosmedData = ref<sosmed[]>([
  {
    name: 'LinkedIn',
    logo: 'line-md:linkedin',
    link: 'https://www.linkedin.com/in/adhitya-tri/'
  },
  {
    name: 'Github',
    logo: 'line-md:github-twotone',
    link: 'https://github.com/adhityatri'
  }
]);

const open = (item: string) => {
  window.open(item, '_blank');
};
</script>

<template>
  <ul class="flex gap-4" :class="props.solid ? 'solid' : ''">
    <li>Social Media : </li>
    <li
      class="rounded-sm flex items-center"
      @click="open(item.link)"
      v-for="item in sosmedData"
    >
      <UIcon class="text-xl hover:text-[#006d77]" :name="item.logo" />
    </li>
  </ul>
</template>
