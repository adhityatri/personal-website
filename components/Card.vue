<template>
  <div class="card shadow-md">
    <slot></slot>
  </div>
</template>

<style>
.card {
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to bottom,
    var(--ui-color-neutral-100) 15%,
    white
  );
  padding: 1em;
  position: relative;
  border-radius: 1em;
  border: 4px solid white;
}
</style>
