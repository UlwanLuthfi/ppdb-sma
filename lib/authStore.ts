import { create } from "zustand";

type AuthStore = {
  user: { username: string } | null;
  login: (userData: { username: string }) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: (userData) => set({ user: userData }),
  logout: () => set({ user: null }),
}));
