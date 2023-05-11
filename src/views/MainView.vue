<script setup lang="ts">
import TheTitle from "../components/TheTitle.vue";
import TheFooter from "../components/TheFooter.vue";
import BaseButton from "../components/BaseButton.vue";
import BaseModal from "@/components/BaseModal.vue";

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
        <BaseModal>
          <template #title>
            <h1>
              제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
            </h1>
          </template>
          <p>내용</p>
          <template #footer>
            <BaseButton>확인</BaseButton>
          </template>
        </BaseModal>
        <BaseButton :on-click="goToGameAlone">혼자 하기</BaseButton>
        <BaseButton :on-click="goToGameFriend">친구랑 하기</BaseButton>
        <BaseButton :on-click="goToGameOnline">온라인맞짱뜨기</BaseButton>
      </div>

      <TheFooter class="mt-8" />
    </div>
  </main>
</template>
