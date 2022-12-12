<script setup lang="ts">
import TheTitle from "../components/TheTitle.vue";
import TheFooter from "../components/TheFooter.vue";
import BaseButton from "../components/BaseButton.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const goToGameAlone = () => {
  router.push({ name: "game-alone" });
};

const goToGameFriend = () => {
  router.push({ name: "game-friend" });
};

const goToGameOnline = () => {
  router.push({ name: "game-online" });
};
</script>

<template>
  <main class="h-full w-full flex flex-col items-center justify-around">
    <div class="flex flex-col justify-center">
      <TheTitle class="mb-12" />
      <div class="flex flex-col gap-2">
        <BaseButton :on-click="goToGameAlone">혼자 하기</BaseButton>
        <BaseButton :on-click="goToGameFriend">친구랑 하기</BaseButton>
        <BaseButton :on-click="goToGameOnline">온라인맞짱뜨기</BaseButton>
      </div>

      <TheFooter class="mt-8" />
    </div>
  </main>
</template>
