<template>
  <div class="text-white selection:bg-white/10">
    <!-- Background gradient + subtle vignette -->
    <div aria-hidden="true" class="fixed inset-0 -z-10">
      <div
        class="absolute inset-0 bg-[radial-gradient(1200px_700px_at_0%_0%,_#333533_0%,_#151515_45%,_#0e0e0e_70%,_#000_100%)]"
      ></div>
      <div
        class="absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_50%,_rgba(0,0,0,0.65),_transparent_70%)]"
      ></div>
    </div>
    <div class="grain"></div>

    <FloatingNavbar />
    <PageHeader />

    <slot />

    <PageFooter />
  </div>
</template>

<script setup lang="ts">
</script>
