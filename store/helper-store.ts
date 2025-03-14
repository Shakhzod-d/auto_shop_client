import { create } from "zustand";
import { getLocaleStorage } from "../utils/locale-storage";
import { LangType } from "../types";

type Store = {
  isModal: boolean;
  setIsModal: () => void;
  lang: string;
  setLang: (data: LangType) => void;
};
const langue = getLocaleStorage("lang");

export const useHelper = create<Store>()((set) => ({
  isModal: false,
  lang: langue ? langue : "uz",
  setIsModal: () => {
    set((state) => ({ isModal: !state.isModal }));
  },
  setLang: (data) => {
    set(() => ({ lang: data }));
  },
}));
