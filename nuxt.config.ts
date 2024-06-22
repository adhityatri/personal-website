// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({ 
  devtools: { enabled: false },
  future: {
    compatibilityVersion: 4
  },
  experimental: {
    componentIslands: true
  }
})
