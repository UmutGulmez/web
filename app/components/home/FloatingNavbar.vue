<template>
  <!-- Floating Navigation Dock -->
  <nav
    id="floating-dock"
    class="fixed z-50 left-1/2 top-8 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full shadow-2xl bg-gradient-to-r from-[#18181b] via-[#232323] to-[#101010] border border-white/10 backdrop-blur-md transition-all duration-300"
  >
    <a
      href="#top"
      id="dock-home"
      class="flex items-center justify-center w-10 h-10 rounded-full bg-[#232323] transition group"
      aria-label="Home"
    >
      <svg
        class="w-6 h-6 text-white transition"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 12l9-7 9 7M4 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10"
        />
      </svg>
    </a>
    <a
      href="#aboutme"
      id="dock-aboutme"
      class="px-4 py-2 rounded-full font-medium text-white/90 hover:bg-white/10 transition"
      >About Me</a
    >
    <a
      href="#contact"
      id="dock-contact"
      class="px-4 py-2 rounded-full font-medium text-white/90 hover:bg-white/10 transition"
      >Contact</a
    >
    <a
      href="#projects"
      id="dock-projects"
      class="px-4 py-2 rounded-full font-medium text-white/90 hover:bg-white/10 transition"
      >Projects</a
    >
    <a
      href="#blog"
      id="dock-blog"
      class="px-4 py-2 rounded-full font-medium text-white/90 hover:bg-white/10 transition"
      >Blog</a
    >
  </nav>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  // Handle dock highlighting based on scroll position
  const dockLinks = [
    { id: "dock-home", section: "top" },
    { id: "dock-aboutme", section: "aboutme" },
    { id: "dock-contact", section: "contact" },
    { id: "dock-projects", section: "projects" },
    { id: "dock-blog", section: "blog" },
  ];

  function getSectionTop(id: string) {
    const el = document.getElementById(id) || document.querySelector(`#${id}`);
    if (!el) return Infinity;
    const rect = el.getBoundingClientRect();
    return rect.top + window.scrollY;
  }

  function highlightDock() {
    const scroll = window.scrollY + window.innerHeight / 4;
    let active = dockLinks[0].id;

    for (let i = 0; i < dockLinks.length; i++) {
      const currTop = getSectionTop(dockLinks[i].section);
      const nextTop =
        i + 1 < dockLinks.length
          ? getSectionTop(dockLinks[i + 1].section)
          : Infinity;

      if (scroll >= currTop && scroll < nextTop) {
        active = dockLinks[i].id;
        break;
      }
    }

    for (const link of dockLinks) {
      const el = document.getElementById(link.id);
      if (el) {
        if (link.id === active) {
          el.classList.add("bg-white/10", "text-white", "shadow-lg");
          el.classList.remove("text-white/90");
        } else {
          el.classList.remove("bg-white/10", "text-white", "shadow-lg");
          el.classList.add("text-white/90");
        }
      }
    }
  }

  window.addEventListener("scroll", highlightDock, { passive: true });
  window.addEventListener("resize", highlightDock);

  // Initial highlight
  setTimeout(highlightDock, 100);
});
</script>
