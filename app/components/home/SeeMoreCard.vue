<template>
  <a
    :href="href"
    class="rounded-2xl opacity-60 hover:opacity-70 bg-gradient-to-br from-[#18181b] via-[#232323] to-[#101010] shadow-xl border border-white/10 flex flex-col min-h-[220px] group transition-transform hover:shadow-2xl"
  >
    <p class="flex justify-center items-center h-full text-md text-white">
      See More
      <span class="p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>
    </p>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string;
}>();
</script>
