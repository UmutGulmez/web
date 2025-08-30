<template>
  <div
    class="mb-10 border border-white/10 backdrop-blur-sm mt-12 md:mt-0 md:ml-0 w-full md:w-[420px] lg:w-[620px] rounded-2xl py-3 text-white backdrop-blur-sm md:self-auto md:mr-4 lg:mr-12"
  >
    <div class="flex justify-center">
      <SocialLink
        v-for="(link, index) in socialLinks"
        :key="index"
        :href="link.href"
        :icon="link.icon"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const socialLinks = [
  { href: "https://linkedin.com/", icon: "linkedin" },
  { href: "https://github.com/", icon: "github" },
  { href: "https://twitter.com/", icon: "twitter" },
  { href: "https://instagram.com/", icon: "instagram" },
  { href: "https://dribbble.com/", icon: "dribbble" },
];
</script>
