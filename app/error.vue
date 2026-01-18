<template>
  <NuxtLayout>
    <div class="min-h-screen flex items-center justify-center px-6 py-20">
      <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column - Text Content -->
        <div class="text-center lg:text-left space-y-8">
          <!-- 404 Text -->
          <h1 class="text-[12rem] sm:text-[16rem] lg:text-[20rem] font-bold text-white leading-none tracking-tighter">
            {{ error.statusCode }}
          </h1>
          
          <!-- Page Not Found -->
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-400 -mt-16 lg:-mt-24">
            {{ error.statusCode === 404 ? 'Page Not Found' : 'An Error Occurred' }}
          </h2>
          
          

        </div>
        
        <!-- Right Column - Magnetic Field Effect -->
        <div class="hidden lg:block relative h-[600px]">
          <canvas
            ref="canvas"
            class="w-full h-full"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
          ></canvas>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

defineProps({
  error: {
    type: Object,
    required: true
  }
});

const canvas = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;
let animationId: number | null = null;

interface Line {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  angle: number;
  baseAngle: number;
}

const lines: Line[] = [];
const mousePos = { x: 0, y: 0 };
let isMouseInCanvas = false;

const GRID_SIZE = 20;
const LINE_LENGTH = 20;
const MAGNETIC_STRENGTH = 100;

const initCanvas = () => {
  if (!canvas.value) return;
  
  const canvasEl = canvas.value;
  ctx = canvasEl.getContext('2d');
  
  if (!ctx) return;
  
  // Set canvas size
  canvasEl.width = canvasEl.offsetWidth;
  canvasEl.height = canvasEl.offsetHeight;
  
  // Create grid of lines
  const cellWidth = canvasEl.width / GRID_SIZE;
  const cellHeight = canvasEl.height / GRID_SIZE;
  
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      const x = (i + 0.5) * cellWidth;
      const y = (j + 0.5) * cellHeight;
      
      lines.push({
        x,
        y,
        baseX: x,
        baseY: y,
        angle: 0,
        baseAngle: 0,
      });
    }
  }
  
  animate();
};

const handleMouseMove = (e: MouseEvent) => {
  if (!canvas.value) return;
  
  const rect = canvas.value.getBoundingClientRect();
  mousePos.x = e.clientX - rect.left;
  mousePos.y = e.clientY - rect.top;
  isMouseInCanvas = true;
};

const handleMouseLeave = () => {
  isMouseInCanvas = false;
};

const animate = () => {
  if (!ctx || !canvas.value) return;
  
  // Clear canvas
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
  
  // Update and draw lines
  lines.forEach((line) => {
    if (isMouseInCanvas) {
      // Calculate distance to mouse
      const dx = mousePos.x - line.baseX;
      const dy = mousePos.y - line.baseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Calculate angle towards mouse (magnetic field effect)
      const targetAngle = Math.atan2(dy, dx);
      
      // Apply magnetic effect based on distance
      const influence = Math.max(0, 1 - distance / MAGNETIC_STRENGTH);
      line.angle = line.baseAngle + (targetAngle - line.baseAngle) * influence;
    } else {
      // Return to base angle
      line.angle += (line.baseAngle - line.angle) * 0.1;
    }
    
    // Draw line
    if (ctx) {
      const endX = line.x + Math.cos(line.angle) * LINE_LENGTH;
      const endY = line.y + Math.sin(line.angle) * LINE_LENGTH;
      
      ctx.beginPath();
      ctx.moveTo(line.x - Math.cos(line.angle) * LINE_LENGTH / 2, line.y - Math.sin(line.angle) * LINE_LENGTH / 2);
      ctx.lineTo(endX - Math.cos(line.angle) * LINE_LENGTH / 2, endY - Math.sin(line.angle) * LINE_LENGTH / 2);
      ctx.strokeStyle = 'rgba(156, 163, 175, 0.3)'; // gray color
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.stroke();
    }
  });
  
  animationId = requestAnimationFrame(animate);
};

onMounted(() => {
  initCanvas();
  
  // Handle window resize
  const handleResize = () => {
    if (canvas.value && ctx) {
      canvas.value.width = canvas.value.offsetWidth;
      canvas.value.height = canvas.value.offsetHeight;
      lines.length = 0;
      initCanvas();
    }
  };
  
  window.addEventListener('resize', handleResize);
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  });
});
</script>

<style scoped>
canvas {
  cursor: crosshair;
}
</style>
