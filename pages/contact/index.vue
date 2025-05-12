<template>
  <div class="flex flex-col w-full gap-4 py-8">
    <div class="p-8 bg-[#ffddd2] rounded-xl shadow-xl flex flex-col">
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

      <!-- <get-in-touch class="mt-4" /> -->
    </div>
    <div class="w-full flex mt-6 gap-6">
      <my-picture />

      <div class="flex flex-col flex-1 p-8 bg-white rounded-xl shadow-xl relative overflow-hidden">
        <div class="text-[2.5rem] mb-4 font-bold text-[#006d77]">{{ profile.position }}</div>
        <div class="font-bold mb-4">
          <div class="text-xl">
            {{ profile.name }}
          </div>
          <div class="text-md">
            {{ profile.location }}
          </div>
        </div>
        <div class="flex items-center gap-4 mb-2">
            <UIcon class="text-xl" name="line-md:phone-call-twotone-loop" />
            {{ profile.phone }}
        </div>
        <div class="flex items-center gap-4">
            <UIcon class="text-xl" name="line-md:email-opened-twotone" />
          {{ profile.email }}
        </div>

        <div class="absolute bottom-0 left-0 py-4 px-8 flex justify-between w-full items-center">
          <social-media />
          <get-in-touch />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const profile = {
  name: 'Adhitya Tri Wahyu Utomo',
  position: 'Software Engineer',
  location: 'Jember, Indonesia',
  phone: '+6285158022805',
  email: 'adhityatri.work@gmail.com'
};
</script>
