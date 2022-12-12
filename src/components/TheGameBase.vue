<script setup lang="ts">
import { StoneType } from "@/classes/Stone";
import BaseOmokCell from "@/components/BaseOmokCell.vue";
import { useStore } from "@/stores/game";

const store = useStore();

const addStone = (position: { row: number; col: number }) => {
  store.gameGrid[position.row][position.col] = StoneType.BLACK;
};
</script>

<template>
  <!-- grid 20*20 squares -->
  <div class="grid grid-cols-10 grid-rows-10 gap-1">
    <!-- 20*20 squares -->
    <template v-for="(i, row) in store?.gameGrid" :key="`row_${row}`">
      <BaseOmokCell
        @add-stone="addStone({ row, col })"
        v-for="(j, col) in i"
        :key="`row_${row}_cell_${col}`"
        :data="j"
      />
    </template>
  </div>
</template>
