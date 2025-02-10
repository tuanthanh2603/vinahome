// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/main.css', '~/assets/scss/main.scss'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-vue3-google-signin'
  ],

  googleSignIn: {
    clientId: '704001333674-28enifu6eje8ninqplmov13crgdfq1o2.apps.googleusercontent.com',
  },




  runtimeConfig: {
    public: {
      apiUrl: "http://localhost:8080",

    },
  },


  app: {
    head: {
      title: 'VinaHome',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          hid: "csp",
          httpEquiv: "Content-Security-Policy",
          content: "img-src 'self' https://lh3.googleusercontent.com;"
        },
        {
          name: "description",
          content: "VinaHome"
        },
        {
          name: "og:title",
          content: "VinaHome"
        },
        {
          name: "og:description",
          content: "VinaHome"
        },
        {
          name: "og:site_name",
          content: "VinaHome"
        },
      ]
    }
  }
});