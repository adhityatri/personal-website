<template>
  <UApp class="flex flex-col">
    <top-bar hydrate-never/>
    <UContainer as="main" class="flex flex-1 mt-4 px-0! py-0! mb-[6em]">
      <NuxtPage />
    </UContainer>
    <app-footer hydrate-never />s
  </UApp>
</template>
