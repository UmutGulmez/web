<template>
  <div>
    <HeroSection />
    <AboutSection id="aboutme" title="about me" />
    <ContactSection id="contact" title="contact" />
    <ProjectsSection
      id="projects"
      title="projects"
      :more-url="'/projects'"
      :projects="projects"
    />
    <BlogSection
      id="blog"
      title="blog"
      :more-url="'/blog'"
      :posts="blogPosts"
    />
  </div>
</template>

<script setup lang="ts">
// Nuxt auto-imports components
const projects = [
  {
    title: "Interface Motion Study",
    description:
      "A study on smooth UI transitions and micro-interactions for modern web apps.",
    year: "2025",
    viewUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Design System",
    description:
      "Reusable components and guidelines for scalable product design.",
    year: "2024",
    viewUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Interaction Lab",
    description: "Prototyping and testing new forms of digital interaction.",
    year: "2023",
    viewUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Interaction Lab",
    description: "Prototyping and testing new forms of digital interaction.",
    year: "2023",
    viewUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Interaction Lab",
    description: "Prototyping and testing new forms of digital interaction.",
    year: "2023",
    viewUrl: "#",
    sourceUrl: "#",
  },
];

const blogPosts = [
  {
    title: "Interface Motion Study",
    description:
      "A study on smooth UI transitions and micro-interactions for modern web apps.",
    year: "2025",
    viewUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Design System",
    description:
      "Reusable components and guidelines for scalable product design.",
    year: "2024",
    viewUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Interaction Lab",
    description: "Prototyping and testing new forms of digital interaction.",
    year: "2023",
    viewUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Interaction Lab",
    description: "Prototyping and testing new forms of digital interaction.",
    year: "2023",
    viewUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Interaction Lab",
    description: "Prototyping and testing new forms of digital interaction.",
    year: "2023",
    viewUrl: "#",
    sourceUrl: "#",
  },
];
</script>
