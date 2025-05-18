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
    var(--ui-color-neutral-50) 20%,
    white
  );
  padding: 1em;
  position: relative;
  border-radius: 1em;
  border: 4px solid white;
  box-shadow: inset 0 4px 10px 4px var(--ui-color-neutral-100);
}
</style>
