import { AiOutlineMessage } from "react-icons/ai";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../components/ui/form";
import { useForm } from "react-hook-form";
import { OTPSchema } from "../../../lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../../components/ui/input-otp";
import { Button } from "../../../components/ui/button";

import { useAuth } from "../../../store/auth-store";

export const Verify = () => {
  const { setRegisterType, setSuccess, setSuccessType } = useAuth();
  const form = useForm<z.infer<typeof OTPSchema>>({
    resolver: zodResolver(OTPSchema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
    setSuccess(true);
    setSuccessType("register");
  };
  return (
    <div>
      <div className="w-full max-w-[540px] mb-[35px]">
        <h1 className="text-[36px] font-bold mb-4 flex items-center gap-4">
          Yuborilgan Kodni Kiriting
          <AiOutlineMessage size={38} />
        </h1>
        <p className="text-xl text-[#666666] font-lora">
          {`email manzilingizni  tasdiqlash uchun *****@gmailga yuborilgan kodni kiriting.`}
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-8"
        >
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP maxLength={4} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot
                        index={0}
                        className="w-[90px] h-[70px] mr-3 border-[#666666] text-xl"
                      />
                      <InputOTPSlot
                        index={1}
                        className="w-[90px] h-[70px] mr-3 border border-[#666666] text-xl"
                      />
                      <InputOTPSlot
                        index={2}
                        className="w-[90px] h-[70px] mr-3 border border-[#666666] text-xl"
                      />
                      <InputOTPSlot
                        index={3}
                        className="w-[90px] h-[70px] mr-3 border border-[#666666] text-xl"
                      />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center w-full max-w-[378px] justify-between">
            <Button
              type="button"
              className="w-[166px] h-[50px] bg-[#4DA6FFCC]"
              onClick={() => setRegisterType("register")}
            >
              Orqaga
            </Button>
            <Button type="submit" className="w-[166px] h-[50px] bg-[#4DA6FF]">
              Yuborish
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
