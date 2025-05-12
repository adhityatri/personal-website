<template>
  <div class="flex flex-1 my-10 justify-center items-center flex-col">
    <UIcon class="text-[4rem]" name="line-md:hazard-lights-filled-loop" />
    <div class="text-xl font-bold mt-4">Pardon our dust!</div>
    <div>This page is getting a makeover.</div>

    <UButton class="bg-[#006d77] hover:bg-[#83c5be] mt-8" size="xl" @click="goBack()">
      Back To Home
    </UButton>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Work',
  name: 'work-pages'
});

const router = useRouter();
const goBack = () => {
  router.back();
};
</script>
