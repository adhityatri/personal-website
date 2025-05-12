<template>
  <div class="p-8 bg-[#ffddd2] rounded-2xl shadow-xl flex flex-col">
    <div class="text-2xl font-bold text-gray-700">
      Interested in collaborating with me?
    </div>

    <p class="my-4 text-gray-600">
      I maintain an open dialogue regarding potential engagements in product
      design and strategic partnership opportunities. If your organization is
      exploring new design initiatives or seeking collaborative ventures, I
      encourage you to initiate a conversation to explore how my capabilities
      can align with your objectives.
    </p>

    <get-in-touch class="mt-4" v-if="withAction" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  withAction: {
    type: Boolean,
    default: false
  }
});
</script>
