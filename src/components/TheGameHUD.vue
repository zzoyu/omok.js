<script setup lang="ts">
import BaseButton from "../components/BaseButton.vue";
import { useRouter } from "vue-router";
import { computed, onBeforeUnmount, ref } from "vue";
const router = useRouter();

const goBack = () => {
  router.back();
};

const elapsedTime = ref(0);

const interval = setInterval(() => {
  elapsedTime.value++;
}, 1000);

onBeforeUnmount(() => {
  clearInterval(interval);
});

const elapsedTimeText = computed(() => {
  const minutes = Math.floor(elapsedTime.value / 60);
  const seconds = elapsedTime.value % 60;
  return `${minutes}분 ${seconds}초`;
});
</script>

<template>
  <div class="flex items-center justify-evenly w-full">
    <BaseButton
      :on-click-confirm="{
        message: '정말로 기권하시겠습니까?',
        callback: goBack,
      }"
      >기권</BaseButton
    >
    <h1>{{ $route.meta.title }}</h1>
    <span>{{ elapsedTimeText }}</span>
  </div>
</template>
