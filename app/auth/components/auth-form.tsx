import { IoMdPersonAdd } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
// import { Checkbox } from "../../../components/ui/checkbox";
import { useAuth } from "../../../store/auth-store";
import {
  AuthFormType,
  ForgetPassFormType,
  FormVariant,
} from "../../../types/auth.type";
import { LuLockKeyhole } from "react-icons/lu";
import { Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AuthData } from "@/utils/constants";
interface Props {
  variant: FormVariant;
  loading: boolean;
  onSubmit: (data: AuthFormType | ForgetPassFormType) => void;
}
export const AuthForm = ({ variant, onSubmit, loading }: Props) => {
  const { t } = useTranslation();
  const data = AuthData[variant];
  const { setAuthType } = useAuth();

  const formSchemaFun = data.form.validate;
  const formSchema = formSchemaFun(t);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const closeBtnChange = () => {
   setAuthType("login");
  };
  const btnText = (variant: FormVariant) => {
    switch (variant) {
      case "login":
        return t("btn.entrance");
      case "register":
        return t("btn.register");
      case "forgetPassword":
        return t("btn.confirmation");
      default:
        break;
    }
  };
  return (
    <div>
      <div className="w-full max-w-[532px] mb-[35px]">
        <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold mb-4 flex items-center gap-3">
          {t(data.title)}
          {variant == "register" && <IoMdPersonAdd size={38} />}
          {variant == "forgetPassword" && <LuLockKeyhole size={38} />}
        </h1>
        <p className="text-[18px] lg:text-xl text-[#666666] font-lora">
          {t(data.desc)}
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-8 "
        >
          {data?.form?.inputs?.map((item, i) => (
            
              <FormField
                key={i}
                control={form.control}
                // @ts-ignore
                name={item.name}
                render={({ field }) => (
                  <FormItem key={item.id}>
                    <label className="text-[#666666]">{t(item.label)}</label>
                    <div className="  flex sm-xl:items-center sm-xl:gap-4  lg:w-[635px] flex-col sm-xl:flex-row">
                      <div>
                        <FormControl>
                          <Input
                            placeholder={t(item.placeholder)}
                            {...field}
                            className="w-[400px] h-[50px] border border-[#DDDDDD] placeholder:text-[15px] placeholder:text-[#666666]"
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                      {item.name == "password" && variant == "login" && (
                        <p
                          className="max-w-[400px] sm-xl:w-full   text-end sm-xl:text-start bottom-[40px] text-[#3399FF] text-[18px] lg:text-xl font-lora cursor-pointer"
                          onClick={() => setAuthType("forgetPassword")}
                        >
                          {t("login.forget_pass")}
                        </p>
                      )}
                    </div>
                  </FormItem>
                )}
              />
          
          ))}
          {/* {data.checkbox && (
            <div className="flex items-center space-x-2 text-[#666666] mb-12">
              <Checkbox id="terms" className="w-[19px] h-[19px] " />
              <label
                htmlFor="terms"
                className="text-[18px] text-[#666666] font-lora cursor-pointer"
              >
                {t("register.checkLabel")}
              </label>
            </div>
          )} */}
          <div className="flex items-center w-full max-w-[378px] gap-4">
            {data.closebtn && (
              <Button
                type="button"
                onClick={closeBtnChange}
                className="w-[140px] h-[40px] bg-[#4DA6FFCC]"
              >
                {t("btn.back")}
              </Button>
            )}
            <Button
              type="submit"
              className="w-[150px] h-[40px] bg-[#4DA6FF]"
              disabled={loading}
            >
              {loading && <Loader2 className="animate-spin" />}
              {!loading && btnText(variant)}
            </Button>
          </div>
          {variant === "login" && (
            <p className=" mt-[32px] text-[18px] lg:text-xl font-lora ">
              {t("login.register")}
              <span
                className="text-[#3399FF] cursor-pointer"
                onClick={() => setAuthType("register")}
              >
                {t("login.register_url")}
              </span>
            </p>
          )}
        </form>
      </Form>
    </div>
  );
};
