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
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useMutation } from "@tanstack/react-query";
import { postItemsServ } from "@/services/items-serv";
import { OTPData, OTPRes } from "@/types/auth.type";
import { Loader2 } from "lucide-react";
import { errorToast } from "@/lib/toast";
import { useTranslation } from "react-i18next";

export const Verify = () => {
  const { t } = useTranslation();
  const { setRegisterType, setSuccess, setSuccessType, user_id } = useAuth();
  const form = useForm<z.infer<typeof OTPSchema>>({
    resolver: zodResolver(OTPSchema),
  });

  const API = process.env.NEXT_PUBLIC_API_URL;
  const { mutate: createCategoryFn, isPending: loading } = useMutation({
    mutationFn: (obj: OTPData) =>
      postItemsServ<OTPData, OTPRes>(`${API}/auth/activate`, obj),
    onSuccess: (data) => {
      console.log({ data });

      if (data.status_code >= 200 && data.status_code < 400) {
        setSuccess(true);
        setSuccessType("register");
      }
      if (data.status_code == 400) {
        errorToast(t("verify.error_msg"));
      }
    },
    onError: (error: any) => {
      console.log({ error });
    },
  });
  const onSubmit = (data: { otp: string }) => {
    console.log(user_id);

    createCategoryFn({ user_id, otp: data.otp });
  };
  return (
    <div>
      <div className="w-full max-w-[540px] mb-[35px]">
        <h1 className="text-[24px] sm:text-[36px] font-bold mb-4 flex items-center gap-3 font-poppins">
          {t("verify.title")}
          <AiOutlineMessage size={38} />
        </h1>
        <p className="text-xl text-[#666666] font-montserrat">{t("verify.desc")}</p>
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
                  <InputOTP
                    maxLength={6}
                    {...field}
                    pattern={REGEXP_ONLY_DIGITS}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot
                        index={0}
                        className="w-[70px] h-[60px] sm:w-[90px] sm:h-[70px] mr-3 border-[#666666] text-xl border"
                      />
                      <InputOTPSlot
                        index={1}
                        className="w-[70px] h-[60px] sm:w-[90px] sm:h-[70px] mr-3 border-[#666666] text-xl border"
                      />
                      <InputOTPSlot
                        index={2}
                        className="w-[70px] h-[60px] sm:w-[90px] sm:h-[70px] mr-3 border-[#666666] text-xl border"
                      />
                      <InputOTPSlot
                        index={3}
                        className="w-[70px] h-[60px] sm:w-[90px] sm:h-[70px] mr-3 border-[#666666] text-xl border"
                      />
                      <InputOTPSlot
                        index={4}
                        className="w-[70px] h-[60px] sm:w-[90px] sm:h-[70px] mr-3 border-[#666666] text-xl border"
                      />
                      <InputOTPSlot
                        index={5}
                        className="w-[70px] h-[60px] sm:w-[90px] sm:h-[70px] mr-3 border-[#666666] text-xl border"
                      />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center w-full max-w-[378px] gap-4">
            <Button
              type="button"
              className="w-[166px] h-[50px] bg-[#4DA6FFCC]"
              onClick={() => setRegisterType("register")}
            >
              {t("btn.back")}
            </Button>
            <Button
              type="submit"
              className="w-[166px] h-[50px] bg-[#4DA6FF]"
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin" /> : t("btn.send")}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
