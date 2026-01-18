<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Main app component

// SEO Meta Tags
useSeoMeta({
  title: 'Umut Utku — Design & Interaction | Electronics Engineer & Software Developer',
  description: 'Electronics Engineering student specializing in software development, avionics systems, and embedded solutions. Building flight computers, telemetry systems, and full-stack applications with Node.js, Go, Python, and Vue.js.',
  keywords: 'Umut Utku, Electronics Engineering, Software Developer, Avionics Engineer, Embedded Systems, Flight Computer, Telemetry, Rocketry, Node.js, Go, Python, Vue.js, PCB Design, Altium Designer, Full Stack Developer, Turkey',
  author: 'Umut Utku',
  robots: 'index, follow',
  copyright: '© 2026 Umut Utku. All rights reserved.',
  
  // Open Graph - Facebook
  ogType: 'website',
  ogUrl: 'https://umututku.com',
  ogTitle: 'Umut Utku — Electronics Engineer & Software Developer',
  ogDescription: 'Electronics Engineering student with 6+ years of software development experience. Specializing in avionics, embedded systems, flight computers, and full-stack web applications.',
  ogImage: 'https://umututku.com/images/banner.png',
  ogImageAlt: 'Umut Utku - Electronics Engineer & Software Developer Portfolio',
  ogSiteName: 'Umut Utku Portfolio',
  ogLocale: 'en_US',
  
  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterSite: '@umutpy',
  twitterCreator: '@umutpy',
  twitterUrl: 'https://umututku.com',
  twitterTitle: 'Umut Utku — Electronics Engineer & Software Developer',
  twitterDescription: 'Electronics Engineering student building avionics systems, flight computers, and full-stack applications. 6+ years of software development experience.',
  twitterImage: 'https://umututku.com/images/banner.png',
  twitterImageAlt: 'Umut Utku - Electronics Engineer & Software Developer Portfolio',
});

// Set HTML language attribute and additional meta tags
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    // Canonical URL - prevents duplicate content issues
    { rel: 'canonical', href: 'https://umututku.com' },
    // Favicon
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
  meta: [
    // Content language
    { name: 'content-language', content: 'en' },
    
    // Theme color for mobile browsers
    { name: 'theme-color', content: '#000000' },
    
    // Mobile optimization
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    { name: 'apple-mobile-web-app-title', content: 'Umut Utku' },
    
    // Microsoft specific
    { name: 'msapplication-TileColor', content: '#000000' },
    { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
    
    // Additional SEO
    { name: 'revisit-after', content: '7 days' },
    { name: 'rating', content: 'general' },
    { name: 'distribution', content: 'global' },
    { name: 'language', content: 'English' },
    { name: 'geo.region', content: 'TR' },
    { name: 'geo.placename', content: 'Turkey' },
  ],
  script: [
    // Structured Data - JSON-LD for better search results
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Umut Utku',
        alternateName: 'Umut Utku',
        url: 'https://umututku.com',
        image: 'https://umututku.com/images/banner.png',
        jobTitle: 'Electronics Engineer & Software Developer',
        description: 'Electronics Engineering student specializing in software development, avionics systems, embedded solutions, and rocketry. Building flight computers, telemetry systems, and full-stack applications.',
        worksFor: {
          '@type': 'Organization',
          name: 'University Rocketry Team',
        },
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Electrical and Electronics Engineering',
        },
        sameAs: [
          'https://github.com/UmutGulmez',
          'https://twitter.com/umutpy',
        ],
        knowsAbout: [
          'Electronics Engineering',
          'Software Development',
          'Avionics Systems',
          'Embedded Systems',
          'Flight Computers',
          'Telemetry Systems',
          'Node.js',
          'Go',
          'Python',
          'Vue.js',
          'PCB Design',
          'Altium Designer',
          'SolidWorks',
          'Rocketry',
          'Full Stack Development',
        ],
      }),
    },
  ],
});
</script>
