<template>
  <div
    :class="`flex gap-4 justify-center items-center min-h-[500px] ${
      isMobile ? 'flex-col' : 'flex-row'
    }`"
  >
    <hero-image />
    <div class="flex flex-col p-4 px-8 rounded-xl justify-center flex-1">
      <div class="">
        <div class="text-[2.5rem] text-gray-600">Hello,</div>
        <div class="h-[4px] w-[40px] bg-[#006d77] rounded-xl"></div>
        <div class="text-[2rem] font-bold">I'm {{ hero.name }}</div>
        <div class="text-xl text-[#006d77]">
          {{ hero.position }}
        </div>
      </div>
      <p
        :class="`my-7 text-balance ${isMobile ? 'w-full' : 'max-w-[400px]'}`"
      >
        {{ hero.description }}
      </p>
      <div :class="`flex gap-4 ${isMobile ? 'flex-col items-start' : 'flex-row items-center'}`">
        <get-in-touch />
        <social-media />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isMobile } = useDevice();

const hero = ref({
  name: 'Adhitya Tri W. U.',
  position: 'Software Engineer',
  location: 'Jember, Indonesia',
  description:
    'Seasoned Software Engineer with a proven track record of 10+ years in developing scalable and high-performance applications.' +
    'I am particularly interested in opportunities where I can contribute at the intersection of design and technology to produce cohesive and effective digital solutions.'
});
</script>
