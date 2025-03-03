import { create } from "zustand";

type Store = {
  isModal: boolean;
  setIsModal: () => void;
};

export const useHelper = create<Store>()((set) => ({
  isModal: true,
  setIsModal: () => {
    set((state) => ({ isModal: !state.isModal }));
  },
}));
