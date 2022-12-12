<script setup lang="ts">
import TheGameBase from "@/components/TheGameBase.vue";
import TheGameHUD from "@/components/TheGameHUD.vue";
import TheGameInterface from "@/components/TheGameInterface.vue";
</script>

<template>
  <main class="h-full w-full flex flex-col items-center justify-around">
    <TheGameHUD />
    <TheGameBase />
    <TheGameInterface />
  </main>
</template>
