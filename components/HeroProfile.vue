<template>
  <div
    :class="`flex gap-4 justify-center items-center min-h-[500px] ${
      isMobile ? 'flex-col' : 'flex-row'
    }`"
  >
    <hero-image />
    <div class="flex flex-col p-4 px-8 rounded-xl justify-center flex-1">
      <div class="">
        <div class="text-[2.5rem] text-gray-600">Hello,</div>
        <div class="h-[4px] w-[40px] bg-[#006d77] rounded-xl"></div>
        <div class="text-[2rem] font-bold">I'm {{ hero.name }}</div>
        <Transition name="fade" mode="out-in">
          <!-- <div class="text-md" :key="currentText">{{ currentText }}</div> -->
          <div class="text-xl text-[#006d77]" :key="currentText">
            {{ currentText }}
          </div>
        </Transition>
      </div>
      <p :class="`my-7 text-balance ${isMobile ? 'w-full' : 'max-w-[400px]'}`">
        {{ hero.description }}
      </p>
      <div
        :class="`flex gap-4 ${
          isMobile ? 'flex-col items-start' : 'flex-row items-center'
        }`"
      >
        <get-in-touch />
        <social-media />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isMobile } = useDevice();

const hero = ref({
  name: "Adhitya Tri Wahyu U.",
  position: "Software Engineer",
  location: "Jember, Indonesia",
  description:
    "Seasoned Software Engineer with a proven track record of 10+ years in developing scalable and high-performance applications." +
    "I am particularly interested in opportunities where I can contribute at the intersection of design and technology to produce cohesive and effective digital solutions.",
});

const texts = [
  "Software Engineer",
  "Vue.js Enthusiast",
  "Jember, Indonesia"
] as const;

const currentIndex = ref(0);
const currentText = computed(() => texts[currentIndex.value]);

onMounted(() => {
  const interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % texts.length;
  }, 5000);

  onUnmounted(() => clearInterval(interval));
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