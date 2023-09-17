<script setup lang="ts">
import navbar from "./components/navbar.vue";
import about from "./components/about.vue";
import projects from "./components/projects.vue";
import experience from "./components/experience.vue";
// import keepInTouch from "./components/KeepInTouch.vue";
// import footerSection from "./components/footer.vue";
</script>

<template>
  <keep-alive>
    <navbar />
  </keep-alive>
  <div class="body-wrapper">
    <about />
    <projects />
    <experience />
    <keep-in-touch />
    <footerSection />
  </div>
</template>

<style scoped>
.body-wrapper {
  display: flex;
  flex: 1;
  background-color: var(--primary);
  flex-direction: column;
  overflow: hidden;
}
</style>
