<script setup lang="ts">
import AppSosmed from "./AppSosmed.vue";
import Brand from "./brand.vue";
</script>

<template>
  <div class="container footer">
    <Brand theme="dark" />
    <p class="tagline">Living, learning, & leveling up one day at a time.</p>

    <app-sosmed sosmed-only solid class="footer-sosmed" />
    <small class="footer-madeby">Made with : <img src="/stacks/vuejs.png" alt=""></small>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  padding: 6rem;
  background-color: $primary-color;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  color: white;

  &-sosmed{
    margin-top: 1rem;
  }

  &-madeby{
    display: flex;
    align-items: center;
    img{
        height: 48px;
    }
  }
}

.tagline {
  font-size: 1.5rem;
  text-align: center;
  width: 350px;
}
</style>
