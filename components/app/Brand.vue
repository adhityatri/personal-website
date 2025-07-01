<template>
  <div class="flex items-center gap-2">
    <nuxt-link to="/" class="text-[#006d77] font-bold">
      <img src="/logo.svg" height="32" width="32" alt="logo" />
    </nuxt-link>
  </div>
</template>

<script setup>
const { isMobile } = useDevice();
</script>
