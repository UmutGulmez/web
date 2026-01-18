<template>
  <!-- Loading Animation -->
  <Transition name="fade">
    <div
      v-if="isLoading"
      class="fixed inset-0 z-[9999] bg-black flex items-center justify-center px-6 sm:px-14 md:px-20"
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

  <!-- Main Hero Section -->
  <main class="min-h-[calc(84vh-88px)]">
    <div
      class="flex items-center justify-center px-6 sm:px-14 md:px-20 top-[34vh] sm:top-[30vh] min-h-[calc(84vh-88px)]"
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
      }, 800);
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
</style>
