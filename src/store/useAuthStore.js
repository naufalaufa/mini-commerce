import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  addUser: (user) => set({ user }),
}));
