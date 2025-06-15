<template>
  <div :class="`relative overflow-hidden flex p-4 ${isMobile ? 'w-full justify-center' : 'w-[420px] justify-end'
    }`">
    <div class="absolute z-0 left-10 top-10 bg-[#006d77] rounded-[50px] w-[100px] h-[50%]" />
    <div class="absolute z-0 right-0 bottom-10 bg-[#ffddd2] rounded-[40px] w-[100px] h-[50%]" />
    <div class="absolute z-0 left-0 bottom-10 bg-[#006d77] rounded-[40px] w-[50px] h-[50px]" />
    <div class="absolute z-0 left-1 bottom-11 bg-neutral-100 rounded-[40px] w-[40px] h-[40px]" />
    <div :class="`z-1 ring-10 mr-4 ring-[#83c5be] relative rounded-[80px] overflow-hidden border-4 border-neutral-100 ${isMobile ? 'w-[200px]' : 'w-[300px]'
      }`">
      <nuxt-img provider="imageengine" src="/me.jpg" width="100" height="80" />
      <!-- <img src="~assets/images/me.jpg" alt="" /> -->
    </div>
  </div>
</template>

<script setup>
const { isMobile } = useDevice();
</script>
