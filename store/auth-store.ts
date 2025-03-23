import { FormVariant } from "@/types/auth.type";
import { create } from "zustand";
type RegisterType = "register" | "verify";
type SuccessType = "register" | "login" | "forgetPassword";
type Store = {
  user_id: string;
  success: boolean;
  successType: FormVariant;
  authType: SuccessType;
  registerType: RegisterType;
  setRegisterType: (data: RegisterType) => void;
  setSuccessType: (data: FormVariant) => void;
  setSuccess: (data: boolean) => void;
  setAuthType: (data: SuccessType) => void;
  setUserId: (id: string) => void;
};

export const useAuth = create<Store>()((set) => ({
  user_id: "",
  authType: "login",
  registerType: "register",
  success: false,
  successType: "register",
  setRegisterType: (data: RegisterType) => {
    set(() => ({
      registerType: data,
    }));
  },
  setSuccessType: (data: FormVariant) => {
    set(() => ({
      successType: data,
    }));
  },
  setAuthType: (data: SuccessType) => {
    set(() => ({
      authType: data,
    }));
  },
  setSuccess: (data: boolean) => {
    set(() => ({
      success: data,
    }));
  },
  setUserId: (id: string) => {
    set(() => ({ user_id: id }));
  },
}));
