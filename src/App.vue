<script setup lang="ts">
import navbar from "./components/navbar.vue";
import about from "./components/about.vue";
import projects from "./components/projects.vue";
</script>

<template>
  <keep-alive>
    <navbar />
  </keep-alive>
  <div class="body-wrapper">
    <about />
    <projects />
    <section ref="experience">Experience</section>
  </div>
</template>

<style scoped>
.body-wrapper {
  display: flex;
  flex: 1;
  background-color: var(--primary);
  flex-direction: column;
}
</style>
