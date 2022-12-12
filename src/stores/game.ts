import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { StoneType } from "@/classes/Stone";

export const useStore = defineStore("game", () => {
  const isMyTurn = ref(true);

  const getTurnText = computed(() => {
    return isMyTurn.value ? "내 차례" : "상대 차례";
  });

  const gameGrid = ref(
    Array.from(Array(10), () => new Array(10).fill(StoneType.EMPTY))
  );

  return { isMyTurn, getTurnText, gameGrid };
});
