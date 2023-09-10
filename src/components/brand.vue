<script setup lang="ts">
const props = defineProps({
  theme: {
    type: String,
    default: "light",
  },
});
</script>

<template>
  <span class="brand" :class="props.theme === 'dark' ? 'dark' : ''"
    ><strong>Adhit</strong>ya Tri</span
  >
</template>

<style lang="scss" scoped>
.brand {
  font-size: 1.2rem;
  color: $text-color-secondary;
  strong {
    font-weight: bold;
    color: $primary-color;
  }

  &.dark {
    color: white;
    strong {
      color: white;
    }
  }
}
</style>
