<template>
  <div class="container experience">
    <img class="pattern" src="/pattern2.png" alt="pattern-2" />
    <h1>Work Experiences</h1>
    <!-- <p class="describe">
        I have been working on various projects in my spare time. Here is a list
        of some of my projects:
      </p> -->
    <div v-for="item in 2" :key="item" class="card-experience latest"></div>
    <div v-for="item in 4" :key="item" class="card-experience"></div>
  </div>
</template>

<style lang="scss" scoped>
.experience {
  min-height: 80vh;
  box-shadow: -4px -26px 40px 0 transparentize($color: #000000, $amount: 0.9);
  z-index: 2;
  background-color: $based-color;
  // background: linear-gradient(to bottom, $primary-color 30%, $based-color);
  padding-top: 10rem;
  padding-bottom: 10rem;
  position: relative;
}

h1 {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.describe {
  width: 90%;
  font-size: 1.5rem;
}

.pattern {
  position: absolute;
  left: 10%;
  top: 8rem;
  width: 10rem;
  z-index: -1;
}

.card-experience {
  background-color: white;
  width: 100%;
  z-index: 1;
  border: 1px solid orange;
  border-radius: 1rem;
  margin-bottom: 1rem;
  height: 60px;
  &.latest {
    height: 400px;
  }
}
</style>
