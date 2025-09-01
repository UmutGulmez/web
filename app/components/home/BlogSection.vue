<template>
  <section
    :id="'blog'"
    class="container-px max-w-6xl mx-auto py-14 md:py-20 relative"
  >
    <WatermarkItem :text="title" />
    <div class="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">


      <!-- Blog posts -->
        <div
          v-for="post in posts"
          :key="post.path"
          class="bg-black/50 border border-white/10 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <NuxtLink :to="post.path">
            <div
              class="h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"
            >
              <span class="text-3xl text-white/30">{{ post.title[0] }}</span>
            </div>
            <div class="p-5">
              <h3 class="text-xl font-bold text-white mb-2">
                {{ post.title }}
              </h3>
              <p class="text-gray-300 mb-4 line-clamp-2">
                {{ post.description }}
              </p>
            </div>
          </NuxtLink>
        </div>
        <SeeMoreCard :href="'/blog'" />
    </div>
  </section>
</template>

<script setup lang="ts">
const title = 'Blog';

const { data: posts } = await useAsyncData(() => {
  return queryCollection('blog')
    .order('date', 'DESC')
    .all()
})

</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
