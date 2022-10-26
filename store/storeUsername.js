import create from "zustand";

export const useUsernameStore = create((set) => ({
  username: "anggitow",
  setUsername: (username) => set({ username }),
}));
