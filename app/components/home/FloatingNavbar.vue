<template>
  <!-- Floating Navigation Dock -->
  <nav
    id="floating-dock"
    class="hidden md:flex fixed z-50 left-1/2 top-8 -translate-x-1/2 items-center gap-2 px-4 py-2 rounded-full shadow-2xl backdrop-blur-md bg-black/30 border border-white/5 transition-all duration-300"
    style="background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.25)); box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.15);"
  >
    <NuxtLink
      to="/"
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
    </NuxtLink>
    <NuxtLink
      to="/#aboutme"
      id="dock-aboutme"
      class="px-4 py-2 rounded-full font-medium text-white/90 hover:bg-white/10 transition"
      >About Me</NuxtLink
    >
    <NuxtLink
      to="/#contact"
      id="dock-contact"
      class="px-4 py-2 rounded-full font-medium text-white/90 hover:bg-white/10 transition"
      >Contact</NuxtLink
    >
    <NuxtLink
      to="/#projects"
      id="dock-projects"
      class="px-4 py-2 rounded-full font-medium text-white/90 hover:bg-white/10 transition"
      >Projects
    </NuxtLink>
    <NuxtLink
      to="/blog"
      id="dock-blog"
      class="px-4 py-2 rounded-full font-medium text-white/90 hover:bg-white/10 transition flex items-center gap-1.5"
    >
      Blog
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M7 17L17 7M17 7H7M17 7V17"
        />
      </svg>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

// Smooth scroll function with easing
function smoothScrollTo(targetPosition: number, duration: number = 600) {
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  // Easing function for smooth animation (ease-in-out)
  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

// Handle navigation click with smooth scroll
function handleNavClick(event: Event, sectionId: string) {
  // Only handle clicks for hash links (not external pages like /blog)
  if (sectionId === "blog") return;

  event.preventDefault();

  let targetElement: HTMLElement | null = null;

  if (sectionId === "top") {
    // Scroll to top
    smoothScrollTo(0, 600);
  } else {
    // Find the target section
    targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - 100; // Offset for navbar
      smoothScrollTo(targetPosition, 600);
    }
  }

  // Update URL hash without jumping
  if (sectionId !== "top") {
    history.pushState(null, "", `/#${sectionId}`);
  } else {
    history.pushState(null, "", "/");
  }
}

onMounted(() => {
  // Handle dock highlighting based on scroll position
  const dockLinks = [
    { id: "dock-home", section: "top" },
    { id: "dock-aboutme", section: "aboutme" },
    { id: "dock-contact", section: "contact" },
    { id: "dock-projects", section: "projects" },
    { id: "dock-blog", section: "blog" },
  ] as const;

  function getSectionTop(id: string) {
    const el = document.getElementById(id) || document.querySelector(`#${id}`);
    if (!el) return Infinity;
    const rect = el.getBoundingClientRect();
    return rect.top + window.scrollY;
  }

  function highlightDock() {
    const scroll = window.scrollY + window.innerHeight / 4;
    let active: (typeof dockLinks)[number]["id"] = dockLinks[0].id;

    for (let i = 0; i < dockLinks.length; i++) {
      const currTop = getSectionTop(dockLinks[i]!.section);
      const nextTop =
        i + 1 < dockLinks.length
          ? getSectionTop(dockLinks[i + 1]!.section)
          : Infinity;

      if (scroll >= currTop && scroll < nextTop) {
        active = dockLinks[i]!.id;
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

  // Add click handlers to navigation links
  const navLinks = document.querySelectorAll("#floating-dock a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href?.startsWith("/#")) {
        const sectionId = href.substring(2); // Remove "/#"
        handleNavClick(e, sectionId);
      } else if (href === "/") {
        handleNavClick(e, "top");
      }
    });
  });
});
</script>
