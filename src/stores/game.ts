import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore("game", () => {
  const isMyTurn = ref(true);

  const getTurnText = computed(() => {
    return isMyTurn.value ? "내 차례" : "상대 차례";
  });

  return { isMyTurn, getTurnText };
});
