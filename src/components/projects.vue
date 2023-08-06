<template>
  <div class="container projects">
    <h1>Latest Project</h1>
    <p class="describe">
      I have been working on various projects in my spare time. Here is a list
      of some of my projects:
    </p>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  height: 500px;
  background: linear-gradient(to bottom, $based-color 15%, $primary-color);
  padding-top: 6rem;
}

h1{
    font-size: 3rem;
    margin-bottom: 1rem;
}

.describe{
    width: 90%;
    font-size: 1.5rem;
}
</style>
