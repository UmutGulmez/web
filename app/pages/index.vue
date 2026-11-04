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
    />
    <BlogSection id="blog" title="blog" :more-url="'/blogs'" />
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "A Supersonic Rocket: K4",
    description:
      "A supersonic rocket designed with a university student team that i lead. Rocket launched in 2026 and a reached a top speed of +500 m/s with ~8000m altitude. I was responsible for the design and development of the rocket's electronics, software, ground-station, coms and more as well as the overall project management.",
    year: "2026",
    status: "Launched",
    tags: ["Rocket", "Aerospace", "Engineering"],
    stack: ["KiCAD", "SolidWorks", "AnSys", "C++", "Python", "JS"],
    featured: true,
    images: ["/images/projects/k4/1.JPG", "/images/projects/k4/2.JPG"],
    details: [],
    highlights: [],
    stats: [
      { value: "~8000 m", label: "Altitude" },
      { value: "+500 m/s", label: "Speed" },
      { value: "1.6 Mach", label: "Speed" },
      { value: "12 mo", label: "of Development" },
    ],
    role: "Vice President of the Rocket Team — Design & Development",
    duration: "12 months",
  },
  {
    title: "Liquid Rocket Engine",
    description: "A liqued rocker engine that has thrust more than 1000N. ",
    year: "2027",
    status: "Upcoming",
    tags: ["Rocket", "Aerospace", "Engineering"],
    stack: [],
    images: [],
    details: [],
    highlights: [],
    stats: [{ value: "+1 kN", label: "Thrust" }],
    role: "Vice President of the Rocket Team — Design & Development",
    duration: "18 months",
  },
  {
    title: "Vibration Isolator Experiment Payload",
    description:
      "Designed, Developed and launched a scientific payload for a supersonic sounding rocket. Payload was designed to understand the performance of in-house designed vibration isolator with helicel connected ropes in a high-vibration environment. Payload included a custom designed vibraiton isolator, a referance isolator with own avionics, sensors, coms and data acquasititon systems. Payload launched in 2026 and wasn't able to recovered due to rocket failure.   ",
    year: "2026",
    status: "Launched",
    tags: ["Rocket", "Aerospace", "Engineering", "Payload"],
    stack: ["C++", "Python", "MatLab", "SolidWorks"],
    images: [],
    details: [],
    highlights: [],
    stats: [{ value: "+1 kN", label: "Thrust" }],
    role: "Vice President of the Rocket Team — Design & Development",
    duration: "18 months",
  },
  {
    title: "MagnetBot",
    description:
      "A Discord bot that reached 120k+ users in 2021. Was responsible for development and deployment. Bot was developed in NodeJS in backend and VueJS in fronted for management panel.",
    year: "2021",
    status: "Ended",
    tags: ["Bot", "Web"],
    stack: ["NodeJS", "VueJS", "NuxtJS", "MongoDB", "Redis"],
    images: [],
    details: [],
    highlights: [],
    stats: [{ value: "+120,000", label: "Users" }],
    role: "Owner & Lead Developer",
    duration: "8 months",
  },
];

// Blog posts are now fetched directly in the BlogSection component
</script>
