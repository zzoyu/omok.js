import { defineStore } from "pinia";
import { io, Socket } from "socket.io-client";
import { ref } from "vue";

export const useSocket = defineStore("socket", () => {
  console.log(import.meta.env);
  const instance = ref<Socket>();
  instance.value = io(import.meta.env.VITE_SOCKET_URL, {
    transports: ["websocket"],
  });

  return { instance };
});
