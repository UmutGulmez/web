<template>
  <!-- Loading Animation - Desktop -->
  <Transition name="fade">
    <div
      v-if="isLoading"
      class="hidden md:flex fixed inset-0 z-[9999] bg-black items-center justify-center px-6 sm:px-14 md:px-20"
      style="transform: translate(-2px, 2px);"
    >
      <div class="max-w-3xl">
        <h1
          class="font-[Ubuntu] text-center pb-2 text-gray-300/90 text-3xl sm:text-5xl md:text-6xl"
        >
          <span>{{ typedText }}</span>
        </h1>
      </div>
    </div>
  </Transition>

  <!-- Loading Animation - Mobile -->
  <Transition name="fade">
    <div
      v-if="isLoading"
      class="md:hidden fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center px-6"
    >
      <!-- Modern animated bars -->
      <div class="flex items-end gap-2 mb-8">
        <div class="w-2 h-12 bg-gradient-to-t from-gray-500 to-gray-300 rounded-full animate-bounce" style="animation-delay: 0ms;"></div>
        <div class="w-2 h-16 bg-gradient-to-t from-gray-500 to-gray-300 rounded-full animate-bounce" style="animation-delay: 100ms;"></div>
        <div class="w-2 h-10 bg-gradient-to-t from-gray-500 to-gray-300 rounded-full animate-bounce" style="animation-delay: 200ms;"></div>
        <div class="w-2 h-14 bg-gradient-to-t from-gray-500 to-gray-300 rounded-full animate-bounce" style="animation-delay: 300ms;"></div>
        <div class="w-2 h-12 bg-gradient-to-t from-gray-500 to-gray-300 rounded-full animate-bounce" style="animation-delay: 400ms;"></div>
      </div>
      
      <!-- Text with fade-in animation -->
      <div class="text-center space-y-2 loading-text">
        <h2 class="text-2xl font-bold text-white tracking-tight">Umut Utku</h2>
        <p class="text-sm text-white/50 tracking-wider">Electronics Engineer</p>
      </div>
    </div>
  </Transition>

  <!-- Main Hero Section -->
  <main class="min-h-[60vh] md:min-h-[calc(84vh-88px)]">
    <div
      class="flex items-center justify-center px-6 sm:px-14 md:px-20 min-h-[60vh] md:min-h-[calc(84vh-88px)] md:top-[30vh]"
    >
      <div class="max-w-3xl">
        <h1
          class="font-[Ubuntu] text-center pb-2 text-gray-300/90 text-3xl sm:text-5xl md:text-6xl"
        >
          <span>
            <span>
              an electronics engineer who
              <span class="text-white font-semibold">codes</span>
            </span>
          </span>
        </h1>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Loading state
const isLoading = ref(true);
const typedText = ref('');

// The text to type
const fullText = 'an electronics engineer who codes';

onMounted(() => {
  let currentIndex = 0;

  // Type each letter with a delay
  const typeLetters = () => {
    if (currentIndex < fullText.length) {
      typedText.value = fullText.substring(0, currentIndex + 1);
      currentIndex++;
      setTimeout(typeLetters, 50); // 50ms delay between letters
    } else {
      // Wait a bit after typing completes, then fade out
      setTimeout(() => {
        isLoading.value = false;
      }, 500);
    }
  };

  // Start typing after a brief delay
  setTimeout(typeLetters, 500);
});
</script>

<style scoped>
/* Fade transition for loading screen */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* Loading text animation */
.loading-text {
  animation: fadeInUp 0.8s ease-out 0.5s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
