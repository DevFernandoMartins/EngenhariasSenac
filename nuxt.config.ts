// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      script: [
        {
          src: 'https://kit.fontawesome.com/a474f4b275.js',
          crossorigin: 'anonymous'
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js',
          crossorigin: 'anonymous'
        }
      ]
    }
  }
})
