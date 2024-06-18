import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: 'personal-website',
  server: {
    host: true,
    port: 8080,
  },
  css:{
    preprocessorOptions:{
      scss : {
        additionalData : '@import "./src/styles/_variables.scss";'
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "/~": resolve(__dirname, './src'),
      "/@public": resolve(__dirname, './public')
    },
  },
})
