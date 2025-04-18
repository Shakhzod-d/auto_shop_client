import { errorToast } from "@/lib/toast";
import { useAuth } from "../../../store/auth-store";
import {
  AuthFormType,
  ForgetPassFormType,
  RegisterRes,
} from "../../../types/auth.type";
import { AuthForm } from "./auth-form";

import { Verify } from "./verify";
import { postItemsServ } from "@/services/items-serv";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

const errMsg = [
  {
    validation: "password is not strong enough",
    code: "register.validation.password_invalid",
  },
  {
    code: "register.validation.pass_inv",
    validation:
      "Password must be at least 6 characters long, contain at least one uppercase letter and one number",
  },
  {
    validation: "User already exists!",
    code: "register.validation.exist_user",
  },
];
export const Register = () => {
  const { registerType, setRegisterType, setUserId } = useAuth();
  const { t } = useTranslation();
  const API = process.env.NEXT_PUBLIC_API_URL;

  const errorFun = (msg: string) => {
    const result: any = errMsg.find((item) => item.validation == msg);

    errorToast(t(result.code));
  };

  const { mutate: createCategoryFn, isPending: loading } = useMutation({
    mutationFn: (obj: AuthFormType | ForgetPassFormType) =>
      postItemsServ<AuthFormType | ForgetPassFormType, RegisterRes>(
        `${API}/auth/register`,
        obj
      ),
    onSuccess: (data) => {
      console.log({ data });

      if (data.status_code >= 200 && data.status_code <= 400) {
        setUserId(data.data.id);
        setRegisterType("verify");
      } else {
        const errText =
          typeof data.message === "object" ? data.message[0] : data.message;
        console.log(errText);

        errorFun(errText);
      }
    },
    onError: (error: any) => {
      console.log(error);
    },
  });
  const onSubmit = (data: AuthFormType | ForgetPassFormType) => {
    createCategoryFn(data);
  };
  return (
    <div>
      {registerType === "register" ? (
        <AuthForm variant="register" onSubmit={onSubmit} loading={loading} />
      ) : (
        <Verify />
      )}
    </div>
  );
};
