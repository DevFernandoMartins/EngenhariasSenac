// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      script: [
        { src: 'https://kit.fontawesome.com/a474f4b275.js', crossorigin: 'anonymous' }
      ]
    },
  },

  modules: ['@nuxt/image'],

  runtimeConfig: {
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME
  },
})
