---
title: Getting Started with Nuxt Content
description: Learn how to set up and use Nuxt Content to create Markdown-driven blogs and documentation sites
date: 2025-08-20
author: John Doe
cover: /images/blog/nuxt-content.jpg
---

# Getting Started with Nuxt Content

Nuxt Content is a powerful module for your Nuxt applications that acts as a file-based CMS, allowing you to write content in Markdown, YAML, JSON, or XML files. In this post, we'll explore how to set up and use Nuxt Content to create Markdown-driven blogs and documentation sites.

## Installation

To get started with Nuxt Content, first install the module:

```bash
npm install @nuxt/content
```

Then, add it to your `nuxt.config.ts` file:

```typescript
export default defineNuxtConfig({
  modules: ['@nuxt/content']
})
```

## Writing Content

Content lives in the `content/` directory of your project. You can organize your content however you want, using directories and subdirectories.

Here's an example of a Markdown file:

```markdown
---
title: My First Post
description: This is my first blog post
---

# My First Post

This is the content of my post...
```

## Displaying Content

To display your content, use the `ContentDoc` component:

```vue
<template>
  <ContentDoc />
</template>
```

For a more customized approach, you can use `queryContent`:

```vue
<script setup>
const { data } = await useAsyncData('article', () =>
  queryContent('/articles').find()
)
</script>

<template>
  <ul>
    <li v-for="article in data" :key="article._path">
      {{ article.title }}
    </li>
  </ul>
</template>
```

## Conclusion

Nuxt Content provides a simple yet powerful way to manage content in your Nuxt applications. With its file-based approach, you can focus on writing content without worrying about databases or APIs.
