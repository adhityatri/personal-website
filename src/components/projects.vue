<script setup lang="ts">
import cardItem from "./cardItem.vue";
import { project } from "../types/projects";
import { ref } from "vue";

const list = ref<project[]>([
  {
    name: "Smart Alarm",
    description: "",
    logo: "mceasy",
    institusi: "McEasy",
    periode: "June 2017 - July 2017",
    stacks: [
      {
        logo: "ionic",
        name: "ionic",
      },
      {
        logo: "xd",
        name: "xd",
      },
      {
        logo: "angular",
        name: "angular",
      },
    ],
  },
  {
    name: "FKPPN Portal",
    description: "",
    logo: "fkppn",
    institusi: "FKPPN",
    periode: "",
    stacks: [
      {
        logo: "vuejs",
        name: "vuejs",
      },
      {
        logo: "nuxtjs",
        name: "nuxtjs",
      },
      {
        logo: "sass",
        name: "sass",
      },
      {
        logo: "express",
        name: "express",
      },
      {
        logo: "figma",
        name: "figma",
      },
      {
        logo: "git",
        name: "git",
      },
    ],
  },
  {
    name: "SAKU",
    description: "",
    logo: "saku",
    institusi: "Poltekkes Surabaya",
    periode: "2021 - present",
    stacks: [
      {
        logo: "nuxtjs",
        name: "nuxtjs",
      },
      {
        logo: "element",
        name: "element",
      },
      {
        logo: "sass",
        name: "sass",
      },
      {
        logo: "git",
        name: "git",
      },
    ],
  },
  {
    name: "Portal Site",
    description: "",
    logo: "ppai",
    institusi: "PPAI Darunnajah",
    periode: "2021",
    stacks: [
      {
        logo: "vuejs",
        name: "vuejs",
      },
      {
        logo: "sass",
        name: "sass",
      },
      {
        logo: "git",
        name: "git",
      },
    ],
  },
  {
    name: "PPDB",
    description: "",
    logo: "ppai",
    institusi: "PPAI Darunnajah",
    periode: "2021",
    stacks: [
      {
        logo: "nuxtjs",
        name: "nuxtjs",
      },
      {
        logo: "sass",
        name: "sass",
      },
      {
        logo: "git",
        name: "git",
      },
      {
        logo: "element",
        name: "element",
      },
    ],
  },
  {
    name: "Siakad Mobile",
    description: "",
    logo: "ppai",
    institusi: "PPAI Darunnajah",
    periode: "2021",
    stacks: [
      {
        logo: "flutter",
        name: "flutter",
      },
      {
        logo: "git",
        name: "git",
      },
    ],
  },
  {
    name: "Dreamwell",
    description: "",
    logo: "pertamina",
    institusi: "Pertamina",
    periode: "2022",
    stacks: [
      {
        logo: "js",
        name: "js",
      },
      {
        logo: "html5",
        name: "html5",
      },
      {
        logo: "highcharts",
        name: "highcharts",
      },
    ],
  },
  {
    name: "PADSIM",
    description: "",
    logo: "pertamina",
    institusi: "Pertamina",
    periode: "2022",
    stacks: [
      {
        logo: "nuxtjs",
        name: "nuxtjs",
      },
      {
        logo: "element",
        name: "element",
      },
      {
        logo: "sass",
        name: "sass",
      },
      {
        logo: "git",
        name: "git",
      },
    ],
  },
]);
</script>

<template>
  <div class="container projects">
    <h1>Latest Project</h1>
    <p class="describe">
      I have been working on various projects in my spare time. Here is a list
      of some of my projects:
    </p>

    <div class="projects-list">
      <card-item
        v-for="(item, index) in list"
        :key="index"
        :name="item.name"
        :stacks="item.stacks"
        :institusi="item.institusi"
        :periode="item.periode"
        :logo="`/${item.logo}.svg`"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  flex: 1;
  overflow: auto;
  background: linear-gradient(to bottom, $based-color 15%, $primary-color);
  padding-top: 10rem;
  padding-bottom: 10rem;
  position: relative;

  &-list {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;

    @media (1024px <= width) {
      grid-template-columns: repeat(2, 1fr);
    }

    &-more {
      border: 3px solid white;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  line-height: 4rem;
}

.describe {
  width: 90%;
  font-size: 1.5rem;
}
</style>
