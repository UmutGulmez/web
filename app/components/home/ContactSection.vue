<template>
  <section
    :id="id"
    class="container-px max-w-6xl mx-auto py-14 md:py-20 relative"
  >
    <WatermarkItem :text="title" />
    <div class="mt-7 flex justify-center">
      <ContactLinks />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  title: string;
}>();
</script>
