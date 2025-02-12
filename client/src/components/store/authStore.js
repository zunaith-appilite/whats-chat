import { create } from "zustand";
import { axiosInstance } from "../../libraries/axios";
import toast from "react-hot-toast";
import { io } from "socket.io-client";
import { useChatStore } from "./chatStore";

const BASE_URL = "http://localhost:5001";

export const useAuthStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  onlineUsers: [],
  socket: null,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/user/check");
      set({ authUser: res.data });
      get().connectSocket();
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/user/signup", data);
      set({ authUser: res.data });
      toast.success("Account created successfully");
      get().connectSocket();
    } catch (error) {
      if(error.response){
        toast.error(error.response.data.message);
      }
      else{
        toast.error(error.message)
      }
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/user/login", data);
      set({ authUser: res.data });
      console.log(res);
      toast.success("Logged in successfully");
      get().connectSocket();
    } catch (error) {
      if(error.response){
        toast.error(error.response.data.message);
      }
      else{
        toast.error(error.message)
      }
      
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/user/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
      get().disconnectSocket();
      useChatStore.setState({ selectedUser: null });
    } catch (error) {
      if(error.response){
        toast.error(error.response.data.message);
      }
      else{
        toast.error(error.message)
      }
    }
  },

  connectSocket: () => {
    const { authUser } = get();
    if (!authUser || get().socket?.connected) return;

    const socket = io(BASE_URL, {
      query: {
        userId: authUser._id,
      },
    });
    socket.connect();

    set({ socket: socket });

    socket.on("getOnlineUsers", (userIds) => {
      set({ onlineUsers: userIds });
    });
  },
  disconnectSocket: () => {
    if (get().socket?.connected) get().socket.disconnect();
  },
}));
