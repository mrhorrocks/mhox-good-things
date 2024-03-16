// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Get online week - Good Things Foundation',
      meta: [{ name: 'description', content: 'Get online week - Good Things Foundation' }],
    }
  },
  css: [
    // "@/assets/css/main.css",
    "@/assets/scss/global.scss",
  ],
})
