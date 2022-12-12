<script setup lang="ts">
import { useStore } from "@/stores/game";

const store = useStore();
</script>

<template>
  <div class="flex items-center justify-evenly w-full">
    <h1>{{ store.getTurnText }}</h1>
  </div>
</template>
