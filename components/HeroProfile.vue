<template>
  <div class="flex gap-4 justify-center items-center min-h-[500px]">
    <div class="relative overflow-hidden flex w-[420px] p-4 justify-end">
      <div
        class="absolute z-0 left-10 top-10 bg-[#006d77] rounded-[50px] w-[100px] h-[50%]"
      />
      <div
        class="absolute z-0 right-0 bottom-10 bg-[#ffddd2] rounded-[40px] w-[100px] h-[50%]"
      />
      <div
        class="absolute z-0 left-0 bottom-10 bg-[#006d77] rounded-[40px] w-[50px] h-[50px]"
      />
      <div
        class="z-1 ring-10 mr-4 ring-[#83c5be] relative rounded-[80px] overflow-hidden border-2 border-white w-[300px]"
      >
        <img src="/me.jpg" alt="" />
      </div>
    </div>
    <div class="flex flex-col p-4 px-8 rounded-xl justify-center flex-1">
      <div class="">
        <div class="text-[2.5rem] text-gray-600">Hello,</div>
        <div class="h-[4px] w-[40px] bg-[#006d77] rounded-xl"></div>
        <div class="text-[2rem] font-bold">I'm {{ hero.name }}</div>
        <div class="text-xl text-[#006d77]">
          {{ hero.position }}
        </div>
      </div>
      <p class="max-w-[400px] my-7 text-balance">
        {{ hero.description }}
      </p>
      <div class="flex gap-4 items-center">
        <get-in-touch />
        <social-media />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const hero = ref({
  name: 'Adhitya Tri W. U.',
  position: 'Software Engineer',
  location: 'Jember, Indonesia',
  description:
    'Seasoned Software Engineer with a proven track record of 10+ years in developing scalable and high-performance applications.' +
    'I am particularly interested in opportunities where I can contribute at the intersection of design and technology to produce cohesive and effective digital solutions.'
});
</script>
