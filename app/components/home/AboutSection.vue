<template>
  <section
    :id="id"
    class="container-px max-w-6xl mx-auto py-14 md:py-20 relative"
  >
    <WatermarkItem :text="title" />
    <div class="mt-7 mb-8 flex justify-center">
      <AboutMe />
      <TechStack />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  title: string;
}>();
</script>
