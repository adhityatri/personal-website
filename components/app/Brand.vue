<template>
  <div class="flex items-center gap-2">
    <nuxt-link to="/" class="text-[#006d77] font-bold">
      <img src="/Logo.svg" height="24" width="24" alt="logo" />
    </nuxt-link>
  </div>
</template>

<script setup>
const { isMobile } = useDevice();
</script>
