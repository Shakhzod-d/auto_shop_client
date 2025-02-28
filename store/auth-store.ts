import { create } from "zustand";
type RegisterType = "register" | "verify";
type SuccessType = "register" | "login" |'resetPassword';
type Store = {
  success: boolean;
  successType: SuccessType;
  authType: SuccessType;
  registerType: RegisterType;
  setRegisterType: (data: RegisterType) => void;
  setSuccessType: (data: SuccessType) => void;
  setSuccess: (data: boolean) => void;
  setAuthType: (data: SuccessType) => void;
};

export const useAuth = create<Store>()((set) => ({
  authType: "login",
  registerType: "register",
  success: false,
  successType: "register",
  setRegisterType: (data: RegisterType) => {
    set(() => ({
      registerType: data,
    }));
  },
  setSuccessType: (data: SuccessType) => {
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
}));
