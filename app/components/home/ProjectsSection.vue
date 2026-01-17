<template>
  <section
    :id="id"
    class="container-px max-w-6xl mx-auto py-20 relative"
  >
    <WatermarkItem :text="title" />

    <div class="mt-16 pt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
      
      <!-- Projects Timeline -->
      <div class="relative">
        <h3 class="text-2xl font-bold text-white my-5 flex items-center gap-3">
          <span class="w-2 h-8 rounded bg-gray-500 block"></span>
          Projects
        </h3>
        
        
        <div class="space-y-12 relative">
          <!-- Vertical Line -->
          <div class="absolute left-4 top-0 bottom-0 w-px bg-zinc-800"></div>
          
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="relative pl-8 group"
          >
            <!-- Node -->
            <div
              class="absolute left-4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border border-zinc-600 bg-zinc-900 transition-all duration-300 z-10"
            ></div>

            <!-- Card -->
            <div
              class="relative bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 hover:bg-zinc-800 transition-all duration-300 group-hover:-translate-y-1"
            >
              <div class="flex justify-between items-start mb-2">
                <h4 class="text-lg font-semibold text-white transition-colors">
                  {{ project.title }}
                </h4>
                <div class="flex items-center gap-3">
                  <a
                    v-if="project.viewUrl"
                    :href="project.viewUrl"
                    class="text-xs font-medium text-emerald-500 hover:text-emerald-400 flex items-center gap-1"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                  </a>
                  <span class="text-xs font-mono text-zinc-500 border border-zinc-800 rounded px-2 py-0.5">
                    {{ project.year }}
                  </span>
                </div>
              </div>
              <p class="text-sm text-zinc-400 leading-relaxed mb-4">
                {{ project.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience Timeline -->
      <div class="relative">
        <h3 class="text-2xl font-bold text-white my-5 flex items-center gap-3">
          <span class="w-2 h-8 rounded bg-gray-500 block"></span>
          Experience
        </h3>
        
        
        <div class="space-y-12 relative">
          <!-- Vertical Line -->
          <div class="absolute left-4 top-0 bottom-0 w-px bg-zinc-800"></div>
          
          <div
            v-for="(exp, index) in experiences"
            :key="index"
            class="relative pl-8 group"
          >
             <!-- Node -->
             <div
              class="absolute left-4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border border-zinc-600 bg-zinc-900 transition-all duration-300 z-10"
            ></div>

            <!-- Card -->
            <div
              class="relative bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 hover:bg-zinc-800 transition-all duration-300 group-hover:-translate-y-1"
            >
              <div class="flex flex-col mb-3">
                <div class="flex justify-between items-start">
                    <h4 class="text-lg font-semibold text-white transition-colors">
                    {{ exp.role }}
                    </h4>
                    <span class="text-xs font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 rounded px-2 py-0.5 whitespace-nowrap ml-2">
                    {{ exp.year }}
                    </span>
                </div>
                <span class="text-sm text-zinc-500 font-medium">{{ exp.company }}</span>
              </div>
              <p class="text-sm text-zinc-400 leading-relaxed">
                {{ exp.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- See More -->
    <SeeMoreCard :href="moreUrl" />
  </section>
</template>

<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  year: string | number;
  viewUrl?: string;
  sourceUrl?: string;
}

interface Experience {
  role: string;
  company: string;
  year: string | number;
  description: string;
}

defineProps<{
  id: string;
  title: string;
  moreUrl: string;
  projects?: Project[];
  experiences?: Experience[];
}>();
</script>
