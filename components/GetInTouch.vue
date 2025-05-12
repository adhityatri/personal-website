<template>
  <UButton
    icon="line-md:coffee-half-empty-twotone-loop"
    class="w-fit bg-[#006d77] hover:bg-[#83c5be]"
    size="xl"
    @click="GetInTouch()"
  >
    Get in Touch
  </UButton>
</template>

<script setup lang="ts">
const email = 'adhityatri.work@gmail.com';
const subject = 'Hello, Adhitya!';
const GetInTouch = () => {
  const mailtoUrl = `mailto:${encodeURIComponent(
    email
  )}?subject=${encodeURIComponent(subject)}&body=''`;
  window.location.href = mailtoUrl;
};
</script>
