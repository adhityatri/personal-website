<script setup lang="ts"></script>
<template>
  <nav class="menu">
    <div class="menu-item">About</div>
    <div class="menu-item">Project</div>
    <div class="menu-item">Experiences</div>
    <div class="menu-item">Services</div>
  </nav>
</template>

<style lang="scss" scoped>
.menu {
    display: none;
  @media (1024px <= width) {
    display: flex;
    gap: 1rem;
    &-item {
      padding: 0.5rem 1rem;
      transition: all 0.2s ease-in-out;
      transition-delay: 0.1s;
      border-radius: 1rem;
      &:hover {
        background-color: $primary-color;
        color: white;
        cursor: pointer;
      }
    }
  }
}
</style>
