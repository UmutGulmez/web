<template>
  <div class="container mx-auto px-4 py-12 min-h-[75vh]">
    <h1 class="text-3xl font-bold mb-10 text-center">Blog Posts</h1>

    <!-- Loading indicator -->

    <!-- Blog posts -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <BlogCard
        v-for="article in posts"
        :key="article.path"
        :article="article"
      />


    </div>
  </div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData(() => {
  return queryCollection('blog')
    .order('date', 'DESC')
    .all()
})

</script>