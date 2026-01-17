import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string(),
        pinned: z.boolean().optional(),
        bannerImage: z.string().optional(),
        author: z.string().optional(),
        readingTime: z.string().optional(),
        tags: z.string().optional()
      }),
    }),
  },
})