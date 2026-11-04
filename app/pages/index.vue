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
const lorem = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
];

const details = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
];
const highlights = [
  "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  "Sed do eiusmod tempor incididunt ut labore et dolore",
  "Ut enim ad minim veniam quis nostrud exercitation",
];
const stats = [
  { value: "120k+", label: "Lorem ipsum" },
  { value: "99.9%", label: "Dolor sit amet" },
  { value: "+20%", label: "Consectetur" },
  { value: "6 mo", label: "Adipiscing elit" },
];
const common = { details, highlights, stats, viewUrl: "#", sourceUrl: "#", role: "Lorem Ipsum — Design & Development", duration: "6 months" };

const projects = [
  { ...common, title: "Lorem Ipsum", description: lorem[0], year: "2025", status: "Live", tags: ["Web", "Design"], stack: ["Nuxt", "Vue", "Tailwind", "Node.js"], featured: true },
  { ...common, title: "Dolor Sit", description: lorem[1], year: "2024", status: "Live", tags: ["Mobile", "Backend"], stack: ["Flutter", "Firebase", "Go"] },
  { ...common, title: "Amet Consectetur", description: lorem[2], year: "2024", status: "Archived", tags: ["AI", "Backend"], stack: ["Python", "FastAPI", "PostgreSQL"] },
  { ...common, title: "Adipiscing Elit", description: lorem[3], year: "2023", status: "In progress", tags: ["Web", "AI"], stack: ["Next.js", "TypeScript", "OpenAI"] },
  { ...common, title: "Tempor Labs", description: lorem[4], year: "2022", status: "Archived", tags: ["Design", "Mobile"], stack: ["Figma", "React Native"] },
  { ...common, title: "Magna Aliqua", description: lorem[5], year: "2021", status: "Archived", tags: ["Backend", "Web"], stack: ["Express", "Redis", "Docker"] },
];

const experiences = [
  { role: "Lorem Ipsum Lead", company: "Dolor Sit Inc.", year: "2025 — Present", description: lorem[0] },
  { role: "Consectetur Engineer", company: "Amet Labs", year: "2024 — 2025", description: lorem[1] },
  { role: "Adipiscing Developer", company: "Elit Studio", year: "2022 — 2024", description: lorem[2] },
  { role: "Tempor Intern", company: "Incididunt Co.", year: "2021 — 2022", description: lorem[3] },
];

// Blog posts are now fetched directly in the BlogSection component
</script>
