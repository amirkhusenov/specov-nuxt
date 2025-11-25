// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
   app: {
    head: {
      script: [
        {
          src: 'https://api-maps.yandex.ru/2.1/?apikey=4dceb808-e55c-4c98-9645-5bd4c641065f&lang=ru_RU',
          async: true,
          defer: true
        }
      ]
    }
  }
})
