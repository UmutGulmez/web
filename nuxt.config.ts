// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/robots', '@nuxtjs/sitemap'],
  site: {
    url: 'https://umututku.com',
    name: 'Umut Utku'
  },
  robots: {
    groups: [
      // Search engines (and everyone else not listed below) may crawl everything
      { userAgent: '*', allow: '/' },
      // AI training / scraping bots are blocked entirely
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'Google-Extended',
          'Applebot-Extended',
          'PerplexityBot',
          'Perplexity-User',
          'CCBot',
          'Bytespider',
          'Amazonbot',
          'cohere-ai',
          'Diffbot',
          'FacebookBot',
          'meta-externalagent',
          'Omgilibot',
          'ImagesiftBot',
          'YouBot',
          'Timpibot'
        ],
        disallow: ['/']
      }
    ]
  },
  sitemap: {
    // Blog posts come from the content collection (see content.config.ts)
    // Static pages are discovered automatically from the router
  },
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
  content: {
    experimental: {
      sqliteConnector: 'native'
    }
  },
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