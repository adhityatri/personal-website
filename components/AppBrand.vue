<template>
  <div class="flex items-center gap-2">
    <nuxt-link to="/"> Jadi<b class="text-[#006d77]">Mudah</b></nuxt-link>
    <div> | </div>
    <Transition name="fade" mode="out-in">
      <div class="text-md" :key="currentText">{{ currentText }}</div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const texts = [
  'Adhitya Tri Wahyu Utomo',
  'Software Engineer',
  'Vue.js Enthusiast'
];

const currentText = ref(texts[0]);
let currentIndex = 0;

onMounted(() => {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % texts.length;
    currentText.value = texts[currentIndex];
  }, 10000);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
