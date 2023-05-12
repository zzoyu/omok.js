import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { StoneType } from "@/classes/Stone";

export const useStore = defineStore("game", () => {
  const isMyTurn = ref(true);
  const myStone = ref(StoneType.BLACK);

  const lastStonePosition = ref<{ row: number; col: number }>();

  const getTurnText = computed(() => {
    return isMyTurn.value ? "내 차례" : "상대 차례";
  });

  const gameGrid = ref<StoneType[][]>(
    Array.from(Array(10), () => new Array(10).fill(StoneType.EMPTY))
  );

  const checkWinAndChangeTurn = (stone: StoneType) => {
    const isConnected = (
      previousPosition: { row: number; col: number },
      offsetPosition: { row: number; col: number },
      stone: StoneType,
      length = 1
    ): boolean => {
      if (length === 5) return true;

      const checkPosition = {
        row: previousPosition.row + offsetPosition.row,
        col: previousPosition.col + offsetPosition.col,
      };

      if (checkPosition.row < 0 || checkPosition.col < 0) return false;
      if (
        checkPosition.row >= gameGrid.value.length ||
        checkPosition.col >= gameGrid.value.length
      )
        return false;

      if (gameGrid.value[checkPosition.row][checkPosition.col] === stone) {
        return isConnected(checkPosition, offsetPosition, stone, length + 1);
      }
      return false;
    };

    const checkWin = (
      position: { row: number; col: number },
      stone: StoneType
    ) => {
      const offsetPositions = [
        { row: 1, col: 0 },
        { row: 0, col: 1 },
        { row: 1, col: 1 },
        { row: 1, col: -1 },
      ];

      for (const offsetPosition of offsetPositions) {
        if (isConnected(position, offsetPosition, stone)) {
          return true;
        }
      }
      return false;
    };

    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        if (gameGrid.value[row][col] === stone) {
          if (checkWin({ row, col }, stone)) {
            win();
            return true;
          }
        }
      }
    }

    isMyTurn.value = !isMyTurn.value;
    return false;
  };

  const win = () => {
    // window.alert("이겼습니다!");
  };

  const setStone = (
    position: { row: number; col: number },
    stone: StoneType = myStone.value
  ) => {
    if (gameGrid.value[position.row][position.col] !== StoneType.EMPTY) return;
    gameGrid.value[position.row][position.col] = stone;
    lastStonePosition.value = position;

    // checkWinAndChangeTurn(myStone.value);
  };

  const thinkBestPosition = () => {
    const position = { row: 0, col: 0 };

    return position;
  };

  const setOponentStone = (position?: { row: number; col: number }) => {
    const stone =
      myStone.value === StoneType.BLACK ? StoneType.WHITE : StoneType.BLACK;
    if (position) {
      setStone(position, stone);
    } else {
      const position = thinkBestPosition();
      if (!position) {
        window.alert("이겼습니다!");
        return;
      }
      setStone(position, stone);
    }

    isMyTurn.value = true;
  };

  return {
    myStone,
    lastStonePosition,
    isMyTurn,
    getTurnText,
    gameGrid,
    setStone,
    setOponentStone,
    checkWinAndChangeTurn,
  };
});
