<template>
  <div class="watermark flex justify-center">{{ text }}</div>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>
