import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../store/auth-store";
interface Props {
  variant: "register" | "resetPassword" | "login";
}
export const Success = ({ variant }: Props) => {
  const navigate = useRouter();
  const { setSuccess, setAuthType } = useAuth();
  const changeBtn = async() => {
    await navigate.push("/");
    setSuccess(false);
    setAuthType("login");
  };
  return (
    <div className="container flex flex-col items-center justify-center gap-8 w-full">
      <Image
        src={"/imgs/success.png"}
        alt="success-logo"
        width={200}
        height={200}
      />
      <h3 className="text-[36px] font-bold w-full max-w-[787px] text-center">
        {variant === "register"
          ? `Siz Muvafaqqiyatli Ro’yhatdan O’tdingiz Autoshop.uz ga Hush Kelibsiz!`
          : `Sizning Yangi Parolingiz Muvafaqqiyatli Ro’yhatdan O’tdi`}
      </h3>
      <Button className="w-[200px] h-[60px] bg-[#4DA6FF]" onClick={changeBtn}>
        Bosh sahifaga
      </Button>
    </div>
  );
};
