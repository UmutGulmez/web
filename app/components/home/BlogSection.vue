<template>
  <section
    :id="'blog'"
    class="container-px max-w-6xl mx-auto py-14 md:py-20 relative"
  >
    <WatermarkItem :text="title" />
    <div class="mt-7 grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <!-- Blog posts -->
        <div
          v-for="post in posts?.slice(0, 4)"
          :key="post.path"
          class="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:-translate-y-1 transition-transform hover:shadow-2xl"
        >
          <NuxtLink :to="post.path" class="flex flex-row h-full">
            <div
              class="w-32 m-3 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center flex-shrink-0"
            >
              <img
                :src="post.bannerImage"
                :alt="post.title"
                class="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div class="p-5 flex flex-col min-h-full">
              <h3 class="text-xl font-bold text-white mb-2 line-clamp-2">
                {{ post.title }}
              </h3>
              <p class="text-gray-300 line-clamp-2">
                {{ post.description }}
              </p>
            </div>
          </NuxtLink>
        </div>

        <!-- Blank placeholder cards -->
        <div
          v-for="n in blankCardsCount"
          :key="'blank-' + n"
          class="bg-neutral-900  rounded-lg overflow-hidden shadow-lg "
        >
          <div class="flex flex-row h-full min-h-[152px]">
            <div
              class="w-32 m-3 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg flex-shrink-0"
            ></div>
            <div class="p-5 flex flex-col min-h-full"></div>
          </div>
        </div>
    </div>
    <SeeMoreCard :href="'/blog'" />
  </section>
</template>

<script setup lang="ts">
const title = 'Blog';

const { data: posts } = await useAsyncData(() => {
  return queryCollection('blog')
    .order('date', 'DESC')
    .all()
})

const blankCardsCount = computed(() => {
  const postCount = posts.value?.length ?? 0;
  return Math.max(0, 4 - Math.min(postCount, 4));
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
