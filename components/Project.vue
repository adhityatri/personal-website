<template>
  <div
    :class="`${
      isMobile ? 'w-[85%] self-center' : 'w-full'
    } flex flex-col gap-2`"
  >
    <app-title>
      <slot name="componentTitle"> Latest Selected Projects </slot>
    </app-title>

    <div class="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <card v-for="(item, index) in projectList" :key="index">
        <small class="text-[#006d77]">{{ item.client }}</small>
        <div class="font-bold text-gray-700">
          {{ item.title }}
        </div>

        <span class="mt-4 text-sm line-clamp-2">{{
          item?.descriptions ?? ' No Descriptions '
        }}</span>

        <br />
        <ul
          class="flex flex-1 flex-wrap items-end justify-start mt-2 gap-2 border-gray-300 pt-2"
        >
          <li
            class="text-sm rounded-lg shadow-md bg-white hover:bg-[#83c5be] hover:text-[#006d77] transition-all duration-200 px-3! py-1!"
            v-for="(tech, index) in item.technology"
            :key="index"
          >
            <span class="capitalize">{{ tech }}</span>
          </li>
        </ul>
      </card>
      <UButton
        v-if="props.mode === 'homepage'"
        @click="moreProject"
        icon="line-md:chevron-right-circle"
        class="w-fit my-4 bg-white text-[#006d77] hover:bg-[#83c5be] ring-1 ring-[#83c5be] hover:text-[#006d77] hover:ring-[#006d77]]"
        size="lg"
      >
        View More
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import project from '~/data/project.json';
const { isMobile } = useDevice();
const projectList = shallowRef(project);

const props = defineProps({
  mode: {
    type: String as PropType<'homepage' | 'workpage'>,
    default: 'homepage'
  }
});

watchEffect(() => {
  if (props.mode === 'homepage') {
    projectList.value = project.slice(0, 3);
  } else {
    projectList.value = project;
  }
});

const moreProject = async () => {
  await navigateTo({ name: 'work-pages' });
};
</script>
