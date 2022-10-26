import create from "zustand";

export const useDataProfileStore = create((set) => ({
  dataProfile: {},
  setDataProfile: (dataProfile) => set({ dataProfile }),
}));
