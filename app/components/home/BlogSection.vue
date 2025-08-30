<template>
  <section
    :id="id"
    class="container-px max-w-6xl mx-auto py-14 md:py-20 relative"
  >
    <WatermarkItem :text="title" />
    <div class="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        v-for="(post, index) in posts"
        :key="index"
        :title="post.title"
        :description="post.description"
        :year="post.year"
        :view-url="post.viewUrl"
        :source-url="post.sourceUrl"
      />
      <SeeMoreCard :href="moreUrl" />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  title: string;
  moreUrl: string;
  posts: {
    title: string;
    description: string;
    year: string | number;
    viewUrl?: string;
    sourceUrl?: string;
  }[];
}>();
</script>
