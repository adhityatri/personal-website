<script lang="ts" setup>
import { stack } from '../types/projects';
const props = defineProps({
  name: String,
  logo: String,
  institusi: String,
  periode: String,
  stacks: Array<stack>,
});
</script>
<template>
  <div class="card-item">
    <div class="card-item-desc">
      <img class="card-item-logo" :src="props.logo" alt="" />
      <span class="card-item-title">{{ props.name }}</span>
      <small class="card-item-subtitle">{{ props.institusi }}</small>
    </div>

    <div class="stack">
        <div class="stack-title">Featured technologies used :</div>
        <div class="stack-list">
            <img
                v-for="items in stacks"
                :src="`/stacks/${items.logo}.png`"
                alt=""
            />
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-item {
  width: 100%;
  background-color: $based-color;
  color: $text-color;
  border: 4px solid white;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem;
  box-shadow: 0px 4px 14px 0 transparentize($color: #000000, $amount: 0.8);

  &-desc{
    display: flex;
    flex-direction: column;
  }


  &-logo {
    width: 72px;
    border-radius: 1rem;
    margin-bottom: 1rem;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    box-shadow: 10px 10px 20px #dedede, -10px -10px 20px #ffffff;
    border: 2px solid white;
  }

  &-title {
    font-weight: bold;
  }
  &-subtitle {
    font-weight: 500;
    color: $text-color-secondary;
  }
}

.stack {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &-title{
        font-weight: 500;
        color: $text-color-secondary;
    }
    &-list{
        display: flex;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
        margin-left: -.4rem;
        img {
            width: 48px;
        }
    }
}
</style>
