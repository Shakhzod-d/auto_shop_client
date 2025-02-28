import { Banners } from "../(home)/components/banners";
import { SendMessage } from "./components/send-msg";

export default function Contact() {
  return (
    <div>
      <Banners
        btn={false}
        p="135px 0"
        w="700px"
        title="Biz bilan Bog'laning"
        desc="Savollaringiz bormi yoki qo‘shimcha ma’lumot olishni istaysizmi? Biz bilan bog‘laning va jamoamiz sizga yordam berishdan mamnun bo‘ladi. Istalgan vaqtda bizga yozing yoki qo‘ng‘iroq qiling!"
        banner_img="/imgs/contact-banner.png"
        img_two={true}
      />
      <SendMessage />
    </div>
  );
}
