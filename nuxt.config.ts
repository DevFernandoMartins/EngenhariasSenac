// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        { src: 'https://kit.fontawesome.com/a474f4b275.js', crossorigin: 'anonymous' }
      ]
    }
  }
})
