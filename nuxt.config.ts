// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      script: [
        {
          src: 'https://kit.fontawesome.com/a474f4b275.js',
          crossorigin: 'anonymous'
        }
      ]
    }
  }
})
