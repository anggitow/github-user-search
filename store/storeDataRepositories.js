import create from "zustand";

export const useDataRepositoriesStore = create((set) => ({
  dataRepositories: [],
  setDataRepositories: (dataRepositories) => set({ dataRepositories }),
}));
