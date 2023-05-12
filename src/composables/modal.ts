import { ref } from "vue";

const useModal = () => {
  const isOpen = ref(false);
  const title = ref("");
  const message = ref("");

  const notify = (text: string) => {
    isOpen.value = true;
    title.value = text;
  };
  return {
    isOpen,
    notify,
  };
};
