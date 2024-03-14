// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Good Things Foundation - Get online week',
      meta: [{ name: 'description', content: 'Good Things Foundation - Get online week' }],
    }
  },
  css: [
    // "@/assets/css/main.css",
    "@/assets/scss/global.scss",
  ],
})
