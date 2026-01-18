<template>
  <!-- Mobile Menu Button -->
  <button
    @click="toggleMenu"
    class="md:hidden fixed top-6 right-6 z-[100] w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-black/60"
    :class="{ 'gap-0': isOpen }"
    aria-label="Toggle menu"
  >
    <span
      class="w-6 h-0.5 bg-white rounded-full transition-all duration-300"
      :class="isOpen ? 'rotate-45 translate-y-1' : ''"
    ></span>
    <span
      class="w-6 h-0.5 bg-white rounded-full transition-all duration-300"
      :class="isOpen ? 'opacity-0' : ''"
    ></span>
    <span
      class="w-6 h-0.5 bg-white rounded-full transition-all duration-300"
      :class="isOpen ? '-rotate-45 -translate-y-1' : ''"
    ></span>
  </button>

  <!-- Full Page Mobile Menu -->
  <Transition name="menu">
    <div
      v-if="isOpen"
      class="md:hidden fixed inset-0 z-[99] bg-black/95 backdrop-blur-xl"
      @click="closeMenu"
    >
      <div class="flex flex-col items-center justify-center h-full px-8">
        <!-- Navigation Links -->
        <nav class="flex flex-col items-center gap-8 mb-12">
          <NuxtLink
            v-for="(link, index) in navLinks"
            :key="link.to"
            :to="link.to"
            @click="handleNavClick"
            class="nav-link text-4xl font-bold text-white/80 hover:text-white transition-all duration-300 relative"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            {{ link.label }}
            <span class="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
        </nav>

        <!-- Contact Email Button -->
        <a
          href="mailto:contact@umututku.com"
          class="relative flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-700/80 via-green-600/80 to-emerald-500/80 border border-green-400/30 shadow-lg hover:scale-105 transition-all duration-300"
          style="animation-delay: 400ms"
        >
          <span class="relative flex items-center">
            <span
              class="inline-block w-3 h-3 rounded-full bg-green-400 shadow-[0_0_8px_2px_rgba(34,197,94,0.7)] animate-pulse"
            ></span>
          </span>
          <span class="font-medium text-white text-lg tracking-wide">
            Get in Touch
          </span>
        </a>

        <!-- Social Links -->
        <div class="flex items-center gap-6 mt-12" style="animation-delay: 500ms">
          <a
            href="https://github.com/UmutGulmez"
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://twitter.com/umutpy"
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#aboutme' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Contact', to: '/#contact' },
  { label: 'Blog', to: '/blog' },
];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  // Prevent body scroll when menu is open
  if (isOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMenu = () => {
  isOpen.value = false;
  document.body.style.overflow = '';
};

const handleNavClick = (event: Event) => {
  const target = event.target as HTMLAnchorElement;
  const href = target.getAttribute('href');
  
  // Close menu
  closeMenu();
  
  // Handle smooth scroll for hash links
  if (href?.startsWith('/#')) {
    event.preventDefault();
    const sectionId = href.substring(2);
    const element = document.getElementById(sectionId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }
};
</script>

<style scoped>
/* Menu transition */
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.4s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

/* Nav link animation */
.nav-link {
  animation: slideInUp 0.5s ease forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover effect for nav links */
.nav-link:hover {
  transform: translateX(10px);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #10b981, #34d399);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}
</style>
