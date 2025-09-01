<template>
  <NuxtLink
    :to="article.path"
    class="blog-card bg-black/50 border border-white/10 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
  >
    <div v-if="article.cover" class="h-48 overflow-hidden">
      <img
        :src="article.cover"
        :alt="article.title"
        class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div
      v-else
      class="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"
    >
      <span class="text-3xl text-white/30">{{ article.title[0] }}</span>
    </div>
    <div class="p-5 flex flex-col flex-grow">
      <p v-if="article.date" class="text-sm text-gray-400 mb-2">
        {{ formatDate(article.date) }}
      </p>
      <h2 class="text-xl font-bold text-white mb-2">{{ article.title }}</h2>
      <p class="text-gray-300 mb-4 flex-grow">{{ article.description }}</p>
      <div class="mt-auto">
        <span class="text-primary-500 inline-flex items-center">
          Read More
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface BlogArticle {
  path: string;
  title: string;
  date?: string;
  description?: string;
  cover?: string;
}

defineProps<{
  article: BlogArticle;
}>();

// Format date for display
function formatDate(dateString: string): string {
  if (!dateString) return "";

  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
</script>

<style scoped>
.blog-card {
  backdrop-filter: blur(10px);
}
</style>
