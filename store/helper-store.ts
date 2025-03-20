import { create } from "zustand";
import { getLocaleStorage } from "../utils/locale-storage";
import { LangType } from "../types";

type Store = {
  isModal: boolean;
  isSearch: boolean;
  setIsModal: () => void;
  lang: string;
  setLang: (data: LangType) => void;
  setIsSearch: () => void;
};
const langue = getLocaleStorage("lang");

export const useHelper = create<Store>()((set) => ({
  isSearch: false,
  isModal: false,
  lang: langue ? langue : "uz",
  setIsModal: () => {
    set((state) => ({ isModal: !state.isModal }));
  },
  setLang: (data) => {
    set(() => ({ lang: data }));
  },
  setIsSearch: () => {
    set((state) => ({ isSearch: !state.isSearch }));
  },
}));
