// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'utomosolutions.com | Adhitya Tri Wahyu Utomo | Software Engineer',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;800&display=swap'
        }
      ]
    },
    buildAssetsDir: 'assets'
  },
  devtools: { enabled: false },
  compatibilityDate: '2025-05-01',
  experimental: {
    componentIslands: true
  },
  modules: ['@nuxt/ui', '@nuxtjs/device', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false,
  },
  devServer: {
    port: 3001,
    host: '0.0.0.0'
  },
  image:{
    imageengine :{
      baseURL : 'https://85iby668.dev.cdn.imgeng.in',
      modifiers: {
        format: 'avif',
        quality: '60%',
        fit: 'cover'
      }
    }
  }
});