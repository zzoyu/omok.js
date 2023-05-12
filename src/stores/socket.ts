import { defineStore } from "pinia";
import { io } from "socket.io-client";
import { getCurrentInstance, ref } from "vue";

const useSocketStore = defineStore<{
  instance: SocketIOClient.Socket;
}>("socket", () => {
  console.log(import.meta.env);
  const instance = ref(
    io(import.meta.env.VITE_SOCKET_URL, {
      transports: ["websocket"],
    })
  );

  return { instance };
});

export default useSocketStore;
