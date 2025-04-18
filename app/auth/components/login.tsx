import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../../store/auth-store";
import { AuthFormType, ForgetPassFormType } from "../../../types/auth.type";
import { AuthForm } from "./auth-form";
import { postItemsServ } from "@/services/items-serv";
import { errorToast, successToast } from "@/lib/toast";
import { setLocaleStorage } from "@/utils/locale-storage";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL;
export const Login = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { authType, setSuccess, setSuccessType } = useAuth();

  // login mutate
  const { mutate: loginFun, isPending: loading } = useMutation({
    mutationFn: (obj: AuthFormType | ForgetPassFormType) =>
      postItemsServ(`${API}/auth/login`, obj),
    onSuccess: (data: any) => {
      if (data.status_code >= 200 && data.status_code < 400) {
        successToast(t("login.validation.success"));
        setLocaleStorage("UserToken", data.data.access_token);
        router.push("/");
      } else {
        errorToast(t("login.validation.error"));
      }
    },
    onError: (err) => {
      errorToast(err.message || "Something went wrong");
    },
  });

  // forgetPassword mutate
  const { mutate: forgetPasswordFun, isPending: forgetPassLoading } =
    useMutation({
      mutationFn: (obj: AuthFormType | ForgetPassFormType) =>
        postItemsServ(`${API}/auth/forget-password`, obj),
      onSuccess: (data: any) => {
        if (data.status_code >= 200 && data.status_code < 400) {
          setSuccess(true);
          setSuccessType("forgetPassword");
        } else {
          const text =
            data.message == "Username or password incorrect!"
              ? t("login.validation.error")
              : data.message;
          errorToast(text);
        }
      },

      onError: (err) => {
        console.log({ err });
      },
    });

  const onSubmit = (data: AuthFormType | ForgetPassFormType) => {
    if (authType == "login") {
      loginFun(data);
    } else {
      forgetPasswordFun(data);
    }
  };

  return (
    <AuthForm
      variant={authType}
      onSubmit={onSubmit}
      loading={loading || forgetPassLoading}
    />
  );
};
