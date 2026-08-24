<script setup lang="ts">
import { Boid } from '@/types/Boid.ts'
const boid = new Boid(0, 0);
</script>

<template>
    <svg width="50" height="50" viewBox="0 0 100 100" >
        <polygon 
            points="50,10 90,90 10,90" 
            fill="gray" 
            :transform="`translate(${boid.position.x}, ${boid.position.y})`"
        />
    </svg>
</template>

<style scoped lang="css">
</style>
