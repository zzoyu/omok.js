<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="h-full w-full">
    <RouterView v-slot="{ Component, route }">
      <Transition name="slide">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </div>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-leave-to {
  position: absolute;
  transform: translateX(50%);
  opacity: 0;
}

.slide-enter-from {
  position: absolute;
  transform: translateX(-50%);
  opacity: 0;
}
</style>
