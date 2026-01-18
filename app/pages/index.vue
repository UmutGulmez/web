<template>
  <div class="relative overflow-hidden mobile-container">
    <!-- White gradient blob on the right -->
    <div aria-hidden="true" class="absolute inset-0 -z-10 pointer-events-none">
      <div
        class="absolute right-0 top-[60vh] translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-white/[0.10] blur-[180px]"
      ></div>
    </div>

    <HeroSection />
    <AboutSection id="aboutme" title="about me" />
    <ContactSection id="contact" title="contact" />
    <ProjectsSection
      id="projects"
      title="what do i do"
      :more-url="'/projects'"
      :projects="projects"
      :experiences="experiences"
    />
    <BlogSection id="blog" title="blog" :more-url="'/blogs'" />
  </div>
</template>

<script setup lang="ts">
// Nuxt auto-imports components
const projects = [
  {
    title: "BotsLab",
    description:
      "Chat Bot Listing Platform - Designed, coded, and managed a feature-rich chatbot listing platform.",
    year: "2022",
    viewUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Magnet Bot",
    description: "Architected high-availability chatbot for 120k+ users, achieving a 20% increase in retention via iterative optimization.",
    year: "2021",
    viewUrl: "#",
    sourceUrl: "#",
  },
];

const experiences = [
  {
    role: "Electronics Team Lead",
    company: "Arcturus Rocket Team",
    year: "2025 - Present",
    description: "Led software and electronics development team for a 16,000 ft supersonic rocket.",
  },
  {
    role: "Avionics Engineer",
    company: "Arcturus Rocket Team",
    year: "2024 - 2025",
    description: "Designed and implemented avionics systems for the high-altitude rockets.",
  },
];

// Blog posts are now fetched directly in the BlogSection component
</script>
