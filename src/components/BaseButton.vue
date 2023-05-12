<script setup lang="ts">
const props = defineProps<{
  onClick?: () => void;
  onClickConfirm?: { message: string; callback: () => void };
}>();

const processClick = () => {
  if (props.onClick) {
    props.onClick();
  } else if (
    typeof props.onClickConfirm?.callback === "function" &&
    typeof props.onClickConfirm?.message === "string"
  ) {
    confirm(props.onClickConfirm?.message) &&
      props.onClickConfirm?.callback?.();
  }
};
</script>

<template>
  <button
    @click="processClick"
    class="bg-stone-500 text-white font-bold py-2 px-4 rounded hover:bg-neutral-400"
  >
    <slot />
  </button>
</template>
