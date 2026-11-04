<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="open && current"
        class="modal-root"
        role="dialog"
        aria-modal="true"
        :aria-label="current.title"
      >
        <div class="modal-backdrop" @click="emit('close')"></div>

        <div ref="panelEl" class="modal-panel" tabindex="-1">
          <!-- Top bar -->
          <div class="modal-bar">
            <span class="font-mono text-xs text-zinc-500">
              {{ String(index + 1).padStart(2, "0") }}
              <span class="text-zinc-700">/</span>
              {{ String(total).padStart(2, "0") }}
            </span>
            <button
              ref="closeBtn"
              type="button"
              class="icon-btn"
              aria-label="Close"
              @click="emit('close')"
            >
              <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div class="modal-scroll">
            <Transition name="swap" mode="out-in">
              <div :key="current.title" class="modal-content">
                <!-- Gallery -->
                <div class="gallery">
                  <div class="gallery-main">
                    <Transition name="slide" mode="out-in">
                      <img
                        v-if="current.images?.length"
                        :key="slide"
                        :src="current.images[slide]"
                        :alt="`${current.title} screenshot ${slide + 1}`"
                        class="absolute inset-0 w-full h-full object-cover"
                      />
                      <div
                        v-else
                        :key="'ph' + slide"
                        class="absolute inset-0"
                        :class="`pat-${(basePattern + slide) % 5}`"
                      >
                        <div class="cover-art"></div>
                        <span class="placeholder-label">
                          Screenshot {{ String(slide + 1).padStart(2, "0") }}
                        </span>
                      </div>
                    </Transition>

                    <template v-if="slideCount > 1">
                      <button type="button" class="nav-btn left-3" aria-label="Previous image" @click="step(-1)">
                        <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
                      </button>
                      <button type="button" class="nav-btn right-3" aria-label="Next image" @click="step(1)">
                        <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                      </button>
                    </template>
                  </div>

                  <div v-if="slideCount > 1" class="flex gap-2 mt-3">
                    <button
                      v-for="n in slideCount"
                      :key="n"
                      type="button"
                      class="thumb"
                      :class="[{ 'is-active': slide === n - 1 }, !current.images?.length ? `pat-${(basePattern + n - 1) % 5}` : '']"
                      :aria-label="`Show image ${n}`"
                      @click="slide = n - 1"
                    >
                      <img v-if="current.images?.length" :src="current.images[n - 1]" alt="" class="w-full h-full object-cover" />
                      <div v-else class="cover-art"></div>
                    </button>
                  </div>
                </div>

                <!-- Info -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8">
                  <div class="lg:col-span-7">
                    <div class="flex flex-wrap items-center gap-2 mb-3">
                      <span class="pill">{{ current.year }}</span>
                      <span v-if="current.status" class="pill pill--live">
                        <i class="dot"></i>{{ current.status }}
                      </span>
                      <span v-if="current.duration" class="pill">{{ current.duration }}</span>
                    </div>

                    <h2 class="text-3xl md:text-4xl font-bold text-white tracking-tight">
                      {{ current.title }}
                    </h2>
                    <p v-if="current.role" class="mt-1 text-sm text-zinc-500">{{ current.role }}</p>

                    <div class="mt-5 space-y-4 text-zinc-400 leading-relaxed text-sm md:text-base">
                      <p v-if="!current.details?.length">{{ current.description }}</p>
                      <p v-for="(para, i) in current.details" :key="i">{{ para }}</p>
                    </div>

                    <div v-if="current.highlights?.length" class="mt-7">
                      <h3 class="section-label">Highlights</h3>
                      <ul class="mt-3 space-y-2.5">
                        <li
                          v-for="(h, i) in current.highlights"
                          :key="i"
                          class="flex gap-3 text-sm text-zinc-300"
                        >
                          <svg viewBox="0 0 24 24" class="w-4 h-4 mt-0.5 shrink-0 text-emerald-500" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                          {{ h }}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <aside class="lg:col-span-5 space-y-6">
                    <div v-if="current.stats?.length" class="grid grid-cols-2 gap-3">
                      <div v-for="s in current.stats" :key="s.label" class="stat">
                        <div class="text-2xl font-bold text-white tabular-nums">{{ s.value }}</div>
                        <div class="text-xs text-zinc-500 mt-1">{{ s.label }}</div>
                      </div>
                    </div>

                    <div v-if="current.stack?.length">
                      <h3 class="section-label">Tech stack</h3>
                      <ul class="mt-3 flex flex-wrap gap-2">
                        <li v-for="t in current.stack" :key="t" class="chip">{{ t }}</li>
                      </ul>
                    </div>

                    <div v-if="current.tags?.length">
                      <h3 class="section-label">Categories</h3>
                      <ul class="mt-3 flex flex-wrap gap-2">
                        <li v-for="t in current.tags" :key="t" class="chip chip--ghost">{{ t }}</li>
                      </ul>
                    </div>

                    <div class="flex flex-wrap gap-3 pt-1">
                      <a v-if="current.viewUrl" :href="current.viewUrl" class="btn btn--primary">
                        View project
                        <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                      </a>
                      <a v-if="current.sourceUrl" :href="current.sourceUrl" class="btn">
                        Source code
                      </a>
                    </div>
                  </aside>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Footer: prev / next project -->
          <div v-if="total > 1" class="modal-foot">
            <button type="button" class="foot-btn" @click="emit('prev')">
              <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
              Previous
            </button>
            <span class="hidden sm:block font-mono text-[11px] text-zinc-600">← → to browse · esc to close</span>
            <button type="button" class="foot-btn" @click="emit('next')">
              Next
              <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { Project } from "~/types/project";

const props = defineProps<{
  project: Project | null;
  index: number;
  total: number;
}>();

const emit = defineEmits<{
  close: [];
  prev: [];
  next: [];
}>();

const open = computed(() => !!props.project);

// Keep the last project around so content doesn't vanish during the close animation
const current = ref<Project | null>(props.project);
watch(
  () => props.project,
  (p) => {
    if (p) current.value = p;
  }
);

const slide = ref(0);
watch(current, () => (slide.value = 0));

const slideCount = computed(() =>
  current.value?.images?.length ? current.value.images.length : 3
);
const basePattern = computed(() => current.value?.pattern ?? props.index % 5);

function step(dir: number) {
  slide.value = (slide.value + dir + slideCount.value) % slideCount.value;
}

/* ── Scroll lock, focus, keyboard ── */
const panelEl = ref<HTMLElement | null>(null);
const closeBtn = ref<HTMLButtonElement | null>(null);
let lastFocused: HTMLElement | null = null;

function onKey(e: KeyboardEvent) {
  if (e.key === "Escape") emit("close");
  else if (e.key === "ArrowLeft") emit("prev");
  else if (e.key === "ArrowRight") emit("next");
  else if (e.key === "Tab") trapFocus(e);
}

function trapFocus(e: KeyboardEvent) {
  const nodes = panelEl.value?.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  if (!nodes?.length) return;
  const first = nodes[0]!;
  const last = nodes[nodes.length - 1]!;
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

watch(open, async (isOpen) => {
  if (!import.meta.client) return;
  if (isOpen) {
    lastFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    await nextTick();
    closeBtn.value?.focus();
  } else {
    document.body.style.overflow = "";
    window.removeEventListener("keydown", onKey);
    lastFocused?.focus?.();
  }
});

onBeforeUnmount(() => {
  if (!import.meta.client) return;
  document.body.style.overflow = "";
  window.removeEventListener("keydown", onKey);
});
</script>

<style scoped>
.modal-root {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(10px);
}
.modal-panel {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 62rem;
  max-height: calc(100dvh - 2rem);
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(160deg, #19191c 0%, #0f0f10 70%);
  box-shadow: 0 40px 120px -20px rgba(0, 0, 0, 0.95);
  outline: none;
  overflow: hidden;
}
.modal-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.modal-scroll {
  flex: 1;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  scrollbar-color: #3f3f46 transparent;
}
.modal-content {
  padding: 1.25rem 1.25rem 2rem;
}
@media (min-width: 768px) {
  .modal-content {
    padding: 1.75rem 2rem 2.5rem;
  }
}
.modal-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(0, 0, 0, 0.25);
}

/* Buttons */
.icon-btn,
.nav-btn {
  display: grid;
  place-items: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 9999px;
  color: #d4d4d8;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.25s ease;
}
.icon-btn:hover,
.nav-btn:hover {
  color: #0e0e0e;
  background: #f5f5f5;
}
.icon-btn:hover {
  transform: rotate(90deg);
}
.nav-btn {
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.45);
}
.foot-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: #a1a1aa;
  padding: 0.5rem 0.9rem;
  border-radius: 9999px;
  transition: all 0.25s ease;
}
.foot-btn:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.07);
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.65rem 1.1rem;
  border-radius: 9999px;
  color: #e4e4e7;
  border: 1px solid #3f3f46;
  transition: all 0.25s ease;
}
.btn:hover {
  border-color: #a1a1aa;
  background: rgba(255, 255, 255, 0.05);
}
.btn--primary {
  color: #0e0e0e;
  background: #f5f5f5;
  border-color: #f5f5f5;
}
.btn--primary:hover {
  background: #fff;
  transform: translateY(-2px);
}

/* Gallery */
.gallery-main {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #0b0b0b;
}
.placeholder-label {
  position: absolute;
  left: 1rem;
  bottom: 0.9rem;
  font-family: ui-monospace, monospace;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #71717a;
}
.thumb {
  position: relative;
  width: 5rem;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 0.6rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #0b0b0b;
  opacity: 0.5;
  transition: all 0.25s ease;
}
.thumb:hover {
  opacity: 0.85;
}
.thumb.is-active {
  opacity: 1;
  border-color: #f5f5f5;
}

/* Pieces */
.pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: ui-monospace, monospace;
  font-size: 0.7rem;
  color: #a1a1aa;
  border: 1px solid #27272a;
  border-radius: 9999px;
  padding: 0.25rem 0.7rem;
}
.pill--live {
  color: #34d399;
  border-color: rgba(16, 185, 129, 0.3);
  background: rgba(16, 185, 129, 0.08);
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background: currentColor;
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  50% {
    opacity: 0.3;
  }
}
.section-label {
  font-family: ui-monospace, monospace;
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #71717a;
}
.stat {
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 0.9rem;
  padding: 0.9rem 1rem;
}
.chip {
  font-family: ui-monospace, monospace;
  font-size: 0.75rem;
  color: #e4e4e7;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 0.5rem;
  padding: 0.3rem 0.65rem;
}
.chip--ghost {
  color: #a1a1aa;
  background: transparent;
  border: 1px solid #27272a;
}

/* Generated art (patterns come from the shared unscoped block in ProjectsSection) */
.cover-art {
  position: absolute;
  inset: -10%;
  opacity: 0.8;
}

/* ── Transitions ── */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-active .modal-panel,
.modal-leave-active .modal-panel {
  transition: transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal-panel {
  transform: translateY(40px) scale(0.96);
}
.modal-leave-to .modal-panel {
  transform: translateY(20px) scale(0.98);
}

.swap-enter-active,
.swap-leave-active {
  transition: opacity 0.2s ease, transform 0.25s ease;
}
.swap-enter-from {
  opacity: 0;
  transform: translateX(16px);
}
.swap-leave-to {
  opacity: 0;
  transform: translateX(-16px);
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .modal-root {
    padding: 0;
    align-items: flex-end;
  }
  .modal-panel {
    max-height: 94dvh;
    border-radius: 1.5rem 1.5rem 0 0;
  }
}
</style>
