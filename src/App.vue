<script setup lang="ts">
import { getCurrentInstance } from "vue";
import { RouterView } from "vue-router";
import useSocketStore from "./stores/socket";
useSocketStore();
</script>

<template>
  <div class="h-full w-full">
    <RouterView v-slot="{ Component, route }">
      <Transition :name="route.meta.transition || 'slide'">
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

/* fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
