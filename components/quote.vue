<template>
  <div
    class="relative overflow-hidden bg-[#006d77] py-10 my-10 rounded-2xl ring-4 ring-white shadow-xl text-white flex items-center justify-center text-2xl"
    :class="isMobile ? 'px-8 w-[85%] self-center' : 'px-8 w-full'"
  >
    <div
      class="absolute h-[20px] w-[20px] bg-neutral-100 rounded-[.4em] top-[.4em] left-[.4em]"
    ></div>
    <div :class="isMobile ? 'text-center' : ''">
      " Turning <strong><code>ideas</code></strong> into impactful digital
      solutions. "
    </div>
  </div>
</template>

<script setup>
const { isMobile } = useDevice();
</script>
