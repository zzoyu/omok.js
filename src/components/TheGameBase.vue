<script setup lang="ts">
import { useStore } from "@/stores/game";

const store = useStore();
</script>

<template>
  <!-- grid 20*20 squares -->
  <div class="grid grid-cols-10 grid-rows-10 gap-1">
    <!-- 20*20 squares -->
    <template v-for="(i, key) in store?.gameGrid" :key="`row_${key}`">
      <div
        v-for="(j, key) in i"
        :key="`cell_${key}`"
        class="w-10 h-10 border border-stone-500 rounded cursor-pointer"
      ></div>
    </template>
  </div>
</template>
