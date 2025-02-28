import { IoMdPersonAdd } from "react-icons/io";
import { AuthData } from "../../../lib/constants";
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
import { Checkbox } from "../../../components/ui/checkbox";
import { useAuth } from "../../../store/auth-store";
import { AuthFormType } from "../../../types/auth.type";
import { LuLockKeyhole } from "react-icons/lu";
interface Props {
  variant: "register" | "login" | "resetPassword";
  onSubmit: (data: AuthFormType) => void;
}
export const AuthForm = ({ variant, onSubmit }: Props) => {
  const data = AuthData[variant];

  const { setAuthType } = useAuth();

  const formSchema = data.form.validate;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const closeBtnChange = () => {
    if (variant === "register" || variant === "resetPassword")
      setAuthType("login");
  };
  return (
    <div>
      <div className="w-full max-w-[532px] mb-[35px]">
        <h1 className="text-[36px] font-bold mb-4 flex items-center gap-4">
          {data.title}
          {variant == "register" && <IoMdPersonAdd size={38} />}
          {variant == "resetPassword" && <LuLockKeyhole size={38} />}
        </h1>
        <p className="text-xl text-[#666666] font-lora">{data.desc}</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 relative"
        >
          {data?.form?.inputs?.map((item) => (
            <>
              <FormField
                key={item.id}
                control={form.control}
                //   @ts-ignore
                name={item.name}
                render={({ field }) => (
                  <FormItem>
                    <label>{item.label}</label>
                    <FormControl>
                      <Input
                        placeholder={item.plaseholder}
                        {...field}
                        className="w-[400px] h-[50px] border border-[#DDDDDD] placeholder:text-[15px] placeholder:text-[#666666]"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="relative ">
                {item.name == "password" && variant == "login" && (
                  <p
                    className="absolute right-[-90px] bottom-[40px] text-[#3399FF] text-xl font-lora cursor-pointer"
                    onClick={() => setAuthType("resetPassword")}
                  >
                    Parolni Unutdingizmi ?
                  </p>
                )}
              </div>
            </>
          ))}
          {data.checkbox && (
            <div className="flex items-center space-x-2 text-[#666666] mb-12">
              <Checkbox id="terms" className="w-[19px] h-[19px] " />
              <label
                htmlFor="terms"
                className="text-[18px] text-[#666666] font-lora cursor-pointer"
              >
                Foydalanish shartiga rozilik bildiraman
              </label>
            </div>
          )}
          <div className="flex items-center w-full max-w-[378px] justify-between">
            {data.closebtn && (
              <Button
                type="button"
                onClick={closeBtnChange}
                className="w-[166px] h-[50px] bg-[#4DA6FFCC]"
              >
                Orqaga
              </Button>
            )}
            <Button type="submit" className="w-[166px] h-[50px] bg-[#4DA6FF]">
              {variant == "register"
                ? `Ro’yhatdan O’tish`
                : variant === "login"
                ? "Kirish"
                : "Tasdiqlash"}
            </Button>
          </div>
          {variant === "login" && (
            <p className=" mt-[32px] text-xl font-lora ">
              Akkauntingiz yo’qmi ?{" "}
              <span
                className="text-[#3399FF] cursor-pointer"
                onClick={() => setAuthType("register")}
              >
                Ro’yxatdan o’tish
              </span>
            </p>
          )}
        </form>
      </Form>
    </div>
  );
};
