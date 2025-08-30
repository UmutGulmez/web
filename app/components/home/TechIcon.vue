<template>
  <div class="tech-icon aspect-square relative group">
    <i v-if="icon.type === 'fa'" :class="icon.class" />
    <!-- eslint-disable vue/no-v-html -->
    <div
      v-else-if="icon.type === 'svg'"
      class="w-[2rem]"
      v-html="icon.content"
    />
    <!-- eslint-enable vue/no-v-html -->
    <div
      class="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200"
    >
      {{ name }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  icon: {
    type: "fa" | "svg";
    class?: string;
    content?: string;
  };
}>();
</script>

<style scoped>
.tech-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #151515;
  color: #ffffffa4;
  fill: #ffffffa4;
}

.tech-icon:hover {
  color: #fff;
  fill: #fff;
}
</style>
