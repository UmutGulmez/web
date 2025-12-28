<template>
  <section
    :id="id"
    class="container-px max-w-6xl mx-auto py-14 md:py-20 relative"
  >
    <WatermarkItem :text="title" />
    <div class="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :year="project.year"
        :view-url="project.viewUrl"
        :source-url="project.sourceUrl"
      />
    </div>
    <SeeMoreCard :href="moreUrl" />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  title: string;
  moreUrl: string;
  projects: {
    title: string;
    description: string;
    year: string | number;
    viewUrl?: string;
    sourceUrl?: string;
  }[];
}>();
</script>
