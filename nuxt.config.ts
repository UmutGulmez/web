// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/content', '@nuxtjs/tailwindcss'],
  css: [
    '~/assets/styles/main.css'
  ],
  components: [
    {
      path: '~/app/components',
      pathPrefix: false,
    },
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      title: 'Umut Utku — Design & Interaction',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  vue: {
    compilerOptions: {
            isCustomElement: (tag) => tag === 'D'
    }
  }
})