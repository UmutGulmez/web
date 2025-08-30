<template>
  <article
    class="relative rounded-2xl bg-gradient-to-br from-[#18181b] via-[#232323] to-[#101010] shadow-xl border border-white/10 flex flex-col min-h-[220px] group transition-transform hover:-translate-y-1 hover:shadow-2xl"
  >
    <div class="flex-1 flex flex-col justify-between p-6">
      <div>
        <h3 class="font-semibold text-lg text-white mb-1">{{ title }}</h3>
        <p class="text-sm text-white/60 mb-2">{{ description }}</p>
      </div>
      <span
        class="inline-block text-xs text-white/40 bg-white/5 rounded px-2 py-1 w-fit mb-2"
        >{{ year }}</span
      >
    </div>
    <div
      class="border-t border-white/10 bg-[#18181b]/60 px-0 py-0 grid grid-cols-2 relative rounded-b-2xl"
      style="min-height: 48px"
    >
      <div class="absolute left-1/2 top-0 h-full w-px bg-white/10"></div>
      <a
        :href="viewUrl"
        class="rounded-bl-2xl hover:bg-[#2D2D2D]/90 flex items-center justify-center h-full py-3 text-white/80 hover:text-white text-sm font-medium transition"
        >View</a
      >
      <a
        :href="sourceUrl"
        class="rounded-br-2xl hover:bg-[#2D2D2D]/90 flex items-center justify-center h-full py-3 text-white/80 hover:text-white text-sm font-medium transition"
        >Source</a
      >
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  title: string;
  description: string;
  year: string | number;
  "view-url"?: string;
  "source-url"?: string;
}>();

// Compute these for easier use in template
const viewUrl = computed(() => props["view-url"] || "#");
const sourceUrl = computed(() => props["source-url"] || "#");
</script>
