<template>
  <section :id="id" class="container-px max-w-6xl mx-auto py-20 relative">
    <WatermarkItem :text="title" />

    <!-- ───────────── Projects ───────────── -->
    <div class="mt-16 pt-10">
      <header
        v-reveal
        class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8"
      >
        <div>
          <p class="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500 mb-2">
            Selected work
          </p>
          <h3 class="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
            <span class="w-2 h-9 rounded bg-gray-500 block"></span>
            Projects
            <span class="font-mono text-sm font-normal text-zinc-500 self-start mt-1">
              ({{ String(projects?.length ?? 0).padStart(2, "0") }})
            </span>
          </h3>
        </div>

        <div
          v-if="allTags.length > 1"
          class="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter projects"
        >
          <button
            v-for="tag in ['All', ...allTags]"
            :key="tag"
            type="button"
            role="tab"
            :aria-selected="activeTag === tag"
            class="filter-chip"
            :class="{ 'is-active': activeTag === tag }"
            @click="activeTag = tag"
          >
            {{ tag }}
          </button>
        </div>
      </header>

      <!-- Bento grid -->
      <TransitionGroup
        name="project"
        tag="div"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 grid-flow-dense"
      >
        <article
          v-for="(project, index) in filteredProjects"
          :key="project.title"
          v-reveal="index"
          class="project-card group"
          :class="
            project.featured
              ? 'md:col-span-2 lg:col-span-4 lg:row-span-2'
              : 'lg:col-span-2'
          "
          role="button"
          tabindex="0"
          :aria-label="`Open ${project.title} details`"
          @pointermove="onPointerMove"
          @click="selected = project"
          @keydown.enter.self.prevent="selected = project"
          @keydown.space.self.prevent="selected = project"
        >
          <div class="spotlight" aria-hidden="true"></div>

          <!-- Generated cover art -->
          <div
            class="cover"
            :class="[`pat-${patternOf(project)}`, project.featured ? 'cover--lg' : '']"
          >
            <div class="cover-art" aria-hidden="true"></div>
            <div class="cover-fade" aria-hidden="true"></div>

            <span class="cover-index" aria-hidden="true">
              {{ String(projects!.indexOf(project) + 1).padStart(2, "0") }}
            </span>

            <span
              class="absolute top-4 right-4 font-mono text-[11px] text-zinc-300 bg-black/40 backdrop-blur border border-white/10 rounded-full px-3 py-1"
            >
              {{ project.year }}
            </span>

            <span class="cover-arrow" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </span>
          </div>

          <!-- Body -->
          <div class="relative z-10 flex flex-col flex-1 p-5 md:p-6">
            <h4
              class="font-bold text-white tracking-tight transition-transform duration-500 group-hover:translate-x-1"
              :class="project.featured ? 'text-2xl md:text-3xl' : 'text-xl'"
            >
              {{ project.title }}
            </h4>
            <p
              class="mt-2 text-sm text-zinc-400 leading-relaxed"
              :class="project.featured ? 'md:max-w-xl md:text-base' : 'line-clamp-3'"
            >
              {{ project.description }}
            </p>

            <div class="mt-auto pt-5 flex flex-wrap items-center justify-between gap-3">
              <ul v-if="project.tags?.length" class="flex flex-wrap gap-1.5">
                <li
                  v-for="tag in project.tags"
                  :key="tag"
                  class="text-[11px] font-mono text-zinc-400 bg-white/5 rounded-md px-2 py-1"
                >
                  {{ tag }}
                </li>
              </ul>

              <div class="flex items-center gap-4 ml-auto">
                <a v-if="project.sourceUrl" :href="project.sourceUrl" class="project-link" @click.stop>
                  Source
                </a>
                <a
                  v-if="project.viewUrl"
                  :href="project.viewUrl"
                  class="project-link project-link--primary"
                  @click.stop
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </article>
      </TransitionGroup>
    </div>

    <!-- ───────────── Tag marquee ───────────── -->
    <div
      v-if="allTags.length"
      v-reveal
      class="marquee mt-16"
      aria-hidden="true"
    >
      <div class="marquee-track">
        <span v-for="n in 12" :key="n" class="marquee-item">
          {{ allTags[(n - 1) % allTags.length] }}
          <i class="marquee-dot"></i>
        </span>
        <span v-for="n in 12" :key="'b' + n" class="marquee-item">
          {{ allTags[(n - 1) % allTags.length] }}
          <i class="marquee-dot"></i>
        </span>
      </div>
    </div>

    <!-- ───────────── Experience ───────────── -->
    <div class="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
      <header v-reveal class="lg:col-span-4">
        <div class="lg:sticky lg:top-28">
          <p class="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500 mb-2">
            Where I've worked
          </p>
          <h3 class="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
            <span class="w-2 h-9 rounded bg-gray-500 block"></span>
            Experience
          </h3>
          <p class="mt-5 text-sm text-zinc-500 leading-relaxed max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore.
          </p>
          <div class="mt-6 font-mono text-xs text-zinc-600">
            <span class="text-white text-2xl font-bold tabular-nums">
              {{ String(experiences?.length ?? 0).padStart(2, "0") }}
            </span>
            &nbsp;roles
          </div>
        </div>
      </header>

      <div ref="timelineEl" class="relative lg:col-span-8">
        <div class="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-800"></div>
        <div
          class="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-white/80 to-white/10"
          :style="{ transform: `scaleY(${progress})` }"
        ></div>

        <ol class="space-y-5">
          <li
            v-for="(exp, index) in experiences"
            :key="index"
            v-reveal="index"
            class="relative pl-10 group"
          >
            <span class="timeline-node" aria-hidden="true"></span>

            <div class="exp-card">
              <span class="font-mono text-[11px] text-zinc-500 tracking-wide">
                {{ exp.year }}
              </span>
              <h4 class="mt-1 text-lg md:text-xl font-semibold text-white">
                {{ exp.role }}
                <span class="text-zinc-500 font-normal">· {{ exp.company }}</span>
              </h4>
              <p class="mt-2 text-sm text-zinc-400 leading-relaxed max-w-2xl">
                {{ exp.description }}
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>

    <SeeMoreCard :href="moreUrl" />

    <ProjectModal
      :project="selected"
      :index="selectedIndex"
      :total="filteredProjects.length"
      @close="selected = null"
      @prev="go(-1)"
      @next="go(1)"
    />
  </section>
</template>

<script setup lang="ts">
import type { Directive } from "vue";
import type { Project } from "~/types/project";

interface Experience {
  role: string;
  company: string;
  year: string | number;
  description: string;
}

const props = defineProps<{
  id: string;
  title: string;
  moreUrl: string;
  projects?: Project[];
  experiences?: Experience[];
}>();

/* ── Filtering ── */
const activeTag = ref("All");
const allTags = computed(() => [
  ...new Set((props.projects ?? []).flatMap((p) => p.tags ?? [])),
]);
const filteredProjects = computed(() =>
  (props.projects ?? []).filter(
    (p) => activeTag.value === "All" || p.tags?.includes(activeTag.value)
  )
);

/* ── Popup ── */
const selected = ref<Project | null>(null);
const selectedIndex = computed(() =>
  Math.max(0, filteredProjects.value.indexOf(selected.value as Project))
);
function go(dir: number) {
  const list = filteredProjects.value;
  if (!selected.value || !list.length) return;
  const i = list.indexOf(selected.value);
  selected.value = list[(i + dir + list.length) % list.length] ?? null;
}
const patternOf = (p: Project) =>
  p.pattern ?? Math.max(0, props.projects?.indexOf(p) ?? 0) % 5;

/* ── Spotlight + art parallax follow the pointer ── */
function onPointerMove(e: PointerEvent) {
  const el = e.currentTarget as HTMLElement;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  el.style.setProperty("--px", `${(e.clientX - rect.left) / rect.width - 0.5}`);
  el.style.setProperty("--py", `${(e.clientY - rect.top) / rect.height - 0.5}`);
}

/* ── Scroll reveal directive ── */
let observer: IntersectionObserver | null = null;
const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add("reveal");
    el.style.setProperty("--reveal-delay", `${(binding.value ?? 0) * 90}ms`);
    observer ??= new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
  },
};

/* ── Timeline progress ── */
const timelineEl = ref<HTMLElement | null>(null);
const progress = ref(0);
let raf = 0;

function updateProgress() {
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(() => {
    const el = timelineEl.value;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = (window.innerHeight * 0.7 - rect.top) / rect.height;
    progress.value = Math.min(1, Math.max(0, p));
  });
}

onMounted(() => {
  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateProgress);
  window.removeEventListener("resize", updateProgress);
  cancelAnimationFrame(raf);
  observer?.disconnect();
  observer = null;
});
</script>

<style scoped>
/* ── Reveal ── */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) var(--reveal-delay, 0ms),
    transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) var(--reveal-delay, 0ms);
}
.reveal.is-visible {
  opacity: 1;
  transform: none;
}

/* ── Filter chips ── */
.filter-chip {
  font-family: ui-monospace, monospace;
  font-size: 0.75rem;
  padding: 0.4rem 0.9rem;
  border-radius: 9999px;
  border: 1px solid #27272a;
  color: #a1a1aa;
  transition: all 0.3s ease;
}
.filter-chip:hover {
  color: #fff;
  border-color: #52525b;
}
.filter-chip.is-active {
  color: #0e0e0e;
  background: #f5f5f5;
  border-color: #f5f5f5;
}

/* ── Card ── */
.project-card {
  --mx: 50%;
  --my: 50%;
  --px: 0;
  --py: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: linear-gradient(160deg, #18181b 0%, #121212 70%);
  transition:
    border-color 0.4s ease,
    box-shadow 0.4s ease,
    opacity 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) var(--reveal-delay, 0ms),
    transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.project-card {
  cursor: pointer;
}
.project-card:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.6);
  outline-offset: 3px;
}
.project-card.reveal:not(.is-visible) {
  transform: translateY(24px);
}
.project-card.is-visible:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 30px 60px -25px rgba(0, 0, 0, 0.9);
  transition-delay: 0ms;
}
.spotlight {
  position: absolute;
  inset: 0;
  z-index: 5;
  opacity: 0;
  pointer-events: none;
  background: radial-gradient(
    380px circle at var(--mx) var(--my),
    rgba(255, 255, 255, 0.07),
    transparent 60%
  );
  transition: opacity 0.4s ease;
}
.project-card:hover .spotlight {
  opacity: 1;
}

/* ── Cover art ── */
.cover {
  position: relative;
  height: 9.5rem;
  overflow: hidden;
  background: #0d0d0d;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.cover--lg {
  height: 15rem;
}
@media (min-width: 1024px) {
  .cover--lg {
    flex: 1;
    min-height: 15rem;
  }
}
.cover-art {
  position: absolute;
  inset: -20%;
  opacity: 0.55;
  transition: transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1), opacity 0.6s ease;
  transform: translate(calc(var(--px) * -22px), calc(var(--py) * -22px)) scale(1);
}
.project-card:hover .cover-art {
  opacity: 0.95;
  transform: translate(calc(var(--px) * -22px), calc(var(--py) * -22px)) scale(1.08);
}
.cover-fade {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #131313 0%, transparent 65%);
}

.cover-index {
  position: absolute;
  left: 1.1rem;
  bottom: 0.4rem;
  font-weight: 800;
  line-height: 1;
  font-size: 4.5rem;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.28);
  transition: -webkit-text-stroke-color 0.5s ease, transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
  user-select: none;
}
.cover--lg .cover-index {
  font-size: 7rem;
}
.project-card:hover .cover-index {
  -webkit-text-stroke-color: rgba(255, 255, 255, 0.7);
  transform: translateX(6px);
}

.cover-arrow {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  display: grid;
  place-items: center;
  border-radius: 9999px;
  color: #0e0e0e;
  background: #f5f5f5;
  opacity: 0;
  transform: translate(-8px, 8px) scale(0.8) rotate(-45deg);
  transition: all 0.45s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.project-card:hover .cover-arrow {
  opacity: 1;
  transform: none;
}

/* ── Links ── */
.project-link {
  font-size: 0.8rem;
  font-weight: 500;
  color: #a1a1aa;
  position: relative;
  transition: color 0.3s ease;
}
.project-link::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}
.project-link:hover {
  color: #fff;
}
.project-link:hover::after {
  transform: scaleX(1);
}
.project-link--primary {
  color: #10b981;
}
.project-link--primary:hover {
  color: #34d399;
}

/* ── Filter leave / move ── */
.project-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.project-leave-to {
  opacity: 0 !important;
  transform: scale(0.96) !important;
}
.project-move {
  transition: transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);
}

/* ── Marquee ── */
.marquee {
  overflow: hidden;
  border-block: 1px solid rgba(255, 255, 255, 0.06);
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
}
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 40s linear infinite;
}
.marquee:hover .marquee-track {
  animation-play-state: paused;
}
.marquee-item {
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.1rem 0 1.1rem 1.5rem;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
  transition: color 0.3s ease;
}
.marquee-item:hover {
  color: rgba(255, 255, 255, 0.9);
}
.marquee-dot {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: #52525b;
}
@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}

/* ── Timeline ── */
.timeline-node {
  position: absolute;
  left: 0;
  top: 1.5rem;
  width: 15px;
  height: 15px;
  border-radius: 9999px;
  background: #0e0e0e;
  border: 1px solid #52525b;
  transition: all 0.4s ease;
}
.timeline-node::after {
  content: "";
  position: absolute;
  inset: 3px;
  border-radius: 9999px;
  background: #71717a;
  transition: background 0.4s ease;
}
.group:hover .timeline-node {
  border-color: #f5f5f5;
  box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.06);
}
.group:hover .timeline-node::after {
  background: #f5f5f5;
}
.exp-card {
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(24, 24, 27, 0.4);
  border-radius: 1rem;
  padding: 1.1rem 1.4rem;
  transition: background 0.4s ease, border-color 0.4s ease, transform 0.4s ease;
}
.group:hover .exp-card {
  background: rgba(39, 39, 42, 0.6);
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateX(4px);
}
</style>

<!-- Unscoped: shared with ProjectModal -->
<style>
/* five monochrome patterns */
.pat-0 .cover-art {
  background-image: radial-gradient(rgba(255, 255, 255, 0.55) 1.2px, transparent 1.4px);
  background-size: 18px 18px;
  mask-image: radial-gradient(circle at 70% 40%, #000 0%, transparent 65%);
}
.pat-1 .cover-art {
  background: repeating-radial-gradient(
    circle at 70% 45%,
    transparent 0 16px,
    rgba(255, 255, 255, 0.22) 16px 17px
  );
  mask-image: radial-gradient(circle at 70% 45%, #000 0%, transparent 70%);
}
.pat-2 .cover-art {
  background: repeating-linear-gradient(
    135deg,
    transparent 0 12px,
    rgba(255, 255, 255, 0.2) 12px 13px
  );
  mask-image: linear-gradient(120deg, transparent 10%, #000 55%, transparent 95%);
}
.pat-3 .cover-art {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.18) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.18) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(circle at 30% 50%, #000 0%, transparent 70%);
}
.pat-4 .cover-art {
  background: conic-gradient(
    from 200deg at 65% 50%,
    transparent 0deg,
    rgba(255, 255, 255, 0.28) 40deg,
    transparent 90deg,
    rgba(255, 255, 255, 0.12) 180deg,
    transparent 260deg
  );
  filter: blur(14px);
}
</style>
