import { useAuth } from "../../../store/auth-store";
import { AuthFormType } from "../../../types/auth.type";
import { AuthForm } from "./auth-form";

import { Verify } from "./verify";

export const Register = () => {
  const { registerType, setRegisterType } = useAuth();
  const onSubmit = (data: AuthFormType) => {
    console.log({ register: data });
    setRegisterType("verify");
  };
  return (
    <div>
      {registerType === "register" ? (
        <AuthForm variant="register" onSubmit={onSubmit} />
      ) : (
        <Verify />
      )}
    </div>
  );
};
