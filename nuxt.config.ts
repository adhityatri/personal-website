// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  experimental: {
    componentIslands: true,
  },

  modules: ["@nuxt/ui"],

  colorMode: {
    preference: 'light'
  }
})