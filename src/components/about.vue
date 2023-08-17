<script setup lang="ts">
import AppSosmed from "./AppSosmed.vue";
</script>

<template>
  <section class="container about">
    <img class="pattern" src="@/assets/Pattern1.svg" alt="" />
    <div class="hello">Hello, I'm</div>
    <div class="name">Adhitya Tri Wahyu Utomo</div>
    <!-- <div class="role">Front-End Developer</div> -->

    <p class="describe">
      Experienced Front End Developer with 8 years of proven experience in
      helping companies create and maintain a better codebase.
    </p>

    <!-- <button class="button big button-discuss-primary">Get In Touch</button> -->
    <AppSosmed />
  </section>
</template>

<style lang="scss" scoped>
.about {
  min-height: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  color: $text-color;
  position: relative;
}

.hello {
  font-size: 1.5rem;
  color: $text-color-secondary;
}

.name {
  font-size: 2rem;
  font-weight: bold;
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 1rem;
    left: 0;
    height: 30px;
    width: 200px;
    background: linear-gradient(
      90deg,
      $primary-color 0%,
      rgba(255, 122, 0, 0) 100%
    );
    z-index: -1;
  }
}

.role {
  font-size: 1.2rem;
}

.describe {
  margin-top: 2rem;
  max-width: 100%;
  font-size: 1.5rem;
  font-weight: 400;
}

.pattern {
  position: absolute;
  bottom: -12rem;
  right: -1rem;
  z-index: 1;
  height: 12rem;
}

@media (1024px <= width) {
  .about {
    min-height: 600px;
  }

  .hello{
    font-size: 2rem;
  }

  .name {
    font-size: 3rem;

    &:before {
      bottom: 0;
    }
  }
  .pattern {
    position: absolute;
    bottom: -6rem;
    right: -1rem;
    z-index: 1;
  }
}
</style>
