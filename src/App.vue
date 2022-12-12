<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="h-full w-full">
    <RouterView />
  </div>
</template>

<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #f7fafc;
}
</style>
