// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxt/test-utils',
    '@pinia/nuxt'
   
  ],
  imports:{dirs:["stores"]},

  pinia: {
    storesDirs: ['./stores/**', './**/stores/**'],
  },
  alias:{
    pinia:"/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  }
})