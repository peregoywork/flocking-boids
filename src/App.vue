<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { Boid } from '@/types/Boid.ts';

const canvas = ref(null); 
const ctx = ref(null); 

onMounted(() => {
  canvas.value = document.getElementById("boid-canvas");
  ctx.value = canvas.value.getContext("2d");

  console.log(canvas.value);
  console.log(ctx.value);
});

const boids = computed(() => {
  let bs = [];

  for (let i = 0; i < 1; i++) {
    bs.push(new Boid({
      position: { x: 50, y: 50 },
      velocity: { x: 1, y: 1 },
      acceleration: { x: 1, y: 1 },
      maxSpeed: 10,
      rotation: 0,
      lineLength: 2,
    }));
  }

  return bs;
});

boids.value[0].draw(ctx.value);

</script>

<template>
  <canvas id="boid-canvas" />
</template>

<style scoped lang="css">
</style>

