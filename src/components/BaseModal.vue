<script setup lang="ts"></script>

<template>
  <Teleport to="body">
    <div
      class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center bg-neutral-200 rounded p-8 w-96"
    >
      <h1 v-if="$slots.title" class="text-2xl mb-2">
        <slot name="title"> </slot>
      </h1>
      <slot name="default">
        <div>content</div>
      </slot>
      <div v-if="$slots.footer" class="mt-4"><slot name="footer"></slot></div>
    </div>
  </Teleport>
</template>
