<template>
  <div class="flex flex-col w-full gap-4 py-8">
    <promote />
    <div class="w-full flex mt-6 gap-6">
      <my-picture />

      <div
        class="flex flex-col flex-1 p-8 bg-white rounded-xl shadow-xl relative overflow-hidden"
      >
        <div class="text-[2.5rem] mb-4 font-bold text-[#006d77]">
          {{ profile.position }}
        </div>
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

        <div
          class="absolute bottom-0 left-0 py-4 px-8 flex justify-between w-full items-center"
        >
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

useHead({
  title: 'Contact - Adhitya Tri W. U. | Software Engineer',
  meta: [
    { name: 'description', content: 'Get in touch with Adhitya Tri Wahyu Utomo, a Software Engineer based in Jember, Indonesia. Available for software development projects and professional collaborations.' },
    { name: 'keywords', content: 'Contact Adhitya, Software Engineer Contact, Web Developer Jember, Hire Software Engineer' },
    { property: 'og:title', content: 'Contact - Adhitya Tri W. U. | Software Engineer' },
    { property: 'og:description', content: 'Connect with Adhitya Tri Wahyu Utomo, a Software Engineer specializing in web development and scalable applications.' },
    { property: 'og:type', content: 'profile' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Contact - Adhitya Tri W. U. | Software Engineer' },
    { name: 'twitter:description', content: 'Connect with Adhitya Tri Wahyu Utomo, a Software Engineer specializing in web development and scalable applications.' }
  ]
});
</script>
