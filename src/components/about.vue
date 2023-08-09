<script setup lang="ts"></script>

<template>
  <section class="container about">
    <img class="pattern" src="@/assets/Pattern1.svg" alt="">
    <div class="hello">Hello, I'm</div>
    <div class="name">Adhitya Tri Wahyu Utomo</div>
    <div class="role">Software Engineer</div>

    <p class="describe">
      Experienced of developing a website as a Front End with 8 years of
      proven experience in helping companies create and maintain a better
      codebase.
    </p>

    <button class="button big button-discuss-primary">Let's Discuss</button>
  </section>
</template>

<style lang="scss" scoped>
.about {
  min-height: 520px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  color: $text-color;
  position: relative;
}

.hello {
  font-size: 2rem;
  color: $text-color-secondary;
}
.name {
  font-size: 3rem;
  font-weight: bold;
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 30px;
    width: 200px;
    background: linear-gradient(90deg, #ff902b 0%, rgba(255, 122, 0, 0) 100%);
    z-index: -1;
  }
}

.role {
  font-size: 1.2rem;
}

.describe{
    margin-top: 2rem;
    max-width: 100%;
    font-size: 1.5rem;
    font-weight: 400;
}

.pattern{
    position: absolute;
    bottom: -6rem;
    right: -1rem;
    z-index: 1;
}
</style>
