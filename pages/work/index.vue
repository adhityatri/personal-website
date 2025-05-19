<template>
  <div class="flex flex-1 my-10 flex-col">
    <project mode="workpage">
      <template #componentTitle> WORK </template>
    </project>
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
