<template>
  <footer
    class="px-6 sm:px-14 md:px-20 py-10 text-xs text-white/50 flex items-center justify-between"
  >
    <p>© {{ year }} · All rights reserved</p>
    <nav class="flex items-center gap-6">
      <NuxtLink class="hover:text-white transition" to="/#aboutme">about</NuxtLink>
      <NuxtLink class="hover:text-white transition" to="/#contact">contact</NuxtLink>
      <NuxtLink class="hover:text-white transition" to="/#projects">projects</NuxtLink>
      <NuxtLink class="hover:text-white transition" to="/blog">blog</NuxtLink>
      <a
        href="mailto:contact@umututku.com"
        class="relative flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-green-700/80 via-green-600/80 to-emerald-500/80 border border-green-400/30 shadow-lg hover:scale-105 transition-all duration-200 group"
      >
        <span class="relative flex items-center">
          <span
            class="inline-block w-3 h-3 rounded-full bg-green-400 shadow-[0_0_8px_2px_rgba(34,197,94,0.7)] animate-pulse mr-2"
          ></span>
        </span>
        <span class="font-medium text-white/90 tracking-wide drop-shadow"
          >contact@umututku.com</span
        >
      </a>
    </nav>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
