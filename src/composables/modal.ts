import { ref } from "vue";

const useModal = () => {
  const isOpen = ref(false);
  const title = ref("");
  const content = ref("");

  const notify = (text: string, innerContent: string) => {
    isOpen.value = true;
    title.value = text;
    content.value = innerContent;
  };

  const close = () => {
    isOpen.value = false;
  };

  return {
    isOpen,
    title,
    content,
    notify,
    close,
  };
};
