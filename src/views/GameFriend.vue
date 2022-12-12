<script setup lang="ts">
import BaseButton from "../components/BaseButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<template>
  <main class="h-full w-full flex flex-col items-center justify-around">
    <div>1:1 기능은 준비중입니다.</div>
    <BaseButton :on-click="goBack">뒤로가기</BaseButton>
  </main>
</template>
