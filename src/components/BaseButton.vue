<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{
  onClick?: () => void;
}>();
</script>

<template>
  <button
    @click="onClick?.()"
    class="bg-stone-500 text-white font-bold py-2 px-4 rounded hover:bg-neutral-400"
  >
    <slot />
  </button>
</template>
