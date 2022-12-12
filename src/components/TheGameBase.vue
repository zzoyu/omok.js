<template>
  <!-- grid 20*20 squares -->
  <div class="grid grid-cols-10 grid-rows-10 gap-1">
    <!-- 20*20 squares -->
    <div
      v-for="i in 100"
      :key="i"
      class="w-10 h-10 border border-stone-500 rounded"
    ></div>
  </div>
</template>
