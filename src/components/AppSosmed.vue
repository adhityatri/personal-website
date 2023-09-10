<script setup lang="ts">
import { ref } from "vue";
import { sosmed } from "../types/sosmed";

const props = defineProps({
  solid: {
    type: Boolean,
    default: false,
  },
  sosmedOnly: {
    type: Boolean,
    default: false,
  },
});

const sosmedData = ref<sosmed[]>([
  {
    name: "LinkedIn",
    logo: "linkedin",
    link: "https://www.linkedin.com/in/adhitya-tri/",
  },
  {
    name: "Github",
    logo: "github",
    link: "https://github.com/adhityatri",
  },
]);

const open = (item: string) => {
  window.open(item, "_blank");
};
</script>

<template>
  <ul class="sosmed" :class="solid ? 'solid' : ''">
    <li v-if="!sosmedOnly"><span>Check out My :</span></li>
    <li @click="open(item.link)" v-for="item in sosmedData">
      <img :src="`/${item.logo}.svg`" :alt="item.name" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.sosmed {
  display: flex;
  gap: 1rem;
  margin-top: 7rem;
  list-style: none;

  li {
    &:first-child {
      background: transparent;
      box-shadow: unset;
      font-size: 1.2rem;
      padding: 0;
      margin-right: 1rem;
      cursor: auto;

      &:hover {
        border-color: transparent;
      }
    }

    border-radius: 1rem;
    background: linear-gradient(145deg, #e6e6e6, white);
    box-shadow: 6px 6px 8px #ebebeb, -6px -6px 8px lighten($based-color, 20);
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ease-in-out 0.2s;
    transition-delay: 0.1s;
    border: 2px solid $based-color;
    cursor: pointer;

    &:hover {
      border-color: $primary-color;
    }

    img {
      height: 32px;
    }
  }

  &.solid {
    li {
      box-shadow: unset;
      padding: .75rem;
      background: transparent;
      border-color: transparentize($color: white, $amount: 0.7);

      &:hover{
        border-color: white;
      }
    }
  }
}
</style>
