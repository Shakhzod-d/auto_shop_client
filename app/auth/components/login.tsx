import { useAuth } from "../../../store/auth-store";
import { AuthFormType } from "../../../types/auth.type";
import { AuthForm } from "./auth-form";

export const Login = () => {
  const { authType, setSuccessType, setSuccess } = useAuth();
  const onSubmit = (data: AuthFormType) => {
    if (authType == "login") {
      console.log({ loginData: data });
    } else {
      setSuccess(true);
      setSuccessType("resetPassword");
      console.log({ resetPass: data });
    }
  };

  return <AuthForm variant={authType} onSubmit={onSubmit} />;
};
