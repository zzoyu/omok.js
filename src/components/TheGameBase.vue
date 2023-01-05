<script setup lang="ts">
import { StoneType } from "@/classes/Stone";
import BaseOmokCell from "@/components/BaseOmokCell.vue";
import { useStore } from "@/stores/game";
import { nextTick, onMounted, ref, watch } from "vue";

const store = useStore();

const currentRow = ref(0);
const currentCol = ref(0);

const updateCurrentPosition = (e: MouseEvent) => {
  const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const row = Math.floor(y / 64);
  const col = Math.floor(x / 64);

  currentRow.value = row;
  currentCol.value = col;
};

watch(
  () => store.isMyTurn,
  (isMyTurn) => {
    if (!isMyTurn) {
      nextTick(() => {
        store.setOponentStone();
      });
    }
  }
);

const handleClick = (e: MouseEvent) => {
  if (!store.isMyTurn) return;
  const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const row = Math.floor(y / 64);
  const col = Math.floor(x / 64);

  addStone({ row, col });
  drawCanvas();

  nextTick(() => {
    if (store.checkWinAndChangeTurn(store.myStone)) {
      nextTick(() => {
        showWinDialog();
      });
    }
  });
};

const showWinDialog = () => {
  alert("You win!");
};

const addStone = (position: { row: number; col: number }) => {
  store.setStone(position);
};

const canvas = ref<HTMLCanvasElement | null>(null);

const black = new Image();
black.src = import.meta.env.BASE_URL + "sample_black.png";

const white = new Image();
white.src = import.meta.env.BASE_URL + "sample_white.png";

const grid = new Image();
grid.src = import.meta.env.BASE_URL + "grid.png";

// draw canvas
const drawCanvas = () => {
  const ctx = canvas.value?.getContext("2d");
  if (!ctx) return;
  ctx.imageSmoothingEnabled = false;
  ctx.imageSmoothingQuality = "low";

  // ctx.fillStyle = "black";
  // ctx.fillRect(0, 0, 640, 640);

  // draw scaled tile, 32 to 64, filling 640x640 grid.

  for (let x = 0; x < 640; x += 64) {
    for (let y = 0; y < 640; y += 64) {
      ctx.drawImage(grid, 0, 0, 32, 32, x, y, 64, 64);
    }
  }

  // draw stones
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const stone = store.gameGrid[row][col];
      if (stone === StoneType.BLACK) {
        ctx.drawImage(black, 0, 0, 32, 32, col * 64, row * 64, 64, 64);
      } else if (stone === StoneType.WHITE) {
        ctx.drawImage(white, 0, 0, 32, 32, col * 64, row * 64, 64, 64);
      }
    }
  }

  // draw current position
  if (store.isMyTurn) {
    ctx.globalAlpha = 0.5;
    ctx.drawImage(black, currentCol.value * 64, currentRow.value * 64, 64, 64);
    ctx.globalAlpha = 1;
  }

  // highlight last stone position border
  if (store.lastStonePosition) {
    const { row, col } = store.lastStonePosition;
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.strokeRect(col * 64, row * 64, 64, 64);
  }

  // keep drawing
  requestAnimationFrame(drawCanvas);
};

onMounted(() => {
  drawCanvas();
});
</script>

<template>
  <div class="flex items-center justify-center">
    <canvas
      ref="canvas"
      width="640"
      height="640"
      @click="handleClick"
      @mousemove="updateCurrentPosition"
    ></canvas>
  </div>
</template>
