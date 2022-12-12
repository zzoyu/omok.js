<script setup lang="ts">
import { StoneType } from "@/classes/Stone";

defineProps<{
  data: StoneType;
}>();

const emit = defineEmits<{
  (event: "addStone"): void;
}>();

const addStone = () => {
  emit("addStone");
};
</script>

<template>
  <div
    @click="addStone"
    class="w-10 h-10 border border-stone-500 rounded cursor-pointer"
  >
    <div
      v-if="data !== StoneType.EMPTY"
      class="w-10 h-10 rounded-full"
      :class="{
        'bg-stone-500': data === StoneType.BLACK,
        'bg-stone-100': data === StoneType.WHITE,
      }"
    ></div>
  </div>
</template>
