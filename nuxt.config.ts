// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Adhitya Tri Wahyu Utomo | Software Engineer',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap'
        }
      ]
    }
  },
  devtools: { enabled: false },
  compatibilityDate: '2025-05-01',
  experimental: {
    componentIslands: true
  },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false,
    theme: {
      colors: ['primary', 'error']
    }
  },
  devServer: {
    port: 3001,
    host: '0.0.0.0'
  }
});
