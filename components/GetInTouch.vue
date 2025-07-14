<template>
  <UButton
    icon="line-md:coffee-half-empty-twotone-loop"
    class="w-full bg-[#006d77] hover:bg-[#83c5be] cursor-pointer"
    :class="{ 'w-fit': isDesktopOrTablet }"
    size="xl"
    @click="GetInTouch()"
  >
    Get in Touch
  </UButton>
</template>

<script setup lang="ts">
const { isDesktopOrTablet } = useDevice();
const email = 'adhityatri.work@gmail.com';
const subject = 'Hello, Adhitya!';
const GetInTouch = () => {
  const mailtoUrl = `mailto:${encodeURIComponent(
    email
  )}?subject=${encodeURIComponent(subject)}&body=''`;
  window.location.href = mailtoUrl;
};
</script>
